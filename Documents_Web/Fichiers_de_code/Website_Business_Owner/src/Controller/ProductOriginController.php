<?php

namespace App\Controller;

use App\Entity\ProductOrigin;
use App\Form\ProductOriginType;
use App\Repository\ProductOriginRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/product/origin")
 */
class ProductOriginController extends AbstractController
{
    /**
     * @Route("/", name="product_origin_index", methods={"GET"})
     */
    public function index(ProductOriginRepository $productOriginRepository): Response
    {
        return $this->render('product_origin/index.html.twig', [
            'product_origins' => $productOriginRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="product_origin_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $productOrigin = new ProductOrigin();
        $form = $this->createForm(ProductOriginType::class, $productOrigin);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($productOrigin);
            $entityManager->flush();

            return $this->redirectToRoute('product_origin_index');
        }

        return $this->render('product_origin/new.html.twig', [
            'product_origin' => $productOrigin,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="product_origin_show", methods={"GET"})
     */
    public function show(ProductOrigin $productOrigin): Response
    {
        return $this->render('product_origin/show.html.twig', [
            'product_origin' => $productOrigin,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="product_origin_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, ProductOrigin $productOrigin): Response
    {
        $form = $this->createForm(ProductOriginType::class, $productOrigin);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('product_origin_index');
        }

        return $this->render('product_origin/edit.html.twig', [
            'product_origin' => $productOrigin,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="product_origin_delete", methods={"DELETE"})
     */
    public function delete(Request $request, ProductOrigin $productOrigin): Response
    {
        if ($this->isCsrfTokenValid('delete'.$productOrigin->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($productOrigin);
            $entityManager->flush();
        }

        return $this->redirectToRoute('product_origin_index');
    }
}
