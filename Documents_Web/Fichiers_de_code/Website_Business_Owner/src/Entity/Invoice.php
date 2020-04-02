<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\InvoiceRepository")
 */
class Invoice
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
     * @ORM\OneToOne(targetEntity="App\Entity\Order", inversedBy="invoice", cascade={"persist", "remove"})
     * @ORM\JoinColumn(nullable=false)
     */
    private $linkedOrder;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Franchisee", inversedBy="invoices")
     * @ORM\JoinColumn(nullable=false)
     */
    private $franchisee;

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

    public function getLinkedOrder(): ?order
    {
        return $this->linkedOrder;
    }

    public function setLinkedOrder(order $linkedOrder): self
    {
        $this->linkedOrder = $linkedOrder;

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
}
