<?php

namespace App\Form;


use App\Entity\Event;
use App\Entity\FranchiseeArticle;
use App\Entity\FranchiseeMenu;
use App\Repository\FranchiseeArticleRepository;
use App\Repository\FranchiseeMenuRepository;
use DateTime;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class EventType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('startDate', DateType::class, [
                'format' => 'dd/MM/yyyy',
                'years' => range(date('Y'), date('Y')+10),
                'months' => range(date('m'), 12),
            ])

            ->add('endDate', DateType::class, [
                'format' => 'dd/MM/yyyy',
                'html5' => false,
                'years' => range(date('Y'), date('Y')+10),
                'months' => range(date('m'), 12),
            ])
            ->add('articles', EntityType::class, [
                'class' => FranchiseeArticle::class,
                'choice_label' => 'name',
                'expanded'=> true,
                'multiple' => true,
                'empty_data' => true,
                'query_builder' => function(FranchiseeArticleRepository $ar){
                    return $ar->createQueryBuilder('f')->orderBy('f.name', 'ASC');
                }
            ])
            ->add('menues', EntityType::class, [
                'class' => FranchiseeMenu::class,
                'choice_label' => 'name',
                'expanded'=> true,
                'multiple' => true,
                'empty_data' => true,
                'query_builder' => function(FranchiseeMenuRepository $ar){
                    return $ar->createQueryBuilder('f')->orderBy('f.name', 'ASC');
                }
            ])
            ->add('Reduction');

    }
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Event::class,
        ]);
    }
}