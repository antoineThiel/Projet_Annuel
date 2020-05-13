<?php

namespace App\Controller;

use App\Entity\Franchisee;
use App\Form\FranchiseeType;
use App\Form\FranchiseeType2;
use App\Repository\FranchiseeRepository;
use App\Repository\InvoiceRepository;
use App\Repository\OrderByFranchiseeRepository;
use App\Repository\TruckPositionRepository;
use App\Repository\TruckRepository;
use App\Repository\TurnoverRepository;
use Mpdf\Mpdf;
use phpDocumentor\Reflection\Types\This;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Constraints\DateTime;

/**
 * @Route("/")
 */
class FranchiseeController extends AbstractController
{
    /**
     * @Route("/admin/franchisee", name="franchisee_index", methods={"GET"})
     */
    public function index(FranchiseeRepository $franchiseeRepository): Response
    {
        return $this->render('franchisee/index.html.twig', [
            'franchisees' => $franchiseeRepository->findAll(),
        ]);
    }

    /**
     * @Route("/admin/franchisee/new", name="franchisee_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $franchisee = new Franchisee();
        $form = $this->createForm(FranchiseeType::class, $franchisee);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($franchisee);
            $entityManager->flush();

            return $this->redirectToRoute('franchisee_index');
        }

        return $this->render('franchisee/new.html.twig', [
            'franchisee' => $franchisee,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route({
     *     "fr": "/fr/franchise/{id}",
     *     "en": "/en/franchisee/{id}",
     *     "es": "/es/franquiciado/{id}"
     *      }, name="franchisee_show", methods={"GET"})
     */
    public function show(Franchisee $franchisee,TruckRepository $truckRepository, TruckPositionRepository $positionRepository, InvoiceRepository $invoiceRepository, TurnoverRepository $turnoverRepository): Response
    {
        if ($this->getUser()->getId() != $franchisee->getId()){
            return $this->redirectToRoute('404');
        }
        if ($franchisee->getTruck() != null){
            $pos = $positionRepository->findById($franchisee->getTruck()->getId());
            $posId = $pos->getId();
            $posAddress = $pos->getAddress();
            $posCity = $pos->getCity();
        }else{
            $posId = null;
            $posAddress = null;
            $posCity = null;
        }
        $turnover = $turnoverRepository->findOneBy(['franchisee'=> $this->getUser()],['date'=>'DESC']);
        $invoices = $invoiceRepository->findBy(['franchisee' => $this->getUser()], ['date' => 'DESC'], 5);
        return $this->render('franchisee/show.html.twig', [
            'franchisee' => $franchisee,
            'posId' => $posId,
            'posAddress' => $posAddress,
            'posCity' => $posCity,
            'invoices' => $invoices,
            'turnover'=> $turnover
        ]);
    }

    /**
     * @Route("/admin/franchisee/{id}/edit", name="franchisee_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Franchisee $franchisee): Response
    {
        $form = $this->createForm(FranchiseeType::class, $franchisee);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('franchisee_index');
        }

        return $this->render('franchisee/edit.html.twig', [
            'franchisee' => $franchisee,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/franchisee/{id}/editFranchisee", name="franchisee_edit_by_franchisee", methods={"GET","POST"})
     */
    public function editByFranchisee(Request $request, Franchisee $franchisee): Response
    {
        $form = $this->createForm(FranchiseeType2::class, $franchisee);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('franchisee_index');
        }

        return $this->render('franchisee/edit.html.twig', [
            'franchisee' => $franchisee,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/admin/franchisee/{id}", name="franchisee_delete", methods={"DELETE"})
     */
    public function delete(Request $request, Franchisee $franchisee): Response
    {
        if ($this->isCsrfTokenValid('delete'.$franchisee->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($franchisee);
            $entityManager->flush();
        }

        return $this->redirectToRoute('franchisee_index');
    }

    /**
     * @Route("/admin/franchisee_export", name="franchisee_export")
     */
    public function export(FranchiseeRepository $franchiseeRepository, TruckPositionRepository $positionRepository): Response
    {
        $franchisees = $franchiseeRepository->findAll();
        $today = new \DateTime();
        dump($franchisees);
        $file = new Mpdf([
            'margin_left' => 20,
            'margin_right' => 15,
            'margin_top' => 48,
            'margin_bottom' => 25,
            'margin_header' => 10,
            'margin_footer' => 10,
            'orientation' => 'L'
            ]);
        $html =
            '<html>
                <head>
                    <style>
                    
                    </style>
                </head>
                <body>
                    <div>
                        <h1>All franchisee</h1>
                        <p>Date : '.date_format($today, "j/m/Y").'</p>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Truck number</td>
                                <td>Position</td>
                                <td>Result</td>
                            </tr>
                        </thead>
                        <tbody>';
                        foreach ($franchisees as $franchisee){
                            $name = $franchisee->getLastName().' '.$franchisee->getFirstName();
                            $truck = $franchisee->getTruck() != null ? $franchisee->getTruck() : 'No truck';
                            $position = $truck != 'No truck' ?  $truck->getLastPosition() : 'No truck -> No Position';
                            //$result = $truck != 'No truck' ? $result
                            $html .= '<tr>
                                        <td>'.$name.'</td>
                                        <td>'.$truck.'</td>
                                        <td>'.$position.'</td>
                                        <td>Resultat ( avenir)</td>
                                       </tr>';
                        }
                        $html .='
                        </tbody>
                    </table>
                    
                </body>
            </html>';

                        $file->WriteHTML($html);
                        $file->Output();

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

        die();
    }
}
