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
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Constraints\Json;

class HomepageController extends AbstractController
{
    /**
     * @Route({
     *     "fr": "/fr/",
     *     "en": "/en/",
     *     "es": "/es/"
     * }, name="home", methods={"GET"})
     */
    public function index(Request $request): Response
    {
        $locale = $request->getLocale();
        $request->setLocale($locale);
        return $this->render('base_front.html.twig');
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


    /**
     * @Route("/404", name="404")
     */
    public function notFound() : Response
    {
        return $this->render('common/404.html.twig');
    }

    /**
     * @Route("/ajax/ranks_homepage" , name = "ranksHomepage" , methods={"GET"})
     */
    public function ajaxGetRanksDetails() : Response
    {
        $return = [];

        $em = $this->getDoctrine()->getManager();
        $rankRepository = $em->getRepository('App\Entity\Rank');
        $allRanks = $rankRepository->findAll();

        $franchiseeRepository = $em->getRepository('App\Entity\Franchisee');
        foreach ($allRanks as $rank){
            $return['labels'][] = $rank->getTitle();
            $return['quantities'][] = count($franchiseeRepository->findBy(['rank' => $rank->getId()]));
        }

        return new JsonResponse($return);
    }
}