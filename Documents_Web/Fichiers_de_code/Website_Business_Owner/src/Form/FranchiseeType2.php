<?php

namespace App\Form;

use App\Entity\Franchisee;
use App\Entity\Truck;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class FranchiseeType2 extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('lastName')
            ->add('firstName')
            ->add('mail', EmailType::class)
            ->add('city')
            ->add('postalCode', IntegerType::class, [
                'attr' => ['min' => 01000, 'max' => 95680]
            ])
            ->add('address')
            ->add('license', IntegerType::class, [
                'attr' => ['min' => 100000000000, 'max' => 999999999999],
            ])
            ->add('phone')
            ->add('password')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Franchisee::class,
        ]);
    }
}
