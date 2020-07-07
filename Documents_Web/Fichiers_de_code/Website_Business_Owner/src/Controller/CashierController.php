<?php


namespace App\Controller;


use App\Entity\Customer;
use App\Repository\CustomerOrderRepository;
use App\Repository\DishRepository;
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

        $customerOrderRepository->findBy("franchisee = $this->getUser()");


        return $this->render('cashier/includes/incoming_orders.html.twig', [
        ]);
    }

    /**
     * @Route("/franchisee/work/ajax/fill_current", name="ajax_fill_current", methods={"GET"})
     */
    public function fill_current() : Response
    {
        return $this->render('cashier/includes/current_order.html.twig', [
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

}