<?php
namespace App\Services;

use App\Entity\FranchiseeArticle;
use App\Entity\StockProduct;
use App\Repository\StockProductRepository;
use Doctrine\Persistence\ObjectManager;

class UnitConverter
{
    private ObjectManager $em;

    /**
     * UnitConverter constructor.
     * @param ObjectManager $em
     */
    public function __construct(ObjectManager $em)
    {
        $this->em = $em;
    }


    public function convertStocks(StockProduct $product, FranchiseeArticle $article , int $addOrReduce): bool
    {
        $originalUnit = strtoupper($product->getUnit());

        $articleUnit = strtoupper($article->getUnit());

        $articleQuantity = $article->getQuantity() * $addOrReduce;

        if( in_array( $originalUnit  , ['ML' , 'CL' , 'L']) ) //drinks actually
        {

            $original = $this->convertVolumes($originalUnit , $product->getQuantity() , $articleUnit , $articleQuantity);
        }else{
            $original = $this->convertWeights($originalUnit , $product->getQuantity() , $articleUnit , $articleQuantity);

        }

        if($original === null){
            return true;
        }

        $product->setQuantity($original);
        $this->em->persist($article);
        $this->em->flush();

        return false;
    }

    public function convertVolumes(string $originalUnit , float $originalVolume , string $articleUnit ,float $articleVolume): ?float
    {

        switch ($originalUnit) {
            case 'L':
                $originalVolume *= 1000;
                break;
            case 'CL':
                $originalVolume *= 10;
                break;
        }
        switch ($articleUnit) {
            case 'L':
                $articleVolume *= 1000;
                break;
            case 'CL':
                $articleVolume *= 10;
                break;
        }

        $originalVolume -= $articleVolume;
        if ($originalVolume < 0){
            return null;
        }
        switch ($originalUnit) {
            case 'L':
                $originalVolume /= 1000;
                break;
            case 'CL':
                $originalVolume /= 10;
                break;
        }

        return $originalVolume;
    }

    public function convertWeights(string $originalUnit , float $originalWeight , string $articleUnit ,float $articleWeight): ?float
    {
        $originalUnit = strtoupper($originalUnit);
        switch ($originalUnit) {
            case 'KG':
                $originalWeight *= 1000;
                break;
            case 'G':
                $originalWeight *= 1;
                break;
        }
        switch ($articleUnit) {
            case 'KG':
                $articleWeight *= 1000;
                break;
            case 'G':
                $articleWeight *= 1;
                break;
        }

        $originalWeight -= $articleWeight;
        if ($originalWeight < 0){
            return null;
        }

        switch ($originalUnit) {
            case 'KG':
                $originalWeight /= 1000;
                break;
            case 'G':
                $originalWeight /= 1;
                break;
        }

        return $originalWeight;

    }


}