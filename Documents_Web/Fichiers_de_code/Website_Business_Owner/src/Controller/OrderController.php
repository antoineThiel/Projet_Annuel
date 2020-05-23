<?php

namespace App\Controller;

use App\Entity\Dish;
use App\Entity\Invoice;
use App\Entity\OrderByFranchisee;
use App\Entity\OrderDish;
use App\Entity\OrderProduct;
use App\Entity\Product;
use App\Entity\WarehouseDish;
use App\Entity\WarehouseProduct;
use App\Form\OrderFirstType;
use App\Form\OrderType;
use App\Repository\FranchiseeRepository;
use App\Repository\OrderByFranchiseeRepository;
use App\Repository\ProductRepository;
use App\Repository\WarehouseProductRepository;
use App\Repository\WarehouseRepository;
use Mpdf\Mpdf;
use Stripe\Exception\ApiErrorException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\SerializerInterface;


class OrderController extends AbstractController
{
    /**
     * @Route("/admin/order", name="order_index", methods={"GET"})
     */
    public function index(OrderByFranchiseeRepository $orderRepository): Response
    {
        return $this->render('order/index.html.twig', [
            'orders' => $orderRepository->findAll(),
        ]);
    }

    /**
     * @Route({
     *     "fr": "/fr/commander/nouvelle",
     *     "en": "/en/order/new",
     *     "es": "/es/ordene/nueva"
     *     }, name="order_new_warehouse", methods={"GET", "POST"})
     */
    public function newWarehouse(Request $request)
    {
        $order = new OrderByFranchisee();
        $form = $this->createForm(OrderFirstType::class, $order);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $order->setDate(New \DateTime());
            $order->setAmmount(0);
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($order);
            $entityManager->flush();

           return $this->redirectToRoute('order_new', ['id' => $order->getId()]);
        }
        return $this->render('order/firstNew.html.twig', [
            'order' => $order,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route({
     *     "fr": "/fr/commander/new/{id}",
     *     "en": "/en/order/new/{id}",
     *     "es": "/es/ordene/new/{id}"
     * }, name="order_new", methods={"GET","POST"})
     */
    public function new(Request $request, OrderByFranchisee $order): Response
    {
        $entityManager = $this->getDoctrine()->getManager();
        $wpRep = $entityManager->getRepository(WarehouseProduct::class);
        $wdRep = $entityManager->getRepository(WarehouseDish::class);
        $pRep = $entityManager->getRepository(Product::class);
        $dRep = $entityManager->getRepository(Dish::class);
        $list = [];
        $dishes = [];
        $products = [];
        $productsT = [];
        $dishT = [];

        $list['products'] = $wpRep->findByWarehouseAndQuantityOver0($order->getWarehouse()->getId());
        $list['dishes'] = $wdRep->findByWarehouseAndQuantityOver0($order->getWarehouse()->getId());

        foreach ($list['products'] as $product){
            $products[] = $product->getProduct();
            $categories[] = $product->getProduct()->getCategory()->getName();
        }

        $categories = array_unique($categories, SORT_REGULAR);

        foreach ($categories as $category)
        {
            $trueCategories[] = $category;
        }


        foreach ($list['dishes'] as $dish){
            $dishes[] = $dish->getDish();
        }

        if ($products != null){
            foreach ($products as $product){
                $productsT[] = $pRep->findByIdAndLocale($request->getLocale(), $product->getId());
            }
        }

        if ($dishes != null){
            foreach ($dishes as $dish){
                $dishT[] = $dRep->findByIdAndLocale($request->getLocale(), $dish->getId());
            }
        }

        return $this->render('order/products.html.twig', [
            'order' => $order,
            'list' => $list,
            'productsT' => $productsT,
            'dishT' => $dishT,
            'categories' => $trueCategories
        ]);
    }

    /**
     * @Route("/order/showquantity", name="order_quantity", methods={"GET", "POST"})
     */
    public function order_show(Request $request): Response
    {
        $quantity = $request->get('quantity');
        $em = $this->getDoctrine()->getManager();
        $orderRep = $em->getRepository(OrderByFranchisee::class);
        $order = $orderRep->findOneBy(['id' => $quantity[0]]);

        $productRep = $em->getRepository(Product::class);
        $dishRep = $em->getRepository(Dish::class);
        $product = $productRep->findOneBy(['name' => $quantity[1]]);
        if ($product == null){
            $product = $dishRep->findOneBy(['name' => $quantity[1]]);
        }
        if ($product instanceof Product) {
            $orRep = $em->getRepository(OrderProduct::class);
            $wrProductRep = $em->getRepository(WarehouseProduct::class);
            $wrProduct = $wrProductRep->findOneBy(['product' => $product]);
            $op = $orRep->findOneBy(['product' => $wrProduct, 'order'=>$order]);
            if ($op == null) {
                $orderProduct = new OrderProduct();
                $orderProduct->setOrder($order);
                $orderProduct->setPrice($quantity[2]);
                $orderProduct->setQuantity($quantity[3]);
                $orderProduct->setProduct($wrProduct);
                $wrProduct->setQuantity($wrProduct->getQuantity() - $quantity[3]);
            }else{
                $orderProduct = $op;
                $orderProduct->setQuantity($quantity[3]);
                $wrProduct->setQuantity($wrProduct->getQuantity() - $quantity[3]);
            }
        }else{
            $orRep = $em->getRepository(OrderDish::class);
            $wrProductRep = $em->getRepository(WarehouseDish::class);
            $wrProduct = $wrProductRep->findOneBy(['dish' => $product]);
            $op = $orRep->findOneBy(['dish' => $wrProduct, 'order'=>$order]);
            if ($op == null) {
                $orderProduct = new OrderDish();
                $orderProduct->setOrder($order);
                $orderProduct->setPrice($quantity[2]);
                $orderProduct->setQuantity($quantity[3]);
                $orderProduct->setDish($wrProduct);
                $wrProduct->setQuantity($wrProduct->getQuantity() - $quantity[3]);
            }else{
                $orderProduct = $op;
                $orderProduct->setQuantity($quantity[3]);
                $wrProduct->setQuantity($wrProduct->getQuantity() - $quantity[3]);
            }
        }

        $em->persist($orderProduct);
        $em->flush();
        die();
    }



    /**
     * @Route("/order/removefrombasket", name="order_remove", methods={"GET", "POST"})
     */
    public function order_remove(Request $request): Response
    {
        $item = $request->get('items');
        $em = $this->getDoctrine()->getManager();
        $orderRep = $em->getRepository(OrderByFranchisee::class);
        $order = $orderRep->findOneBy(['id' => $item[0]]);

        $productRep = $em->getRepository(Product::class);
        $dishRep = $em->getRepository(Dish::class);
        $product = $productRep->findOneBy(['name' => $item[1]]);
        if ($product == null){
            $product = $dishRep->findOneBy(['name' => $item[1]]);
        }
        if ($product instanceof Product) {
            $orRep = $em->getRepository(OrderProduct::class);
            $wrProductRep = $em->getRepository(WarehouseProduct::class);
            $wrProduct = $wrProductRep->findOneBy(['product' => $product]);
            $op = $orRep->findOneBy(['product' => $wrProduct, 'order'=>$order]);
            if ($op != null){
                $wrProduct->setQuantity($wrProduct->getQuantity()+$op->getQuantity());
                $em->persist($wrProduct);
                $em->remove($op);
                $em->flush();
            }
        }else{
            $orRep = $em->getRepository(OrderDish::class);
            $wrProductRep = $em->getRepository(WarehouseDish::class);
            $wrProduct = $wrProductRep->findOneBy(['dish' => $product]);
            $op = $orRep->findOneBy(['dish' => $wrProduct, 'order' => $order]);
            if ($op != null){
                $wrProduct->setQuantity($wrProduct->getQuantity()+$op->getQuantity());
                $em->persist($wrProduct);
                $em->remove($op);
                $em->flush();
            }
        }
        die();
    }

    /**
     * @Route({
     *     "fr": "/fr/commander/recapitulatif/{id}",
     *     "en": "/en/order/recap/{id}",
     *     "es": "/es/ordene/recapitulativo/{id}"
     *     },name="order_recap", methods={"GET", "POST"})
     */
    public function order_recap(OrderByFranchisee $order): Response
    {
        $em = $this->getDoctrine()->getManager();
        $wrproductRep = $em->getRepository(WarehouseProduct::class);
        $wrdishRep = $em->getRepository(WarehouseDish::class);

        $dishes = $order->getOrderDish();
        $products = $order->getOrderProduct();

        $user = $this->getUser();

        $invoice = new Invoice();
        $invoice->setFranchisee($user);
        $invoice->setDate($order->getDate());
        $invoice->setLinkedOrder($order);
        $invoice->setAmmount($order->getTotalPrice());
        $order->setAmmount($order->getTotalPrice());
        $order->setInvoice($invoice);


        $html =
            '<html>
                <head>
                <style>
                body {font-family: sans-serif;
                    font-size: 10pt;
                }
                p {	margin: 0pt; }
                table.items {
                    border: 0.1mm solid #000000;
                }
                td { vertical-align: top; }
                .items td {
                    border-left: 0.1mm solid #000000;
                    border-right: 0.1mm solid #000000;
                }
                table thead td { background-color: #EEEEEE;
                    text-align: center;
                    border: 0.1mm solid #000000;
                    font-variant: small-caps;
                }
                .items td.blanktotal {
                    background-color: #EEEEEE;
                    border: 0.1mm solid #000000;
                    background-color: #FFFFFF;
                    border: 0mm none #000000;
                    border-top: 0.1mm solid #000000;
                    border-right: 0.1mm solid #000000;
                }
                .items td.totals {
                    text-align: right;
                    border: 0.1mm solid #000000;
                }
                .items td.cost {
                    text-align: "." center;
                }
                </style>
                </head>
                <body>
                <!--mpdf
                <htmlpageheader name="myheader">
                <table width="100%"><tr>
                <td width="50%" style="color:#0000BB; ">
                    <span style="font-weight: bold; font-size: 14pt;">DRIV\'N COOK</span>
                    <br />148 rue Legendre<br />75017 Paris<br />
                </td>
                <td width="50%" style="text-align: right;">
                    Order No.<br />
                    <span style="font-weight: bold; font-size: 12pt;">'.$order->getId().'</span>
                </td>
                </tr>
                </table>
                </htmlpageheader>
                <htmlpagefooter name="myfooter">
                <div style="border-top: 1px solid #000000; font-size: 9pt; text-align: center; padding-top: 3mm; ">
                Page {PAGENO} of {nb}
                </div>
                </htmlpagefooter>
                <sethtmlpageheader name="myheader" value="on" show-this-page="1" />
                <sethtmlpagefooter name="myfooter" value="on" />
                mpdf-->
                <div style="text-align: right">Date: '.date_format($order->getDate(),"j/m/Y" ).'</div>
                    <table width="100%" style="font-family: serif;" cellpadding="10">
                        <tr>
                            <td width="45%" style="border: 0.1mm solid #888888; ">
                                <span style="font-size: 7pt; color: #555555; font-family: sans;">SOLD TO:</span>
                                <br /><br />Truck number : '.$user->getTruck().'<br />'.ucwords($user->getLastName()).' '.ucwords($user->getFirstName()).'<br />
                            </td>
                            <td width="10%">&nbsp;</td>
                            <td width="45%" style="border: 0.1mm solid #888888;">
                                <span style="font-size: 7pt; color: #555555; font-family: sans;">WAREHOUSE</span>
                                <br /><br />'.$order->getWarehouse()->getAddress().'<br />'.$order->getWarehouse()->getCity().'<br>Dpt ?
                            </td>
                        </tr>
                    </table>
                <br />
                <h2>Products</h2>
                <table class="items" width="100%" style="font-size: 9pt; border-collapse: collapse; " cellpadding="8">
                    <thead>
                        <tr>
                            <td width="10%">Quantity</td>
                            <td width="45%">Description</td>
                            <td width="15%">Unit Price</td>
                            <td width="15%">Amount</td>
                        </tr>
                    </thead>
                    <tbody>
                <!-- ITEMS HERE -->
                    ';
        foreach ($products as $product) {
                        $qte = $product->getQuantity();
                        $price = $product->getPrice();
                        $product = $wrproductRep->findOneBy(['product' => $product->getProduct()]);
                        $html .= '<tr>
                        <td align="center">'.$qte.'</td>
                        <td>'.$product->getProduct().'</td>
                        <td class="cost">'.$price.'</td>
                        <td class="cost">&euro;'.$qte*$price.'</td>
                        </tr>';
        }
        $html.='
                </tbody>
                </table>';
        if (!empty($dishes)){
            $html .='<h2>Dishes</h2>
                            <table class="items" width="100%" style="font-size: 9pt; border-collapse: collapse; " cellpadding="8">
                                <thead>
                                    <tr>
                                        <td width="10%">Quantity</td>
                                        <td width="45%">Description</td>
                                        <td width="15%">Unit Price</td>
                                        <td width="15%">Amount</td>
                                    </tr>
                                </thead>
                                <tbody>
                            <!-- ITEMS HERE -->
                                ';
            foreach ($dishes as $dish) {

                                    $qte = $dish->getQuantity();
                                    $price = $dish->getPrice();
                                    $dish = $wrdishRep->findOneBy(['dish' => $dish->getDish()]);
                                    $html .= '<tr>
                                    <td align="center">'.$qte.'</td>
                                    <td>'.$dish.'</td>
                                    <td class="cost">'.$price.'</td>
                                    <td class="cost">&euro;'.$qte*$price.'</td>
                                    </tr>';
            }
        }

        $html.='
                </tbody>
                </table>
                <h2>Prix Total : </h2>
                <strong>'.$order->getTotalPrice().'€</strong>
                </body>
            </html>
                ';

        $invoice->setContent($html);
        $em->persist($invoice);

        //TODO: update stockProduct

        $em->persist($order);
        $em->flush();

        return $this->render('order/recap.html.twig', [
            'total_price' => $order->getTotalPrice(),
            'order' => $order
        ]);
    }

    /**
     * @Route("/order/pdf/{id}", name="order_pdf")
     */
    public function order_pdf(Request $request): Response
    {
        $entityManager = $this->getDoctrine()->getManager();
        $orderRep = $entityManager->getRepository(OrderByFranchisee::class);
        $order = $orderRep->find($request->get('id'));
        $html = $order->getInvoice()->getContent();

        $mpdf = new Mpdf([
            'margin_left' => 20,
            'margin_right' => 15,
            'margin_top' => 48,
            'margin_bottom' => 25,
            'margin_header' => 10,
            'margin_footer' => 10
        ]);
        $mpdf->WriteHTML($html);
        $mpdf->Output();

        $file = $mpdf;

        if (file_exists($file)) {
            header('Content-Description: File Transfer');
            header('Content-Type: application/octet-stream');
            header('Content-Disposition: attachment; filename="' . basename($file) . '"');
            header('Expires: 0');
            header('Cache-Control: must-revalidate');
            header('Pragma: public');
            header('Content-Length: ' . filesize($file));
            readfile($file);
            exit();
        }

    }

    /**
     * @Route("/order/{id}", name="order_show", methods={"GET"})
     */
    public function show(OrderByFranchisee $order): Response
    {
        return $this->render('order/show.html.twig', [
            'order' => $order,
        ]);
    }

    /**
     * @Route("/admin/order/{id}/edit", name="order_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, OrderByFranchisee $order): Response
    {
        $form = $this->createForm(OrderType::class, $order);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('order_index');
        }

        return $this->render('order/edit.html.twig', [
            'order' => $order,
            'form' => $form->createView(),
        ]);
    }




    /**
     * @Route("/admin/order/{id}", name="order_delete", methods={"DELETE"})
     */
    public function delete(Request $request, OrderByFranchisee $order): Response
    {
        if ($this->isCsrfTokenValid('delete'.$order->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($order);
            $entityManager->flush();
        }

        return $this->redirectToRoute('order_index');
    }

    /**
     * @Route("/order/new/{id}/fakepayement/", name="payement" , methods={"POST"})
     * @throws ApiErrorException
     */
    public function payement(Request $request) : Response
    {
        $user = $this->getUser();

        $entityManager = $this->getDoctrine()->getManager();
        $orderRep = $entityManager->getRepository(OrderByFranchisee::class);
        $order = $orderRep->find($request->get('id'));

        \Stripe\Stripe::setApiKey('sk_test_bhno3VfANJrXrWo5n71yKVVz00pFkgG0no');


        \Stripe\Charge::create([
            'receipt_email' => $user->getMail(),
            'amount' => ($order->getTotalPrice())*100,
            'currency' => 'eur',
            'source' => 'tok_visa',
            'description' => 'Commande n°'.$order->getId(),
        ]);

        return $this->redirectToRoute('order_recap',[ 'id' => $order->getId()]);
    }

    /**
     * @Route("/order/get_products", name="get_products", methods={"POST"})
     */
    public function getProducts(Request $request, SerializerInterface $serializer) : JsonResponse
    {
        $em = $this->getDoctrine()->getManager();
        $orderRep = $em->getRepository('App\Entity\OrderByFranchisee');
        $wpRep = $em->getRepository('App\Entity\WarehouseProduct');
        $orderId = $request->get('order');
        $order = $orderRep->find($orderId);
        $category = $request->get('category');
        $products = $wpRep->findByWarehouseAndQuantityOver0($order->getWarehouse()->getId());
        $i =0;
        foreach ($products as $product) {
            if ($product->getProduct()->getCategory()->getName() != $category){
                unset($products[$i]);
            }
            $i++;
        }

        $i = 0;
        foreach ($products as $product){
            $returnResponse[$i]['name'] = $product->getProduct()->getName();
            $returnResponse[$i]['quantity'] = $product->getQuantity();
            $returnResponse[$i]['price'] = $product->getPrice();
            $i++;
        }

        return new JsonResponse($returnResponse);
    }
}
