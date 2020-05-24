<?php

namespace App\Entity;

use App\Repository\StockProductRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=StockProductRepository::class)
 */
class StockProduct
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
     * @ORM\Column(type="string", length=10, nullable=true)
     */
    private $unit;

    /**
     * @ORM\Column(type="float")
     */
    private $qty;


    /**
     * @ORM\ManyToOne(targetEntity=franchisee::class, inversedBy="stockProducts")
     * @ORM\JoinColumn(nullable=false)
     */
    private $franchisee;

    /**
     * @ORM\OneToMany(targetEntity=FranchiseeArticle::class, mappedBy="stock_product", orphanRemoval=true)
     */
    private $franchiseeArticles;

    public function __construct()
    {
        $this->franchiseeArticles = new ArrayCollection();
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

    public function getUnit(): ?string
    {
        return $this->unit;
    }

    public function setUnit(?string $unit): self
    {
        $this->unit = $unit;

        return $this;
    }

    public function getQty(): ?float
    {
        return $this->qty;
    }

    public function setQty(float $qty): self
    {
        $this->qty = $qty;

        return $this;
    }

    public function setRelation(string $relation): self
    {
        $this->relation = $relation;

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
            $franchiseeArticle->setStockProduct($this);
        }

        return $this;
    }

    public function removeFranchiseeArticle(FranchiseeArticle $franchiseeArticle): self
    {
        if ($this->franchiseeArticles->contains($franchiseeArticle)) {
            $this->franchiseeArticles->removeElement($franchiseeArticle);
            // set the owning side to null (unless already changed)
            if ($franchiseeArticle->getStockProduct() === $this) {
                $franchiseeArticle->setStockProduct(null);
            }
        }

        return $this;
    }
}
