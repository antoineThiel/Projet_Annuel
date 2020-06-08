<?php


namespace App\Form;


use App\Entity\Product;
use App\Entity\WarehouseProduct;
use App\Repository\ProductRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\MoneyType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class WarehouseProductEmbeddedForm extends AbstractType
{

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('product', EntityType::class, [
                'class' => Product::class,
                'query_builder' => function(ProductRepository $pr){
                    return $pr->createQueryBuilder('p')->orderBy('p.name', 'ASC');
                },
                'label' => 'Produit',
            ])
            ->add('quantity', IntegerType::class, [
                'attr' => ['placeholder' => 'Quantité']
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