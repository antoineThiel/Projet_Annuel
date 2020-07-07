<?php

namespace App\Form;


use App\Entity\Event;
use App\Entity\FranchiseeArticle;
use App\Entity\FranchiseeMenu;
use App\Repository\FranchiseeArticleRepository;
use App\Repository\FranchiseeMenuRepository;
use DateTime;
use Doctrine\DBAL\Types\Type;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Query\Expr\Join;
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
                'years' => range(date('Y'), date('Y') + 10),
                'months' => range(date('m'), 12),
            ])
            ->add('endDate', DateType::class, [
                'format' => 'dd/MM/yyyy',
                'html5' => false,
                'years' => range(date('Y'), date('Y') + 10),
                'months' => range(date('m'), 12),
            ])
            ->add('articles', EntityType::class, [
                'class' => FranchiseeArticle::class,
                'choice_label' => 'name',
                'expanded' => true,
                'multiple' => true,
                'empty_data' => '',
                'required'=> false,
                'query_builder' => function (FranchiseeArticleRepository $ar) {
                    return $ar->createQueryBuilder('f')
                        ->leftJoin('App\Entity\Event' , 'e' , Join::WITH , 'f.event = e.id' )
                        ->andWhere('e.endDate < :date OR f.event is null ')
                        ->orderBy('f.name', 'ASC')
                        ->setParameter('date' ,new DateTime(),Type::DATETIME);
                }
            ])
            ->add('menues', EntityType::class, [
                'class' => FranchiseeMenu::class,
                'choice_label' => 'name',
                'expanded' => true,
                'multiple' => true,
                'empty_data' => '',
                'required' => false,
                'query_builder' => function (FranchiseeMenuRepository $ar) {
                    return $ar->createQueryBuilder('f')
                        ->leftJoin('App\Entity\Event' , 'e' , Join::WITH , 'f.event = e.id' )
                        ->andWhere('e.endDate < :date OR f.event is null ')
                        ->orderBy('f.name', 'ASC')
                        ->setParameter('date' ,new DateTime(),Type::DATETIME);
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