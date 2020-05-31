<?php

namespace App\Form;

use App\Entity\Franchisee;
use App\Entity\FranchiseeMenu;
use App\Repository\FranchiseeArticleRepository;
use App\Repository\StockDishRepository;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class FranchiseeMenuType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {

        $builder
            ->add('name')
            ->add('price')
            ->add('articleComponents' , ChoiceType::class , [
                'data' => '',
                'choices' => [
                    'Super' => 'ROLE_SUPER_ADMIN',
                    'RH' => 'ROLE_RH',
                    'LOGISTIC' => 'ROLE_LOGISTIC',
                ],
                'multiple' => true,
                'expanded' => true,
            ])
            ->add('stockDish' , ChoiceType::class , [
                'data' => '',
                'choices' => [
                    'Super' => 'ROLE_SUPER_ADMIN',
                    'RH' => 'ROLE_RH',
                    'LOGISTIC' => 'ROLE_LOGISTIC',
                ],
                'multiple' => true,
                'expanded' => true,
            ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => FranchiseeMenu::class,
        ]);
    }
}
