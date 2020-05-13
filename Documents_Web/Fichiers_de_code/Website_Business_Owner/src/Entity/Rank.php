<?php

namespace App\Entity;

use App\Repository\RankRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=RankRepository::class)
 */
class Rank
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
     * @ORM\Column(type="integer")
     */
    private $minimum;

    /**
     * @ORM\OneToMany(targetEntity=Franchisee::class, mappedBy="rank")
     */
    private $franchisee;

    /**
     * @ORM\Column(type="float")
     */
    private $reward;

    public function __construct()
    {
        $this->franchisee = new ArrayCollection();
    }

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

    public function getMinimum(): ?int
    {
        return $this->minimum;
    }

    public function setMinimum(int $minimum): self
    {
        $this->minimum = $minimum;

        return $this;
    }

    /**
     * @return Collection|franchisee[]
     */
    public function getFranchisee(): Collection
    {
        return $this->franchisee;
    }

    public function addFranchisee(franchisee $franchisee): self
    {
        if (!$this->franchisee->contains($franchisee)) {
            $this->franchisee[] = $franchisee;
            $franchisee->setRank($this);
        }

        return $this;
    }

    public function removeFranchisee(franchisee $franchisee): self
    {
        if ($this->franchisee->contains($franchisee)) {
            $this->franchisee->removeElement($franchisee);
            // set the owning side to null (unless already changed)
            if ($franchisee->getRank() === $this) {
                $franchisee->setRank(null);
            }
        }

        return $this;
    }

    public function getReward(): ?float
    {
        return $this->reward;
    }

    public function setReward(float $reward): self
    {
        $this->reward = $reward;

        return $this;
    }
}
