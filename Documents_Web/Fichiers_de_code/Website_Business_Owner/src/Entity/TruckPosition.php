<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\TruckPositionRepository")
 */
class TruckPosition
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;


    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Truck", inversedBy="positions")
     */
    private $truck;

    /**
     * @ORM\Column(type="date")
     */
    private $date;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $address;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $city;

    /**
     * @ORM\Column(type="float")
     */
    private $postal_code;

    public function __construct()
    {
        $this->truck = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }


    /**
     * @return Collection|Truck[]
     */
    public function getTruck(): Collection
    {
        return $this->truck;
    }

    public function addTruck(Truck $truck): self
    {
        if (!$this->truck->contains($truck)) {
            $this->truck[] = $truck;
        }

        return $this;
    }

    public function removeTruck(Truck $truck): self
    {
        if ($this->truck->contains($truck)) {
            $this->truck->removeElement($truck);
        }

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

    public function getAddress(): ?string
    {
        return $this->address;
    }

    public function setAddress(string $address): self
    {
        $this->address = $address;

        return $this;
    }

    public function getCity(): ?string
    {
        return $this->city;
    }

    public function setCity(string $city): self
    {
        $this->city = $city;

        return $this;
    }

    public function getPostalCode(): ?float
    {
        return $this->postal_code;
    }

    public function setPostalCode(float $postal_code): self
    {
        $this->postal_code = $postal_code;

        return $this;
    }
}
