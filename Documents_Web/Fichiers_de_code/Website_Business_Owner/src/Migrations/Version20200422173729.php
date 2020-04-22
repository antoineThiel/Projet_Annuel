<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200422173729 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE truck_position_truck');
        $this->addSql('ALTER TABLE truck_position ADD truck_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE truck_position ADD CONSTRAINT FK_2AEDC037C6957CCE FOREIGN KEY (truck_id) REFERENCES truck (id)');
        $this->addSql('CREATE INDEX IDX_2AEDC037C6957CCE ON truck_position (truck_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE truck_position_truck (truck_position_id INT NOT NULL, truck_id INT NOT NULL, INDEX IDX_A6519A8B52247F84 (truck_position_id), INDEX IDX_A6519A8BC6957CCE (truck_id), PRIMARY KEY(truck_position_id, truck_id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE truck_position_truck ADD CONSTRAINT FK_A6519A8B52247F84 FOREIGN KEY (truck_position_id) REFERENCES truck_position (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE truck_position_truck ADD CONSTRAINT FK_A6519A8BC6957CCE FOREIGN KEY (truck_id) REFERENCES truck (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE franchisee CHANGE truck_id truck_id INT DEFAULT NULL, CHANGE roles roles JSON CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_bin` COMMENT \'(DC2Type:json_array)\'');
        $this->addSql('ALTER TABLE truck_position DROP FOREIGN KEY FK_2AEDC037C6957CCE');
        $this->addSql('DROP INDEX IDX_2AEDC037C6957CCE ON truck_position');
        $this->addSql('ALTER TABLE truck_position DROP truck_id');
    }
}
