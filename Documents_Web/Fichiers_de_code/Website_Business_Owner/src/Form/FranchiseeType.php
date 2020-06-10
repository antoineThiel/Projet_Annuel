<?php

namespace App\Form;

use App\Entity\Franchisee;
use App\Entity\Truck;
use Doctrine\ORM\Query\Expr\Join;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class FranchiseeType extends AbstractType
{
    private $entityManager;

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('lastName' , TextType::class , [
                'label' => 'Nom de famille',
            ])
            ->add('firstName' , TextType::class , [
                'label' => 'Prénom',
            ])
            ->add('mail' , EmailType::class , [
                'label' => 'Adresse mail'
            ])
            ->add('city' , TextType::class , [
                'label' => 'Ville',
            ])
            ->add('postalCode' , IntegerType::class , [
                'label' => 'Code postal',
                'attr' => ['min' => 9999, 'max' => 99999],
            ])
            ->add('address', TextType::class, [
                'label' => 'Adresse',
            ])
            ->add('license' , IntegerType::class , [
                'label' => 'N° de permis de conduire',
            ])
            ->add('phone' , IntegerType::class , [
                'label' => 'N° de téléphone',
            ])
//            ->add('password')
            ->add('truck', EntityType::class, [
                'class' => Truck::class,
                'query_builder' => function ($entityType) {
                        return $entityType
                            ->createQueryBuilder('t')
                            ->leftJoin('App\Entity\Franchisee' , 'f' , Join::WITH , 'f.truck = t.id' )
                            ->where('f.truck IS NULL');

                },
                'choice_label' => 'registration',
                'label' => 'Camion',

            ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Franchisee::class,
        ]);
    }
}
