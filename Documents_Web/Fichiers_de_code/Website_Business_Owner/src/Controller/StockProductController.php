<?php

namespace App\Controller;

use App\Entity\StockProduct;
use App\Form\StockProductType;
use App\Repository\StockProductRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/stock/product")
 */
class StockProductController extends AbstractController
{
    /**
     * @Route("/", name="stock_product_index", methods={"GET"})
     */
    public function index(StockProductRepository $stockProductRepository): Response
    {
        return $this->render('stock_product/index.html.twig', [
            'stock_products' => $stockProductRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="stock_product_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $stockProduct = new StockProduct();
        $form = $this->createForm(StockProductType::class, $stockProduct);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($stockProduct);
            $entityManager->flush();

            return $this->redirectToRoute('stock_product_index');
        }

        return $this->render('stock_product/new.html.twig', [
            'stock_product' => $stockProduct,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="stock_product_show", methods={"GET"})
     */
    public function show(StockProduct $stockProduct): Response
    {
        return $this->render('stock_product/show.html.twig', [
            'stock_product' => $stockProduct,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="stock_product_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, StockProduct $stockProduct): Response
    {
        $form = $this->createForm(StockProductType::class, $stockProduct);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('stock_product_index');
        }

        return $this->render('stock_product/edit.html.twig', [
            'stock_product' => $stockProduct,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="stock_product_delete", methods={"DELETE"})
     */
    public function delete(Request $request, StockProduct $stockProduct): Response
    {
        if ($this->isCsrfTokenValid('delete'.$stockProduct->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($stockProduct);
            $entityManager->flush();
        }

        return $this->redirectToRoute('stock_product_index');
    }
}
