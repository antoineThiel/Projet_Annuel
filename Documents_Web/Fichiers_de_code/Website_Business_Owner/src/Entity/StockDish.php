<?php

namespace App\Entity;

use App\Repository\StockDishRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=StockDishRepository::class)
 */
class StockDish
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
    private string $name;

    /**
     * @ORM\Column(type="float")
     */
    private float $quantity;

    /**
     * @ORM\ManyToOne(targetEntity=Franchisee::class, inversedBy="stockDishes")
     * @ORM\JoinColumn(nullable=false)
     */
    private franchisee $franchisee;

    /**
     * @ORM\OneToMany(targetEntity=FranchiseeArticle::class, mappedBy="stockDish")
     */
    private $franchiseeArticles;



    public function __construct()
    {
        $this->franchiseeArticles = new ArrayCollection();
        $this->menuToDishes = new ArrayCollection();
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


    public function getQuantity(): ?float
    {
        return $this->quantity;
    }

    public function setQuantity(float $quantity): self
    {
        $this->quantity = $quantity;

        return $this;
    }

    public function getFranchisee(): ?franchisee
    {
        return $this->franchisee;
    }

    public function setFranchisee(?franchisee $franchisee): self
    {
        if($franchisee != null) {
            $this->franchisee = $franchisee;
        }
        return $this;
    }

    /**
     * @return Collection|FranchiseeArticle[]
     */
    public function getFranchiseeArticles(): Collection
    {
        return $this->franchiseeArticles;
    }

    public function addFranchiseeArticle(FranchiseeArticle $franchiseeArticle): self
    {
        if (!$this->franchiseeArticles->contains($franchiseeArticle)) {
            $this->franchiseeArticles[] = $franchiseeArticle;
            $franchiseeArticle->setStockDish($this);
        }

        return $this;
    }

    public function removeFranchiseeArticle(FranchiseeArticle $franchiseeArticle): self
    {
        if ($this->franchiseeArticles->contains($franchiseeArticle)) {
            $this->franchiseeArticles->removeElement($franchiseeArticle);
            // set the owning side to null (unless already changed)
            if ($franchiseeArticle->getStockDish() === $this) {
                $franchiseeArticle->setStockDish(null);
            }
        }

        return $this;
    }



    public function __toString(): string
    {
        return $this->name;
    }

}
