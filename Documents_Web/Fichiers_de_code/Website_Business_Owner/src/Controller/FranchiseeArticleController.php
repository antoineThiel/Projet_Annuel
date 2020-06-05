<?php

namespace App\Controller;

use App\Entity\Franchisee;
use App\Entity\FranchiseeArticle;
use App\Form\FranchiseeArticleType;
use App\Repository\FranchiseeArticleRepository;
use App\Repository\StockDishRepository;
use App\Repository\StockProductRepository;
use App\Services\UnitConverter;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Encoder\JsonEncode;

/**
 * @Route({
 *     "fr": "/fr/franchise/articles",
 *     "en": "/en/franchisee/articles",
 *     "es": "/es/franquiciado/articles"
 *      })
 */
class FranchiseeArticleController extends AbstractController
{
    /**
     * @Route("/new", name="franchisee_article_new", methods={"GET","POST"})
     */
    public function new(Request $request, StockDishRepository $stockDishRepository , StockProductRepository $stockProductRepository): Response
    {
        $franchisee = $this->getUser();
        $franchiseeArticle = new FranchiseeArticle();

        $dataSource = $request->request;


        $stockProduct = $stockProductRepository->find($dataSource->get('stockProduct'));
        $stockDish = $stockDishRepository->find($dataSource->get('stockDish'));

        $franchiseeArticle
            ->setName($dataSource->get('name'))
            ->setPrice($dataSource->get('price'))
            ->setUnit($dataSource->get('unit') == "" ? null : $dataSource->get('unit') )
            ->setQuantity(intval($dataSource->get('quantity') == "" ? null : $dataSource->get('quantity'), 10) )
            ->setStock(0)
            ->setStockProduct($stockProduct)
            ->setStockDish($stockDish)
            ->setFranchisee($franchisee);

        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->persist($franchiseeArticle);
        $entityManager->flush();

        return $this->redirectToRoute('franchisee_menu' , ['id' => $franchisee->getId()]);

    }

    /**
     * @Route ("/create/error" , name="franchisee_article_create_error")
     */
    public function error() :Response
    {
        return $this->render('franchisee_article/create_error.html.twig');
    }

    /**
     * @Route ("/create" , name="franchisee_article_create")
     * @param StockProductRepository $stockProductRepository
     * @param StockDishRepository $stockDishRepository
     * @return Response
     */
    public function create(StockProductRepository $stockProductRepository , StockDishRepository $stockDishRepository){
        $franchisee = $this->getUser();

        $availableStock['Dish'] = $stockDishRepository->findBy(['franchisee' => $franchisee->getId()]);
        $availableStock['Product'] = $stockProductRepository->findBy(['franchisee' => $franchisee->getId()]);

        return $this->render('franchisee_article/new.html.twig', [
            'franchisee' => $franchisee,
            'stocks' => $availableStock
        ]);
    }



    /**
     * @Route("/", name="franchisee_article_show", methods={"GET"})
     */
    public function show(FranchiseeArticle $franchiseeArticle): Response
    {
        return $this->render('franchisee_article/show.html.twig', [
            'franchisee_article' => $franchiseeArticle,
        ]);
    }

    /**
     * @Route("/{article}/edit", name="franchisee_article_edit", methods={"GET","POST"})
     * @param Request $request
     * @param FranchiseeArticle $article
     * @return Response
     */
    public function edit(Request $request, FranchiseeArticle $article): Response
    {
        $form = $this->createForm(FranchiseeArticleType::class, $article);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('franchisee_menu' , ['id' => $this->getUser()->getId()]);
        }

        return $this->render('franchisee_article/edit.html.twig', [
            'franchisee_article' => $article,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{article}", name="franchisee_article_delete", methods={"DELETE"})
     * @param Request $request
     * @param FranchiseeArticle $article
     * @return Response
     */
    public function delete(Request $request, FranchiseeArticle $article): Response
    {
        if ($this->isCsrfTokenValid('delete'.$article->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($article);
            $entityManager->flush();
        }

        return $this->redirectToRoute('franchisee_menu' , ['id' => $this->getUser()->getId()]);
    }

    /**
     * @Route("/editStock" , name="franchisee_article_edit_stock", methods={"GET" , "POST"})
     * @param Request $request
     * @param FranchiseeArticleRepository $franchiseeArticleRepository
     * @param StockProductRepository $stockProductRepository
     * @param StockDishRepository $stockDishRepository
     * @return string
     */
    public function editStock(Request $request , FranchiseeArticleRepository $franchiseeArticleRepository , StockProductRepository $stockProductRepository , StockDishRepository $stockDishRepository)
    {
        $error = false;
        $currentArticle = $franchiseeArticleRepository->find($request->request->get('article_id'));
        $em = $this->getDoctrine()->getManager();
        $modif = $request->request->get('detail');

        $StockUpdater = new UnitConverter($em);


        if($currentArticle != null){
            $newStock = $currentArticle->getStock() + $modif;

            if($newStock >= 0 ){

                if($currentArticle->getStockProduct() !== null) {
                    $stock = $stockProductRepository->find($currentArticle->getStockProduct()->getId());
                }
                else{
                    $stock = $stockDishRepository->find($currentArticle->getStockDish()->getId());

                }

                if($currentArticle->getStockProduct() !== null) {

                    $error = $StockUpdater->convertStocks($stock , $currentArticle , $modif);
                }
                else{
                    if(   (  ($tmpQuantity = $stock->getQuantity() ) > 0 ) || $modif < 0){
                        $stock->setQuantity($tmpQuantity - $modif);
                    }else{
                        $error = true;
                    }
                }

            }else{
                $error = true;
            }


            if(!$error){
                $currentArticle->setStock($newStock);
                $em->persist($currentArticle);
                $em->flush();
            }

        }else{
            $error = true;
        }


        $return['result'] = $error;
        $return['html'] = $error == false ? null : $this->render('franchisee_article/article_stock_error.html.twig')->getContent();

        return new JsonResponse($return);
    }

}

