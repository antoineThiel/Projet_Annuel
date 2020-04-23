<?php

namespace App\Repository;

use App\Entity\ProductOrigin;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method ProductOrigin|null find($id, $lockMode = null, $lockVersion = null)
 * @method ProductOrigin|null findOneBy(array $criteria, array $orderBy = null)
 * @method ProductOrigin[]    findAll()
 * @method ProductOrigin[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ProductOriginRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ProductOrigin::class);
    }

    // /**
    //  * @return ProductOrigin[] Returns an array of ProductOrigin objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('p.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?ProductOrigin
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
