# Projet_Annuel

Website Business Owner (Symfony, Twig, Doctrine)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  Xampp 7.4.3 prefered
  add "127.0.0.1 drivncook.local" to c://windows/system32/hosts
  configure xampp/apache/conf/extras/httpd-vhosts.conf
     add 
     <VirtualHost *:80>
         DocumentRoot "C:/xampp/htdocs/Projet_Annuel/Documents_Web/Fichiers_de_code/Website_Business_Owner/public/"
         ServerName drivncook.local
     </VirtualHost>

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
  
    apt install :
      autoconf
      libtool
      pkg-config
      libpng-dev
      libgtk-3-dev
    
    git clone https://github.com/fukuchi/libqrencode.git
    
    cmd (sudo) dans libqrencode: 
      ./autogen.sh
      ./configure
       make install
       ldconfig
   
   Compilation : 
        make compil
   
   Lancement : 
        make launch
