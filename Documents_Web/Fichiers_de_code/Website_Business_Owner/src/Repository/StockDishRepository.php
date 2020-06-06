<?php

namespace App\Repository;

use App\Entity\StockDish;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method StockDish|null find($id, $lockMode = null, $lockVersion = null)
 * @method StockDish|null findOneBy(array $criteria, array $orderBy = null)
 * @method StockDish[]    findAll()
 * @method StockDish[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class StockDishRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, StockDish::class);
    }

    // /**
    //  * @return StockDish[] Returns an array of StockDish objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('s.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?StockDish
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
