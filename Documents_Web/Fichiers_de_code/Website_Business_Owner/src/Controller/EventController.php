<?php

namespace App\Controller;


use App\Entity\Event;
use App\Form\EventType;
use App\Repository\EventRepository;
use App\Repository\FranchiseeArticleRepository;
use App\Repository\FranchiseeMenuRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;


class EventController extends AbstractController
{

    /**
     * @Route("/admin/event", name="event_index", methods={"GET"})
     */
    public function index(EventRepository $eventRepository): Response
    {

        return $this->render('event/index.html.twig', [
            'events' => $eventRepository->findBy([],['startDate' => 'DESC']),
        ]);
    }

    /**
     * @Route({
     *     "fr": "/event/nouveau",
     *     "en": "/event/new",
     *     "es": "/evento/nueva"
     *     }, name="event_new", methods={"GET","POST"})
     */
    public function new(Request $request, FranchiseeArticleRepository $franchiseeArticleRepository, FranchiseeMenuRepository $franchiseeMenuRepository): Response
    {
        $events = new Event();
        $user = $this->getUser();
        $form = $this->createForm(EventType::class, $events);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $events->setReduction(($events->getReduction()) / 100);
            $entityManager = $this->getDoctrine()->getManager();
            $events->setFranchisee($user);
            $franchisee = $events->getFranchisee();

            $articles = $events->getArticles();
            foreach ($articles as $article){
                $articleid = $franchiseeArticleRepository->findOneBy(['franchisee' => $user, 'name' => $article->getName()]);
                $articleid->setEvent($events);
                $entityManager->persist($articleid);
            }

            $menues = $events->getMenues();
            foreach ($menues as $menue){
                $menueid = $franchiseeMenuRepository->findOneBy(['franchisee' => $user, 'name' => $menue->getName()]);
                $menueid->setEvent($events);
                $entityManager->persist($menueid);
            }

            $entityManager->persist($franchisee);
            $entityManager->persist($events);

            $entityManager->flush();


            return $this->redirectToRoute('franchisee_show', ['id' => $user->getId()]);
        }
        return $this->render('event/new.html.twig', [
            'event' => $events,
            'form' => $form->createView(),
        ]);

    }



}