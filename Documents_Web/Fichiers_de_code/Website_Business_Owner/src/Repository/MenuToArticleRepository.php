<?php

namespace App\Repository;

use App\Entity\MenuToArticle;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method MenuToArticle|null find($id, $lockMode = null, $lockVersion = null)
 * @method MenuToArticle|null findOneBy(array $criteria, array $orderBy = null)
 * @method MenuToArticle[]    findAll()
 * @method MenuToArticle[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MenuToArticleRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, MenuToArticle::class);
    }

    // /**
    //  * @return MenuToArticle[] Returns an array of MenuToArticle objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('m')
            ->andWhere('m.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('m.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?MenuToArticle
    {
        return $this->createQueryBuilder('m')
            ->andWhere('m.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
