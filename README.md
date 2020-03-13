# Projet_Annuel

Website Business Owner (Symfony, Twig, Doctrine)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  Download Composer :
    https://getcomposer.org/download/

  Clone the project

  First intall :
    composer install

  Update Project : 
    compsoer update

Doctrine : 
  In the ".env" file you have to configure the DATABASE_URL link with your setup.
  Ex: 
    dbname        = "project"
    user          = "root"
    password      = "banane"
    server        = "mysql"
    serverVersion = "5.7"
    Port          = "3308"
    host          = "localhost"
    
    DATABSE_URL=mysql://root:banane@127.0.0.1:3308/project?serverVersion=5.7
    
  
  To create a Entity (Class) : 
    php bin/console make:entity
    It will create the Entity, the Repository for the Entity
    
