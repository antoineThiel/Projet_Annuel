<?php

namespace App\Controller;

use App\Entity\Franchisee;
use App\Entity\StockProduct;
use App\Form\StockProductType;
use App\Repository\StockProductRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route({
 *     "fr": "/fr/franchise/{id}/inventaire/produit",
 *     "en": "/en/franchisee/{id}/stocks/produit",
 *     "es": "/es/franquiciado/{id}/cepo/produit"
 *      })
 */
class StockProductController extends AbstractController
{
    /**
     * @Route("/", name="stock_product_index", methods={"GET"})
     * @param StockProductRepository $stockProductRepository
     * @param Franchisee $franchisee
     * @return Response
     */
    public function index(StockProductRepository $stockProductRepository , Franchisee $franchisee): Response
    {
        return $this->render('stock_product/index.html.twig', [
            'stock_products' => $stockProductRepository->findAll(),
            'franchisee' => $franchisee
        ]);
    }

    /**
     * @Route("/new", name="stock_product_new", methods={"GET","POST"})
     * @param Request $request
     * @return Response
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
     * @Route("/{id_product}", name="stock_product_show", methods={"GET"})
     * @param StockProduct $stockProduct
     * @return Response
     */
    public function show(StockProduct $stockProduct): Response
    {
        return $this->render('stock_product/show.html.twig', [
            'stock_product' => $stockProduct,
        ]);
    }

    /**
     * @Route("/{stockProduct}/edit", name="stock_product_edit", methods={"GET","POST"})
     * @param Request $request
     * @param StockProduct $stockProduct
     * @param Franchisee $franchisee
     * @return Response
     */
    public function edit(Request $request , Franchisee $franchisee, StockProduct $stockProduct): Response
    {
        $form = $this->createForm(StockProductType::class, $stockProduct);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('franchisee_stock' , ['id' => $franchisee->getId()]);
        }

        return $this->render('stock_product/edit.html.twig', [
            'stock_product' => $stockProduct,
            'form' => $form->createView(),
            'franchisee' => $franchisee
        ]);
    }

    /**
     * @Route("/{id_product}", name="stock_product_delete", methods={"DELETE"})
     * @param Request $request
     * @param StockProduct $stockProduct
     * @return Response
     */
    public function delete(Request $request, StockProduct $stockProduct): Response
    {
        if ($this->isCsrfTokenValid('delete'.$stockProduct->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($stockProduct);
            $entityManager->flush();
        }

        return $this->redirectToRoute('franchisee_stock');
    }
}
