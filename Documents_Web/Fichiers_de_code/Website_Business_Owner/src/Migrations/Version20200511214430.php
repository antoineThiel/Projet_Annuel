<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200511214430 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE dish_translations (id INT AUTO_INCREMENT NOT NULL, object_id INT DEFAULT NULL, locale VARCHAR(8) NOT NULL, field VARCHAR(32) NOT NULL, content LONGTEXT DEFAULT NULL, INDEX IDX_1605DD43232D562B (object_id), UNIQUE INDEX lookup_unique_dish_idx (locale, object_id, field), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE dish_translations ADD CONSTRAINT FK_1605DD43232D562B FOREIGN KEY (object_id) REFERENCES dish (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE ext_log_entries CHANGE object_id object_id VARCHAR(64) DEFAULT NULL, CHANGE data data LONGTEXT DEFAULT NULL COMMENT \'(DC2Type:array)\', CHANGE username username VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE franchisee CHANGE truck_id truck_id INT DEFAULT NULL, CHANGE roles roles JSON DEFAULT NULL COMMENT \'(DC2Type:json_array)\'');
        $this->addSql('ALTER TABLE invoice ADD CONSTRAINT FK_90651744E39F23E7 FOREIGN KEY (linked_order_id) REFERENCES order_by_franchisee (id)');
        $this->addSql('ALTER TABLE order_dish DROP FOREIGN KEY FK_D88CB6AF148EB0CB');
        $this->addSql('ALTER TABLE order_dish ADD id INT AUTO_INCREMENT NOT NULL, ADD quantity DOUBLE PRECISION NOT NULL, ADD price DOUBLE PRECISION NOT NULL, DROP PRIMARY KEY, ADD PRIMARY KEY (id)');
        $this->addSql('ALTER TABLE order_dish ADD CONSTRAINT FK_D88CB6AF8D9F6D38 FOREIGN KEY (order_id) REFERENCES order_by_franchisee (id)');
        $this->addSql('ALTER TABLE order_dish ADD CONSTRAINT FK_D88CB6AF148EB0CB FOREIGN KEY (dish_id) REFERENCES warehouse_dish (id)');
        $this->addSql('ALTER TABLE order_product DROP FOREIGN KEY FK_2530ADE64584665A');
        $this->addSql('ALTER TABLE order_product ADD id INT AUTO_INCREMENT NOT NULL, ADD quantity DOUBLE PRECISION NOT NULL, ADD price DOUBLE PRECISION NOT NULL, DROP PRIMARY KEY, ADD PRIMARY KEY (id)');
        $this->addSql('ALTER TABLE order_product ADD CONSTRAINT FK_2530ADE68D9F6D38 FOREIGN KEY (order_id) REFERENCES order_by_franchisee (id)');
        $this->addSql('ALTER TABLE order_product ADD CONSTRAINT FK_2530ADE64584665A FOREIGN KEY (product_id) REFERENCES warehouse_product (id)');
        $this->addSql('ALTER TABLE category_translations CHANGE object_id object_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE product_translations CHANGE object_id object_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE truck_complaint ADD answer LONGTEXT DEFAULT NULL, ADD is_new TINYINT(1) NOT NULL, ADD is_ongoing TINYINT(1) NOT NULL, ADD is_closed TINYINT(1) NOT NULL, CHANGE content content LONGTEXT NOT NULL');
        $this->addSql('ALTER TABLE truck_position ADD truck_id INT DEFAULT NULL, ADD address VARCHAR(255) NOT NULL, ADD city VARCHAR(255) NOT NULL, ADD state TINYINT(1) NOT NULL, DROP longitude, DROP latitude');
        $this->addSql('ALTER TABLE truck_position ADD CONSTRAINT FK_2AEDC037C6957CCE FOREIGN KEY (truck_id) REFERENCES truck (id)');
        $this->addSql('CREATE INDEX IDX_2AEDC037C6957CCE ON truck_position (truck_id)');
        $this->addSql('ALTER TABLE warehouse_dish ADD price DOUBLE PRECISION NOT NULL');
        $this->addSql('ALTER TABLE warehouse_product ADD price DOUBLE PRECISION NOT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE dish_translations');
        $this->addSql('ALTER TABLE category_translations CHANGE object_id object_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE ext_log_entries CHANGE object_id object_id VARCHAR(64) CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_unicode_ci`, CHANGE data data LONGTEXT CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_unicode_ci` COMMENT \'(DC2Type:array)\', CHANGE username username VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE franchisee CHANGE truck_id truck_id INT DEFAULT NULL, CHANGE roles roles JSON CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_bin` COMMENT \'(DC2Type:json_array)\'');
        $this->addSql('ALTER TABLE invoice DROP FOREIGN KEY FK_90651744E39F23E7');
        $this->addSql('ALTER TABLE order_dish MODIFY id INT NOT NULL');
        $this->addSql('ALTER TABLE order_dish DROP FOREIGN KEY FK_D88CB6AF8D9F6D38');
        $this->addSql('ALTER TABLE order_dish DROP FOREIGN KEY FK_D88CB6AF148EB0CB');
        $this->addSql('ALTER TABLE order_dish DROP PRIMARY KEY');
        $this->addSql('ALTER TABLE order_dish DROP id, DROP quantity, DROP price');
        $this->addSql('ALTER TABLE order_dish ADD CONSTRAINT FK_D88CB6AF148EB0CB FOREIGN KEY (dish_id) REFERENCES dish (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE order_dish ADD PRIMARY KEY (order_id, dish_id)');
        $this->addSql('ALTER TABLE order_product MODIFY id INT NOT NULL');
        $this->addSql('ALTER TABLE order_product DROP FOREIGN KEY FK_2530ADE68D9F6D38');
        $this->addSql('ALTER TABLE order_product DROP FOREIGN KEY FK_2530ADE64584665A');
        $this->addSql('ALTER TABLE order_product DROP PRIMARY KEY');
        $this->addSql('ALTER TABLE order_product DROP id, DROP quantity, DROP price');
        $this->addSql('ALTER TABLE order_product ADD CONSTRAINT FK_2530ADE64584665A FOREIGN KEY (product_id) REFERENCES product (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE order_product ADD PRIMARY KEY (order_id, product_id)');
        $this->addSql('ALTER TABLE product_translations CHANGE object_id object_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE truck_complaint DROP answer, DROP is_new, DROP is_ongoing, DROP is_closed, CHANGE content content VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE truck_position DROP FOREIGN KEY FK_2AEDC037C6957CCE');
        $this->addSql('DROP INDEX IDX_2AEDC037C6957CCE ON truck_position');
        $this->addSql('ALTER TABLE truck_position ADD longitude DOUBLE PRECISION NOT NULL, ADD latitude DOUBLE PRECISION NOT NULL, DROP truck_id, DROP address, DROP city, DROP state');
        $this->addSql('ALTER TABLE warehouse_dish DROP price');
        $this->addSql('ALTER TABLE warehouse_product DROP price');
    }
}
