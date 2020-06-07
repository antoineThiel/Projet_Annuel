<?php

namespace App\Controller;

use App\Entity\MenuToArticle;
use App\Form\MenuToArticleType;
use App\Repository\MenuToArticleRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/menu/to/article")
 */
class MenuToArticleController extends AbstractController
{
    /**
     * @Route("/", name="menu_to_article_index", methods={"GET"})
     */
    public function index(MenuToArticleRepository $menuToArticleRepository): Response
    {
        return $this->render('menu_to_article/index.html.twig', [
            'menu_to_articles' => $menuToArticleRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="menu_to_article_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $menuToArticle = new MenuToArticle();
        $form = $this->createForm(MenuToArticleType::class, $menuToArticle);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($menuToArticle);
            $entityManager->flush();

            return $this->redirectToRoute('menu_to_article_index');
        }

        return $this->render('menu_to_article/new.html.twig', [
            'menu_to_article' => $menuToArticle,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="menu_to_article_show", methods={"GET"})
     */
    public function show(MenuToArticle $menuToArticle): Response
    {
        return $this->render('menu_to_article/show.html.twig', [
            'menu_to_article' => $menuToArticle,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="menu_to_article_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, MenuToArticle $menuToArticle): Response
    {
        $form = $this->createForm(MenuToArticleType::class, $menuToArticle);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('menu_to_article_index');
        }

        return $this->render('menu_to_article/edit.html.twig', [
            'menu_to_article' => $menuToArticle,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="menu_to_article_delete", methods={"DELETE"})
     */
    public function delete(Request $request, MenuToArticle $menuToArticle): Response
    {
        if ($this->isCsrfTokenValid('delete'.$menuToArticle->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($menuToArticle);
            $entityManager->flush();
        }

        return $this->redirectToRoute('menu_to_article_index');
    }
}
