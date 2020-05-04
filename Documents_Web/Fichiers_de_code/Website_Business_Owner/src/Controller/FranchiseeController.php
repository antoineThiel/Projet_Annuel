<?php

namespace App\Controller;

use App\Entity\Franchisee;
use App\Form\FranchiseeType;
use App\Form\FranchiseeType2;
use App\Repository\FranchiseeRepository;
use App\Repository\InvoiceRepository;
use App\Repository\OrderByFranchiseeRepository;
use App\Repository\TruckPositionRepository;
use App\Repository\TruckRepository;
use phpDocumentor\Reflection\Types\This;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/")
 */
class FranchiseeController extends AbstractController
{
    /**
     * @Route("/admin/franchisee", name="franchisee_index", methods={"GET"})
     */
    public function index(FranchiseeRepository $franchiseeRepository): Response
    {
        return $this->render('franchisee/index.html.twig', [
            'franchisees' => $franchiseeRepository->findAll(),
        ]);
    }

    /**
     * @Route("/admin/franchisee/new", name="franchisee_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $franchisee = new Franchisee();
        $form = $this->createForm(FranchiseeType::class, $franchisee);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($franchisee);
            $entityManager->flush();

            return $this->redirectToRoute('franchisee_index');
        }

        return $this->render('franchisee/new.html.twig', [
            'franchisee' => $franchisee,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route({
     *     "fr": "/franchise/{id}",
     *     "en": "/franchisee/{id}",
     *     "es": "/franchisado/{id}"
     *      }, name="franchisee_show", methods={"GET"})
     */
    public function show(Franchisee $franchisee,TruckRepository $truckRepository, TruckPositionRepository $positionRepository, InvoiceRepository $invoiceRepository): Response
    {
        if ($this->getUser()->getId() != $franchisee->getId()){
            return $this->redirectToRoute('404');
        }
        if ($franchisee->getTruck() != null){
            $pos = $positionRepository->findById($franchisee->getTruck()->getId());
            $posId = $pos->getId();
            $posAddress = $pos->getAddress();
            $posCity = $pos->getCity();
        }else{
            $posId = null;
            $posAddress = null;
            $posCity = null;
        }
        $invoices = $invoiceRepository->findBy(['franchisee' => $this->getUser()], ['date' => 'DESC'], 10);
        return $this->render('franchisee/show.html.twig', [
            'franchisee' => $franchisee,
            'posId' => $posId,
            'posAddress' => $posAddress,
            'posCity' => $posCity,
            'invoices' => $invoices
        ]);
    }

    /**
     * @Route("/franchisee/{id}/edit", name="franchisee_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Franchisee $franchisee): Response
    {
        $form = $this->createForm(FranchiseeType::class, $franchisee);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('franchisee_index');
        }

        return $this->render('franchisee/edit.html.twig', [
            'franchisee' => $franchisee,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/franchisee/{id}/editFranchisee", name="franchisee_edit_by_franchisee", methods={"GET","POST"})
     */
    public function editByFranchisee(Request $request, Franchisee $franchisee): Response
    {
        $form = $this->createForm(FranchiseeType2::class, $franchisee);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('franchisee_index');
        }

        return $this->render('franchisee/edit.html.twig', [
            'franchisee' => $franchisee,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/admin/franchisee/{id}", name="franchisee_delete", methods={"DELETE"})
     */
    public function delete(Request $request, Franchisee $franchisee): Response
    {
        if ($this->isCsrfTokenValid('delete'.$franchisee->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($franchisee);
            $entityManager->flush();
        }

        return $this->redirectToRoute('franchisee_index');
    }

}
