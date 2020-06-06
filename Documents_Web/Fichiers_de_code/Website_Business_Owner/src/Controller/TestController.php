<?php


namespace App\Controller;

use App\Repository\CustomerRepository;
use App\Repository\FranchiseeRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Serializer\SerializerInterface;

class TestController extends AbstractController
{
    /**
     * @Route("/getlog", name="getlog", methods={"GET"})
     */
    public function getLog(CustomerRepository $repository, SerializerInterface $serializer)
    {
        $em = $this->getDoctrine()->getManager();
        $repository = $em->getRepository('App\Entity\Customer');
        $customer = $repository->findOneBy(['login' => 'admin', 'password' => 'admin']);

        if ($customer != null)
        {
            $response['id'] = $customer->getId();
            $response['login'] = $customer->getLogin();
        }else{
            $response = [];
        }

        $serializedResponse = $serializer->serialize($response, 'json');

        return new JsonResponse($serializedResponse, 200, [], true);
    }

    /**
     * @Route("/check_cred/{login}/{password}", name="checkCred", methods={"GET"})
     */
    public function checkCred(Request $request, SerializerInterface $serializer) : JsonResponse
    {
        $login = $request->get("login");
        $password = $request->get("password");
        $em = $this->getDoctrine()->getManager();
        $customerRep = $em->getRepository('App\Entity\Customer');
        $custo = $customerRep->findOneBy(['login' => $login, 'password' => $password]);

        if ($custo !== null){
            $response['val'] = true;
            $response['id'] = $custo->getId();
            $response['login'] = $custo->getLogin();
        }else{
            $response['val'] = false;
        }

        $serializedResponse = $serializer->serialize($response, 'json');
        return new JsonResponse($serializedResponse, 200, [], true);
    }


    /**
     * @Route("/getfranchisee", name="getFranchisee", methods={"GET"})
     */
    public function getFranchisee(SerializerInterface $serializer) : JsonResponse
    {
        $repo = $this->getDoctrine()->getManager()->getRepository('App\Entity\Franchisee');
        $franchisees = $repo->findAll();
        $finalFranchisee = [];
        $i = 0;
        if ($franchisees !== null){
            foreach ($franchisees as $franchisee)
            {
                $finalFranchisee[$i]['id'] = $franchisee->getId();
                $finalFranchisee[$i]['lastName'] = $franchisee->getLastName();
                $finalFranchisee[$i]['firstName'] = $franchisee->getFirstName();
                $i++;
            }
        }
        $serializedResponse = $serializer->serialize($finalFranchisee, 'json');
        return new JsonResponse($serializedResponse, 200, [], true);
    }

}