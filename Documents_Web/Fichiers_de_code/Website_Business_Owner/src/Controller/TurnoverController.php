<?php
namespace App\Controller;

use App\Entity\Turnover;
use App\Form\TurnoverType;
use App\Repository\TurnoverRepository;
use DateTime;
use Stripe\Exception\ApiErrorException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

Class TurnoverController extends AbstractController {

    /**
     * @Route("/admin/turnover", name="turnover_index", methods={"GET"})
     */
    public function index(TurnoverRepository $turnoverRepository): Response
    {
        return $this->render('turnover/index.html.twig', [
           'turnovers' => $turnoverRepository->findAll(),
        ]);
    }


    /**
     * @Route({
     *     "fr": "/chiffre_affaire/nouveau",
     *     "en": "/turnover/new",
     *     "es": "/cifra_de_negocios/nueva"
     *     }, name="turnover_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $turnover = new Turnover();
        $user = $this->getUser();
        $turnover -> setdate(new DateTime('first day of this month'));
        $turnover->setFranchisee($user);
        $turnover->setIsNew(1);
        $turnover->setIsOngoing(0);
        $turnover->setIsClosed(0);
        $form = $this->createForm(TurnoverType::class, $turnover);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $turnover->setPercentAmount(($turnover->getAmount())*0.04);
            $entityManager = $this->getDoctrine()->getManager();
            $rankRep = $entityManager->getRepository('App\Entity\Rank');

            $rank = $rankRep->findByAmount($turnover->getAmount());

            $franchisee = $turnover->getFranchisee();
            $franchisee->setRank($rank);
            $entityManager->persist($franchisee);

            $entityManager->persist($turnover);
            $entityManager->flush();


            return $this->redirectToRoute('franchisee_show',['id'=> $user->getId()]);
        }

        return $this->render('turnover/new.html.twig', [
            'turnover' => $turnover,
            'form' => $form->createView(),
        ]);
    }


    /**
     * @Route({
     *     "fr": "/admin/chiffres_affaire/envoyer/{id}",
     *     "en": "/admin/turnover/send/{id}",
     *     "es": "/admin/cifra_de_negocios/enviar/{id}"
     *     }, name="turnover_send", methods={"GET"})
     */
    public function turnover_send(Request $request): Response
    {
        $entityManager = $this->getDoctrine()->getManager();
        $turnoverrep = $entityManager->getRepository(Turnover::class);
        $turnover = $turnoverrep->find($request->get('id'));

        //TODO: Envoie de mail comme quoi il a le montant a regler sur son profil

        $turnover->setIsNew(0);
        $turnover->setIsOngoing(1);
        $turnover->setIsClosed(0);
        $entityManager->flush();

        return $this->redirectToRoute('turnover_index');
    }

    /**
     * @Route({
     *     "fr": "/chiffre_affaire/{id}/payer",
     *     "en": "/turnover/{id}/pay",
     *     "es": "/cifra_de_negocios/{id}/paga"
     *     }, name="turnover_pay" , methods={"GET"})
     */
    public function turnover_pay(Request $request, TurnoverRepository $turnoverRepository): Response
    {
        $entityManager = $this->getDoctrine()->getManager();
        $turnoverrep = $entityManager->getRepository(Turnover::class);
        $turnover = $turnoverrep->find($request->get('id'));

        return $this->render('turnover/pay.html.twig',[
            'turnover' => $turnover,
        ]);
    }

    /**
     * @Route("/turnover/{id}/pay/fakepayement/", name="turnover_payement" , methods={"POST"})
     * @throws ApiErrorException
     */
    public function turnover_pay_stripe(Request $request) : Response
    {
        $user = $this->getUser();

        $entityManager = $this->getDoctrine()->getManager();
        $turnoverRep = $entityManager->getRepository(Turnover::class);
        $turnover = $turnoverRep->find($request->get('id'));

        \Stripe\Stripe::setApiKey('sk_test_bhno3VfANJrXrWo5n71yKVVz00pFkgG0no');


        \Stripe\Charge::create([
            'receipt_email' => $user->getMail(),
            'amount' => ($turnover->getPercentAmount())*100,
            'currency' => 'eur',
            'source' => 'tok_visa',
            'description' => 'Versement du CA date :'. date_format($turnover->getDate(),"j/m/Y" ),
        ]);

        $turnover->setIsNew(0);
        $turnover->setIsOngoing(0);
        $turnover->setIsClosed(1);
        $entityManager->flush();
        return $this->redirectToRoute('franchisee_show',['id'=> $user->getId()]);
    }
}