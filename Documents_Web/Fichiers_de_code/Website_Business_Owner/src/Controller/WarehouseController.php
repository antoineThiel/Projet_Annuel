<?php

namespace App\Controller;

use App\Entity\Warehouse;
use App\Entity\WarehouseDish;
use App\Entity\WarehouseProduct;
use App\Form\WarehouseType;
use App\Repository\WarehouseRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class WarehouseController extends AbstractController
{
    /**
     * @Route("/admin/warehouse", name="warehouse_index", methods={"GET"})
     */
    public function index(WarehouseRepository $warehouseRepository): Response
    {
        return $this->render('warehouse/index.html.twig', [
            'warehouses' => $warehouseRepository->findAll(),
        ]);
    }

    /**
     * @Route("/admin/warehouse/new", name="warehouse_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {

        $entityManager = $this->getDoctrine()->getManager();

        $product = $entityManager->getRepository('App\Entity\Product')->findOneBy(['name' => 'coca']);

        $warehouse = new Warehouse();
        $warehouse->setAddress("rue de paris");
        $warehouse->setCity("Paris");

        $warehouseProduct = new WarehouseProduct();
        $warehouseDish = new WarehouseDish();

        $warehouse->addWarehouseProduct($warehouseProduct);
        $warehouse->addWarehouseDish($warehouseDish);


        $form = $this->createForm(WarehouseType::class, $warehouse);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($warehouse);
            $entityManager->flush();

            return $this->redirectToRoute('warehouse_index');
        }

        return $this->render('warehouse/new.html.twig', [
            'warehouse' => $warehouse,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("warehouse/{id}", name="warehouse_show", methods={"GET"})
     */
    public function show(Warehouse $warehouse): Response
    {
        return $this->render('warehouse/show.html.twig', [
            'warehouse' => $warehouse,
        ]);
    }

    /**
     * @Route("/admin/warehouse/{id}/edit", name="warehouse_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Warehouse $warehouse): Response
    {
        $form = $this->createForm(WarehouseType::class, $warehouse);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('warehouse_index');
        }

        return $this->render('warehouse/edit.html.twig', [
            'warehouse' => $warehouse,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/admin/warehouse/{id}", name="warehouse_delete", methods={"DELETE"})
     */
    public function delete(Request $request, Warehouse $warehouse): Response
    {
        if ($this->isCsrfTokenValid('delete'.$warehouse->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($warehouse);
            $entityManager->flush();
        }

        return $this->redirectToRoute('warehouse_index');
    }
}
