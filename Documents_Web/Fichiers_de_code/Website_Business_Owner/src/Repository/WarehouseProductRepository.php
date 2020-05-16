<?php


namespace App\Repository;

use App\Entity\WarehouseProduct;
use Doctrine\Common\Persistence\ManagerRegistry;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\Query;
use Gedmo\Translatable\TranslatableListener;

/**
 * @method WarehouseProduct|null find($id, $lockMode = null, $lockVersion = null)
 * @method WarehouseProduct|null findOneBy(array $criteria, array $orderBy = null)
 * @method WarehouseProduct[]    findAll()
 * @method WarehouseProduct[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */

class WarehouseProductRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, WarehouseProduct::class);
    }

    public function findByWarehouseAndQuantityOver0($warehouse)
    {
        $qb = $this->createQueryBuilder('w');
        $q = $qb
            ->select('w')
            ->where('w.warehouse = :warehouse')->setParameter('warehouse', $warehouse)
            ->andWhere($qb->expr()->gte('w.quantity', ':value'))->setParameter('value', 1)
            ->getQuery()->getResult();
        return $q;

    }
}