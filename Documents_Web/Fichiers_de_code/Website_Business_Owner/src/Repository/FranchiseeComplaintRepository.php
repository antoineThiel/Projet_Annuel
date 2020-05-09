<?php

namespace App\Repository;

use App\Entity\FranchiseeComplaint;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method FranchiseeComplaint|null find($id, $lockMode = null, $lockVersion = null)
 * @method FranchiseeComplaint|null findOneBy(array $criteria, array $orderBy = null)
 * @method FranchiseeComplaint[]    findAll()
 * @method FranchiseeComplaint[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class FranchiseeComplaintRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, FranchiseeComplaint::class);
    }

    // /**
    //  * @return FranchiseeComplaint[] Returns an array of FranchiseeComplaint objects
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
    public function findOneBySomeField($value): ?FranchiseeComplaint
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
