<?php

namespace App\Command;

use App\Entity\Rank;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class FillRanksCommand extends Command
{
    protected static $defaultName = 'app:fill-ranks';
    private $em;

    public function __construct(EntityManagerInterface $em)
    {
        parent::__construct();
        $this->em = $em;
    }


    protected function configure()
    {
        $this
            ->setDescription('Fills table rank with 4 ranks')
            ->addArgument('force', InputArgument::OPTIONAL);

    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {

        $em = $this->em;

        $rankRepository = $em->getRepository(Rank::class);

        if( $input->getArgument('force') != "force" ) {
            if( count($rankRepository->findAll()) != 0 ){
                $output->writeln("La table contient déjà des données !");
                $output->writeln("Pour ne pas en tenir compte, jouez php bin/console app:fill-ranks force");
                return 1;
            }
        }

        $output->writeln('Filling rank table...');
        $output->writeln('');


        $rank1 = new Rank();
        $rank1->setTitle('Bronze')
            ->setMinimum(0)
            ->setReward(0);

        $rank2 = new Rank();

        $rank2->setTitle('Argent')
            ->setMinimum(1800)
            ->setReward(0.5);

        $rank3 = new Rank();

        $rank3->setTitle('Or')
            ->setMinimum(3000)
            ->setReward(2);


        $rank4 = new Rank();
        $rank4->setTitle('Diamant')
            ->setMinimum(4200)
            ->setReward(4);

        $ranks = array($rank1 , $rank2 , $rank3 , $rank4);

        foreach ($ranks as $oneRank) {
            $em->persist($oneRank);
        }
        $em->flush();

        $output->writeln('Done ! Without errors');
        return 0;
    }
}