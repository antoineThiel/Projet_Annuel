<?php

namespace App\Entity;

use App\Entity\Traits\StatusTrait;
use Doctrine\ORM\Mapping as ORM;

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
     */
    private $amount_turnover;

    /**
     * @ORM\Column(type="datetime")
     */
    private $date_turnover;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Franchisee", inversedBy="invoices")
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
    public function getAmountTurnover()
    {
        return $this->amount_turnover;
    }

    /**
     * @param mixed $amount_turnover
     */
    public function setAmountTurnover($amount_turnover)
    {
        $this->amount_turnover = $amount_turnover;
    }

    /**
     * @return mixed
     */
    public function getDateTurnover()
    {
        return $this->date_turnover;
    }

    /**
     * @param mixed $date_turnover
     */
    public function setDateTurnover($date_turnover)
    {
        $this->date_turnover = $date_turnover;
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
