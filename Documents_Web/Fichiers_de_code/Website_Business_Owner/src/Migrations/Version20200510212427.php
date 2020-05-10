<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200510212427 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE ext_log_entries CHANGE object_id object_id VARCHAR(64) DEFAULT NULL, CHANGE data data LONGTEXT DEFAULT NULL COMMENT \'(DC2Type:array)\', CHANGE username username VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE franchisee CHANGE truck_id truck_id INT DEFAULT NULL, CHANGE roles roles JSON DEFAULT NULL COMMENT \'(DC2Type:json_array)\'');
        $this->addSql('ALTER TABLE category_translations CHANGE object_id object_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE dish_translations CHANGE object_id object_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE product_translations CHANGE object_id object_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE truck_position CHANGE truck_id truck_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE turnover ADD percent_amount DOUBLE PRECISION NOT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE category_translations CHANGE object_id object_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE dish_translations CHANGE object_id object_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE ext_log_entries CHANGE object_id object_id VARCHAR(64) CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_unicode_ci`, CHANGE data data LONGTEXT CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_unicode_ci` COMMENT \'(DC2Type:array)\', CHANGE username username VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE franchisee CHANGE truck_id truck_id INT DEFAULT NULL, CHANGE roles roles JSON CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_bin` COMMENT \'(DC2Type:json_array)\'');
        $this->addSql('ALTER TABLE product_translations CHANGE object_id object_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE truck_position CHANGE truck_id truck_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE turnover DROP percent_amount');
    }
}
