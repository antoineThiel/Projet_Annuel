<?php

namespace App\Repository;

use App\Entity\FranchiseeMenu;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method FranchiseeMenu|null find($id, $lockMode = null, $lockVersion = null)
 * @method FranchiseeMenu|null findOneBy(array $criteria, array $orderBy = null)
 * @method FranchiseeMenu[]    findAll()
 * @method FranchiseeMenu[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class FranchiseeMenuRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, FranchiseeMenu::class);
    }

    // /**
    //  * @return FranchiseeMenu[] Returns an array of FranchiseeMenu objects
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
    public function findOneBySomeField($value): ?FranchiseeMenu
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
