<?php

namespace App\Controller;

use App\Entity\Dish;
use App\Entity\Product;
use App\Entity\ProductCategory;
use App\Entity\ProductOrigin;
use App\Form\DishType;
use App\Repository\DishRepository;
use App\Repository\ProductRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/")
 */
class DishController extends AbstractController
{
    /**
     * @Route("/admin/dish", name="dish_index", methods={"GET"})
     */
    public function index(DishRepository $dishRepository): Response
    {
        return $this->render('dish/index.html.twig', [
            'dishes' => $dishRepository->findAll(),
        ]);
    }

    /**
     * @Route("/admin/dish/new", name="dish_new", methods={"GET","POST"})
     */
    public function new(Request $request, ProductRepository $productRepository): Response
    {
        $dish = new Dish();
        $dish->setName('lasagne');
        $dish->setPrice('10');

        $form = $this->createForm(DishType::class, $dish);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($dish);
            $entityManager->flush();

            return $this->redirectToRoute('dish_index');
        }

        return $this->render('dish/new.html.twig', [
            'dish' => $dish,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/dish/{id}", name="dish_show", methods={"GET"})
     */
    public function show(Dish $dish): Response
    {
        return $this->render('dish/show.html.twig', [
            'dish' => $dish,
        ]);
    }

    /**
     * @Route("/admin/dish/{id}/edit", name="dish_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Dish $dish): Response
    {
        $form = $this->createForm(DishType::class, $dish);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('dish_index');
        }

        return $this->render('dish/edit.html.twig', [
            'dish' => $dish,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/admin/dish/{id}", name="dish_delete", methods={"DELETE"})
     */
    public function delete(Request $request, Dish $dish): Response
    {
        if ($this->isCsrfTokenValid('delete'.$dish->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($dish);
            $entityManager->flush();
        }

        return $this->redirectToRoute('dish_index');
    }
}
