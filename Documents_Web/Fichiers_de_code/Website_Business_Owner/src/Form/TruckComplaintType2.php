<?php

namespace App\Form;

use App\Entity\Truck;
use App\Entity\TruckComplaint;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class TruckComplaintType2 extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('date', DateType::class, [
                'widget' => 'single_text',
                'disabled' => true
            ])
            ->add('title')
            ->add('content')
            ->add('answer')
            ->add('truck', EntityType::class, [
                'class' => Truck::class,
                'disabled' => true
            ])
            ->add('isNew')
            ->add('isOngoing')
            ->add('isClosed')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => TruckComplaint::class,
        ]);
    }
}
