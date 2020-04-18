<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200415161938 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');


        $this->addSql('ALTER TABLE franchisee ADD truck_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE franchisee ADD CONSTRAINT FK_34074542C6957CCE FOREIGN KEY (truck_id) REFERENCES truck (id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_34074542C6957CCE ON franchisee (truck_id)');
        $this->addSql('ALTER TABLE truck DROP FOREIGN KEY FK_CDCCF30A635B249');
        $this->addSql('DROP INDEX IDX_CDCCF30A635B249 ON truck');
        $this->addSql('ALTER TABLE truck DROP franchisee_id');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE invoice DROP FOREIGN KEY FK_90651744E39F23E7');
        $this->addSql('ALTER TABLE order_product DROP FOREIGN KEY FK_2530ADE68D9F6D38');
        $this->addSql('ALTER TABLE order_dish DROP FOREIGN KEY FK_D88CB6AF8D9F6D38');
        $this->addSql('CREATE TABLE order_by_franchisee (id INT AUTO_INCREMENT NOT NULL, warehouse_id INT DEFAULT NULL, date DATETIME NOT NULL, ammount DOUBLE PRECISION NOT NULL, UNIQUE INDEX UNIQ_4990DEF65080ECDE (warehouse_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE order_by_franchisee ADD CONSTRAINT FK_4990DEF65080ECDE FOREIGN KEY (warehouse_id) REFERENCES warehouse (id)');
        $this->addSql('DROP TABLE `order`');
        $this->addSql('ALTER TABLE franchisee DROP FOREIGN KEY FK_34074542C6957CCE');
        $this->addSql('DROP INDEX UNIQ_34074542C6957CCE ON franchisee');
        $this->addSql('ALTER TABLE franchisee DROP truck_id');
        $this->addSql('ALTER TABLE invoice DROP FOREIGN KEY FK_90651744E39F23E7');
        $this->addSql('ALTER TABLE invoice ADD CONSTRAINT FK_90651744E39F23E7 FOREIGN KEY (linked_order_id) REFERENCES order_by_franchisee (id)');
        $this->addSql('ALTER TABLE order_dish DROP FOREIGN KEY FK_D88CB6AF8D9F6D38');
        $this->addSql('ALTER TABLE order_dish DROP FOREIGN KEY FK_D88CB6AF148EB0CB');
        $this->addSql('ALTER TABLE order_dish ADD id INT AUTO_INCREMENT NOT NULL, ADD quantity DOUBLE PRECISION NOT NULL, DROP PRIMARY KEY, ADD PRIMARY KEY (id)');
        $this->addSql('ALTER TABLE order_dish ADD CONSTRAINT FK_D88CB6AF8D9F6D38 FOREIGN KEY (order_id) REFERENCES order_by_franchisee (id)');
        $this->addSql('ALTER TABLE order_dish ADD CONSTRAINT FK_D88CB6AF148EB0CB FOREIGN KEY (dish_id) REFERENCES dish (id)');
        $this->addSql('ALTER TABLE order_product DROP FOREIGN KEY FK_2530ADE68D9F6D38');
        $this->addSql('ALTER TABLE order_product DROP FOREIGN KEY FK_2530ADE64584665A');
        $this->addSql('ALTER TABLE order_product ADD id INT AUTO_INCREMENT NOT NULL, ADD quantity DOUBLE PRECISION NOT NULL, DROP PRIMARY KEY, ADD PRIMARY KEY (id)');
        $this->addSql('ALTER TABLE order_product ADD CONSTRAINT FK_2530ADE68D9F6D38 FOREIGN KEY (order_id) REFERENCES order_by_franchisee (id)');
        $this->addSql('ALTER TABLE order_product ADD CONSTRAINT FK_2530ADE64584665A FOREIGN KEY (product_id) REFERENCES product (id)');
        $this->addSql('ALTER TABLE truck ADD franchisee_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE truck ADD CONSTRAINT FK_CDCCF30A635B249 FOREIGN KEY (franchisee_id) REFERENCES franchisee (id)');
        $this->addSql('CREATE INDEX IDX_CDCCF30A635B249 ON truck (franchisee_id)');
    }
}
