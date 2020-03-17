# Projet_Annuel

Website Business Owner (Symfony, Twig, Doctrine)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  Download Composer :
    https://getcomposer.org/download/

  Clone the project

  First intall :
    composer install

  Update Project : 
    composer update

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
    
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Qrencode C
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  Install :
    
    git clone https://github.com/fukuchi/libqrencode.git
  
    apt install :
      autoconf
      libtool
      pkg-config
      libpng-dev
      libgtk-3-dev
    
    cmd (sudo): 
      autogen.sh
      ./configure
       make install
       ldconfig
   
   Compilation : 
        make compil
   
   Lancement : 
        make launch
