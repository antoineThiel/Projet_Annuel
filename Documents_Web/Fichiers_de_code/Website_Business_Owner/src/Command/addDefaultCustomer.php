<?php


namespace App\Command;

use App\Entity\Customer;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class addDefaultCustomer extends Command
{
    protected static $defaultName = 'app:default_customer';
    private $em;

    public function __construct(EntityManagerInterface $em)
    {
        parent::__construct();
        $this->em = $em;
    }


    protected function configure()
    {
        $this
            ->setDescription('Add a customer named guest used when people come to our desk');

    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {

        $em = $this->em;

        $customerRepository = $em->getRepository(Customer::class);

        if($customerRepository->findBy(['name' => 'guest']) != null){
            $output->writeln('Default customer table already exists, can\'t set it twice!' );
            return 0;
        }

        $output->writeln('Filling Customer table...');
        $output->writeln('');


        $guest = new Customer();
        $guest->setName('guest')
            ->setLastname('guest')
            ->setPassword('')
            ->setMail('no.mail@user.fr')
            ->setFidelity(0);

        $em->persist($guest);

        $em->flush();

        $output->writeln('Done ! Without errors');
        return 0;
    }
}