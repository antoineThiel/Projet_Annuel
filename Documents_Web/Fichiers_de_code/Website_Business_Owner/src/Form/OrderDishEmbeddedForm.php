<?php


namespace App\Form;


use App\Entity\OrderDish;
use App\Entity\WarehouseDish;
use App\Repository\WarehouseDishRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\MoneyType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class OrderDishEmbeddedForm extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('dish', EntityType::class, [
                'class' => WarehouseDish::class,
                'query_builder' => function(WarehouseDishRepository $pr) use ($options) {
                    return $pr->createQueryBuilder('p')
                        ->where('p.warehouse = :warehouse')
                        ->setParameter('warehouse', $options['warehouse'])
                        ->orderBy('p.id', 'ASC');
                }
            ])
            ->add('quantity', IntegerType::class, [
                'attr' => [
                    'placeholder' => 'Quantity',
                    'min' => 1]
            ])
            ->add('price', MoneyType::class)
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => OrderDish::class,
            'warehouse' => false
        ]);
    }

}