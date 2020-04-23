<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\OrderByFranchiseeRepository")
 */
class OrderByFranchisee
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="datetime")
     */
    private $date;

    /**
     * @ORM\Column(type="float")
     */
    private $ammount;

    /**
     * @ORM\OneToMany(
     *     targetEntity="App\Entity\OrderProduct",
     *     mappedBy="order",
     *     fetch="EXTRA_LAZY",
     *     orphanRemoval=true,
     *     cascade={"persist"}
     *     )
     */
    private Collection $orderProduct;

    /**
     * @ORM\OneToMany(
     *     targetEntity="App\Entity\OrderDish",
     *     mappedBy="order",
     *     fetch="EXTRA_LAZY",
     *     orphanRemoval=true,
     *     cascade={"persist"}
     *     )
     */
    private Collection $orderDish;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\Invoice", mappedBy="linkedOrder", cascade={"persist", "remove"})
     */
    private $invoice;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Warehouse", inversedBy="linkedOrder")
     * @ORM\JoinColumn(nullable=false)
     */
    private $warehouse;



    public function __construct()
    {
        $this->orderProduct = new ArrayCollection();
        $this->orderDish = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDate(): ?\DateTimeInterface
    {
        return $this->date;
    }

    public function setDate(\DateTimeInterface $date): self
    {
        $this->date = $date;

        return $this;
    }

    public function getAmmount(): ?float
    {
        return $this->ammount;
    }

    public function setAmmount(float $ammount): self
    {
        $this->ammount = $ammount;

        return $this;
    }

    /**
     * @return Collection|OrderProduct[]
     */
    public function getOrderProduct(): Collection
    {
        return $this->orderProduct;
    }

    public function addOrderProduct(OrderProduct $orderProduct): self
    {
        if (!$this->orderProduct->contains($orderProduct)) {
            $this->orderProduct[] = $orderProduct;
            $orderProduct->setOrder($this);
        }

        return $this;
    }

    public function removeOrderProduct(OrderProduct $orderProduct): self
    {
        if ($this->orderProduct->contains($orderProduct)) {
            $this->orderProduct->removeElement($orderProduct);
            $orderProduct->setOrder(NULL);
        }

        return $this;
    }

    /**
     * @return Collection|OrderDish[]
     */
    public function getOrderDish(): Collection
    {
        return $this->orderDish;
    }

    public function addOrderDish(OrderDish $orderDish): self
    {
        if (!$this->orderDish->contains($orderDish)) {
            $this->orderDish[] = $orderDish;
            $orderDish->setOrder($this);
        }

        return $this;
    }

    public function removeOrderDish(OrderDish $orderDish): self
    {
        if ($this->orderDish->contains($orderDish)) {
            $this->orderDish->removeElement($orderDish);
            $orderDish->setOrder(NULL);
        }

        return $this;
    }
    
    public function getInvoice(): ?Invoice
    {
        return $this->invoice;
    }

    public function setInvoice(Invoice $invoice): self
    {
        $this->invoice = $invoice;

        // set the owning side of the relation if necessary
        if ($invoice->getLinkedOrder() !== $this) {
            $invoice->setLinkedOrder($this);
        }

        return $this;
    }

    public function getWarehouse(): ?Warehouse
    {
        return $this->warehouse;
    }

    public function setWarehouse(?Warehouse $warehouse): self
    {
        $this->warehouse = $warehouse;

        return $this;
    }
    public function getTotalPrice(): float
    {
        $products = $this->getOrderProduct();
        $dishes = $this->getOrderDish();
        $price = 0;
        foreach ($products as $product){
            $price += ($product->getPrice() * $product->getQuantity());
        }
        foreach ($dishes as $dish){
            $price += ($dish->getPrice() * $dish->getQuantity());
        }
        return $price;
    }

}
