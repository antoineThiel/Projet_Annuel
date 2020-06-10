<?php

namespace App\Form;

use App\Entity\Product;
use App\Entity\ProductCategory;
use App\Entity\ProductOrigin;
use Entity\Category;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\MoneyType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ProductType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name' , TextType::class , [
                'label' => 'Nom',
            ])
            ->add('price' , MoneyType::class , [
                'label' => 'Prix',
            ])
            ->add('category' , EntityType::class , [
                'class' => ProductCategory::class,
                'label' => 'Catégorie',
            ])
            ->add('origin' , EntityType::class , [
                'class' => ProductOrigin::class,
                'label' => 'Origine',
            ])
            ->add('unit_quantity' , IntegerType::class , [
                'label' => 'Quantité par unité',
            ])
            ->add('unit', ChoiceType::class, [
                'choices' => Product::UNIT,
                'multiple' => false,
                'expanded' => false,
                'label' => 'Unité',
            ])
            ->add('save', SubmitType::class , [
                'label' => 'Enregistrer',
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Product::class,
        ]);
    }
}
