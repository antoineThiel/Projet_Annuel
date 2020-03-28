<?php

namespace App\Controller;

use App\Entity\Franchisee;
use App\Form\FranchiseeType;
use App\Repository\FranchiseeRepository;
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
     * @Route("/franchisee/{id}", name="franchisee_show", methods={"GET"})
     */
    public function show(Franchisee $franchisee): Response
    {
        return $this->render('franchisee/show.html.twig', [
            'franchisee' => $franchisee,
        ]);
    }

    /**
     * @Route("/admin/franchisee/{id}/edit", name="franchisee_edit", methods={"GET","POST"})
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
