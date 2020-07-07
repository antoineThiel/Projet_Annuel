<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\UserInterface;

/**
 * @ORM\Entity(repositoryClass="App\Repository\FranchiseeRepository")
 */
class Franchisee implements UserInterface
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
    private $lastName;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $firstName;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $mail;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $city;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $postalCode;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $address;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $license;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $phone;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Invoice", mappedBy="franchisee", orphanRemoval=true)
     */
    private $invoices;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\Truck", inversedBy="franchise", cascade={"persist", "remove"})
     */
    private $truck;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $password;

    /**
     * @ORM\Column(type="json_array", nullable=true)
     */
    private $roles = [];

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\FranchiseeComplaint", mappedBy="franchisee")
     */
    private $franchiseeComplaints;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Turnover" , mappedBy="franchisee")
     */
    private $turnover;

    /**
     * @ORM\ManyToOne(targetEntity=Rank::class, inversedBy="franchisee")
     */
    private $rank;

    /**
     * @ORM\OneToMany(targetEntity=ExternalInvoice::class, mappedBy="franchisee")
     */
    private $externalInvoices;

    /**
     * @ORM\OneToMany(targetEntity=StockProduct::class, mappedBy="franchisee", orphanRemoval=true)
     */
    private $stockProducts;

    /**
     * @ORM\OneToMany(targetEntity=StockDish::class, mappedBy="franchisee", orphanRemoval=true)
     */
    private $stockDishes;

    /**
     * @ORM\OneToMany(targetEntity=FranchiseeMenu::class, mappedBy="franchisee")
     */
    private $franchiseeMenus;

    /**
     * @ORM\OneToMany(targetEntity=FranchiseeArticle::class, mappedBy="franchisee")
     */
    private $franchiseeArticles;

    /**
     * @ORM\OneToMany(targetEntity=CustomerOrder::class, mappedBy="franchisee")
     */
    private $customerOrders;





    public function __construct()
    {
        $this->dish = new ArrayCollection();
        $this->product = new ArrayCollection();
        $this->invoices = new ArrayCollection();
        $this->franchiseeComplaints = new ArrayCollection();
        $this->externalInvoices = new ArrayCollection();
        $this->stockProducts = new ArrayCollection();
        $this->stockDishes = new ArrayCollection();
        $this->franchiseeMenus = new ArrayCollection();
        $this->franchiseeArticles = new ArrayCollection();
        $this->customerOrders = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLastName(): ?string
    {
        return $this->lastName;
    }

    public function setLastName(string $lastName): self
    {
        $this->lastName = $lastName;

        return $this;
    }

    public function getFirstName(): ?string
    {
        return $this->firstName;
    }

    public function setFirstName(string $firstName): self
    {
        $this->firstName = $firstName;

        return $this;
    }

    public function getMail(): ?string
    {
        return $this->mail;
    }

    public function setMail(string $mail): self
    {
        $this->mail = $mail;

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

    public function getPostalCode(): ?string
    {
        return $this->postalCode;
    }

    public function setPostalCode(string $postalCode): self
    {
        $this->postalCode = $postalCode;

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

    public function getLicense(): ?string
    {
        return $this->license;
    }

    public function setLicense(string $license): self
    {
        $this->license = $license;

        return $this;
    }

    public function getPhone(): ?string
    {
        return $this->phone;
    }

    public function setPhone(string $phone): self
    {
        $this->phone = $phone;

        return $this;
    }



    public function __toString(): string
    {
        return $this->lastName;
    }

    /**
     * @return Collection|Invoice[]
     */
    public function getInvoices(): Collection
    {
        return $this->invoices;
    }

    public function addInvoice(Invoice $invoice): self
    {
        if (!$this->invoices->contains($invoice)) {
            $this->invoices[] = $invoice;
            $invoice->setFranchisee($this);
        }

        return $this;
    }

    public function removeInvoice(Invoice $invoice): self
    {
        if ($this->invoices->contains($invoice)) {
            $this->invoices->removeElement($invoice);
            // set the owning side to null (unless already changed)
            if ($invoice->getFranchisee() === $this) {
                $invoice->setFranchisee(null);
            }
        }

        return $this;
    }

    public function getTruck(): ?Truck
    {
        return $this->truck;
    }

    public function setTruck(?Truck $truck): self
    {
        $this->truck = $truck;

        return $this;
    }

    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    public function getRoles(): array
    {
        $roles = $this->roles;
        $roles[] = 'ROLE_FRANCHISEE';
        return $roles;
    }

    public function setRoles(): array
    {

        return $roles=[];


    }

    /**
     * @inheritDoc
     */
    public function getSalt()
    {
        // TODO: Implement getSalt() method.
    }

    /**
     * @inheritDoc
     */
    public function getUsername(): ?string
    {
        return $this->mail;
    }

    /**
     * @inheritDoc
     */
    public function eraseCredentials()
    {
        // TODO: Implement eraseCredentials() method.
    }

    /**
     * @return Collection|FranchiseeComplaint[]
     */
    public function getFranchiseeComplaints(): Collection
    {
        return $this->franchiseeComplaints;
    }

    public function addFranchiseeComplaint(FranchiseeComplaint $franchiseeComplaint): self
    {
        if (!$this->franchiseeComplaints->contains($franchiseeComplaint)) {
            $this->franchiseeComplaints[] = $franchiseeComplaint;
            $franchiseeComplaint->setFranchisee($this);
        }

        return $this;
    }

    public function removeFranchiseeComplaint(FranchiseeComplaint $franchiseeComplaint): self
    {
        if ($this->franchiseeComplaints->contains($franchiseeComplaint)) {
            $this->franchiseeComplaints->removeElement($franchiseeComplaint);
            // set the owning side to null (unless already changed)
            if ($franchiseeComplaint->getFranchisee() === $this) {
                $franchiseeComplaint->setFranchisee(null);
            }
        }

        return $this;
    }

    /**
     * @return mixed
     */
    public function getTurnover()
    {
        return $this->turnover;
    }

    /**
     * @param mixed $turnover
     */
    public function setTurnover($turnover): void
    {
        $this->turnover = $turnover;
    }

    public function getRank(): ?Rank
    {
        return $this->rank;
    }

    public function setRank(?Rank $rank): self
    {
        $this->rank = $rank;

        return $this;
    }

    /**
     * @return Collection|ExternalInvoice[]
     */
    public function getExternalInvoices(): Collection
    {
        return $this->externalInvoices;
    }

    public function addExternalInvoice(ExternalInvoice $externalInvoice): self
    {
        if (!$this->externalInvoices->contains($externalInvoice)) {
            $this->externalInvoices[] = $externalInvoice;
            $externalInvoice->setFranchisee($this);
        }

        return $this;
    }

    public function removeExternalInvoice(ExternalInvoice $externalInvoice): self
    {
        if ($this->externalInvoices->contains($externalInvoice)) {
            $this->externalInvoices->removeElement($externalInvoice);
            // set the owning side to null (unless already changed)
            if ($externalInvoice->getFranchisee() === $this) {
                $externalInvoice->setFranchisee(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|StockProduct[]
     */
    public function getStockProducts(): Collection
    {
        return $this->stockProducts;
    }

    public function addStockProduct(StockProduct $stockProduct): self
    {
        if (!$this->stockProducts->contains($stockProduct)) {
            $this->stockProducts[] = $stockProduct;
            $stockProduct->setFranchisee($this);
        }

        return $this;
    }

    public function removeStockProduct(StockProduct $stockProduct): self
    {
        if ($this->stockProducts->contains($stockProduct)) {
            $this->stockProducts->removeElement($stockProduct);
            // set the owning side to null (unless already changed)
            if ($stockProduct->getFranchisee() === $this) {
                $stockProduct->setFranchisee(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|StockDish[]
     */
    public function getStockDishes(): Collection
    {
        return $this->stockDishes;
    }

    public function addStockDish(StockDish $stockDish): self
    {
        if (!$this->stockDishes->contains($stockDish)) {
            $this->stockDishes[] = $stockDish;
            $stockDish->setFranchisee($this);
        }

        return $this;
    }

    public function removeStockDish(StockDish $stockDish): self
    {
        if ($this->stockDishes->contains($stockDish)) {
            $this->stockDishes->removeElement($stockDish);
            // set the owning side to null (unless already changed)
            if ($stockDish->getFranchisee() === $this) {
                $stockDish->setFranchisee(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|FranchiseeMenu[]
     */
    public function getFranchiseeMenus(): Collection
    {
        return $this->franchiseeMenus;
    }

    public function addFranchiseeMenu(FranchiseeMenu $franchiseeMenu): self
    {
        if (!$this->franchiseeMenus->contains($franchiseeMenu)) {
            $this->franchiseeMenus[] = $franchiseeMenu;
            $franchiseeMenu->setFranchisee($this);
        }

        return $this;
    }

    public function removeFranchiseeMenu(FranchiseeMenu $franchiseeMenu): self
    {
        if ($this->franchiseeMenus->contains($franchiseeMenu)) {
            $this->franchiseeMenus->removeElement($franchiseeMenu);
            // set the owning side to null (unless already changed)
            if ($franchiseeMenu->getFranchisee() === $this) {
                $franchiseeMenu->setFranchisee(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|FranchiseeArticle[]
     */
    public function getFranchiseeArticles(): Collection
    {
        return $this->franchiseeArticles;
    }

    public function addFranchiseeArticle(FranchiseeArticle $franchiseeArticle): self
    {
        if (!$this->franchiseeArticles->contains($franchiseeArticle)) {
            $this->franchiseeArticles[] = $franchiseeArticle;
            $franchiseeArticle->setFranchisee($this);
        }

        return $this;
    }

    public function removeFranchiseeArticle(FranchiseeArticle $franchiseeArticle): self
    {
        if ($this->franchiseeArticles->contains($franchiseeArticle)) {
            $this->franchiseeArticles->removeElement($franchiseeArticle);
            // set the owning side to null (unless already changed)
            if ($franchiseeArticle->getFranchisee() === $this) {
                $franchiseeArticle->setFranchisee(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|CustomerOrder[]
     */
    public function getCustomerOrders(): Collection
    {
        return $this->customerOrders;
    }

    public function addCustomerOrder(CustomerOrder $customerOrder): self
    {
        if (!$this->customerOrders->contains($customerOrder)) {
            $this->customerOrders[] = $customerOrder;
            $customerOrder->setFranchisee($this);
        }

        return $this;
    }

    public function removeCustomerOrder(CustomerOrder $customerOrder): self
    {
        if ($this->customerOrders->contains($customerOrder)) {
            $this->customerOrders->removeElement($customerOrder);
            // set the owning side to null (unless already changed)
            if ($customerOrder->getFranchisee() === $this) {
                $customerOrder->setFranchisee(null);
            }
        }

        return $this;
    }

}
