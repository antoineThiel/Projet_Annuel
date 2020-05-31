<?php

namespace App\Controller;

use App\Entity\MenuToDish;
use App\Form\MenuToDishType;
use App\Repository\MenuToDishRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/menu/to/dish")
 */
class MenuToDishController extends AbstractController
{
    /**
     * @Route("/", name="menu_to_dish_index", methods={"GET"})
     */
    public function index(MenuToDishRepository $menuToDishRepository): Response
    {
        return $this->render('menu_to_dish/index.html.twig', [
            'menu_to_dishes' => $menuToDishRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="menu_to_dish_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $menuToDish = new MenuToDish();
        $form = $this->createForm(MenuToDishType::class, $menuToDish);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($menuToDish);
            $entityManager->flush();

            return $this->redirectToRoute('menu_to_dish_index');
        }

        return $this->render('menu_to_dish/new.html.twig', [
            'menu_to_dish' => $menuToDish,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="menu_to_dish_show", methods={"GET"})
     */
    public function show(MenuToDish $menuToDish): Response
    {
        return $this->render('menu_to_dish/show.html.twig', [
            'menu_to_dish' => $menuToDish,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="menu_to_dish_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, MenuToDish $menuToDish): Response
    {
        $form = $this->createForm(MenuToDishType::class, $menuToDish);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('menu_to_dish_index');
        }

        return $this->render('menu_to_dish/edit.html.twig', [
            'menu_to_dish' => $menuToDish,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="menu_to_dish_delete", methods={"DELETE"})
     */
    public function delete(Request $request, MenuToDish $menuToDish): Response
    {
        if ($this->isCsrfTokenValid('delete'.$menuToDish->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($menuToDish);
            $entityManager->flush();
        }

        return $this->redirectToRoute('menu_to_dish_index');
    }
}
