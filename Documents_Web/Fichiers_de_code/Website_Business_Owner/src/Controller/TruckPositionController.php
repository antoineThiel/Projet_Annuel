<?php

namespace App\Controller;

use App\Entity\TruckPosition;
use App\Form\TruckPositionType;
use App\Repository\TruckPositionRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class TruckPositionController extends AbstractController
{
    /**
     * @Route("/admin/truck_position", name="truck_position_index", methods={"GET"})
     */
    public function index(TruckPositionRepository $truckPositionRepository): Response
    {
        return $this->render('truck_position/index.html.twig', [
            'truck_positions' => $truckPositionRepository->findAll(),
        ]);
    }

    /**
     * @Route("/admin/truck_position/new", name="truck_position_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $truckPosition = new TruckPosition();
        $form = $this->createForm(TruckPositionType::class, $truckPosition);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($truckPosition);
            $entityManager->flush();

            return $this->redirectToRoute('truck_position_index');
        }

        return $this->render('truck_position/new.html.twig', [
            'truck_position' => $truckPosition,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("truck_position/{id}", name="truck_position_show", methods={"GET"})
     */
    public function show(TruckPosition $truckPosition): Response
    {
        return $this->render('truck_position/show.html.twig', [
            'truck_position' => $truckPosition,
        ]);
    }

    /**
     * @Route("/admin/truck_position/{id}/edit", name="truck_position_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, TruckPosition $truckPosition): Response
    {
        $form = $this->createForm(TruckPositionType::class, $truckPosition);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('truck_position_index');
        }

        return $this->render('truck_position/edit.html.twig', [
            'truck_position' => $truckPosition,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/admin/truck_position/{id}", name="truck_position_delete", methods={"DELETE"})
     */
    public function delete(Request $request, TruckPosition $truckPosition): Response
    {
        if ($this->isCsrfTokenValid('delete'.$truckPosition->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($truckPosition);
            $entityManager->flush();
        }

        return $this->redirectToRoute('truck_position_index');
    }
}
