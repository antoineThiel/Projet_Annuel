<?php

namespace App\Controller;

use App\Entity\ExternalInvoice;
use App\Form\ExternalInvoiceType;
use App\Form\ExternalInvoiceType2;
use App\Repository\ExternalInvoiceRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\String\Slugger\SluggerInterface;


class ExternalInvoiceController extends AbstractController
{
    /**
     * @Route("/admin/external/invoice/", name="external_invoice_index", methods={"GET"})
     */
    public function index(ExternalInvoiceRepository $externalInvoiceRepository): Response
    {
        return $this->render('external_invoice/index.html.twig', [
            'external_invoices' => $externalInvoiceRepository->findAll(),
        ]);
    }

    /**
     * @Route("/fr/external/invoice/new", name="external_invoice_new", methods={"GET","POST"})
     */
    public function new(Request $request, SluggerInterface $slugger): Response
    {
        $user = $this->getUser();
        $externalInvoice = new ExternalInvoice();
        $externalInvoice->setDate(new \DateTime('now'));
        $externalInvoice->setFranchisee($user);
        $form = $this->createForm(ExternalInvoiceType::class, $externalInvoice);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $file = $form->get('invoiceFileName')->getData();
            if ($file)
            {
                $originalFileName = pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME);
                $safeFilename = $slugger->slug($originalFileName);
                $newFilename = $safeFilename.'-'.uniqid().'.'.$file->guessExtension();

                try {
                    $file->move(
                        $this->getParameter('externalInvoice_directory'),
                        $newFilename
                    );
                } catch (FileException $e) {
                    dump('prevoir un catch');die();
                }

                $externalInvoice->setInvoiceFileName($newFilename);
            }

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($externalInvoice);
            $entityManager->flush();

            return $this->redirectToRoute('external_invoice_index');
        }

        return $this->render('external_invoice/new.html.twig', [
            'external_invoice' => $externalInvoice,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/external/invoice/{id}", name="external_invoice_show", methods={"GET"})
     */
    public function show(ExternalInvoice $externalInvoice): Response
    {
        return $this->render('external_invoice/show.html.twig', [
            'external_invoice' => $externalInvoice,
        ]);
    }

    /**
     * @Route("/admin/external/invoice/{id}/edit", name="external_invoice_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, ExternalInvoice $externalInvoice): Response
    {
        $form = $this->createForm(ExternalInvoiceType2::class, $externalInvoice);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('external_invoice_index');
        }

        return $this->render('external_invoice/edit.html.twig', [
            'external_invoice' => $externalInvoice,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/admin/external/invoice/{id}", name="external_invoice_delete", methods={"DELETE"})
     */
    public function delete(Request $request, ExternalInvoice $externalInvoice): Response
    {
        if ($this->isCsrfTokenValid('delete'.$externalInvoice->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($externalInvoice);
            $entityManager->flush();
        }

        return $this->redirectToRoute('external_invoice_index');
    }
}
