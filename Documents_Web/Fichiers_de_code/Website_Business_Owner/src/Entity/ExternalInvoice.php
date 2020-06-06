<?php

namespace App\Entity;

use App\Repository\ExternalInvoiceRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ExternalInvoiceRepository::class)
 */
class ExternalInvoice
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
    private $invoiceFileName;

    /**
     * @ORM\ManyToOne(targetEntity=Franchisee::class, inversedBy="externalInvoices")
     * @ORM\JoinColumn(nullable=false)
     */
    private $franchisee;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $ammount;

    /**
     * @ORM\Column(type="datetime")
     */
    private $date;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getInvoiceFileName(): ?string
    {
        return $this->invoiceFileName;
    }

    public function setInvoiceFileName(string $invoiceFileName): self
    {
        $this->invoiceFileName = $invoiceFileName;

        return $this;
    }

    public function getFranchisee(): ?Franchisee
    {
        return $this->franchisee;
    }

    public function setFranchisee(?Franchisee $franchisee): self
    {
        $this->franchisee = $franchisee;

        return $this;
    }

    public function getAmmount(): ?float
    {
        return $this->ammount;
    }

    public function setAmmount(?float $ammount): self
    {
        $this->ammount = $ammount;

        return $this;
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
}
