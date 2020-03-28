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
     * @ORM\ManyToOne(targetEntity="App\Entity\Franchisee", inversedBy="truck")
     * @ORM\JoinColumn(name="franchisee_id", referencedColumnName="id", nullable=true)
     */
    private $franchisee;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\TruckPosition", mappedBy="truck")
     */
    private $positions;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\TruckComplaint", mappedBy="truck", orphanRemoval=true)
     */
    private $truckComplaints;

    public function __construct()
    {
        $this->positions = new ArrayCollection();
        $this->truckComplaints = new ArrayCollection();
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

    public function getFranchisee(): ?Franchisee
    {
        return $this->franchisee;
    }

    public function setFranchisee(?Franchisee $franchisee): self
    {
        $this->franchisee = $franchisee;

        return $this;
    }

    public function __toString() : string
    {
        return $this->registration;
    }

    /**
     * @return Collection|TruckPosition[]
     */
    public function getPositions(): Collection
    {
        return $this->positions;
    }

    public function addPosition(TruckPosition $position): self
    {
        if (!$this->positions->contains($position)) {
            $this->positions[] = $position;
            $position->addTruck($this);
        }

        return $this;
    }

    public function removePosition(TruckPosition $position): self
    {
        if ($this->positions->contains($position)) {
            $this->positions->removeElement($position);
            $position->removeTruck($this);
        }

        return $this;
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
}
