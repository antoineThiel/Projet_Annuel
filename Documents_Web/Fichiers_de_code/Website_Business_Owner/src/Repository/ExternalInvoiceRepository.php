<?php

namespace App\Repository;

use App\Entity\ExternalInvoice;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method ExternalInvoice|null find($id, $lockMode = null, $lockVersion = null)
 * @method ExternalInvoice|null findOneBy(array $criteria, array $orderBy = null)
 * @method ExternalInvoice[]    findAll()
 * @method ExternalInvoice[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ExternalInvoiceRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ExternalInvoice::class);
    }

    /**
     * @param \DateTime $dateTime
     * @param int $franchiseeId
     * @return array Returns an array of Invoice objects
     */
    public function findBySinceLastMonth(\DateTime $dateTime , int $franchiseeId): array
    {
//        $date = $dateTime->format('Y-m-d');

        return $this->createQueryBuilder('i')
            ->Where('i.date >= :date')
            ->andWhere('i.franchisee = :uId')
            ->setParameters([
                'date'=> $dateTime,
                'uId' => $franchiseeId
            ])
            ->getQuery()
            ->getResult();
    }

    // /**
    //  * @return ExternalInvoice[] Returns an array of ExternalInvoice objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('e.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?ExternalInvoice
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
