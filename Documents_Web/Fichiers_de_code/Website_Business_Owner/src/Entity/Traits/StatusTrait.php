<?php

namespace App\Entity\Traits;
use Doctrine\ORM\Mapping as ORM;

trait StatusTrait
{
    /**
     * @ORM\Column(type="boolean")
     */
    private $isNew;

    /**
     * @ORM\Column(type="boolean")
     */
    private $isOngoing;

    /**
     * @ORM\Column(type="boolean")
     */
    private $isClosed;

    /**
     * @return mixed
     */
    public function getIsNew()
    {
        return $this->isNew;
    }

    /**
     * @param mixed $isNew
     */
    public function setIsNew($isNew): void
    {
        $this->isNew = $isNew;
    }

    /**
     * @return mixed
     */
    public function getIsOngoing()
    {
        return $this->isOngoing;
    }

    /**
     * @param mixed $isOngoing
     */
    public function setIsOngoing($isOngoing): void
    {
        $this->isOngoing = $isOngoing;
    }

    /**
     * @return mixed
     */
    public function getIsClosed()
    {
        return $this->isClosed;
    }

    /**
     * @param mixed $isClosed
     */
    public function setIsClosed($isClosed): void
    {
        $this->isClosed = $isClosed;
    }


}