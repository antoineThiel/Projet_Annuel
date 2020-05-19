<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200514104032 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE rank_translations (id INT AUTO_INCREMENT NOT NULL, object_id INT DEFAULT NULL, locale VARCHAR(8) NOT NULL, field VARCHAR(32) NOT NULL, content LONGTEXT DEFAULT NULL, INDEX IDX_117EA4E1232D562B (object_id), UNIQUE INDEX lookup_unique_rank_idx (locale, object_id, field), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE rank_translations ADD CONSTRAINT FK_117EA4E1232D562B FOREIGN KEY (object_id) REFERENCES rank (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE rank_translations');
        $this->addSql('ALTER TABLE category_translations CHANGE object_id object_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE dish_translations CHANGE object_id object_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE ext_log_entries CHANGE object_id object_id VARCHAR(64) CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_unicode_ci`, CHANGE data data LONGTEXT CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_unicode_ci` COMMENT \'(DC2Type:array)\', CHANGE username username VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE franchisee CHANGE truck_id truck_id INT DEFAULT NULL, CHANGE rank_id rank_id INT DEFAULT NULL, CHANGE roles roles JSON CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_bin` COMMENT \'(DC2Type:json_array)\'');
        $this->addSql('ALTER TABLE product_translations CHANGE object_id object_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE truck_position CHANGE truck_id truck_id INT DEFAULT NULL');
    }
}
