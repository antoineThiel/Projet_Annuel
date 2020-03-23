<?php

namespace App\Form;

use App\Entity\Franchisee;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class FranchiseeType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('lastName')
            ->add('firstName')
            ->add('mail')
            ->add('city')
            ->add('postalCode')
            ->add('address')
            ->add('license')
            ->add('phone')
            ->add('dish')
            ->add('product')
            ->add('truck')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Franchisee::class,
        ]);
    }
}
