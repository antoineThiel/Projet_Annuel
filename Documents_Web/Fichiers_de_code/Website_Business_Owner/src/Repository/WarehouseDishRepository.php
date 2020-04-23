<?php


namespace App\Repository;

use App\Entity\WarehouseDish;
use Doctrine\Common\Persistence\ManagerRegistry;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;

/**
 * @method WarehouseDish|null find($id, $lockMode = null, $lockVersion = null)
 * @method WarehouseDish|null findOneBy(array $criteria, array $orderBy = null)
 * @method WarehouseDish[]    findAll()
 * @method WarehouseDish[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */

class WarehouseDishRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, WarehouseDish::class);
    }
}