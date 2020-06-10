<?php

namespace App\Controller;

use App\Entity\FranchiseeMenu;
use App\Form\FranchiseeMenuType;
use App\Repository\FranchiseeArticleRepository;
use App\Repository\FranchiseeMenuRepository;
use App\Repository\MenuToArticleRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
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
     * @param FranchiseeMenuRepository $franchiseeMenuRepository
     * @return Response
     */
    public function index(FranchiseeMenuRepository $franchiseeMenuRepository): Response
    {
        return $this->render('franchisee_menu/index.html.twig', [
            'franchisee_menus' => $franchiseeMenuRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="franchisee_menu_new", methods={"GET","POST"})
     * @param Request $request
     * @return Response
     */
    public function new(Request $request): Response
    {
        $franchiseeMenu = new FranchiseeMenu();
        $franchiseeMenu
            ->setFranchisee($this->getUser())
            ->setStock(0);


        $form = $this->createForm(FranchiseeMenuType::class, $franchiseeMenu);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();

            $entityManager->persist($franchiseeMenu);
            $entityManager->flush();

            return $this->redirectToRoute('franchisee_menu', ['id' => $this->getUser()->getId()]);
        }

        return $this->render('franchisee_menu/new.html.twig', [
            'franchisee_menu' => $franchiseeMenu,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="franchisee_menu_show", methods={"GET"})
     * @param FranchiseeMenu $franchiseeMenu
     * @return Response
     */
    public function show(FranchiseeMenu $franchiseeMenu): Response
    {
        return $this->render('franchisee_menu/show.html.twig', [
            'franchisee_menu' => $franchiseeMenu,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="franchisee_menu_edit", methods={"GET","POST"})
     * @param Request $request
     * @param FranchiseeMenu $franchiseeMenu
     * @return Response
     */
    public function edit(Request $request, FranchiseeMenu $franchiseeMenu): Response
    {
        $form = $this->createForm(FranchiseeMenuType::class, $franchiseeMenu);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('franchisee_menu' , ['id' => $this->getUser()->getId()]);
        }

        return $this->render('franchisee_menu/edit.html.twig', [
            'menu' => $franchiseeMenu,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}/del", name="franchisee_menu_delete", methods={"GET","DELETE"})
     * @param Request $request
     * @param FranchiseeMenu $franchiseeMenu
     * @return Response
     */
    public function delete(Request $request, FranchiseeMenu $franchiseeMenu , MenuToArticleRepository $menuToArticleRepository): Response
    {
        if ($this->isCsrfTokenValid('delete'.$franchiseeMenu->getId(), $request->request->get('_token'))) {

            $entityManager = $this->getDoctrine()->getManager();

            foreach ($franchiseeMenu->getMenuToArticles() as $article){
                $entityManager->remove($article);
                $entityManager->flush();
            }
            $entityManager->remove($franchiseeMenu);
            $entityManager->flush();
        }

        return $this->redirectToRoute('franchisee_menu' , ['id' => $this->getUser()->getId()]);
    }

    /**
     * @Route("/unknown" , name="franchisee_modifyMenuQty", methods={"GET" , "POST"})
     * @param Request $request
     * @return Response
     */
    public function AddOrReduce(Request $request , FranchiseeMenuRepository $franchiseeMenuRepository){

        $currentMenu = $franchiseeMenuRepository->find($request->request->get('menu_id'));
        $modification = $request->request->get('action');

        $em = $this->getDoctrine()->getManager();

        $stockStates = [];

        $return['success'] = true;

        if($currentMenu->getStock() + $modification  < 0){
            $return['success'] = false;
        }


        foreach ($currentMenu->getMenuToArticles() as $articleLink){
            $currentArticle = $articleLink->getFranchiseeArticle();
            $newStock = $currentArticle->getStock() - $modification*$articleLink->getQuantity();
            if( $newStock >= 0) {
                $stockStates[$currentArticle->getId()] = $newStock;
            }else{
                $return['success'] = false;
            }
        }


        if($return['success'] === true){
            $currentMenu->setStock($currentMenu->getStock()+ $modification);
            $em->persist($currentMenu);

            foreach ($currentMenu->getMenuToArticles() as $articleLink){
                $currentArticle = $articleLink->getFranchiseeArticle();
                $currentArticle->setStock($stockStates[$currentArticle->getId()]);

                $em->persist($currentArticle);
                $em->flush();
            }
        }else{
            $return['html'] = $this->renderView('franchisee_menu/create_error.html.twig');
        }



        return new JsonResponse($return);

//        $article = $franchiseeArticleRepository->find(1);
//        $article->setStock(110);
//
//        $em = $this->getDoctrine()->getManager();
//        $em->persist($article);
//        $em->flush();
//
//        $return['success'] = true;
//
//        return new JsonResponse($return);


    }
}
