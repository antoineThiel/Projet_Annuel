<?php


namespace App\Controller;

use App\Repository\DishRepository;
use App\Repository\FranchiseeRepository;
use App\Repository\ProductCategoryRepository;
use App\Repository\ProductOriginRepository;
use App\Repository\ProductRepository;
use App\Repository\TruckRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomepageController extends AbstractController
{
    /**
     * @Route("/", name="home", methods={"GET"})
     */
    public function index(): Response
    {
        return $this->render('base.html.twig');
    }

    /**
     * @Route("/admin", name="admin_home")
     */
    public function indexAdmin(
        ProductRepository $productRepository,
        ProductCategoryRepository $categoryRepository,
        ProductOriginRepository $originRepository,
        TruckRepository $truckRepository,
        FranchiseeRepository $franchiseeRepository,
        DishRepository $dishRepository)
    {
        $productNumber = $productRepository->findAll();
        $productNumber = count($productNumber);

        $catnbre = $categoryRepository->findAll();
        $catnbre = count($catnbre);

        $originbre = $originRepository->findAll();
        $originbre = count($originbre);

        $trucknbre = $truckRepository->findAll();
        $trucknbre = count($trucknbre);
        $trucknbreused = $truckRepository->findByUsers();
        $trucknbreused = count($trucknbreused);
        $truckUnused = $trucknbre - $trucknbreused;

        $franchiseenbre = $franchiseeRepository->findAll();
        $franchiseenbre = count($franchiseenbre);

        $dishnbre = $dishRepository->findAll();
        $dishnbre = count($dishnbre);

        return $this->render('base.html.twig', [
            'productnbre' => $productNumber,
            'catnbre' => $catnbre,
            'originbre' => $originbre,
            'trucknbre' => $trucknbre,
            'trucknbreused' => $trucknbreused,
            'truckunused' => $truckUnused,
            'franchiseenbre' => $franchiseenbre,
            'dishnbre' => $dishnbre
        ]);
    }
}