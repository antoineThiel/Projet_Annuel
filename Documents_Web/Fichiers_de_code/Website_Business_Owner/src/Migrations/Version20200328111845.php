<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200328111845 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE dish_product (dish_id INT NOT NULL, product_id INT NOT NULL, INDEX IDX_43FD1E3B148EB0CB (dish_id), INDEX IDX_43FD1E3B4584665A (product_id), PRIMARY KEY(dish_id, product_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE invoice (id INT AUTO_INCREMENT NOT NULL, linked_order_id INT NOT NULL, franchisee_id INT NOT NULL, date DATE NOT NULL, ammount DOUBLE PRECISION NOT NULL, UNIQUE INDEX UNIQ_90651744E39F23E7 (linked_order_id), INDEX IDX_90651744635B249 (franchisee_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE `order` (id INT AUTO_INCREMENT NOT NULL, date DATETIME NOT NULL, ammount DOUBLE PRECISION NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE order_product (order_id INT NOT NULL, product_id INT NOT NULL, INDEX IDX_2530ADE68D9F6D38 (order_id), INDEX IDX_2530ADE64584665A (product_id), PRIMARY KEY(order_id, product_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE order_dish (order_id INT NOT NULL, dish_id INT NOT NULL, INDEX IDX_D88CB6AF8D9F6D38 (order_id), INDEX IDX_D88CB6AF148EB0CB (dish_id), PRIMARY KEY(order_id, dish_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE truck_complaint (id INT AUTO_INCREMENT NOT NULL, truck_id INT NOT NULL, date DATE NOT NULL, title VARCHAR(255) NOT NULL, content VARCHAR(255) NOT NULL, INDEX IDX_2A21500DC6957CCE (truck_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE truck_position (id INT AUTO_INCREMENT NOT NULL, longitude DOUBLE PRECISION NOT NULL, latitude DOUBLE PRECISION NOT NULL, date DATE NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE truck_position_truck (truck_position_id INT NOT NULL, truck_id INT NOT NULL, INDEX IDX_A6519A8B52247F84 (truck_position_id), INDEX IDX_A6519A8BC6957CCE (truck_id), PRIMARY KEY(truck_position_id, truck_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE warehouse (id INT AUTO_INCREMENT NOT NULL, city VARCHAR(255) NOT NULL, address VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE warehouse_product (warehouse_id INT NOT NULL, product_id INT NOT NULL, INDEX IDX_F4AD11D85080ECDE (warehouse_id), INDEX IDX_F4AD11D84584665A (product_id), PRIMARY KEY(warehouse_id, product_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE warehouse_dish (warehouse_id INT NOT NULL, dish_id INT NOT NULL, INDEX IDX_4A178C6C5080ECDE (warehouse_id), INDEX IDX_4A178C6C148EB0CB (dish_id), PRIMARY KEY(warehouse_id, dish_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE dish_product ADD CONSTRAINT FK_43FD1E3B148EB0CB FOREIGN KEY (dish_id) REFERENCES dish (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE dish_product ADD CONSTRAINT FK_43FD1E3B4584665A FOREIGN KEY (product_id) REFERENCES product (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE invoice ADD CONSTRAINT FK_90651744E39F23E7 FOREIGN KEY (linked_order_id) REFERENCES `order` (id)');
        $this->addSql('ALTER TABLE invoice ADD CONSTRAINT FK_90651744635B249 FOREIGN KEY (franchisee_id) REFERENCES franchisee (id)');
        $this->addSql('ALTER TABLE order_product ADD CONSTRAINT FK_2530ADE68D9F6D38 FOREIGN KEY (order_id) REFERENCES `order` (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE order_product ADD CONSTRAINT FK_2530ADE64584665A FOREIGN KEY (product_id) REFERENCES product (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE order_dish ADD CONSTRAINT FK_D88CB6AF8D9F6D38 FOREIGN KEY (order_id) REFERENCES `order` (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE order_dish ADD CONSTRAINT FK_D88CB6AF148EB0CB FOREIGN KEY (dish_id) REFERENCES dish (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE truck_complaint ADD CONSTRAINT FK_2A21500DC6957CCE FOREIGN KEY (truck_id) REFERENCES truck (id)');
        $this->addSql('ALTER TABLE truck_position_truck ADD CONSTRAINT FK_A6519A8B52247F84 FOREIGN KEY (truck_position_id) REFERENCES truck_position (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE truck_position_truck ADD CONSTRAINT FK_A6519A8BC6957CCE FOREIGN KEY (truck_id) REFERENCES truck (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE warehouse_product ADD CONSTRAINT FK_F4AD11D85080ECDE FOREIGN KEY (warehouse_id) REFERENCES warehouse (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE warehouse_product ADD CONSTRAINT FK_F4AD11D84584665A FOREIGN KEY (product_id) REFERENCES product (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE warehouse_dish ADD CONSTRAINT FK_4A178C6C5080ECDE FOREIGN KEY (warehouse_id) REFERENCES warehouse (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE warehouse_dish ADD CONSTRAINT FK_4A178C6C148EB0CB FOREIGN KEY (dish_id) REFERENCES dish (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE truck CHANGE franchisee_id franchisee_id INT DEFAULT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE invoice DROP FOREIGN KEY FK_90651744E39F23E7');
        $this->addSql('ALTER TABLE order_product DROP FOREIGN KEY FK_2530ADE68D9F6D38');
        $this->addSql('ALTER TABLE order_dish DROP FOREIGN KEY FK_D88CB6AF8D9F6D38');
        $this->addSql('ALTER TABLE truck_position_truck DROP FOREIGN KEY FK_A6519A8B52247F84');
        $this->addSql('ALTER TABLE warehouse_product DROP FOREIGN KEY FK_F4AD11D85080ECDE');
        $this->addSql('ALTER TABLE warehouse_dish DROP FOREIGN KEY FK_4A178C6C5080ECDE');
        $this->addSql('DROP TABLE dish_product');
        $this->addSql('DROP TABLE invoice');
        $this->addSql('DROP TABLE `order`');
        $this->addSql('DROP TABLE order_product');
        $this->addSql('DROP TABLE order_dish');
        $this->addSql('DROP TABLE truck_complaint');
        $this->addSql('DROP TABLE truck_position');
        $this->addSql('DROP TABLE truck_position_truck');
        $this->addSql('DROP TABLE warehouse');
        $this->addSql('DROP TABLE warehouse_product');
        $this->addSql('DROP TABLE warehouse_dish');
        $this->addSql('ALTER TABLE truck CHANGE franchisee_id franchisee_id INT DEFAULT NULL');
    }
}
