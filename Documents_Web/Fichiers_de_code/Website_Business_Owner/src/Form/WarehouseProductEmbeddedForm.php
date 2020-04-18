<?php


namespace App\Form;


use App\Entity\Product;
use App\Entity\WarehouseProduct;
use App\Repository\ProductRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class WarehouseProductEmbeddedForm extends AbstractType
{

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('product', EntityType::class, [
                'class' => Product::class,
                'choice_label' => 'name',
                'query_builder' => function(ProductRepository $pr){
                    return $pr->createQueryBuilder('p')->orderBy('p.name', 'ASC');
                }
            ])
            ->add('quantity')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' =>WarehouseProduct::class
        ]);
    }
}