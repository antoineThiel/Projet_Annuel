<?php

namespace App\Controller;

use App\Entity\ProductCategory;
use App\Entity\Translations\CategoryTranslation;
use App\Form\ProductCategoryType;
use App\Repository\ProductCategoryRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/")
 */
class ProductCategoryController extends AbstractController
{
    /**
     * @Route("/admin/product_category", name="product_category_index", methods={"GET"})
     */
    public function index(ProductCategoryRepository $productCategoryRepository): Response
    {
        return $this->render('product_category/index.html.twig', [
            'product_categories' => $productCategoryRepository->findAll(),
        ]);
    }

    /**
     * @Route("/admin/product_category/new", name="product_category_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $productCategory = new ProductCategory();
        $form = $this->createForm(ProductCategoryType::class, $productCategory);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($productCategory);
            $entityManager->flush();

            return $this->redirectToRoute('product_category_index');
        }

        return $this->render('product_category/new.html.twig', [
            'product_category' => $productCategory,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/product_category/{id}", name="product_category_show", methods={"GET"})
     */
    public function show(ProductCategory $productCategory): Response
    {
        return $this->render('product_category/show.html.twig', [
            'product_category' => $productCategory,
        ]);
    }

    /**
     * @Route("/admin/product_category/{id}/edit", name="product_category_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, ProductCategory $productCategory): Response
    {
        $form = $this->createForm(ProductCategoryType::class, $productCategory);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('product_category_index');
        }

        return $this->render('product_category/edit.html.twig', [
            'product_category' => $productCategory,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/admin/product_category/{id}", name="product_category_delete", methods={"DELETE"})
     */
    public function delete(Request $request, ProductCategory $productCategory): Response
    {
        if ($this->isCsrfTokenValid('delete'.$productCategory->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($productCategory);
            $entityManager->flush();
        }

        return $this->redirectToRoute('product_category_index');
    }

    /**
     * @Route("/admin/product/category/trad", name="product_category_trad")
     */
    public function trad(ProductCategoryRepository $productRepository): Response
    {
        $products = $productRepository->findAll();
        $productsFr = $productRepository->findByLocale();
        $productsEn = $productRepository->findByLocale('en');
        $productsEs = $productRepository->findByLocale('es');
        foreach ($products as $product){
            $trads[] = $product->getTranslations();
        }
        return
            $this->render('product_category/trad.html.twig', [
                'trad' => $trads,
                'products' => $products,
                'en' => $productsEn,
                'es' => $productsEs,
                'fr' => $productsFr
            ]);
    }

    /**
     * @Route("/admin/product/category/trad/add", name="product_category_trad_add", methods={"POST"})
     */
    public function addTrad(Request $request, ProductCategoryRepository $productRepository): Response
    {
        $en = $request->get('en');
        $es = $request->get('es');
        $product = $productRepository->findOneBy(['id' => $request->get('id')]);
        $product->addTranslation(new CategoryTranslation('en', 'name', $en));
        $product->addTranslation(new CategoryTranslation('es', 'name', $es));
        $em = $this->getDoctrine()->getManager();
        $em->persist($product);
        $em->flush();
        die();
    }
}
