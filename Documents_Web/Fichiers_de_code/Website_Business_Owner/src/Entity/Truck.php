<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\TruckRepository")
 */
class Truck
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
    private $registration;



    /**
     * @ORM\OneToMany(targetEntity="App\Entity\TruckComplaint", mappedBy="truck", orphanRemoval=true)
     */
    private $truckComplaints;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\Franchisee", mappedBy="truck", cascade={"persist", "remove"})
     */
    private $franchise;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\TruckPosition", mappedBy="truck")
     */
    private $truckPositions;

    public function __construct()
    {
        $this->truckComplaints = new ArrayCollection();
        $this->truckPositions = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getRegistration(): ?string
    {
        return $this->registration;
    }

    public function setRegistration(string $registration): self
    {
        $this->registration = $registration;

        return $this;
    }


    public function __toString() : string
    {
        return $this->registration;
    }



    /**
     * @return Collection|TruckComplaint[]
     */
    public function getTruckComplaints(): Collection
    {
        return $this->truckComplaints;
    }

    public function addTruckComplaint(TruckComplaint $truckComplaint): self
    {
        if (!$this->truckComplaints->contains($truckComplaint)) {
            $this->truckComplaints[] = $truckComplaint;
            $truckComplaint->setTruck($this);
        }

        return $this;
    }

    public function removeTruckComplaint(TruckComplaint $truckComplaint): self
    {
        if ($this->truckComplaints->contains($truckComplaint)) {
            $this->truckComplaints->removeElement($truckComplaint);
            // set the owning side to null (unless already changed)
            if ($truckComplaint->getTruck() === $this) {
                $truckComplaint->setTruck(null);
            }
        }

        return $this;
    }

    public function getFranchise(): ?Franchisee
    {
        return $this->franchise;
    }

    public function setFranchise(?Franchisee $franchise): self
    {
        $this->franchise = $franchise;

        // set (or unset) the owning side of the relation if necessary
        $newTruck = null === $franchise ? null : $this;
        if ($franchise->getTruck() !== $newTruck) {
            $franchise->setTruck($newTruck);
        }

        return $this;
    }

    /**
     * @return Collection|TruckPosition[]
     */
    public function getTruckPositions(): Collection
    {
        return $this->truckPositions;
    }

    public function addTruckPosition(TruckPosition $truckPosition): self
    {
        if (!$this->truckPositions->contains($truckPosition)) {
            $this->truckPositions[] = $truckPosition;
            $truckPosition->setTruck($this);
        }

        return $this;
    }

    public function removeTruckPosition(TruckPosition $truckPosition): self
    {
        if ($this->truckPositions->contains($truckPosition)) {
            $this->truckPositions->removeElement($truckPosition);
            // set the owning side to null (unless already changed)
            if ($truckPosition->getTruck() === $this) {
                $truckPosition->setTruck(null);
            }
        }

        return $this;
    }
}
