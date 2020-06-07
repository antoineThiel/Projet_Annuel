<?php


namespace App\Controller;

use App\Entity\FranchiseeMenu;
use App\Repository\CustomerOrderRepository;
use App\Repository\CustomerRepository;
use App\Repository\FranchiseeMenuRepository;
use App\Repository\FranchiseeRepository;
use App\Repository\TruckPositionRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Serializer\SerializerInterface;

class TestController extends AbstractController
{
    /**
     * @Route("/getlog", name="getlog", methods={"GET"})
     */
    public function getLog(CustomerRepository $repository, SerializerInterface $serializer)
    {
        $em = $this->getDoctrine()->getManager();
        $repository = $em->getRepository('App\Entity\Customer');
        $customer = $repository->findOneBy(['login' => 'admin', 'password' => 'admin']);

        if ($customer != null)
        {
            $response['id'] = $customer->getId();
            $response['login'] = $customer->getLogin();
        }else{
            $response = [];
        }

        $serializedResponse = $serializer->serialize($response, 'json');

        return new JsonResponse($serializedResponse, 200, [], true);
    }

    /**
     * @Route("/check_cred/{login}/{password}", name="checkCred", methods={"GET"})
     */
    public function checkCred(Request $request, SerializerInterface $serializer) : JsonResponse
    {
        $login = $request->get("login");
        $password = $request->get("password");
        $em = $this->getDoctrine()->getManager();
        $customerRep = $em->getRepository('App\Entity\Customer');
        $custo = $customerRep->findOneBy(['login' => $login, 'password' => $password]);

        if ($custo !== null){
            $response['val'] = true;
            $response['id'] = $custo->getId();
            $response['login'] = $custo->getLogin();
        }else{
            $response['val'] = false;
        }

        $serializedResponse = $serializer->serialize($response, 'json');
        return new JsonResponse($serializedResponse, 200, [], true);
    }


    /**
     * @Route("/getfranchisee", name="getFranchisee", methods={"GET"})
     */
    public function getFranchisee(SerializerInterface $serializer) : JsonResponse
    {
        $repo = $this->getDoctrine()->getManager()->getRepository('App\Entity\Franchisee');
        $franchisees = $repo->findAll();
        $finalFranchisee = [];
        $i = 0;
        if ($franchisees !== null){
            foreach ($franchisees as $franchisee)
            {
                $finalFranchisee[$i]['id'] = $franchisee->getId();
                $finalFranchisee[$i]['lastName'] = $franchisee->getLastName();
                $finalFranchisee[$i]['firstName'] = $franchisee->getFirstName();
                $i++;
            }
        }
        $serializedResponse = $serializer->serialize($finalFranchisee, 'json');
        return new JsonResponse($serializedResponse, 200, [], true);
    }

    /**
     * @Route("/getfranchisehome", name="getfranchisehome", methods={"GET"})
     */
    public function getFranchise(FranchiseeRepository $franchiseeRepository, TruckPositionRepository $positionRepository, SerializerInterface $serializer)
    {
        $entityManager = $this->getDoctrine()->getManager();
        $franchisee = $entityManager->getRepository('App\Entity\Franchisee');
        $franchi = $franchisee->findAll();

        if ($franchi != null)
        {
            foreach ($franchi as $franchis) {
                $response[$franchis->getId()]['lastname'] = $franchis->getLastName();
                $response[$franchis->getId()]['firstname'] = $franchis->getFirstName();
                if($franchis->getTruck() != null) {
                    $pos = $positionRepository->findById($franchis->getTruck()->getId());
                    if($pos != null) {
                        $response[$franchis->getId()] ['adresse'] = $pos->getAddress();
                        $response[$franchis->getId()]['city'] = $pos->getCity();
                    } else {
                        $response[$franchis->getId()]['position']= null;
                        $response[$franchis->getId()]['city'] = null;
                    }
                }else{
                    $response[$franchis->getId()]['position']= null;
                    $response[$franchis->getId()]['city'] = null;

                }
            }
        }else{
            $response = [];
        }

        $serializedResponse = $serializer->serialize($response, 'json');

        return new JsonResponse($serializedResponse, 200, [], true);
    }



    /**
     * @Route("/getcustomerinfo/{id}", name="customerinfo", methods={"GET"})
     */
    public function getCustomerInfo(CustomerRepository $customerRepository,SerializerInterface $serializer,Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $repository = $em->getRepository('App\Entity\Customer');
        $customer = $repository->find($request->get('id'));

        if ($customer != null)
        {
            $response['id'] = $customer->getId();
            $response['firstname'] = $customer->getName();
            $response['lastname'] = $customer->getLastName();
            $response['email'] = $customer->getMail();
            $response['birthdate'] = $customer->getBirthdate();
            $response['phone'] = $customer->getPhone();
        }else{
            $response = [];
        }

        $serializedResponse = $serializer->serialize($response, 'json');
        return new JsonResponse($serializedResponse, 200, [], true);

    }

    /**
     * @Route("/getorder/{id}", name="order" , methods={"GET"})
     */
    public function getOrder(CustomerOrderRepository $customerOrderRepository,FranchiseeMenuRepository $franchiseeMenuRepository, SerializerInterface $serializer, Request $request)
    {

        $em = $this->getDoctrine()->getManager();
        $customerOrderRepository = $em->getRepository('App\Entity\CustomerOrder');
        $orders = $customerOrderRepository->findBy(['customer' => $request->get('id')]);

        if ($orders != null)
        {
            foreach ($orders as $order)
            $response[$order->getId()]['date'] = $order->getDate();
            $response[$order->getId()]['ammount'] = $order->getAmmount();
            $response[$order->getId()]['invoice'] = $order->getInvoice();
            $menu = $customerOrderRepository->findMenuByOrder();
            $response[$order->getId()]['menu'] = $menu->getName();

        }else{
            $response = [];
        }

        $serializedResponse = $serializer->serialize($response, 'json');
        return new JsonResponse($serializedResponse, 200, [], true);
    }

}