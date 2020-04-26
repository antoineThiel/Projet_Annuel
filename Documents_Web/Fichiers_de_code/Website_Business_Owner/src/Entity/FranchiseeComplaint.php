<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\FranchiseeComplaintRepository")
 */
class FranchiseeComplaint
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
    private $title;

    /**
     * @ORM\Column(type="text")
     */
    private $content;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Franchisee", inversedBy="franchiseeComplaints")
     * @ORM\JoinColumn(nullable=false)
     */
    private $franchisee;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getContent(): ?string
    {
        return $this->content;
    }

    public function setContent(string $content): self
    {
        $this->content = $content;

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
}
