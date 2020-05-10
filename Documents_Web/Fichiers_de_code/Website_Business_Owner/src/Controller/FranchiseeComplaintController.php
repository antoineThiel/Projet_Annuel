<?php

namespace App\Controller;

use App\Entity\FranchiseeComplaint;
use App\Form\FranchiseeComplaintType;
use App\Form\FranchiseeComplaintType2;
use App\Repository\FranchiseeComplaintRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class FranchiseeComplaintController extends AbstractController
{
    /**
     * @Route("/admin/franchisee/complaint/", name="franchisee_complaint_index", methods={"GET"})
     */
    public function index(FranchiseeComplaintRepository $franchiseeComplaintRepository): Response
    {
        return $this->render('franchisee_complaint/index.html.twig', [
            'franchisee_complaints' => $franchiseeComplaintRepository->findAll(),
        ]);
    }

    /**
     * @Route({
     *     "fr": "/franchise/reclamation/nouvelle",
     *     "en": "/franchisee/complaint/new",
     *     "es": "/franquiciado/queja/nueva"
     *     }, name="franchisee_complaint_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $franchiseeComplaint = new FranchiseeComplaint();
        $user = $this->getUser();
        $franchiseeComplaint->setFranchisee($user);
        $franchiseeComplaint->setIsNew(1);
        $franchiseeComplaint->setIsOngoing(0);
        $franchiseeComplaint->setIsClosed(0);
        $form = $this->createForm(FranchiseeComplaintType::class, $franchiseeComplaint);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($franchiseeComplaint);
            $entityManager->flush();

            return $this->redirectToRoute('franchisee_complaint_index');
        }

        return $this->render('franchisee_complaint/new.html.twig', [
            'franchisee_complaint' => $franchiseeComplaint,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/admin/franchisee/complaint/{id}", name="franchisee_complaint_show", methods={"GET"})
     */
    public function show(FranchiseeComplaint $franchiseeComplaint): Response
    {
        return $this->render('franchisee_complaint/show.html.twig', [
            'franchisee_complaint' => $franchiseeComplaint,
        ]);
    }

    /**
     * @Route("/admin/franchisee/complaint/{id}/edit", name="franchisee_complaint_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, FranchiseeComplaint $franchiseeComplaint): Response
    {
        $form = $this->createForm(FranchiseeComplaintType2::class, $franchiseeComplaint);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('franchisee_complaint_index');
        }

        return $this->render('franchisee_complaint/edit.html.twig', [
            'franchisee_complaint' => $franchiseeComplaint,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/admin/franchisee/complaint/{id}", name="franchisee_complaint_delete", methods={"DELETE"})
     */
    public function delete(Request $request, FranchiseeComplaint $franchiseeComplaint): Response
    {
        if ($this->isCsrfTokenValid('delete'.$franchiseeComplaint->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($franchiseeComplaint);
            $entityManager->flush();
        }

        return $this->redirectToRoute('franchisee_complaint_index');
    }
}
