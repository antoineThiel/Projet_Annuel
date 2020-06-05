<?php


namespace App\Form;


use App\Entity\FranchiseeArticle;
use App\Entity\MenuToArticle;
use App\Repository\FranchiseeArticleRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class MenuArticleEmbeddedForm extends AbstractType
{

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('franchiseeArticle', EntityType::class, [
                'class' => FranchiseeArticle::class,
                'choice_label' => 'name',
                'query_builder' => function(FranchiseeArticleRepository $ar){
                    return $ar->createQueryBuilder('f')->orderBy('f.name', 'ASC');
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
            'data_class' =>MenuToArticle::class
        ]);
    }
}