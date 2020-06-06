<?php

namespace App\Controller;

use App\Entity\Product;
use App\Entity\ProductCategory;
use App\Entity\ProductOrigin;
use App\Entity\Translations\ProductTranslation;
use App\Form\ProductType;
use App\Repository\ProductRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/")
 */
class ProductController extends AbstractController
{
    /**
     * @Route("/admin/product", name="product_index", methods={"GET"})
     */
    public function index(ProductRepository $productRepository): Response
    {
        return $this->render('product/index.html.twig', [
            'products' => $productRepository->findAll(),
        ]);
    }

    /**
     * @Route("/admin/product/new", name="product_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $product = new Product();
        $form = $this->createForm(ProductType::class, $product);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($product);
            $entityManager->flush();

            return $this->redirectToRoute('product_index');
        }

        return $this->render('product/new.html.twig', [
            'product' => $product,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/product/{id}", name="product_show", methods={"GET"})
     */
    public function show(Product $product): Response
    {
        return $this->render('product/show.html.twig', [
            'product' => $product,
        ]);
    }

    /**
     * @Route("/admin/product/{id}/edit", name="product_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Product $product): Response
    {
        $form = $this->createForm(ProductType::class, $product);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid() && $form->get('save')->isClicked()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('product_index');
        }

        return $this->render('product/edit.html.twig', [
            'product' => $product,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/admin/product/{id}", name="product_delete", methods={"DELETE"})
     */
    public function delete(Request $request, Product $product): Response
    {
        if ($this->isCsrfTokenValid('delete'.$product->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($product);
            $entityManager->flush();
        }

        return $this->redirectToRoute('product_index');
    }

    /**
     * @Route("/admin/product/trad", name="product_trad")
     */
    public function trad(ProductRepository $productRepository): Response
    {
        $products = $productRepository->findAll();
        $productsFr = $productRepository->findByLocale();
        $productsEn = $productRepository->findByLocale('en');
        $productsEs = $productRepository->findByLocale('es');
        return
            $this->render('product/trad.html.twig', [
                'products' => $products,
                'en' => $productsEn,
                'es' => $productsEs,
                'fr' => $productsFr
        ]);
    }

    /**
     * @Route("/admin/product/trad/add", name="product_trad_add", methods={"POST"})
     */
    public function addTrad(Request $request, ProductRepository $productRepository): Response
    {
        $en = $request->get('en');
        $es = $request->get('es');
        $product = $productRepository->findOneBy(['id' => $request->get('id')]);
        $product->addTranslation(new ProductTranslation('en', 'name', $en));
        $product->addTranslation(new ProductTranslation('es', 'name', $es));
        $em = $this->getDoctrine()->getManager();
        $em->persist($product);
        $em->flush();
        die();
    }
}
