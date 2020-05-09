<?php

namespace App\Controller;

use App\Entity\Truck;
use App\Form\TruckType;
use App\Repository\TruckPositionRepository;
use App\Repository\TruckRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class TruckController extends AbstractController
{
    /**
     * @Route("/admin/truck", name="truck_index", methods={"GET"})
     */
    public function index(TruckRepository $truckRepository, TruckPositionRepository $positionRepository): Response
    {
        $pos = $positionRepository->findAll();
        return $this->render('truck/pos.html.twig', [
            'trucks' => $truckRepository->findAll(),
            'poses' =>$pos
        ]);
    }

    /**
     * @Route("/admin/truck/new", name="truck_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $truck = new Truck();
        $form = $this->createForm(TruckType::class, $truck);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($truck);
            $entityManager->flush();

            return $this->redirectToRoute('truck_index');
        }

        return $this->render('truck/new.html.twig', [
            'truck' => $truck,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/admin/truck/{id}", name="truck_show", methods={"GET"})
     */
    public function show(Truck $truck): Response
    {
        return $this->render('truck/show.html.twig', [
            'truck' => $truck,
        ]);
    }

    /**
     * @Route("/admin/truck/{id}/edit", name="truck_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Truck $truck): Response
    {
        $form = $this->createForm(TruckType::class, $truck);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('truck_index');
        }

        return $this->render('truck/edit.html.twig', [
            'truck' => $truck,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/admin/truck/{id}", name="truck_delete", methods={"DELETE"})
     */
    public function delete(Request $request, Truck $truck): Response
    {
        if ($this->isCsrfTokenValid('delete'.$truck->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($truck);
            $entityManager->flush();
        }

        return $this->redirectToRoute('truck_index');
    }

    /**
     * @Route("/admin/truck/getId", name="truck_get_id", methods={"POST"})
     */
    public function getId(Request $request, TruckRepository $truckRepository)
    {
        $trucks = $request->get("quantity");
        foreach ($trucks as $truck){
            $ids[] = $truckRepository->findById($truck);
        }
        $ids = array_map(function($a){ return array_pop($a);}, $ids);
        return new JsonResponse($ids);
    }
}
