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
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class EventType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('startDate', DateType::class, [
                'label' => 'Date de début',
                'html5'=>false,
                'format' => 'ddMMyyyy',
                'years' => range(date('Y'), date('Y') + 10),
                'months' => range(date('m'), 12),
            ])
            ->add('endDate', DateType::class, [
                'label' => 'Date de fin',
                'format' => 'ddMMyyyy',
                'html5' => false,
                'years' => range(date('Y'), date('Y') + 10),
                'months' => range(date('m'), 12),
            ])
            ->add('articles', EntityType::class, [
                'label' => 'Les articles',
                'class' => FranchiseeArticle::class,
                'choice_label' => 'name',
                'expanded' => true,
                'multiple' => true,
                'empty_data' => '',
                'required' => false,
                'query_builder' => function (FranchiseeArticleRepository $ar) {
                    return $ar->createQueryBuilder('f')
                        ->leftJoin('App\Entity\Event', 'e', Join::WITH, 'f.event = e.id')
                        ->andWhere('e.endDate < :date  OR f.event is null')
                        ->orderBy('f.name', 'ASC')
                        ->setParameter('date', new DateTime(), Type::DATETIME);
                }
            ])
            ->add('menues', EntityType::class, [
                'label' => 'Les menues',
                'class' => FranchiseeMenu::class,
                'choice_label' => 'name',
                'expanded' => true,
                'multiple' => true,
                'empty_data' => '',
                'required' => false,
                'query_builder' => function (FranchiseeMenuRepository $ar) {
                    return $ar->createQueryBuilder('f')
                        ->leftJoin('App\Entity\Event', 'e', Join::WITH, 'f.event = e.id')
                        ->andWhere('e.endDate < :date OR f.event is null')
                        ->orderBy('f.name', 'ASC')
                        ->setParameter('date', new DateTime(), Type::DATETIME);
                }
            ])
            ->add('reduction', TextType::class, [
                'label' => 'Reduction %',
            ]);

    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Event::class,
        ]);
    }
}