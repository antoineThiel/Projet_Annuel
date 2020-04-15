<?php


namespace App\Form;

use App\Entity\OrderProduct;
use App\Entity\Product;
use App\Entity\WarehouseProduct;
use App\Repository\WarehouseProductRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;


class OrderProductEmbeddedForm extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('product', EntityType::class, [
                'class' => WarehouseProduct::class,
                'choice_label' => 'id',
                'query_builder' => function(WarehouseProductRepository $pr) use ($options) {
                    return $pr->createQueryBuilder('p')
                        ->where('p.warehouse = :warehouse')
                        ->setParameter('warehouse', $options['data']->getId())
                        ->orderBy('p.id', 'ASC');
                }
            ])
            ->add('quantity', IntegerType::class, [
                'attr' => ['placeholder' => 'Quantity']
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' =>WarehouseProduct::class
        ]);
    }
}