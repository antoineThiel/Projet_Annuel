<?php


namespace App\Form;

use App\Entity\OrderProduct;
use App\Entity\WarehouseProduct;
use App\Repository\WarehouseProductRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\MoneyType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;


class OrderProductEmbeddedForm extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('product', EntityType::class, [
                'class' => WarehouseProduct::class,
                'query_builder' => function(WarehouseProductRepository $pr) use ($options) {

                    return $pr->createQueryBuilder('p')
                        ->where('p.warehouse = :warehouse')
                        ->setParameter('warehouse', $options['warehouse'])
                        ->orderBy('p.id', 'ASC');
                }
            ])
            ->add('quantity', IntegerType::class, [
                'attr' => [
                    'placeholder' => 'Quantity',
                    'min' => 1
                ]
            ])
            ->add('price', MoneyType::class)
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => OrderProduct::class,
            'warehouse' => false
        ]);
    }
}