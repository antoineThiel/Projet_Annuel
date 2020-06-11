<?php


namespace App\Controller;

use App\Entity\CustomerOrder;
use App\Entity\Franchisee;
use App\Entity\FranchiseeMenu;
use App\Repository\CustomerOrderRepository;
use App\Repository\CustomerRepository;
use App\Repository\FranchiseeArticleRepository;
use App\Repository\FranchiseeMenuRepository;
use App\Repository\FranchiseeRepository;
use App\Repository\MenuToArticleRepository;
use App\Repository\TruckPositionRepository;
use Mpdf\Tag\S;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Constraints\Json;

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
    public function getFranchise(FranchiseeRepository $franchiseeRepository, TruckPositionRepository $positionRepository, SerializerInterface $serializer)
    {
        $entityManager = $this->getDoctrine()->getManager();
        $franchisee = $entityManager->getRepository('App\Entity\Franchisee');
        $franchi = $franchisee->findAll();
        $i = 0;
        if ($franchi != null)
        {
            foreach ($franchi as $franchis) {
                $response[$i]['id'] = $franchis->getId();
                $response[$i]['lastname'] = $franchis->getLastName();
                $response[$i]['firstname'] = $franchis->getFirstName();
                if($franchis->getTruck() != null) {
                    $pos = $positionRepository->findById($franchis->getTruck()->getId());
                    if($pos != null) {
                        $response[$i] ['adresse'] = $pos->getAddress();
                        $response[$i]['city'] = $pos->getCity();
                    } else {
                        $response[$i]['position']= null;
                        $response[$i]['city'] = null;
                    }
                }else{
                    $response[$i]['position']= null;
                    $response[$i]['city'] = null;
                }
                $i ++;
            }
        }else{
            $response = [];
        }

        $serializedResponse = $serializer->serialize($response, 'json');

        return new JsonResponse($serializedResponse, 200, [], true);
    }

    /**
     *@Route("/getfranchiseeinfo/{id}", name="franchiseeinfo", methods={"GET"})
     */
    public function getFranchiseeInfo(FranchiseeRepository $franchiseeRepository,SerializerInterface $serializer, Request $request){
        $entityManager = $this->getDoctrine()->getManager();
        $franchisee = $entityManager->getRepository('App\Entity\Franchisee');
        $franchi = $franchisee->find($request->get('id'));
        $menus = $franchi->getFranchiseeMenus();
        $i = 0;
        $j = 0;
        if ($franchi != null && $menus != null) {
                $response['lastname'] = $franchi->getLastName();
                $response['firstname'] = $franchi->getFirstName();
                $menus = $franchi->getFranchiseeMenus();
                foreach ($menus as $menu) {
                    $response['menu'][$i]['id'] = $menu->getId();
                    $response['menu'][$i]['name'] = $menu->getName();
                    $response['menu'][$i]['price'] = $menu->getPrice();
                    $i++;
                }
                $articles = $franchi->getFranchiseeArticles();
                foreach ($articles as $article){
                    $response['article'][$j]['id'] = $article->getId();
                    $response['article'][$j]['name'] = $article->getName();
                    $response['article'][$j]['price'] = $article->getPrice();
                    $response['article'][$j]['unit'] = $article->getUnit();
                    $response['article'][$j]['quantity'] = $article->getQuantity();

                    $j++;
                }
        }else{
            $response = [];
        }

        $serializedResponse = $serializer->serialize($response, 'json');
        return new JsonResponse($serializedResponse, 200, [], true);
    }

    /**
     * @Route("/getmenu/{id}", name="getmenu", methods={"GET"})
     */
    public function getMenu(MenuToArticleRepository $menuToArticleRepository , FranchiseeMenuRepository $franchiseeMenuRepository, FranchiseeArticleRepository $franchiseeArticleRepository, SerializerInterface $serializer,Request $request ){
        $em = $this->getDoctrine()->getManager();
        $customerOrderRepository = $em->getRepository('App\Entity\MenuToArticle');
        $menus = $customerOrderRepository->findBy(['franchiseeMenu' => $request->get('id')]);
        $i = 0;
        if($menus != null){
                $menuinfo = $menus[$i]->getFranchiseeMenu();
                $response['nom'] = $menuinfo->getName();
                $response['price'] = $menuinfo->getPrice();
                foreach ($menus as $menu) {
                    $articleinfo = $menu->getFranchiseeArticle();
                    $response['article'][$i]['nom'] = $articleinfo->getName();
                    $response['article'][$i]['price'] = $articleinfo->getPrice();
                    $response['article'][$i]['unit'] = $articleinfo->getUnit();
                    $response['article'][$i]['quantity'] = $articleinfo->getQuantity();
                    $i++;
                }
        }else{
            $response = [];
        }

        $serializedResponse = $serializer->serialize($response, 'json');
        return new JsonResponse($serializedResponse, 200, [], true);
    }

    /**
     * @Route("/getarticle/{id}", name="getarticle", methods={"GET"})
     */
    public function getArticle(FranchiseeArticleRepository $franchiseeArticleRepository, SerializerInterface $serializer, Request $request){
        $em = $this->getDoctrine()->getManager();
        $repository = $em->getRepository('App\Entity\FranchiseeArticle');
        $article = $repository->find($request->get('id'));

        if($article != null){
            $response['nom'] = $article->getName();
            $response['price'] = $article->getPrice();
            $response['unit'] = $article->getUnit();
            $response['quantity'] = $article->getQuantity();
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
        $i =0;
        if ($orders != null)
        {
            foreach ($orders as $order) {
                $response['order'][$i]['date'] = $order->getDate();
                $response['order'][$i]['ammount'] = $order->getAmmount();
                $response['order'][$i]['invoice'] = $order->getInvoice();
                $menus = $order->getMenues();
                foreach ($menus as $menu) {
                    $response['order'][$i]['menu'] = $menu->getName();
                    //TODO A finir
                }
            }
        }else{
            $response = [];
        }

        $serializedResponse = $serializer->serialize($response, 'json');
        return new JsonResponse($serializedResponse, 200, [], true);
    }

    /**
     * @Route("/addCart", name="addcart", methods={"POST"})
     */
    public function addCart(Request $request, SerializerInterface $serializer) : JsonResponse
    {
        $decoded = json_decode($request->getContent(), true);

        $em = $this->getDoctrine()->getManager();
        $orderRep = $em->getRepository('App\Entity\CustomerOrder');
        $articleRepository = $em->getRepository('App\Entity\FranchiseeArticle');
        $article = $articleRepository->findOneBy(['id' => $decoded['pid']]);
        $order = $orderRep->findOneBy(['id' => $decoded['oid']]);
        $order->addArticle($article);


        $response = $serializer->serialize($data, 'json');
        return new JsonResponse($response, 200, [], true);
    }

    /**
     * @Route("/newOrder/{id}", name="newOrder", methods={"GET"})
     */
    public function newOrder(Request $request, SerializerInterface $serializer) : JsonResponse
    {
        $em = $this->getDoctrine()->getManager();
        $customerRep = $em->getRepository('App\Entity\Customer');
        $idCustomer = $request->get("id");
        $customer = $customerRep->findOneBy(['id' => $idCustomer]);
        $order = new CustomerOrder();
        $order->setCustomer($customer);
        $order->setDate(new \DateTime('now'));
        $order->setAmmount(0);

        $em->persist($order);
        $em->flush();

        $response['id'] = $order->getId();
        $response = $serializer->serialize($response, 'json');

        return new JsonResponse($response, 200, [], true);

    }
}