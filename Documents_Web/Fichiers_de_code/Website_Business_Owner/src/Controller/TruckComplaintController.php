<?php

namespace App\Controller;

use App\Entity\TruckComplaint;
use App\Form\TruckComplaintType;
use App\Form\TruckComplaintType2;
use App\Repository\TruckComplaintRepository;
use DateTime;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class TruckComplaintController extends AbstractController
{
    /**
     * @Route("/admin/truck_complaint", name="truck_complaint_index", methods={"GET"})
     */
    public function index(TruckComplaintRepository $truckComplaintRepository): Response
    {
        return $this->render('truck_complaint/index.html.twig', [
            'truck_complaints' => $truckComplaintRepository->findAll(),
        ]);
    }

    /**
     * @Route({
     *     "fr": "/fr/plainte/nouvelle",
     *     "en": "/en/truck_complaint/new",
     *     "es": "/es/queja_camion/nueva"
     *     }, name="truck_complaint_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $user = $this->getUser();
        $truckComplaint = new TruckComplaint();
        $truckComplaint->setdate(new DateTime);
        $truckComplaint->setIsNew(1);
        $truckComplaint->setIsOngoing(0);
        $truckComplaint->setIsClosed(0);
        $truckComplaint->setTruck($user->getTruck());
        $form = $this->createForm(TruckComplaintType::class, $truckComplaint);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($truckComplaint);
            $entityManager->flush();

            return $this->redirectToRoute('franchisee_show', ['id' => $user->getId()]);
        }

        return $this->render('truck_complaint/new.html.twig', [
            'truck_complaint' => $truckComplaint,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route({
     *     "fr": "/fr/plaintes/{id}",
     *     "en": "/en/truck_complaint/{id}",
     *     "es": "/es/queja_camion/{id}"
     * }, name="truck_complaint_show", methods={"GET"})
     */
    public function show(TruckComplaint $truckComplaint): Response
    {
        return $this->render('truck_complaint/show.html.twig', [
            'truck_complaint' => $truckComplaint,
        ]);
    }

    /**
     * @Route("/admin/truck_complaint/{id}/edit", name="truck_complaint_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, TruckComplaint $truckComplaint): Response
    {
        $form = $this->createForm(TruckComplaintType2::class, $truckComplaint);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('truck_complaint_index');
        }

        return $this->render('truck_complaint/edit.html.twig', [
            'truck_complaint' => $truckComplaint,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/admin/truck_complaint/{id}", name="truck_complaint_delete", methods={"DELETE"})
     */
    public function delete(Request $request, TruckComplaint $truckComplaint): Response
    {
        if ($this->isCsrfTokenValid('delete'.$truckComplaint->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($truckComplaint);
            $entityManager->flush();
        }

        return $this->redirectToRoute('truck_complaint_index');
    }
}
