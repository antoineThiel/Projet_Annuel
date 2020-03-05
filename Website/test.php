<?php

require_once("vendor/autoload.php");

$loader = new \Twig\Loader\FilesystemLoader(__DIR__ . '/Templates');
$twig = new \Twig\Environment($loader, [
    'debug' => true,
    // ...
]);
$twig->addExtension(new \Twig\Extension\DebugExtension());

$names[] = 'antoine';
$names[] = 'thomas';
dump($names);die();

echo $twig->render('demo.twig', ['name' => $names]);