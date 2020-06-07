<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200606203255 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE menu_to_article (id INT AUTO_INCREMENT NOT NULL, franchisee_menu_id INT NOT NULL, franchisee_article_id INT NOT NULL, quantity INT NOT NULL, INDEX IDX_AD0F87418CB0B9DF (franchisee_menu_id), INDEX IDX_AD0F8741828E2A60 (franchisee_article_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE menu_to_article ADD CONSTRAINT FK_AD0F87418CB0B9DF FOREIGN KEY (franchisee_menu_id) REFERENCES franchisee_menu (id)');
        $this->addSql('ALTER TABLE menu_to_article ADD CONSTRAINT FK_AD0F8741828E2A60 FOREIGN KEY (franchisee_article_id) REFERENCES franchisee_article (id)');
        $this->addSql('DROP TABLE franchisee_menu_franchisee_article');
        $this->addSql('DROP TABLE franchisee_menu_stock_dish');
        $this->addSql('ALTER TABLE ext_log_entries CHANGE object_id object_id VARCHAR(64) DEFAULT NULL, CHANGE data data LONGTEXT DEFAULT NULL COMMENT \'(DC2Type:array)\', CHANGE username username VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE customer CHANGE birthdate birthdate DATE DEFAULT NULL, CHANGE phone phone VARCHAR(10) DEFAULT NULL');
        $this->addSql('ALTER TABLE customer_order DROP INDEX UNIQ_3B1CE6A39395C3F3, ADD INDEX IDX_3B1CE6A39395C3F3 (customer_id)');
        $this->addSql('ALTER TABLE external_invoice CHANGE ammount ammount DOUBLE PRECISION DEFAULT NULL');
        $this->addSql('ALTER TABLE franchisee CHANGE truck_id truck_id INT DEFAULT NULL, CHANGE rank_id rank_id INT DEFAULT NULL, CHANGE roles roles JSON DEFAULT NULL COMMENT \'(DC2Type:json_array)\'');
        $this->addSql('ALTER TABLE franchisee_article ADD franchisee_id INT NOT NULL, ADD stock INT NOT NULL, CHANGE stock_product_id stock_product_id INT DEFAULT NULL, CHANGE stock_dish_id stock_dish_id INT DEFAULT NULL, CHANGE unit unit VARCHAR(10) DEFAULT NULL');
        $this->addSql('ALTER TABLE franchisee_article ADD CONSTRAINT FK_425D5EAB635B249 FOREIGN KEY (franchisee_id) REFERENCES franchisee (id)');
        $this->addSql('CREATE INDEX IDX_425D5EAB635B249 ON franchisee_article (franchisee_id)');
        $this->addSql('ALTER TABLE franchisee_menu ADD franchisee_id INT NOT NULL, ADD stock INT NOT NULL');
        $this->addSql('ALTER TABLE franchisee_menu ADD CONSTRAINT FK_10BC0CDC635B249 FOREIGN KEY (franchisee_id) REFERENCES franchisee (id)');
        $this->addSql('CREATE INDEX IDX_10BC0CDC635B249 ON franchisee_menu (franchisee_id)');
        $this->addSql('ALTER TABLE loyalty_card CHANGE newest_order newest_order DATE DEFAULT NULL');
        $this->addSql('ALTER TABLE product CHANGE unit unit VARCHAR(255) DEFAULT NULL, CHANGE unit_quantity unit_quantity DOUBLE PRECISION DEFAULT NULL');
        $this->addSql('ALTER TABLE stock_product CHANGE unit unit VARCHAR(10) DEFAULT NULL, CHANGE qty quantity DOUBLE PRECISION NOT NULL');
        $this->addSql('ALTER TABLE category_translations CHANGE object_id object_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE dish_translations CHANGE object_id object_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE product_translations CHANGE object_id object_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE rank_translations CHANGE object_id object_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE truck_position CHANGE truck_id truck_id INT DEFAULT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE franchisee_menu_franchisee_article (franchisee_menu_id INT NOT NULL, franchisee_article_id INT NOT NULL, INDEX IDX_2AB149DA8CB0B9DF (franchisee_menu_id), INDEX IDX_2AB149DA828E2A60 (franchisee_article_id), PRIMARY KEY(franchisee_menu_id, franchisee_article_id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE franchisee_menu_stock_dish (franchisee_menu_id INT NOT NULL, stock_dish_id INT NOT NULL, INDEX IDX_22BEBC548CB0B9DF (franchisee_menu_id), INDEX IDX_22BEBC54D28A068 (stock_dish_id), PRIMARY KEY(franchisee_menu_id, stock_dish_id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE franchisee_menu_franchisee_article ADD CONSTRAINT FK_2AB149DA828E2A60 FOREIGN KEY (franchisee_article_id) REFERENCES franchisee_article (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE franchisee_menu_franchisee_article ADD CONSTRAINT FK_2AB149DA8CB0B9DF FOREIGN KEY (franchisee_menu_id) REFERENCES franchisee_menu (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE franchisee_menu_stock_dish ADD CONSTRAINT FK_22BEBC548CB0B9DF FOREIGN KEY (franchisee_menu_id) REFERENCES franchisee_menu (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE franchisee_menu_stock_dish ADD CONSTRAINT FK_22BEBC54D28A068 FOREIGN KEY (stock_dish_id) REFERENCES stock_dish (id) ON DELETE CASCADE');
        $this->addSql('DROP TABLE menu_to_article');
        $this->addSql('ALTER TABLE category_translations CHANGE object_id object_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE customer CHANGE birthdate birthdate DATE DEFAULT \'NULL\', CHANGE phone phone VARCHAR(10) CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE customer_order DROP INDEX IDX_3B1CE6A39395C3F3, ADD UNIQUE INDEX UNIQ_3B1CE6A39395C3F3 (customer_id)');
        $this->addSql('ALTER TABLE dish_translations CHANGE object_id object_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE ext_log_entries CHANGE object_id object_id VARCHAR(64) CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_unicode_ci`, CHANGE data data LONGTEXT CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_unicode_ci` COMMENT \'(DC2Type:array)\', CHANGE username username VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE external_invoice CHANGE ammount ammount DOUBLE PRECISION DEFAULT \'NULL\'');
        $this->addSql('ALTER TABLE franchisee CHANGE truck_id truck_id INT DEFAULT NULL, CHANGE rank_id rank_id INT DEFAULT NULL, CHANGE roles roles JSON CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_bin` COMMENT \'(DC2Type:json_array)\'');
        $this->addSql('ALTER TABLE franchisee_article DROP FOREIGN KEY FK_425D5EAB635B249');
        $this->addSql('DROP INDEX IDX_425D5EAB635B249 ON franchisee_article');
        $this->addSql('ALTER TABLE franchisee_article DROP franchisee_id, DROP stock, CHANGE stock_product_id stock_product_id INT DEFAULT NULL, CHANGE stock_dish_id stock_dish_id INT DEFAULT NULL, CHANGE unit unit VARCHAR(10) CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE franchisee_menu DROP FOREIGN KEY FK_10BC0CDC635B249');
        $this->addSql('DROP INDEX IDX_10BC0CDC635B249 ON franchisee_menu');
        $this->addSql('ALTER TABLE franchisee_menu DROP franchisee_id, DROP stock');
        $this->addSql('ALTER TABLE loyalty_card CHANGE newest_order newest_order DATE DEFAULT \'NULL\'');
        $this->addSql('ALTER TABLE product CHANGE unit unit VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_unicode_ci`, CHANGE unit_quantity unit_quantity DOUBLE PRECISION DEFAULT \'NULL\'');
        $this->addSql('ALTER TABLE product_translations CHANGE object_id object_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE rank_translations CHANGE object_id object_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE stock_product CHANGE unit unit VARCHAR(10) CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_unicode_ci`, CHANGE quantity qty DOUBLE PRECISION NOT NULL');
        $this->addSql('ALTER TABLE truck_position CHANGE truck_id truck_id INT DEFAULT NULL');
    }
}
