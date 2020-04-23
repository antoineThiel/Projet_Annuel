<?php

namespace App\Repository;

use App\Entity\TruckComplaint;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method TruckComplaint|null find($id, $lockMode = null, $lockVersion = null)
 * @method TruckComplaint|null findOneBy(array $criteria, array $orderBy = null)
 * @method TruckComplaint[]    findAll()
 * @method TruckComplaint[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TruckComplaintRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TruckComplaint::class);
    }

    // /**
    //  * @return TruckComplaint[] Returns an array of TruckComplaint objects
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
    public function findOneBySomeField($value): ?TruckComplaint
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
