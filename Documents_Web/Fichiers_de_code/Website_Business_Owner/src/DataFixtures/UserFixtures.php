<?php

namespace App\DataFixtures;

use App\Entity\Role;
use App\Form\RoleType;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;

class UserFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $role = new Role();
        $role->setTitle('SUPER_ADMIN');
        $manager->persist($role);

        $user = new \App\Entity\User();
        $user->setUsername('toinou');
        $user->setPassword('banane');
        $user->setRole($role);
        $manager->persist($user);

        $manager->flush();
    }
}
