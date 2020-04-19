<?php

namespace App\Repository;

use App\Entity\Order;
use App\Entity\OrderByFranchisee;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method OrderByFranchisee|null find($id, $lockMode = null, $lockVersion = null)
 * @method OrderByFranchisee|null findOneBy(array $criteria, array $orderBy = null)
 * @method OrderByFranchisee[]    findAll()
 * @method OrderByFranchisee[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class OrderByFranchiseeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, OrderByFranchisee::class);
    }

    // /**
    //  * @return Order[] Returns an array of Order objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('o')
            ->andWhere('o.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('o.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Order
    {
        return $this->createQueryBuilder('o')
            ->andWhere('o.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
