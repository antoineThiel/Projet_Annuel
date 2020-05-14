<?php

namespace App\Controller;

use App\Entity\Rank;
use App\Form\RankType;
use App\Repository\RankRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/admin/rank")
 */
class RankController extends AbstractController
{
    /**
     * @Route("/", name="rank_index", methods={"GET"})
     */
    public function index(RankRepository $rankRepository): Response
    {
        return $this->render('rank/index.html.twig', [
            'ranks' => $rankRepository->findAll(),
        ]);
    }

//    /**
//     * @Route("/new", name="rank_new", methods={"GET","POST"})
//     */
//    public function new(Request $request): Response
//    {
//        $rank = new Rank();
//        $form = $this->createForm(RankType::class, $rank);
//        $form->handleRequest($request);
//
//        if ($form->isSubmitted() && $form->isValid()) {
//            $entityManager = $this->getDoctrine()->getManager();
//            $entityManager->persist($rank);
//            $entityManager->flush();
//
//            return $this->redirectToRoute('rank_index');
//        }
//
//        return $this->render('rank/new.html.twig', [
//            'rank' => $rank,
//            'form' => $form->createView(),
//        ]);
//    }

    /**
     * @Route("/total" , name="rank_display_all" , methods={"GET"})
     * @param Rank $rank
     * @return Response
     */
    public function displayAll(): Response
    {
        $manager = $this->getDoctrine()->getManager()->getRepository(Rank::class);
        $ranks = $manager->findAll();


        return $this->render('rank/display_all.html.twig', ['ranks' => $ranks]);
    }

    /**
     * @Route("/{id}", name="rank_show", methods={"GET"})
     */
    public function show(Rank $rank): Response
    {
        return $this->render('rank/show.html.twig', [
            'rank' => $rank,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="rank_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Rank $rank): Response
    {
        $form = $this->createForm(RankType::class, $rank);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('rank_index');
        }

        return $this->render('rank/edit.html.twig', [
            'rank' => $rank,
            'form' => $form->createView(),
        ]);
    }
//
//    /**
//     * @Route("/{id}", name="rank_delete", methods={"DELETE"})
//     */
//    public function delete(Request $request, Rank $rank): Response
//    {
//        if ($this->isCsrfTokenValid('delete'.$rank->getId(), $request->request->get('_token'))) {
//            $entityManager = $this->getDoctrine()->getManager();
//            $entityManager->remove($rank);
//            $entityManager->flush();
//        }
//
//        return $this->redirectToRoute('rank_index');
//    }


}
