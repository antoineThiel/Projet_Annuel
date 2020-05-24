<?php

namespace App\Controller;

use App\Entity\StockDish;
use App\Form\StockDishType;
use App\Repository\StockDishRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/stock/dish")
 */
class StockDishController extends AbstractController
{
    /**
     * @Route("/", name="stock_dish_index", methods={"GET"})
     */
    public function index(StockDishRepository $stockDishRepository): Response
    {
        return $this->render('stock_dish/index.html.twig', [
            'stock_dishes' => $stockDishRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="stock_dish_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $stockDish = new StockDish();
        $form = $this->createForm(StockDishType::class, $stockDish);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($stockDish);
            $entityManager->flush();

            return $this->redirectToRoute('stock_dish_index');
        }

        return $this->render('stock_dish/new.html.twig', [
            'stock_dish' => $stockDish,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="stock_dish_show", methods={"GET"})
     */
    public function show(StockDish $stockDish): Response
    {
        return $this->render('stock_dish/show.html.twig', [
            'stock_dish' => $stockDish,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="stock_dish_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, StockDish $stockDish): Response
    {
        $form = $this->createForm(StockDishType::class, $stockDish);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('stock_dish_index');
        }

        return $this->render('stock_dish/edit.html.twig', [
            'stock_dish' => $stockDish,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="stock_dish_delete", methods={"DELETE"})
     */
    public function delete(Request $request, StockDish $stockDish): Response
    {
        if ($this->isCsrfTokenValid('delete'.$stockDish->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($stockDish);
            $entityManager->flush();
        }

        return $this->redirectToRoute('stock_dish_index');
    }
}
