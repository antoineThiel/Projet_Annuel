# Projet_Annuel

Website Business Owner (Symfony, Twig, Doctrine)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  Xampp 7.4.3 prefered
  add "127.0.0.1 drivncook.local" to c://windows/system32/driver/etc/hosts
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
    
  Yarn : 
    Download and install yarn and nodeJs then do : 
      yarn install

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
    
  To create/edit Js Files :
    Directory -> assets/js/
    if you add a new js file :
    webpack.config.js -> add a new .addEntry(name, pathtojsfile)
    
    When you edit a js file to see the difference you have to run : 
      yarn encore dev
      
    To edit/create css file
    Directory -> assets/css/
    Edit : just run yarn encore dev when you're done
    Create : 
    add a new import in the assets/js/app.js file with the path to your file 
  
    To update the database schema run : 
      php bin/console doctrine:migrations:migrate
    in case it doesn't work : 
      Delete all your migrations files in src/migration/
      and run : 
      php bin/console make:migration
      php bin/console doctrine:migrations:migrate or the one proposed with the name of the version
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
