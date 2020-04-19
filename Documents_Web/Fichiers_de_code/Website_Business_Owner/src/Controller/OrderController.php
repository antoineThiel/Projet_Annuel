<?php

namespace App\Controller;

use App\Entity\OrderByFranchisee;
use App\Entity\Product;
use App\Entity\WarehouseDish;
use App\Entity\WarehouseProduct;
use App\Form\OrderFirstType;
use App\Form\OrderType;
use App\Repository\OrderByFranchiseeRepository;
use App\Repository\ProductRepository;
use App\Repository\WarehouseProductRepository;
use App\Repository\WarehouseRepository;
use Mpdf\Mpdf;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;


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
     * @Route("/order/new", name="order_new_warehouse", methods={"GET", "POST"})
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
     * @Route("/order/new/{id}", name="order_new", methods={"GET","POST"})
     */
    public function new(Request $request, OrderByFranchisee $order): Response
    {
        $form = $this->createForm(OrderType::class, $order, ['warehouse_id' => $order->getWarehouse()->getId()]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();

            $warehouseProductRepository = $entityManager->getRepository(WarehouseProduct::class);
            $products = $order->getOrderProduct();
            foreach ($products as $product){
                $qte = $product->getQuantity();
                $warehouseProduct = $warehouseProductRepository->findBy(['product' => $product->getProduct()]);
                $qte2 = $warehouseProduct['0']->getQuantity();
                $warehouseProduct['0']->setQuantity($qte2-$qte);
            }

            $warehouseDishRepository = $entityManager->getRepository(WarehouseDish::class);
            $dishs = $order->getOrderDish();
            foreach ($dishs as $dish){
                $qte = $dish->getQuantity();
                $warehouseDish = $warehouseDishRepository->findBy(['dish' => $dish->getDish()]);
                $qte2 = $warehouseDish['0']->getQuantity();
                $warehouseDish['0']->setQuantity($qte2-$qte);
            }

            $entityManager->persist($order);
            $entityManager->flush();
            return $this->redirectToRoute('order_recap', ['id' => $order->getId()]);
        }
        return $this->render('order/new.html.twig', [
            'order' => $order,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/order/recap/{id}", name="order_recap", methods={"GET", "POST"})
     */
    public function order_recap(OrderByFranchisee $order): Response
    {
        $mpdf = new Mpdf();
        return $this->render('order/recap.html.twig', [
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
        $wrproductRep = $entityManager->getRepository(WarehouseProduct::class);
        $wrdishRep = $entityManager->getRepository(WarehouseDish::class);

        $dishes = $order->getOrderDish();
        $products = $order->getOrderProduct();

        $user = $this->getUser();

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
                        $product = $wrproductRep->findBy(['product' => $product->getProduct()]);
                        $html .= '<tr>
                        <td align="center">'.$qte.'</td>
                        <td>'.$product['0'].'</td>
                        <td class="cost">&euro;2.56</td>
                        <td class="cost">&euro;'.$qte*2.56.'</td>
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
                                    $dish = $wrdishRep->findBy(['dish' => $dish->getDish()]);
                                    $html .= '<tr>
                                    <td align="center">'.$qte.'</td>
                                    <td>'.$dish['0'].'</td>
                                    <td class="cost">&euro;2.56</td>
                                    <td class="cost">&euro;'.$qte*2.56.'</td>
                                    </tr>';
                                }
                    }

                $html.='
                </tbody>
                </table>
                </body>
            </html>
                ';

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
     * @Route("/admin/fakepayement", name="payement")
     * @throws \Stripe\Exception\ApiErrorException
     */
    public function payement(Request $request) : Response
    {
        \Stripe\Stripe::setApiKey('sk_test_ko1kC7G8gXtQtNAMdLTHIiKs00S8qWdHYw');

        \Stripe\PaymentIntent::create([
            'amount' => 1000,
            'currency' => 'eur',
            'payment_method_types' => ['card'],
            'receipt_email' => 'antoine.thiel@hotmail.fr',
        ]);

        return $this->redirectToRoute('order_index');
    }
}
