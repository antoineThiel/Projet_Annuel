<?php

namespace App\Entity;

use App\Entity\Translations\ProductTranslation;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;
use Gedmo\Translatable\Translatable;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ProductRepository")
 * @Gedmo\TranslationEntity(class="App\Entity\Translations\ProductTranslation")
 */
class Product implements Translatable
{

    const UNIT = [
        'grammes' => 'g',
        'kilogrammes' => 'kg',
        'centilitres' => 'cl',
        'litres' => 'L',
        'unité' => 'u'
    ];


    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @Gedmo\Translatable
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\Column(type="float")
     */
    private $price;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Dish", inversedBy="products")
     */
    private $dish;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\ProductOrigin", inversedBy="products")
     * @ORM\JoinColumn(nullable=false)
     */
    private $origin;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\ProductCategory", inversedBy="products")
     * @ORM\JoinColumn(nullable=false)
     */
    private $category;

    /**
     * @ORM\OneToMany(
     *     targetEntity="App\Entity\Translations\ProductTranslation",
     *     mappedBy="object",
     *     cascade={"persist", "remove"}
     *     )
     */
    private $translations;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $unit;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $unitQuantity;

    public function __construct()
    {
        $this->dish = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getPrice(): ?int
    {
        return $this->price;
    }

    public function setPrice(int $price): self
    {
        $this->price = $price;

        return $this;
    }

    /**
     * @return Collection|Dish[]
     */
    public function getDish(): Collection
    {
        return $this->dish;
    }

    public function addDish(Dish $dish): self
    {
        if (!$this->dish->contains($dish)) {
            $this->dish[] = $dish;
        }

        return $this;
    }

    public function removeDish(Dish $dish): self
    {
        if ($this->dish->contains($dish)) {
            $this->dish->removeElement($dish);
        }

        return $this;
    }

    public function getOrigin(): ?ProductOrigin
    {
        return $this->origin;
    }

    public function setOrigin(?ProductOrigin $origin): self
    {
        $this->origin = $origin;

        return $this;
    }

    public function getCategory(): ?ProductCategory
    {
        return $this->category;
    }

    public function setCategory(?ProductCategory $category): self
    {
        $this->category = $category;

        return $this;
    }

    public function __toString(): string
    {
        return $this->name.' '.$this->unitQuantity.' '.$this->unit;
    }

    public function getTranslations()
    {
        return $this->translations;
    }

    public function addTranslation(ProductTranslation $t)
    {
        if (!$this->translations->contains($t)) {
            $this->translations[] = $t;
            $t->setObject($this);
        }
    }

    public function getUnit(): ?string
    {
        return $this->unit;
    }

    public function setUnit(?string $unit): self
    {
        $this->unit = $unit;

        return $this;
    }

    public function getUnitQuantity(): ?float
    {
        return $this->unitQuantity;
    }

    public function setUnitQuantity(?float $unitQuantity): self
    {
        $this->unitQuantity = $unitQuantity;

        return $this;
    }
}
