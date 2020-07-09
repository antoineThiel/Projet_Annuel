<?php


namespace App\Controller;


use App\Entity\Customer;
use App\Entity\CustomerArticle;
use App\Entity\CustomerMenu;
use App\Entity\CustomerOrder;
use App\Repository\CustomerOrderRepository;
use App\Repository\CustomerRepository;
use App\Repository\DishRepository;
use App\Repository\FranchiseeArticleRepository;
use App\Repository\FranchiseeMenuRepository;
use App\Repository\FranchiseeRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class CashierController extends AbstractController
{

    /**
     * @Route ("/franchisee/work/ajax/create_customer" , name="ajax_create_customer" , methods={"POST"})
     * @param Request $request
     * @return Response
     */
    public function createCustomer(Request $request) : Response
    {
        $success=true;

        $name = $request->request->get('name') ?? null;
        $lname = $request->request->get('lname') ?? null ;
        $mail = $request->request->get('mail') ?? null ;
        $pswd = $request->request->get('pswd') ?? null ;

        if($name == null && $lname == null && $mail == null && $pswd == null){
            $success=false;
        }

        if(strlen($pswd) < 8 || strpbrk($pswd , "0123456789") == false){
            $success=false;
        }
        if (filter_var($mail, FILTER_VALIDATE_EMAIL) == false){
            $success=false;
        }

        if ($success == true){
            $customer = new Customer();
            $customer->setName($name);
            $customer->setLastname($lname);
            $customer->setMail($mail);
            $customer->setPassword($pswd);
            $customer->setFidelity(0);

            $em=$this->getDoctrine()->getManager();

            $em->persist($customer);
            $em->flush();
        }


        return $this->render('cashier/create_customer_modal.html.twig' , [
            'mode' => $success,
        ]);
    }

    /**
     * @Route("/franchisee/work/ajax/fill_incoming", name="ajax_fill_incoming", methods={"GET"})
     */
    public function fill_incoming(Request $request ,CustomerOrderRepository $customerOrderRepository , FranchiseeRepository $franchiseeRepository) : Response
    {
        $franchisee = $this->getUser();
        $orders = $franchisee->getCustomerOrders();


        foreach ($orders as $order){
            if ($order->getValidate() == true && $order->getDelivered() == false){
                $notTakenOrders[] = $order;
            }
        }

        return $this->render('cashier/includes/incoming_orders.html.twig', [
            "orders" => isset($notTakenOrders) ? $notTakenOrders : null,
        ]);
    }

    /**
     * @Route("/franchisee/work/ajax/fill_current", name="ajax_fill_current", methods={"GET"})
     */
    public function fill_current(CustomerRepository $customerRepository , FranchiseeArticleRepository $franchiseeArticleRepository ,FranchiseeMenuRepository $franchiseeMenuRepository) : Response
    {

        $franchisee = $this->getUser();
        $allCustomers = $customerRepository->findAll();

        $franchiseeArticles = $franchiseeArticleRepository->findBy(['franchisee' => $franchisee]);
        $franchiseeMenues = $franchiseeMenuRepository->findBy(['franchisee' => $franchisee]);


        return $this->render('cashier/includes/current_order.html.twig', [
            'allCustomers' => $allCustomers,
            'franchiseeArticles' => $franchiseeArticles,
            'franchiseeMenus' => $franchiseeMenues,

        ]);
    }

    /**
     * @Route("/franchisee/work/ajax/fill_create", name="ajax_fill_create", methods={"GET"})
     */
    public function fill_create() : Response
    {
        return $this->render('cashier/includes/create_account.html.twig', [
        ]);
    }

    /**
     * @Route("/franchisee/work", name="cashier_index", methods={"GET"})
     */
    public function index(): Response
    {
        return $this->render('cashier/index.html.twig', [
        ]);
    }

    /**
     * @Route("/franchisee/work/ajax/confirmOrder", name="ajax_confirm_order", methods={"POST"})
     */
    public function confirm_order(Request $request , CustomerOrderRepository $customerOrderRepository): Response
    {

        $id = $request->request->get('id_order');

        $currentOrder = $customerOrderRepository->find($id);

        $currentOrder->setDelivered(True);

        $em = $this->getDoctrine()->getManager();
        $em->persist($currentOrder);
        $em->flush();

        return $this->render('cashier/confirm_order_modal.html.twig', [
            "order" => $currentOrder,
        ]);
    }


    /**
     * @Route("/franchisee/work/ajax/addToCart", name="ajax_addTo_cart", methods={"POST"})
     * @param Request $request
     * @param FranchiseeMenuRepository $franchiseeMenuRepository
     * @param FranchiseeArticleRepository $franchiseeArticleRepository
     * @return Response
     */
    public function addToCart(Request $request , FranchiseeMenuRepository $franchiseeMenuRepository , FranchiseeArticleRepository $franchiseeArticleRepository):Response
    {
        $franchisee = $this->getUser();
        $item_name = $request->request->get("item_name");
        $aORm = $request->request->get("aORm");

        $allArticles = $franchiseeArticleRepository->findBy(["franchisee" => $franchisee ]);
        $allMenues = $franchiseeMenuRepository->findBy(["franchisee" => $franchisee ]);


        if($aORm === "1"){
            $totalOrder = 50;
        }
        else{
            $totalOrder = 10;
        }

        return $this->render('cashier/includes/recap_template.html.twig' , [
           "totalOrder" => $totalOrder,
//           "items" => $items,
        ]);
    }

    /**
     * @Route("/franchisee/work/ajax/addToValided", name="addTo_valided", methods={"GET","POST"})
     */
    public function addToValided(Request $request , CustomerOrder $customerOrder , CustomerArticle $customerArticle, CustomerMenu $customerMenu ,FranchiseeArticleRepository $franchiseeArticleRepository, FranchiseeMenuRepository$franchiseeMenuRepository ,CustomerRepository $customerRepository):Response
    {
        $user = $this->getUser();
        $entityManager = $this->getDoctrine()->getManager();
        $customer = $request->request->get('customer') ?? null;
        $articles = $request->request->get('articles') ?? null;
        $menues = $request->request->get('menues') ?? null;
        $point = $request->request->get('point') ?? null;
        $price = 0;


        $Corder = new CustomerOrder();
        $Corder->setCustomer($customer);
        $Corder->setDate(new \DateTime());
        $Corder->setFranchisee($user);
        $Corder->setValidate(1);
        $Corder->setDelivered(0);
        $i = 0;
        $entityManager->persist($Corder);

        if($articles) {
            foreach ($articles as $article1) {
                $j = $i + 1;
                $article = $franchiseeArticleRepository->findOneBy(['id' => $article1[$i]]);
                $Carticle = new CustomerArticle();
                $Carticle->setCustomer($customer);
                $Carticle->setName($article->getName());
                $Carticle->setPrice($article->getPrice());
                $Carticle->setQuantity($article1[$j]);
                $Carticle->setCustomerOrder($Corder->getId());
                $price = $price + $article->getPrice();
                $article->setStock($article->getStock() - $article1[$j]);
                $i += 2;
                $entityManager->persist($Carticle);
                $entityManager->persist($article);
            }
        }

        if($menues){
            foreach ($menues as $menue1){
                $j = $i + 1;
                $menu = $franchiseeMenuRepository->findOneBy(['id' => $menue1[$i]]);
                $Cmenue = new CustomerMenu();
                $Cmenue->setCustomer($customer);
                $Cmenue->setName($menu->getName());
                $Cmenue->setPrice($menu->getPrice());
                $Cmenue->setQuantity($menue1[$j]);
                $Cmenue->setCustomerOrder($Corder->getId());
                $price = $price + $menu->getPrice();
                $menu->setStock($menu->getStock() - $menue1[$j]);
                $i += 2;
                $entityManager->persist($Cmenue);
                $entityManager->persist($menu);
            }
        }

        $customerid = $customerRepository->findOneBy(['id' => $customer]);
        $fidelity = $customerid->getFidelity();
        if($point==1) {
            if($price<$fidelity) {
                $pointTotal = $price;
                $price = 0;
                $customerid->setFidelity($fidelity - $pointTotal);
                $entityManager->persist($customerid);
            }
            if($price>$fidelity){
                $pointTotal = $price;
                $price = $price - $fidelity;
                $customerid->setFidelity($fidelity - $pointTotal);
                $entityManager->persist($customerid);
            }
            if($price == $fidelity){
                $pointTotal = $price;
                $price = 0;
                $customerid->setFidelity($fidelity - $pointTotal);
                $entityManager->persist($customerid);
            }
        }

        $Corder->setAmmount($price);
        $entityManager->persist($Corder);

        $entityManager->flush();



        return $this->redirectToRoute('cashier_index');
    }

}