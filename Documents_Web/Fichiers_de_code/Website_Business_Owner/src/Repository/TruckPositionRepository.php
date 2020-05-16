<?php

namespace App\Repository;

use App\Entity\TruckPosition;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method TruckPosition|null find($id, $lockMode = null, $lockVersion = null)
 * @method TruckPosition|null findOneBy(array $criteria, array $orderBy = null)
 * @method TruckPosition[]    findAll()
 * @method TruckPosition[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TruckPositionRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TruckPosition::class);
    }

    // /**
    //  * @return TruckPosition[] Returns an array of TruckPosition objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('t.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?TruckPosition
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */

    public function findById($value)
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.truck = :val')
            ->andWhere('t.state = true')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
            ;
    }

}
