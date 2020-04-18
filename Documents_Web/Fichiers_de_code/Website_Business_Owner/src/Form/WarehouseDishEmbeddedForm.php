<?php


namespace App\Form;


use App\Entity\Dish;
use App\Entity\WarehouseDish;
use App\Repository\DishRepository;
use App\Repository\ProductRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class WarehouseDishEmbeddedForm extends AbstractType
{

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('dish', EntityType::class, [
                'class' => Dish::class,
                'choice_label' => 'name',
                'query_builder' => function(DishRepository $pr){
                    return $pr->createQueryBuilder('d')->orderBy('d.name', 'ASC');
                }
            ])
            ->add('quantity')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' =>WarehouseDish::class
        ]);
    }
}