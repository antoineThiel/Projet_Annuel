<?php
namespace App\Controller;

use App\Entity\Turnover;
use App\Form\TurnoverType;
use App\Repository\TurnoverRepository;
use DateTime;
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
        $turnover -> setdate(new DateTime);
        $turnover->setFranchisee($user);
        $turnover->setIsNew(1);
        $turnover->setIsOngoing(0);
        $turnover->setIsClosed(0);
        $form = $this->createForm(TurnoverType::class, $turnover);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $turnover->setPercentAmount(($turnover->getAmount())*0.4);
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($turnover);
            $entityManager->flush();

            return $this->redirectToRoute('turnover_index');
        }

        return $this->render('turnover/new.html.twig', [
            'turnover' => $turnover,
            'form' => $form->createView(),
        ]);
    }


    /**
     * @Route("/admin/turnover/send/{id]", name="turnover_send", methods={"GET"})
     */
    public function turnover_send(Request $request): Response
    {
        $entityManager = $this->getDoctrine()->getManager();
        $orderRep = $entityManager->getRepository(Turnover::class);
        $order = $orderRep->find($request->get('id'));
        
    }

}