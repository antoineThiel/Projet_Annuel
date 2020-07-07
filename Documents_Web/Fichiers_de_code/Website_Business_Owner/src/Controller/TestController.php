<?php


namespace App\Controller;

use App\Entity\Customer;
use App\Entity\CustomerArticle;
use App\Entity\CustomerMenu;
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
        $custo = $customerRep->findOneBy(['mail' => $login, 'password' => $password]);

        if ($custo !== null){
            $response['val'] = true;
            $response['id'] = $custo->getId();
            $response['mail'] = $custo->getMail();
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
                if (!$franchis->getFranchiseeArticles()->isEmpty() or !$franchis->getFranchiseeMenus()->isEmpty())
                {
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
                    if ($article->getStock() != 0) {
                        $response['article'][$j]['id'] = $article->getId();
                        $response['article'][$j]['name'] = $article->getName();
                        $response['article'][$j]['price'] = $article->getPrice();
                        $response['article'][$j]['unit'] = $article->getUnit();
                        $response['article'][$j]['quantity'] = $article->getQuantity();

                        $j++;
                    }
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
    public function getMenu(SerializerInterface $serializer,Request $request ){
        $em = $this->getDoctrine()->getManager();
        $franchiseeMenuRepository = $em->getRepository('App\Entity\FranchiseeMenu');
        $menu = $franchiseeMenuRepository->findOneBy(['id' => $request->get('id')]);
        $i = 0;
        if($menu != null){
                $response['nom'] = $menu->getName();
                $response['price'] = $menu->getPrice();
                $response['stock'] = $menu->getStock();
                $articles = $menu->getMenuToArticles();
                $i = 0;
                foreach ($articles as $article) {
                    dump($article->getFranchiseeArticle()->getName());
                    $response['article'][$i]['id'] = $article->getFranchiseeArticle()->getId();
                    $response['article'][$i]['nom'] = $article->getFranchiseeArticle()->getName();
                    $response['article'][$i]['price'] = $article->getFranchiseeArticle()->getPrice();
                    $response['article'][$i]['unit'] = $article->getFranchiseeArticle()->getUnit();
                    $response['article'][$i]['quantity'] = $article->getFranchiseeArticle()->getQuantity();
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
            $response['stock'] = $article->getStock();
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
        }else{
            $response = [];
        }

        $serializedResponse = $serializer->serialize($response, 'json');
        return new JsonResponse($serializedResponse, 200, [], true);

    }

//    /**
//     * @Route("/getorder/{id}", name="order" , methods={"GET"})
//     */
//    public function getOrder(CustomerOrderRepository $customerOrderRepository,FranchiseeMenuRepository $franchiseeMenuRepository, SerializerInterface $serializer, Request $request)
//    {
//
//        $em = $this->getDoctrine()->getManager();
//        $customerOrderRepository = $em->getRepository('App\Entity\CustomerOrder');
//        $orders = $customerOrderRepository->findBy(['customer' => $request->get('id')]);
//        $i =0;
//        if ($orders != null)
//        {
//            foreach ($orders as $order) {
//                $response['order'][$i]['date'] = $order->getDate();
//                $response['order'][$i]['ammount'] = $order->getAmmount();
//                $response['order'][$i]['invoice'] = $order->getInvoice();
//                $menus = $order->getMenues();
//                foreach ($menus as $menu) {
//                    $response['order'][$i]['menu'] = $menu->getName();
//                    //TODO A finir
//                }
//            }
//        }else{
//            $response = [];
//        }
//
//        $serializedResponse = $serializer->serialize($response, 'json');
//        return new JsonResponse($serializedResponse, 200, [], true);
//    }

    /**
     * @Route("/addCart", name="addcart", methods={"POST"})
     */
    public function addCart(Request $request, SerializerInterface $serializer) : JsonResponse
    {
        $decoded = json_decode($request->getContent(), true);

        $em = $this->getDoctrine()->getManager();
        $orderRep = $em->getRepository('App\Entity\CustomerOrder');
        $articleRepository = $em->getRepository('App\Entity\FranchiseeArticle');
        $articleFranchisee = $articleRepository->findOneBy(['id' => $decoded['pid']]);
        $order = $orderRep->findOneBy(['id' => $decoded['oid']]);

        $oldArticles = $order->getArticles();
        $i = 0;
        foreach ($oldArticles as $oldArticle)
        {
            if ($oldArticle->getName() === $articleFranchisee->getName())
            {
                $oldQuantity = $oldArticle->getQuantity();
                $addedQty = $decoded['pqty'];
                $newQty = $oldQuantity + $addedQty;
                $oldArticle->setQuantity($newQty);

                $oldPrice = $oldArticle->getPrice();
                $addedPrice = $decoded['price'];
                $newPrice = $oldPrice + $addedPrice;
                $oldArticle->setPrice($newPrice);
                $em->persist($oldArticle);
                $i = 1;
            }
        }
        if ($i == 0)
        {
            $article = new CustomerArticle();
            $article->setName($articleFranchisee->getName());
            $article->setQuantity($decoded['pqty']);
            $article->setCustomer($order->getCustomer());
            $article->setCustomerOrder($order);
            $article->setPrice($decoded['price']);
            $order->addArticle($article);
            $articleFranchisee->setStock($articleFranchisee->getStock() - $decoded['pqty']);
            $em->persist($article);
        }


        $em->persist($order);
        $em->persist($articleFranchisee);
        $em->flush();

        $response['status'] = '200';
        $response = $serializer->serialize($response, 'json');
        return new JsonResponse($response, 200, [], true);
    }

    /**
     * @Route("/addCartMenu", name="addcartmenu", methods={"POST"})
     */
    public function addCartMenu(Request $request, SerializerInterface $serializer) : JsonResponse
    {
        $decoded = json_decode($request->getContent(), true);

        $em = $this->getDoctrine()->getManager();
        $orderRep = $em->getRepository('App\Entity\CustomerOrder');
        $menuRepository = $em->getRepository('App\Entity\FranchiseeMenu');
        $menu = $menuRepository->findOneBy(['id' => $decoded['pid']]);
        $order = $orderRep->findOneBy(['id' => $decoded['oid']]);

        $oldMenus = $order->getMenues();
        $i = 0;
        foreach ($oldMenus as $oldMenu)
        {
            if ($oldMenu->getName() === $menu->getName())
            {
                $oldQuantity = $oldMenu->getQuantity();
                $addedQty = $decoded['pqty'];
                $newQty = $oldQuantity + $addedQty;
                $oldMenu->setQuantity($newQty);

                $oldPrice = $oldMenu->getPrice();
                $addedPrice = $decoded['price'];
                $newPrice = $oldPrice + $addedPrice;
                $oldMenu->setPrice($newPrice);
                $em->persist($oldMenu);
                $i = 1;
            }
        }
        if ($i == 0)
        {
            $article = new CustomerMenu();
            $article->setName($menu->getName());
            $article->setQuantity($decoded['pqty']);
            $article->setCustomer($order->getCustomer());
            $article->setCustomerOrder($order);
            $article->setPrice($decoded['price']);
            $order->addMenue($article);
            $menu->setStock($menu->getStock() - $decoded['pqty']);
            $em->persist($article);
        }


        $em->persist($order);
        $em->persist($menu);
        $em->flush();

        $response['status'] = '200';
        $response = $serializer->serialize($response, 'json');
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

    //MODIFIER
    /**
     * @Route("/getCurrentOrder/{id}/{idCusto}", name="getOrder", methods={"GET"})
     */
    public function getOrder(Request $request, SerializerInterface $serializer) : JsonResponse
    {
        $em = $this->getDoctrine()->getManager();
        $customerOrderRepository = $em->getRepository('App\Entity\CustomerOrder');
        $customerRepository = $em->getRepository('App\Entity\Customer');
        $customer = $customerRepository->find($request->get("idCusto"));
        $order = $customerOrderRepository->findOneBy(['id' => $request->get('id'), 'customer' => $customer]);


        if ($order == null) {
            $response["order"] = "nope";
            $response = $serializer->serialize($response, 'json');
            return new JsonResponse($response, 200, [], true);
        }


        if ( $order->getMenues()->isEmpty() and $order->getArticles()->isEmpty()){
            $response["order"] = "nope";
            $response = $serializer->serialize($response, 'json');
            return new JsonResponse($response, 200, [], true);
        }

        $response['order'] = $order->getId();
        $articles = $order->getArticles();
        if ($articles != null)
        {
            $i=0;
            foreach ($articles as $article)
            {
                $response['article'][$i]['id'] = $article->getId();
                $response['article'][$i]['name'] = $article->getName();
                $response['article'][$i]['quantity'] = $article->getQuantity();
                $response['article'][$i]['price'] = $article->getPrice();
                $i++;
            }
        }
        $response['fidelity'] = $customer->getFidelity();
        $response = $serializer->serialize($response, 'json');
        return new JsonResponse($response, 200, [], true);
    }

    /**
     * @Route("/deleteBasketArticle/{id}/{idOrder}", name="deleteArticle", methods={"GET"})
     */
    public function deleteFromBasket(Request $request, SerializerInterface $serializer) : JsonResponse
    {
        $em = $this->getDoctrine()->getManager();
        $orderRep = $em->getRepository('App\Entity\CustomerOrder');
        $customerArticleRepo = $em->getRepository('App\Entity\CustomerArticle');
        $article = $customerArticleRepo->findOneBy(['id' => $request->get("id")]);
        $qty = $article->getQuantity();
        $franchiseeArticleRep = $em->getRepository('App\Entity\FranchiseeArticle');
        $franchiseeArticle = $franchiseeArticleRep->findOneBy(['name' => $article->getName()]);
        $franchiseeArticle->setStock($franchiseeArticle->getStock() + $qty);

        $em->persist($franchiseeArticle);
        $em->remove($article);
        $em->flush();

        $order = $orderRep->findOneBy(['id' => $request->get("idOrder")]);
        $articles = $order->getArticles();
        ($articles->isEmpty()) ?
        $response["articles"] = "empty" :
        $response["articles"] = "notEmpty";

        $response = $serializer->serialize($response, 'json');
        return new JsonResponse($response, 200, [], true);
    }

    /**
     * @Route("/deleteBasket/{id}", name="deleteBasket", methods={"GET"})
     */
    public function deleteBasket(Request $request, SerializerInterface $serializer) : JsonResponse
    {
        $em = $this->getDoctrine()->getManager();
        $orderRep = $em->getRepository('App\Entity\CustomerOrder');
        $order = $orderRep->findOneBy(['id' => $request->get("id")]);
        $customer = $order->getCustomer();
        $articles = $order->getArticles();
        foreach ($articles as $article){
            $em->remove($article);
            $em->flush();
        }

        $em->remove($order);
        $em->flush();

        $newOrder = new CustomerOrder();
        $newOrder->setCustomer($customer);
        $newOrder->setDate(new \DateTime('now'));
        $newOrder->setAmmount(0);

        $em->persist($newOrder);
        $em->flush();

        $response["order"] = $newOrder->getId();
        $response = $serializer->serialize($response, 'json');
        return new JsonResponse($response, 200, [], true);
    }

    /**
     * @Route("/finalOrder/{id}", name="finalOrder", methods={"GET"})
     */
    public function finalOrder(Request $request, SerializerInterface $serializer) : JsonResponse
    {
        $idOrder  = $request->get("id");
        $em = $this->getDoctrine()->getManager();
        $orderRep = $em->getRepository('App\Entity\CustomerOrder');
        $customerRep = $em->getRepository('App\Entity\Customer');
        $order = $orderRep->findOneBy(['id' => $idOrder]);
        $customer = $customerRep->findOneBy(['id' => $order->getCustomer()]);
        $articles = $order->getArticles();
        $price = 0;
        foreach ($articles as $article)
        {
            $price+=$article->getPrice();
        }

        if ($price >=10){
            $fid = $price / 10;
            $customer->setFidelity($customer->getFidelity() + $fid);
        }
        $order->setValidate(true);
        $order->setAmmount($price);
        $em->persist($order);
        $em->persist($customer);
        $em->flush();
        $response["stat"] = "200";
        $response = $serializer->serialize($response,'json');
        return new JsonResponse($response, 200, [], true);
    }

    /**
     * @Route("/finalOrderFidelity/{id}/{reduc}", name="finalOrderFid", methods={"GET"})
     */
    public function finalOrderFidelity(Request $request, SerializerInterface $serializer) : JsonResponse
    {
        $idOrder  = $request->get("id");
        $em = $this->getDoctrine()->getManager();
        $orderRep = $em->getRepository('App\Entity\CustomerOrder');
        $customerRep = $em->getRepository('App\Entity\Customer');
        $order = $orderRep->findOneBy(['id' => $idOrder]);

        $customer = $customerRep->findOneBy(['id' => $order->getCustomer()]);
        $customer->setFidelity($customer->getFidelity() - $request->get("reduc"));
        $articles = $order->getArticles();
        $price = 0;
        foreach ($articles as $article)
        {
            $price+=$article->getPrice();
        }
        $price -= $request->get("reduc");
        if ($price >= 10)
        {
            $fid = $price / 10;
            $customer->setFidelity($customer->getFidelity() + $fid);
        }
        $order->setValidate(true);
        $order->setAmmount($price);
        $em->persist($order);
        $em->persist($customer);
        $em->flush();
        $response["stat"] = "200";
        $response = $serializer->serialize($response,'json');
        return new JsonResponse($response, 200, [], true);
    }

    /**
     * @Route("/signinCustomer", name="signinCustomer", methods={"POST"})
     */
    public function signinCustomer(Request $request, SerializerInterface $serializer) : JsonResponse
    {
        $decoded = json_decode($request->getContent(), true);
        $em = $this->getDoctrine()->getManager();
        $customerRep = $em->getRepository('App\Entity\Customer');

        $customer =$customerRep->findOneBy(['mail' => $decoded['email']]);
        if ($customer != null)
        {
            $response['status'] = "exist";
            $response = $serializer->serialize($response, 'json');
            return new JsonResponse($response, 200, [], true);
        }

        $customer = new Customer();
        $customer->setName($decoded['firstName']);
        $customer->setLastname($decoded['lastName']);
        $customer->setMail($decoded['email']);
        $customer->setPassword($decoded['password']); // Securiser
        $customer->setFidelity(0);

        $em->persist($customer);
        $em->flush();


        $customer = $customerRep->findOneBy(['name' => $decoded['firstName'], 'lastname' => $decoded['lastName'], 'mail' => $decoded['email']]);
        if ($customer == null){
            $response['status'] = "500";
            $response = $serializer->serialize($response, 'json');
            return new JsonResponse($response, 200, [], true);
        }

        $response["status"] = "ok";
        $response = $serializer->serialize($response, 'json');
        return new JsonResponse($response, 200, [], true);
    }

}