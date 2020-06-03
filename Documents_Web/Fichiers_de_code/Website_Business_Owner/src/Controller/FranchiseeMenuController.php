<?php

namespace App\Controller;

use App\Entity\FranchiseeMenu;
use App\Form\FranchiseeMenuType;
use App\Repository\FranchiseeMenuRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route({
 *     "fr": "/fr/franchise/menu",
 *     "en": "/en/franchisee/menu",
 *     "es": "/es/franquiciado/menu"
 *      })
 */
class FranchiseeMenuController extends AbstractController
{
    /**
     * @Route("/", name="franchisee_menu_index", methods={"GET"})
     */
    public function index(FranchiseeMenuRepository $franchiseeMenuRepository): Response
    {
        return $this->render('franchisee_menu/index.html.twig', [
            'franchisee_menus' => $franchiseeMenuRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="franchisee_menu_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $franchiseeMenu = new FranchiseeMenu();
        $form = $this->createForm(FranchiseeMenuType::class, $franchiseeMenu);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($franchiseeMenu);
            $entityManager->flush();

            return $this->redirectToRoute('franchisee_menu_index');
        }

        return $this->render('franchisee_menu/new.html.twig', [
            'franchisee_menu' => $franchiseeMenu,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="franchisee_menu_show", methods={"GET"})
     */
    public function show(FranchiseeMenu $franchiseeMenu): Response
    {
        return $this->render('franchisee_menu/show.html.twig', [
            'franchisee_menu' => $franchiseeMenu,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="franchisee_menu_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, FranchiseeMenu $franchiseeMenu): Response
    {
        $form = $this->createForm(FranchiseeMenuType::class, $franchiseeMenu);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('franchisee_menu_index');
        }

        return $this->render('franchisee_menu/edit.html.twig', [
            'franchisee_menu' => $franchiseeMenu,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="franchisee_menu_delete", methods={"DELETE"})
     */
    public function delete(Request $request, FranchiseeMenu $franchiseeMenu): Response
    {
        if ($this->isCsrfTokenValid('delete'.$franchiseeMenu->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($franchiseeMenu);
            $entityManager->flush();
        }

        return $this->redirectToRoute('franchisee_menu_index');
    }
}
