<?php

namespace App\Repository;

use App\Entity\Franchisee;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method Franchisee|null find($id, $lockMode = null, $lockVersion = null)
 * @method Franchisee|null findOneBy(array $criteria, array $orderBy = null)
 * @method Franchisee[]    findAll()
 * @method Franchisee[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class FranchiseeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Franchisee::class);
    }

    // /**
    //  * @return Franchisee[] Returns an array of Franchisee objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('f')
            ->andWhere('f.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('f.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Franchisee
    {
        return $this->createQueryBuilder('f')
            ->andWhere('f.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
