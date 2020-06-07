<?php

namespace App\Entity;

use App\Repository\MenuToArticleRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=MenuToArticleRepository::class)
 */
class MenuToArticle
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=FranchiseeMenu::class, inversedBy="menuToArticles")
     * @ORM\JoinColumn(nullable=false)
     */
    private $franchiseeMenu;

    /**
     * @ORM\ManyToOne(targetEntity=FranchiseeArticle::class, inversedBy="menuToArticles")
     * @ORM\JoinColumn(nullable=false)
     */
    private $franchiseeArticle;

    /**
     * @ORM\Column(type="integer")
     */
    private $quantity;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFranchiseeMenu(): ?FranchiseeMenu
    {
        return $this->franchiseeMenu;
    }

    public function setFranchiseeMenu(?FranchiseeMenu $franchiseeMenu): self
    {
        $this->franchiseeMenu = $franchiseeMenu;

        return $this;
    }

    public function getFranchiseeArticle(): ?FranchiseeArticle
    {
        return $this->franchiseeArticle;
    }

    public function setFranchiseeArticle(?FranchiseeArticle $franchiseeArticle): self
    {
        $this->franchiseeArticle = $franchiseeArticle;

        return $this;
    }

    public function getQuantity(): ?int
    {
        return $this->quantity;
    }

    public function setQuantity(int $quantity): self
    {
        $this->quantity = $quantity;

        return $this;
    }

    public function __toString()
    {
        return $this->getFranchiseeArticle()->getName();
    }


}
