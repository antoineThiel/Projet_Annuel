<?php

namespace App\Form;

use App\Entity\Franchisee;
use App\Entity\Truck;
use Doctrine\ORM\Query\Expr\Join;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class FranchiseeType extends AbstractType
{
    private $entityManager;

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
            ->add('password')
            ->add('truck', EntityType::class, [
                'class' => Truck::class,
                'query_builder' => function ($entityType) {
                        return $entityType
                            ->createQueryBuilder('t')
                            ->leftJoin('App\Entity\Franchisee' , 'f' , Join::WITH , 'f.truck = t.id' )
                            ->where('f.truck IS NULL');

                },
                'choice_label' => 'registration',

            ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Franchisee::class,
        ]);
    }
}
