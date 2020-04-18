<?php


namespace App\Controller;

use App\Entity\Warehouse;
use App\Repository\DishRepository;
use App\Repository\FranchiseeRepository;
use App\Repository\ProductCategoryRepository;
use App\Repository\ProductOriginRepository;
use App\Repository\ProductRepository;
use App\Repository\TruckRepository;
use App\Repository\WarehouseRepository;
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

        $franchiseenbre = $franchiseeRepository->findAll();
        $franchiseenbre = count($franchiseenbre);

        $dishnbre = $dishRepository->findAll();
        $dishnbre = count($dishnbre);

        $franchiseewithouttrucknbre = $franchiseeRepository->findByNoTruck();
        $franchiseewithouttrucknbre = count($franchiseewithouttrucknbre);

        return $this->render('base.html.twig', [
            'productnbre' => $productNumber,
            'catnbre' => $catnbre,
            'originbre' => $originbre,
            'trucknbre' => $trucknbre,
            'franchiseenbre' => $franchiseenbre,
            'dishnbre' => $dishnbre,
            'franchiseewithouttrucknbre' => $franchiseewithouttrucknbre
        ]);
    }
}