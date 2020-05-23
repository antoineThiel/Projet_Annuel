<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200523225726 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE customer_order (id INT AUTO_INCREMENT NOT NULL, customer_id INT NOT NULL, date DATE NOT NULL, ammount DOUBLE PRECISION NOT NULL, invoice VARCHAR(255) NOT NULL, UNIQUE INDEX UNIQ_3B1CE6A39395C3F3 (customer_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE customer_order_franchisee_menu (customer_order_id INT NOT NULL, franchisee_menu_id INT NOT NULL, INDEX IDX_8DD9572CA15A2E17 (customer_order_id), INDEX IDX_8DD9572C8CB0B9DF (franchisee_menu_id), PRIMARY KEY(customer_order_id, franchisee_menu_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE customer_order_franchisee_article (customer_order_id INT NOT NULL, franchisee_article_id INT NOT NULL, INDEX IDX_930E3CAEA15A2E17 (customer_order_id), INDEX IDX_930E3CAE828E2A60 (franchisee_article_id), PRIMARY KEY(customer_order_id, franchisee_article_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE franchisee_article (id INT AUTO_INCREMENT NOT NULL, stock_product_id INT DEFAULT NULL, stock_dish_id INT DEFAULT NULL, name VARCHAR(255) NOT NULL, price DOUBLE PRECISION NOT NULL, unit VARCHAR(10) DEFAULT NULL, quantity DOUBLE PRECISION NOT NULL, INDEX IDX_425D5EABEBCD91F6 (stock_product_id), INDEX IDX_425D5EABD28A068 (stock_dish_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE franchisee_menu (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, price DOUBLE PRECISION NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE franchisee_menu_franchisee_article (franchisee_menu_id INT NOT NULL, franchisee_article_id INT NOT NULL, INDEX IDX_2AB149DA8CB0B9DF (franchisee_menu_id), INDEX IDX_2AB149DA828E2A60 (franchisee_article_id), PRIMARY KEY(franchisee_menu_id, franchisee_article_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE franchisee_menu_stock_dish (franchisee_menu_id INT NOT NULL, stock_dish_id INT NOT NULL, INDEX IDX_22BEBC548CB0B9DF (franchisee_menu_id), INDEX IDX_22BEBC54D28A068 (stock_dish_id), PRIMARY KEY(franchisee_menu_id, stock_dish_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE loyalty_card (id INT AUTO_INCREMENT NOT NULL, points INT NOT NULL, newest_order DATE DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE stock_dish (id INT AUTO_INCREMENT NOT NULL, franchisee_id INT NOT NULL, name VARCHAR(255) NOT NULL, unit VARCHAR(10) DEFAULT NULL, quantity DOUBLE PRECISION NOT NULL, INDEX IDX_8C67D47C635B249 (franchisee_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE stock_product (id INT AUTO_INCREMENT NOT NULL, franchisee_id INT NOT NULL, name VARCHAR(255) NOT NULL, unit VARCHAR(10) DEFAULT NULL, qty DOUBLE PRECISION NOT NULL, relation VARCHAR(255) NOT NULL, INDEX IDX_CAEC140E635B249 (franchisee_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE customer_order ADD CONSTRAINT FK_3B1CE6A39395C3F3 FOREIGN KEY (customer_id) REFERENCES customer (id)');
        $this->addSql('ALTER TABLE customer_order_franchisee_menu ADD CONSTRAINT FK_8DD9572CA15A2E17 FOREIGN KEY (customer_order_id) REFERENCES customer_order (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE customer_order_franchisee_menu ADD CONSTRAINT FK_8DD9572C8CB0B9DF FOREIGN KEY (franchisee_menu_id) REFERENCES franchisee_menu (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE customer_order_franchisee_article ADD CONSTRAINT FK_930E3CAEA15A2E17 FOREIGN KEY (customer_order_id) REFERENCES customer_order (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE customer_order_franchisee_article ADD CONSTRAINT FK_930E3CAE828E2A60 FOREIGN KEY (franchisee_article_id) REFERENCES franchisee_article (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE franchisee_article ADD CONSTRAINT FK_425D5EABEBCD91F6 FOREIGN KEY (stock_product_id) REFERENCES stock_product (id)');
        $this->addSql('ALTER TABLE franchisee_article ADD CONSTRAINT FK_425D5EABD28A068 FOREIGN KEY (stock_dish_id) REFERENCES stock_dish (id)');
        $this->addSql('ALTER TABLE franchisee_menu_franchisee_article ADD CONSTRAINT FK_2AB149DA8CB0B9DF FOREIGN KEY (franchisee_menu_id) REFERENCES franchisee_menu (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE franchisee_menu_franchisee_article ADD CONSTRAINT FK_2AB149DA828E2A60 FOREIGN KEY (franchisee_article_id) REFERENCES franchisee_article (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE franchisee_menu_stock_dish ADD CONSTRAINT FK_22BEBC548CB0B9DF FOREIGN KEY (franchisee_menu_id) REFERENCES franchisee_menu (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE franchisee_menu_stock_dish ADD CONSTRAINT FK_22BEBC54D28A068 FOREIGN KEY (stock_dish_id) REFERENCES stock_dish (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE stock_dish ADD CONSTRAINT FK_8C67D47C635B249 FOREIGN KEY (franchisee_id) REFERENCES franchisee (id)');
        $this->addSql('ALTER TABLE stock_product ADD CONSTRAINT FK_CAEC140E635B249 FOREIGN KEY (franchisee_id) REFERENCES franchisee (id)');
        $this->addSql('ALTER TABLE ext_log_entries CHANGE object_id object_id VARCHAR(64) DEFAULT NULL, CHANGE data data LONGTEXT DEFAULT NULL COMMENT \'(DC2Type:array)\', CHANGE username username VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE customer ADD name VARCHAR(255) NOT NULL, ADD lastname VARCHAR(255) NOT NULL, ADD mail VARCHAR(255) NOT NULL, ADD birthdate DATE DEFAULT NULL, ADD phone VARCHAR(10) DEFAULT NULL');
        $this->addSql('ALTER TABLE external_invoice CHANGE ammount ammount DOUBLE PRECISION DEFAULT NULL');
        $this->addSql('ALTER TABLE franchisee CHANGE truck_id truck_id INT DEFAULT NULL, CHANGE rank_id rank_id INT DEFAULT NULL, CHANGE roles roles JSON DEFAULT NULL COMMENT \'(DC2Type:json_array)\'');
        $this->addSql('ALTER TABLE product CHANGE unit unit VARCHAR(255) DEFAULT NULL, CHANGE unit_quantity unit_quantity DOUBLE PRECISION DEFAULT NULL');
        $this->addSql('ALTER TABLE truck_position CHANGE truck_id truck_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE category_translations CHANGE object_id object_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE dish_translations CHANGE object_id object_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE product_translations CHANGE object_id object_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE rank_translations CHANGE object_id object_id INT DEFAULT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE customer_order_franchisee_menu DROP FOREIGN KEY FK_8DD9572CA15A2E17');
        $this->addSql('ALTER TABLE customer_order_franchisee_article DROP FOREIGN KEY FK_930E3CAEA15A2E17');
        $this->addSql('ALTER TABLE customer_order_franchisee_article DROP FOREIGN KEY FK_930E3CAE828E2A60');
        $this->addSql('ALTER TABLE franchisee_menu_franchisee_article DROP FOREIGN KEY FK_2AB149DA828E2A60');
        $this->addSql('ALTER TABLE customer_order_franchisee_menu DROP FOREIGN KEY FK_8DD9572C8CB0B9DF');
        $this->addSql('ALTER TABLE franchisee_menu_franchisee_article DROP FOREIGN KEY FK_2AB149DA8CB0B9DF');
        $this->addSql('ALTER TABLE franchisee_menu_stock_dish DROP FOREIGN KEY FK_22BEBC548CB0B9DF');
        $this->addSql('ALTER TABLE franchisee_article DROP FOREIGN KEY FK_425D5EABD28A068');
        $this->addSql('ALTER TABLE franchisee_menu_stock_dish DROP FOREIGN KEY FK_22BEBC54D28A068');
        $this->addSql('ALTER TABLE franchisee_article DROP FOREIGN KEY FK_425D5EABEBCD91F6');
        $this->addSql('DROP TABLE customer_order');
        $this->addSql('DROP TABLE customer_order_franchisee_menu');
        $this->addSql('DROP TABLE customer_order_franchisee_article');
        $this->addSql('DROP TABLE franchisee_article');
        $this->addSql('DROP TABLE franchisee_menu');
        $this->addSql('DROP TABLE franchisee_menu_franchisee_article');
        $this->addSql('DROP TABLE franchisee_menu_stock_dish');
        $this->addSql('DROP TABLE loyalty_card');
        $this->addSql('DROP TABLE stock_dish');
        $this->addSql('DROP TABLE stock_product');
        $this->addSql('ALTER TABLE category_translations CHANGE object_id object_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE customer DROP name, DROP lastname, DROP mail, DROP birthdate, DROP phone');
        $this->addSql('ALTER TABLE dish_translations CHANGE object_id object_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE ext_log_entries CHANGE object_id object_id VARCHAR(64) CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_unicode_ci`, CHANGE data data LONGTEXT CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_unicode_ci` COMMENT \'(DC2Type:array)\', CHANGE username username VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE external_invoice CHANGE ammount ammount DOUBLE PRECISION DEFAULT \'NULL\'');
        $this->addSql('ALTER TABLE franchisee CHANGE truck_id truck_id INT DEFAULT NULL, CHANGE rank_id rank_id INT DEFAULT NULL, CHANGE roles roles JSON CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_bin` COMMENT \'(DC2Type:json_array)\'');
        $this->addSql('ALTER TABLE product CHANGE unit unit VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_unicode_ci`, CHANGE unit_quantity unit_quantity DOUBLE PRECISION DEFAULT \'NULL\'');
        $this->addSql('ALTER TABLE product_translations CHANGE object_id object_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE rank_translations CHANGE object_id object_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE truck_position CHANGE truck_id truck_id INT DEFAULT NULL');
    }
}
