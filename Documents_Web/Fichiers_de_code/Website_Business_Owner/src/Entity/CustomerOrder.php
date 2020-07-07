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
     * @ORM\ManyToOne(targetEntity=Customer::class, cascade={"persist"})
     * @ORM\JoinColumn(nullable=false, onDelete="CASCADE")
     */
    private $customer;

    /**
     * @ORM\ManyToMany(targetEntity=CustomerMenu::class)
     */
    private $menues;

    /**
     * @ORM\ManyToMany(targetEntity=CustomerArticle::class)
     */
    private $articles;

    /**
     * @ORM\Column(type="boolean")
     */
    private $validate;

    public function __construct()
    {
        $this->menues = new ArrayCollection();
        $this->articles = new ArrayCollection();
        $this->validate = false;
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

    public function addMenue(CustomerMenu $menue): self
    {
        if (!$this->menues->contains($menue)) {
            $this->menues[] = $menue;
        }

        return $this;
    }

    public function removeMenue(CustomerMenu $menue): self
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
        return $this->articles;
    }

    public function addArticle(CustomerArticle $article): self
    {
        if (!$this->articles->contains($article)) {
            $this->articles[] = $article;
        }

        return $this;
    }

    public function removeArticle(CustomerArticle $article): self
    {
        if ($this->articles->contains($article)) {
            $this->articles->removeElement($article);
        }

        return $this;
    }

    /**
     * @return mixed
     */
    public function getValidate()
    {
        return $this->validate;
    }

    /**
     * @param mixed $validate
     */
    public function setValidate($validate): void
    {
        $this->validate = $validate;
    }


}
