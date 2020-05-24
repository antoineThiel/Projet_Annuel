<?php

namespace App\Entity;

use App\Repository\CustomerOrderRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=CustomerOrderRepository::class)
 */
class CustomerOrder
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="date")
     */
    private $date;

    /**
     * @ORM\Column(type="float")
     */
    private $ammount;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $invoice;

    /**
     * @ORM\OneToOne(targetEntity=Customer::class, cascade={"persist", "remove"})
     * @ORM\JoinColumn(nullable=false)
     */
    private $customer;

    /**
     * @ORM\ManyToMany(targetEntity=FranchiseeMenu::class, inversedBy="customerOrders")
     */
    private $menues;

    /**
     * @ORM\ManyToMany(targetEntity=franchiseeArticle::class, inversedBy="customerOrders")
     */
    private $Articles;

    public function __construct()
    {
        $this->menues = new ArrayCollection();
        $this->Articles = new ArrayCollection();
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

    public function getInvoice(): ?string
    {
        return $this->invoice;
    }

    public function setInvoice(string $invoice): self
    {
        $this->invoice = $invoice;

        return $this;
    }

    public function getCustomer(): ?Customer
    {
        return $this->customer;
    }

    public function setCustomer(Customer $customer): self
    {
        $this->customer = $customer;

        return $this;
    }

    /**
     * @return Collection|FranchiseeMenu[]
     */
    public function getMenues(): Collection
    {
        return $this->menues;
    }

    public function addMenue(FranchiseeMenu $menue): self
    {
        if (!$this->menues->contains($menue)) {
            $this->menues[] = $menue;
        }

        return $this;
    }

    public function removeMenue(FranchiseeMenu $menue): self
    {
        if ($this->menues->contains($menue)) {
            $this->menues->removeElement($menue);
        }

        return $this;
    }

    /**
     * @return Collection|franchiseeArticle[]
     */
    public function getArticles(): Collection
    {
        return $this->Articles;
    }

    public function addArticle(franchiseeArticle $article): self
    {
        if (!$this->Articles->contains($article)) {
            $this->Articles[] = $article;
        }

        return $this;
    }

    public function removeArticle(franchiseeArticle $article): self
    {
        if ($this->Articles->contains($article)) {
            $this->Articles->removeElement($article);
        }

        return $this;
    }
}
