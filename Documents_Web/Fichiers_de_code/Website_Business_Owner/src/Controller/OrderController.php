<?php

namespace App\Controller;

use App\Entity\OrderByFranchisee;
use App\Form\OrderFirstType;
use App\Form\OrderType;
use App\Repository\OrderByFranchiseeRepository;
use App\Repository\WarehouseRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


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
     * @Route("/admin/order/new", name="order_new_warehouse", methods={"GET", "POST"})
     */
    public function newWarehouse(Request $request)
    {
        $order = new OrderByFranchisee();
        $form = $this->createForm(OrderFirstType::class, $order);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
           return $this->new($request, $order);
        }
        return $this->render('order/firstNew.html.twig', [
            'order' => $order,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/admin/order/new/begin", name="order_new", methods={"GET","POST"})
     */
    public function new(Request $request, OrderByFranchisee $order): Response
    {
        $order->setDate(New \DateTime());
        $form = $this->createForm(OrderType::class, $order, ['data' => $order->getWarehouse()]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($order);
            $entityManager->flush();

            return $this->redirectToRoute('order_index');
        }

        return $this->render('order/new.html.twig', [
            'order' => $order,
            'form' => $form->createView(),
        ]);
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
}
