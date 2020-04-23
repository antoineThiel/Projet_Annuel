<?php

namespace App\Form;

use App\Entity\OrderByFranchisee;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\DateType;

class OrderType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {

        $builder
            ->add('date', DateType::class, [
                'widget' => 'single_text',
                'disabled' => true
            ])
            ->add('orderProduct', CollectionType::class, [
                'entry_type' => OrderProductEmbeddedForm::class,
                'entry_options' => [
                    'label' => false,
                    'warehouse' => $options['warehouse_id']
                ],
                'by_reference' => false,
                'allow_add' => true,
                'allow_delete' => true,
            ])
            ->add('orderDish', CollectionType::class, [
                'entry_type' => OrderDishEmbeddedForm::class,
                'entry_options' => [
                    'label' => false,
                    'warehouse' => $options['warehouse_id']
                ],
                'by_reference' => false,
                'allow_add' => true,
                'allow_delete' => true,
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => OrderByFranchisee::class,
            'warehouse_id' => false,
        ]);
    }
}
