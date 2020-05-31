<?php

namespace App\Form;

use App\Entity\StockProduct;
use App\Services\UnitConverter;
use phpDocumentor\Reflection\Types\Integer;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class StockProductType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {

        $builder
            ->add('name')
            ->add('unit', ChoiceType::class, [
                'choices' => [
                    "ml"    => "ml",
                    "cl"    => "cl",
                    "dl"    => "dl",
                    "L"     => "L" ,
                    "mg"    => "mg",
                    "g"     => "g" ,
                    "kg"    => "kg",
                    "t"     => "t"
                ]
            ])
            ->add('qty',TextType::class,[
                'label' => "Quantité"
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => StockProduct::class,
        ]);
    }
}
