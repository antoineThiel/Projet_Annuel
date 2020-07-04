<?php

namespace App\Form;

use App\Entity\Rank;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\MoneyType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class RankType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('title', TextType::class , [
                'label' => 'Intitulé',
            ])
            ->add('minimum', MoneyType::class , [
                'label' => 'Chiffre d\'affaires minimum',
                'attr' => [
                'placeholder' => '€/mois'
                    ]
            ])
            ->add('reward' , IntegerType::class , [
                'label' => 'Avantage',
                'attr' => [
                'placeholder' => "%",
                    ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Rank::class,
        ]);
    }
}
