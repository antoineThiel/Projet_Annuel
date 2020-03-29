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
//        dump($_POST);
//        die();
        return $this->render('curl/html.twig',[
            'content' => 'test',
        ]);

    }

}