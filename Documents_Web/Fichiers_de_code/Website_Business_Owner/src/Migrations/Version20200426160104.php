<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200426160104 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE franchisee_complaint (id INT AUTO_INCREMENT NOT NULL, franchisee_id INT NOT NULL, title VARCHAR(255) NOT NULL, content LONGTEXT NOT NULL, INDEX IDX_4A188A25635B249 (franchisee_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE franchisee_complaint ADD CONSTRAINT FK_4A188A25635B249 FOREIGN KEY (franchisee_id) REFERENCES franchisee (id)');
        $this->addSql('ALTER TABLE franchisee CHANGE truck_id truck_id INT DEFAULT NULL, CHANGE roles roles JSON DEFAULT NULL COMMENT \'(DC2Type:json_array)\'');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE franchisee_complaint');
        $this->addSql('ALTER TABLE franchisee CHANGE truck_id truck_id INT DEFAULT NULL, CHANGE roles roles JSON CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_bin` COMMENT \'(DC2Type:json_array)\'');
        $this->addSql('ALTER TABLE truck_position CHANGE truck_id truck_id INT DEFAULT NULL');
    }
}
