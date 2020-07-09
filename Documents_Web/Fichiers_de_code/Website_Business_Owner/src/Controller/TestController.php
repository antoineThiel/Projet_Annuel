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
     * @Route("/getfranchisee/{lng}/{lat}", name="getFranchisee", methods={"GET"})
     */
    public function getFranchise(Request $request, TruckPositionRepository $positionRepository, SerializerInterface $serializer)
    {
        $entityManager = $this->getDoctrine()->getManager();
        $franchisee = $entityManager->getRepository('App\Entity\Franchisee');
        $franchi = $franchisee->findAll();
        $i = 0;
        $client['lat'] = $request->get("lat");
        $client['lng'] = $request->get("lng");
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
                            $response[$i]["distance"] = $this->getDistance($pos->getAddress()." ".$pos->getCity(), $client);
                            $response[$i]["address"] = $pos->getAddress();
                            $response[$i]["city"] = $pos->getCity();
                        }
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
                    if ($menu->getEvent() != null)
                    {
                        $response['menu'][$i]['reduc'] = "1";
                        $response['menu'][$i]['price'] = $menu->getPrice() * (1 - $menu->getEvent()->getReduction());
                    }else{
                        $response['menu'][$i]['reduc'] = "0";
                        $response['menu'][$i]['price'] = $menu->getPrice();
                    }
                    $i++;
                }
                $articles = $franchi->getFranchiseeArticles();
                foreach ($articles as $article){
                    if ($article->getStock() != 0) {
                        $response['article'][$j]['id'] = $article->getId();
                        $response['article'][$j]['name'] = $article->getName();
                        if ($article->getEvent() != null)
                        {
                            $response['article'][$j]['reduc'] = "1";
                            $response['article'][$j]['price'] = $article->getPrice() * (1 -  $article->getEvent()->getReduction());
                        }else {
                            $response['article'][$j]['reduc'] = "0";
                            $response['article'][$j]['price'] = $article->getPrice();
                        }

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
                if ($menu->getEvent() != null){
                    $response['price'] = $menu->getPrice() * (1-$menu->getEvent()->getReduction());
                }else{
                    $response['price'] = $menu->getPrice();
                }
                $response['stock'] = $menu->getStock();
                $articles = $menu->getMenuToArticles();
                $i = 0;
                foreach ($articles as $article) {
                    $response['article'][$i]['id'] = $article->getFranchiseeArticle()->getId();
                    $response['article'][$i]['nom'] = $article->getFranchiseeArticle()->getName();
                    $response['article'][$i]['price'] = $article->getFranchiseeArticle()->getPrice();
                    $response['article'][$i]['unit'] = $article->getFranchiseeArticle()->getUnit();
                    $response['article'][$i]['quantity'] = $article->getFranchiseeArticle()->getQuantity();
                    $response['article'][$i]['reduc'] = "0";
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
            if ($article->getEvent() != null)
            {
                $response['price'] = $article->getPrice() * (1 - $article->getEvent()->getReduction());
            }else{
                $response['price'] = $article->getPrice();
            }
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
        if (!$articles->isEmpty())
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

        $menus = $order->getMenues();
        if (!$menus->isEmpty())
        {
            $i=0;
            foreach ($menus as $menu) {
                $response['menus'][$i]['id'] = $menu->getId();
                $response['menus'][$i]['name'] = $menu->getName();
                $response['menus'][$i]['quantity'] = $menu->getQuantity();
                $response['menus'][$i]['price'] = $menu->getPrice();
                $i++;
            }
        }


        $response['fidelity'] = $customer->getFidelity();
        $response = $serializer->serialize($response, 'json');
        return new JsonResponse($response, 200, [], true);
    }

    /**
     * @Route("/deleteBasketArticle/{id}/{idOrder}/{name}", name="deleteArticle", methods={"GET"})
     */
    public function deleteFromBasket(Request $request, SerializerInterface $serializer) : JsonResponse
    {
        $em = $this->getDoctrine()->getManager();
        $orderRep = $em->getRepository('App\Entity\CustomerOrder');
        $customerArticleRepo = $em->getRepository('App\Entity\CustomerArticle');
        $article = $customerArticleRepo->findOneBy(['id' => $request->get("id"), 'name' => $request->get("name")]);
        if ($article == null){
            $article = $em->getRepository('App\Entity\CustomerMenu')->findOneBy(['id' => $request->get('id'), 'name' => $request->get("name")]);
        }
        $qty = $article->getQuantity();
        if ($article instanceof CustomerArticle){
            $franchiseeArticleRep = $em->getRepository('App\Entity\FranchiseeArticle');
            $franchiseeArticle = $franchiseeArticleRep->findOneBy(['name' => $article->getName()]);
            $franchiseeArticle->setStock($franchiseeArticle->getStock() + $qty);
            $em->persist($franchiseeArticle);
            $em->remove($article);
        }
        if ($article instanceof CustomerMenu){
            $franchiseeMenuRep = $em->getRepository('App\Entity\FranchiseeMenu');
            $franchiseeMenu = $franchiseeMenuRep->findOneBy(['name' => $article->getName()]);
            $franchiseeMenu->setStock($franchiseeMenu->getStock() + $qty);
            $em->persist($franchiseeMenu);
            $em->remove($article);
        }
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
        $menus = $order->getMenues();
        foreach ($articles as $article){
            $qty = $article->getQuantity();
            $franchiseeArticleRep = $em->getRepository('App\Entity\FranchiseeArticle');
            $franchiseeArticle = $franchiseeArticleRep->findOneBy(['name' => $article->getName()]);
            $franchiseeArticle->setStock($franchiseeArticle->getStock() + $qty);
            $em->persist($franchiseeArticle);
            $em->remove($article);
            $em->flush();
        }

        foreach ($menus as $menu){
            $qty = $menu->getQuantity();
            $franchiseeMenuRep = $em->getRepository('App\Entity\FranchiseeMenu');
            $franchiseeMenu = $franchiseeMenuRep->findOneBy(['name' => $article->getName()]);
            $franchiseeMenu->setStock($franchiseeMenu->getStock() + $qty);
            $em->persist($franchiseeMenu);
            $em->remove($menu);
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
     * @Route("/finalOrder/{id}/{idFr}", name="finalOrder", methods={"GET"})
     */
    public function finalOrder(Request $request, SerializerInterface $serializer) : JsonResponse
    {
        $idOrder  = $request->get("id");
        $em = $this->getDoctrine()->getManager();
        $orderRep = $em->getRepository('App\Entity\CustomerOrder');
        $franchiseeRe = $em->getRepository('App\Entity\Franchisee');
        $franchisee = $franchiseeRe->findOneBy(['id' => $request->get("idFr")]);
        $customerRep = $em->getRepository('App\Entity\Customer');
        $order = $orderRep->findOneBy(['id' => $idOrder]);
        $order->setFranchisee($franchisee);
        $customer = $customerRep->findOneBy(['id' => $order->getCustomer()]);
        $articles = $order->getArticles();

        $price = 0;
        foreach ($articles as $article)
        {
            $price+=$article->getPrice();
        }
        $menus = $order->getMenues();
        foreach ($menus as $menu)
        {
            $price+=$menu->getPrice();
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
     * @Route("/finalOrderFidelity/{id}/{reduc}/{idFr}", name="finalOrderFid", methods={"GET"})
     */
    public function finalOrderFidelity(Request $request, SerializerInterface $serializer) : JsonResponse
    {
        $idOrder  = $request->get("id");
        $em = $this->getDoctrine()->getManager();
        $orderRep = $em->getRepository('App\Entity\CustomerOrder');
        $customerRep = $em->getRepository('App\Entity\Customer');
        $franchiseeRe = $em->getRepository('App\Entity\Franchisee');
        $franchisee = $franchiseeRe->findOneBy(['id' => $request->get("idFr")]);
        $order = $orderRep->findOneBy(['id' => $idOrder]);

        $customer = $customerRep->findOneBy(['id' => $order->getCustomer()]);
        $customer->setFidelity($customer->getFidelity() - $request->get("reduc"));
        $articles = $order->getArticles();
        $price = 0;
        foreach ($articles as $article)
        {
            $price+=$article->getPrice();
        }

        $menus = $order->getMenues();
        foreach ($menus as $menu)
        {
            $price+=$menu->getPrice();
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

    /**
     * @Route("/getEvents/{lng}/{lat}", name="getEvent", methods={"GET"})
     */
    public function getFranchiseeWithEvents(Request $request, SerializerInterface $serializer) : JsonResponse
    {
        $em = $this->getDoctrine()->getManager();
        $franchiseeRep = $em->getRepository('App\Entity\Franchisee');
        $positionRepository = $em->getRepository('App\Entity\TruckPosition');
        $franchisees = $franchiseeRep->findAll();
        $client['lat'] = $request->get("lat");
        $client['lng'] = $request->get("lng");
        if ($franchisees != null)
        {
            $i=0;
            foreach ($franchisees as $franchisee) {
                if (!$franchisee->getEvent()->isEmpty())
                {
                    if ($franchisee->getTruck() != null)
                    {
                        $response[$i]['id'] = $franchisee->getId();
                        $response[$i]['lastname'] = $franchisee->getLastName();
                        $response[$i]['firstname'] = $franchisee->getFirstName();
                        $pos = $positionRepository->findById($franchisee->getTruck()->getId());
                        if($pos != null) {
                            $response[$i]['distance'] = $this->getDistance($pos->getAddress()." ".$pos->getCity(), $client);
                            $response[$i]["address"] = $pos->getAddress();
                            $response[$i]["city"] = $pos->getCity();
                        }
                        $i++;
                    }
                }
            }
        }else{
            $response = [];
        }

        $response = $serializer->serialize($response, "json");
        return new JsonResponse($response, 200, [], true);
    }

    public function getDistance(string $address, array $client)
    {
        $address = str_replace(" ", "%20", $address);
        $url = "https://maps.google.com/maps/api/geocode/json?address=".$address."&sensor=false&key=AIzaSyDrlSV5EIbonFEhtydrXFwQFDoizK8Y0H4";
        $results = file_get_contents($url);
        $results = json_decode($results, true);
        $location = $results['results'][0]['geometry']['location'];
        $lat = $location['lat'];
        $lng = $location['lng'];

        $franchisee['lat'] = $lat;
        $franchisee['lng'] = $lng;
        $R = 6378137;
        $dLat = $this->rad($client['lat'] - $franchisee['lat']);
        $dLong = $this->rad($client['lng'] - $franchisee['lng']);
        $a = sin($dLat/2) * sin($dLat/2) + cos($this->rad($franchisee['lat'])) * cos($this->rad($client['lat'])) * sin($dLong/2) * sin($dLong/2);
        $c = 2 * atan2(sqrt($a), sqrt(1-$a));
        return $R * $c;
    }

    public function rad($pos)
    {
        return $pos * pi()/180;
    }
}