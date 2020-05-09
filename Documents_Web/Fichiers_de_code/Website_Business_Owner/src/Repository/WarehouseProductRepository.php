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
}