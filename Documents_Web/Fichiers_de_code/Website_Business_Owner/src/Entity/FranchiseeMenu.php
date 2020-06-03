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
    private int $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\Column(type="float")
     */
    private $price;


    /**
     * @ORM\ManyToMany(targetEntity=CustomerOrder::class, mappedBy="menues")
     */
    private Collection $customerOrders;

    /**
     * @ORM\ManyToOne(targetEntity=Franchisee::class, inversedBy="franchiseeMenus")
     * @ORM\JoinColumn(nullable=false)
     */
    private  $franchisee;

    /**
     * @ORM\Column(type="integer")
     */
    private $stock;

//    /**
//     * @ORM\OneToMany(targetEntity=MenuToDish::class, mappedBy="franchiseeMenu")
//     */
//    private Collection $menuToDishes;

    /**
     * @ORM\OneToMany(targetEntity=MenuToArticle::class, mappedBy="franchiseeMenu")
     */
    private Collection $menuToArticles;


    public function __construct()
    {
        $this->customerOrders = new ArrayCollection();
//        $this->menuToDishes = new ArrayCollection();
        $this->menuToArticles = new ArrayCollection();
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

    public function getFranchisee(): ?franchisee
    {
        return $this->franchisee;
    }

    public function setFranchisee(?franchisee $franchisee): self
    {
        $this->franchisee = $franchisee;

        return $this;
    }

    public function getStock(): ?int
    {
        return $this->stock;
    }

    public function setStock(int $stock): self
    {
        $this->stock = $stock;

        return $this;
    }

    /**
     * @return Collection|MenuToDish[]
     */
    public function getMenuToDishes(): Collection
    {
        return $this->menuToDishes;
    }

    public function addMenuToDish(MenuToDish $menuToDish): self
    {
        if (!$this->menuToDishes->contains($menuToDish)) {
            $this->menuToDishes[] = $menuToDish;
            $menuToDish->setFranchiseeMenu($this);
        }

        return $this;
    }

    public function removeMenuToDish(MenuToDish $menuToDish): self
    {
        if ($this->menuToDishes->contains($menuToDish)) {
            $this->menuToDishes->removeElement($menuToDish);
            // set the owning side to null (unless already changed)
            if ($menuToDish->getFranchiseeMenu() === $this) {
                $menuToDish->setFranchiseeMenu(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|MenuToArticle[]
     */
    public function getMenuToArticles(): Collection
    {
        return $this->menuToArticles;
    }

    public function addMenuToArticle(MenuToArticle $menuToArticle): self
    {
        if (!$this->menuToArticles->contains($menuToArticle)) {
            $this->menuToArticles[] = $menuToArticle;
            $menuToArticle->setFranchiseeMenu($this);
        }

        return $this;
    }

    public function removeMenuToArticle(MenuToArticle $menuToArticle): self
    {
        if ($this->menuToArticles->contains($menuToArticle)) {
            $this->menuToArticles->removeElement($menuToArticle);
            // set the owning side to null (unless already changed)
            if ($menuToArticle->getFranchiseeMenu() === $this) {
                $menuToArticle->setFranchiseeMenu(null);
            }
        }

        return $this;
    }
}
