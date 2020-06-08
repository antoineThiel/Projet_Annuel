<?php

namespace App\Form;

use App\Entity\Dish;
use App\Entity\Product;
use App\Entity\Warehouse;
use App\Repository\DishRepository;
use App\Repository\ProductRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class WarehouseType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('city' , TextType::class , [
                'label' => 'Ville',
            ])
            ->add('address' , TextType::class, [
                'label' => 'Addresse',
            ])
            ->add('warehouseProduct', CollectionType::class, [
                'entry_type' => WarehouseProductEmbeddedForm::class,
                'entry_options' => [
                    'label' => false
                ],
                'by_reference' => false,
                'allow_add' => true,
                'allow_delete' => true,
                'attr' => [ 'class' => 'hidden']
            ])
            ->add('warehouseDish', CollectionType::class, [
                'entry_type' => WarehouseDishEmbeddedForm::class,
                'entry_options' => [
                    'label' => false
                ],
                'by_reference' => false,
                'allow_add' => true,
                'allow_delete' => true,
                'attr' => [ 'class' => 'hidden']
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Warehouse::class,
        ]);
    }
}
