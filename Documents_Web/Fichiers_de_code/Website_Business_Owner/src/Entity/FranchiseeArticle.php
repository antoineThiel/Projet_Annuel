<?php

namespace App\Entity;

use App\Repository\FranchiseeArticleRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=FranchiseeArticleRepository::class)
 */
class FranchiseeArticle
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
     * @ORM\Column(type="string", length=10, nullable=true)
     */
    private $unit;

    /**
     * @ORM\Column(type="float")
     */
    private $quantity;

    /**
     * @ORM\ManyToOne(targetEntity=stockProduct::class, inversedBy="franchiseeArticles")
     */
    private $stockProduct;

    /**
     * @ORM\ManyToOne(targetEntity=stockDish::class, inversedBy="franchiseeArticles")
     */
    private $stockDish;

    /**
     * @ORM\ManyToMany(targetEntity=FranchiseeMenu::class, mappedBy="articleComponents")
     */
    private $franchiseeMenus;

    /**
     * @ORM\ManyToMany(targetEntity=CustomerOrder::class, mappedBy="Articles")
     */
    private $customerOrders;

    public function __construct()
    {
        $this->franchiseeMenus = new ArrayCollection();
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

    public function getUnit(): ?string
    {
        return $this->unit;
    }

    public function setUnit(?string $unit): self
    {
        $this->unit = $unit;

        return $this;
    }

    public function getQuantity(): ?float
    {
        return $this->quantity;
    }

    public function setQuantity(float $quantity): self
    {
        $this->quantity = $quantity;

        return $this;
    }

    public function getStockProduct(): ?stockProduct
    {
        return $this->stockProduct;
    }

    public function setStockProduct(?stockProduct $stockProduct): self
    {
        $this->stockProduct = $stockProduct;

        return $this;
    }

    public function getStockDish(): ?stockDish
    {
        return $this->stockDish;
    }

    public function setStockDish(?stockDish $stockDish): self
    {
        $this->stockDish = $stockDish;

        return $this;
    }

    /**
     * @return Collection|FranchiseeMenu[]
     */
    public function getFranchiseeMenus(): Collection
    {
        return $this->franchiseeMenus;
    }

    public function addFranchiseeMenu(FranchiseeMenu $franchiseeMenu): self
    {
        if (!$this->franchiseeMenus->contains($franchiseeMenu)) {
            $this->franchiseeMenus[] = $franchiseeMenu;
            $franchiseeMenu->addArticleComponent($this);
        }

        return $this;
    }

    public function removeFranchiseeMenu(FranchiseeMenu $franchiseeMenu): self
    {
        if ($this->franchiseeMenus->contains($franchiseeMenu)) {
            $this->franchiseeMenus->removeElement($franchiseeMenu);
            $franchiseeMenu->removeArticleComponent($this);
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
            $customerOrder->addArticle($this);
        }

        return $this;
    }

    public function removeCustomerOrder(CustomerOrder $customerOrder): self
    {
        if ($this->customerOrders->contains($customerOrder)) {
            $this->customerOrders->removeElement($customerOrder);
            $customerOrder->removeArticle($this);
        }

        return $this;
    }
}
