<?php

namespace App\Entity;

use App\Repository\LoyaltyCardRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=LoyaltyCardRepository::class)
 */
class LoyaltyCard
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer")
     */
    private $points;

    /**
     * @ORM\Column(type="date", nullable=true)
     */
    private $newest_order;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPoints(): ?int
    {
        return $this->points;
    }

    public function setPoints(int $points): self
    {
        $this->points = $points;

        return $this;
    }

    public function getNewestOrder(): ?\DateTimeInterface
    {
        return $this->newest_order;
    }

    public function setNewestOrder(?\DateTimeInterface $newest_order): self
    {
        $this->newest_order = $newest_order;

        return $this;
    }
}
