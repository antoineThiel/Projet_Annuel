<?php

namespace App\Entity;

use App\Repository\FranchiseeMenuRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=FranchiseeMenuRepository::class)
 */
class FranchiseeMenu
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
    private $name;

    /**
     * @ORM\Column(type="float")
     */
    private $price;

    /**
     * @ORM\ManyToMany(targetEntity=FranchiseeArticle::class, inversedBy="franchiseeMenus")
     */
    private $articleComponents;

    /**
     * @ORM\ManyToMany(targetEntity=StockDish::class, inversedBy="franchiseeMenus")
     */
    private $stockDish;

    /**
     * @ORM\ManyToMany(targetEntity=CustomerOrder::class, mappedBy="menues")
     */
    private $customerOrders;

    public function __construct()
    {
        $this->articleComponents = new ArrayCollection();
        $this->stockDish = new ArrayCollection();
        $this->customerOrders = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getPrice(): ?float
    {
        return $this->price;
    }

    public function setPrice(float $price): self
    {
        $this->price = $price;

        return $this;
    }

    /**
     * @return Collection|FranchiseeArticle[]
     */
    public function getArticleComponents(): Collection
    {
        return $this->articleComponents;
    }

    public function addArticleComponent(FranchiseeArticle $articleComponent): self
    {
        if (!$this->articleComponents->contains($articleComponent)) {
            $this->articleComponents[] = $articleComponent;
        }

        return $this;
    }

    public function removeArticleComponent(FranchiseeArticle $articleComponent): self
    {
        if ($this->articleComponents->contains($articleComponent)) {
            $this->articleComponents->removeElement($articleComponent);
        }

        return $this;
    }

    /**
     * @return Collection|StockDish[]
     */
    public function getStockDish(): Collection
    {
        return $this->stockDish;
    }

    public function addStockDish(StockDish $stockDish): self
    {
        if (!$this->stockDish->contains($stockDish)) {
            $this->stockDish[] = $stockDish;
        }

        return $this;
    }

    public function removeStockDish(StockDish $stockDish): self
    {
        if ($this->stockDish->contains($stockDish)) {
            $this->stockDish->removeElement($stockDish);
        }

        return $this;
    }

    /**
     * @return Collection|CustomerOrder[]
     */
    public function getCustomerOrders(): Collection
    {
        return $this->customerOrders;
    }

    public function addCustomerOrder(CustomerOrder $customerOrder): self
    {
        if (!$this->customerOrders->contains($customerOrder)) {
            $this->customerOrders[] = $customerOrder;
            $customerOrder->addMenue($this);
        }

        return $this;
    }

    public function removeCustomerOrder(CustomerOrder $customerOrder): self
    {
        if ($this->customerOrders->contains($customerOrder)) {
            $this->customerOrders->removeElement($customerOrder);
            $customerOrder->removeMenue($this);
        }

        return $this;
    }
}
