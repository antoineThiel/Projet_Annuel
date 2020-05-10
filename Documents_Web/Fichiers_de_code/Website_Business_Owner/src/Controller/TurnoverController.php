<?php
namespace App\Controller;

use App\Entity\Turnover;
use App\Repository\TurnoverRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

Class TurnoverController extends AbstractController {

    /**
     * @Route("/admin/turnover", name="turnover_index", methods={"GET"})
     */
    public function index(TurnoverRepository $turnoverRepository): Response
    {
        return $this->render('turnover/index.html.twig', [
           'turnover' => $turnoverRepository->findAll(),
        ]);
    }







}