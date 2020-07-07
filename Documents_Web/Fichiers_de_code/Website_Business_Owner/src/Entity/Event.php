<?php

namespace App\Entity;

use App\Repository\EventRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=EventRepository::class)
 */
class Event
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
    private $startDate;

    /**
     * @ORM\Column(type="date")
     */
    private $endDate;

    /**
     * @ORM\OneToMany(targetEntity=FranchiseeArticle::class, mappedBy="event")
     */
    private $articles;

    /**
     * @ORM\OneToMany(targetEntity=FranchiseeMenu::class, mappedBy="event")
     */
    private $menues;

    /**
     * @ORM\Column(type="float")
     */
    private $reduction;

    public function __construct()
    {
        $this->articles = new ArrayCollection();
        $this->menues = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getStartDate(): ?\DateTimeInterface
    {
        return $this->startDate;
    }

    public function setStartDate(\DateTimeInterface $startDate): self
    {
        $this->startDate = $startDate;

        return $this;
    }

    public function getEndDate(): ?\DateTimeInterface
    {
        return $this->endDate;
    }

    public function setEndDate(\DateTimeInterface $endDate): self
    {
        $this->endDate = $endDate;

        return $this;
    }

    /**
     * @return Collection|FranchiseeArticle[]
     */
    public function getArticles(): Collection
    {
        return $this->articles;
    }

    public function addArticle(FranchiseeArticle $article): self
    {
        if (!$this->articles->contains($article)) {
            $this->articles[] = $article;
            $article->setEvent($this);
        }

        return $this;
    }

    public function removeArticle(FranchiseeArticle $article): self
    {
        if ($this->articles->contains($article)) {
            $this->articles->removeElement($article);
            // set the owning side to null (unless already changed)
            if ($article->getEvent() === $this) {
                $article->setEvent(null);
            }
        }

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
            $menue->setEvent($this);
        }

        return $this;
    }

    public function removeMenue(FranchiseeMenu $menue): self
    {
        if ($this->menues->contains($menue)) {
            $this->menues->removeElement($menue);
            // set the owning side to null (unless already changed)
            if ($menue->getEvent() === $this) {
                $menue->setEvent(null);
            }
        }

        return $this;
    }

    public function getReduction(): ?float
    {
        return $this->reduction;
    }

    public function setReduction(float $reduction): self
    {
        $this->reduction = $reduction;

        return $this;
    }
}
