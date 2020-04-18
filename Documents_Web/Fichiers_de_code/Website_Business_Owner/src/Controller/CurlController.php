<?php


namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CurlController extends AbstractController
{
    /**
     * @Route("/curling", name="curlMad")
     */
    public function index(): Response
    {
        var_dump($_GET);
        die();
//        return $this->render('curl/html.twig',[
//            'content' => $_GET['value'],
//        ]);

    }

}