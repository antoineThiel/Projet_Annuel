<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\WarehouseRepository")
 */
class Warehouse
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $city;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $address;

    /**
     * @ORM\OneToMany(
     *     targetEntity="App\Entity\WarehouseProduct",
     *     mappedBy="warehouse",
     *     fetch="EXTRA_LAZY",
     *     orphanRemoval=true,
     *     cascade={"persist"}
     *     )
     */
     private Collection $warehouseProduct;

    /**
     * @ORM\OneToMany(
     *     targetEntity="App\Entity\WarehouseDish",
     *     mappedBy="warehouse",
     *     fetch="EXTRA_LAZY",
     *     orphanRemoval=true,
     *     cascade={"persist"}
     *     )
     */
    private Collection $warehouseDish;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\OrderByFranchisee", mappedBy="warehouse", orphanRemoval=true)
     */
    private $linkedOrder;


    public function __construct()
    {
        $this->warehouseProduct = new ArrayCollection();
        $this->warehouseDish = new ArrayCollection();
        $this->linkedOrder = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCity(): ?string
    {
        return $this->city;
    }

    public function setCity(string $city): self
    {
        $this->city = $city;

        return $this;
    }

    public function getAddress(): ?string
    {
        return $this->address;
    }

    public function setAddress(string $address): self
    {
        $this->address = $address;

        return $this;
    }

    /**
     * @return Collection|WarehouseProduct[]
     */
    public function getWarehouseProduct(): Collection
    {
        return $this->warehouseProduct;
    }

    public function addWarehouseProduct(WarehouseProduct $warehouseProduct): self
    {
        if (!$this->warehouseProduct->contains($warehouseProduct)) {
            $this->warehouseProduct[] = $warehouseProduct;
            $warehouseProduct->setWarehouse($this);
        }

        return $this;
    }

    public function removeWarehouseProduct(WarehouseProduct $warehouseProduct): self
    {
        if ($this->warehouseProduct->contains($warehouseProduct)) {
            $this->warehouseProduct->removeElement($warehouseProduct);
            $warehouseProduct->setWarehouse(NULL);
        }

        return $this;
    }


    /**
     * @return Collection|WarehouseDish[]
     */
    public function getWarehouseDish(): Collection
    {
        return $this->warehouseDish;
    }

    public function addWarehouseDish(WarehouseDish $warehouseDish): self
    {
        if (!$this->warehouseDish->contains($warehouseDish)) {
            $this->warehouseDish[] = $warehouseDish;
            $warehouseDish->setWarehouse($this);
        }

        return $this;
    }

    public function removeWarehouseDish(WarehouseDish $warehouseDish): self
    {
        if ($this->warehouseDish->contains($warehouseDish)) {
            $this->warehouseDish->removeElement($warehouseDish);
            $warehouseDish->setWarehouse(NULL);
        }

        return $this;
    }

    /**
     * @return Collection|OrderByFranchisee[]
     */
    public function getLinkedOrder(): Collection
    {
        return $this->linkedOrder;
    }

    public function addLinkedOrder(OrderByFranchisee $linkedOrder): self
    {
        if (!$this->linkedOrder->contains($linkedOrder)) {
            $this->linkedOrder[] = $linkedOrder;
            $linkedOrder->setWarehouse($this);
        }

        return $this;
    }

    public function removeLinkedOrder(OrderByFranchisee $linkedOrder): self
    {
        if ($this->linkedOrder->contains($linkedOrder)) {
            $this->linkedOrder->removeElement($linkedOrder);
            // set the owning side to null (unless already changed)
            if ($linkedOrder->getWarehouse() === $this) {
                $linkedOrder->setWarehouse(null);
            }
        }

        return $this;
    }

}
