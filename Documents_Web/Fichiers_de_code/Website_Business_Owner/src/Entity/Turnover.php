<?php

namespace App\Entity;

use App\Entity\Traits\StatusTrait;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass="App\Repository\TurnoverRepository")
 */
class Turnover
{

    use StatusTrait;

    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="float")
     * @Assert\Positive
     */
    private $amount;

    /**
     * @ORM\Column(type="float")
     */
    private $percentAmount;

    /**
     * @ORM\Column(type="datetime")
     */
    private $date;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Franchisee", inversedBy="turnover")
     * @ORM\JoinColumn(nullable=false)
     */
    private $franchisee;

    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param mixed $id
     */
    public function setId($id)
    {
        $this->id = $id;
    }

    /**
     * @return mixed
     */
    public function getAmount()
    {
        return $this->amount;
    }

    /**
     * @param mixed $amount
     */
    public function setAmount($amount)
    {
        $this->amount = $amount;
    }

    /**
     * @return mixed
     */
    public function getPercentAmount()
    {
        return $this->percentAmount;
    }

    /**
     * @param mixed $percentAmount
     */
    public function setPercentAmount($percentAmount)
    {
        $this->percentAmount = $percentAmount;
    }

    /**
     * @return mixed
     */
    public function getDate()
    {
        return $this->date;
    }

    /**
     * @param mixed $date
     */
    public function setDate($date)
    {
        $this->date = $date;
    }

    /**
     * @return mixed
     */
    public function getFranchisee()
    {
        return $this->franchisee;
    }

    /**
     * @param mixed $franchisee
     */
    public function setFranchisee($franchisee)
    {
        $this->franchisee = $franchisee;
    }



}
