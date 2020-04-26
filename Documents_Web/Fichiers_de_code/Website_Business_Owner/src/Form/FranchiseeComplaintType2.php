<?php

namespace App\Form;

use App\Entity\Franchisee;
use App\Entity\FranchiseeComplaint;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class FranchiseeComplaintType2 extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('title')
            ->add('content')
            ->add('answer')
            ->add('isNew')
            ->add('isOngoing')
            ->add('isClosed')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => FranchiseeComplaint::class,
        ]);
    }
}
