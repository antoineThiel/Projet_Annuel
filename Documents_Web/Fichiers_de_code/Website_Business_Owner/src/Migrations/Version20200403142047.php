<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200403142047 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE truck CHANGE franchisee_id franchisee_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE warehouse_dish DROP FOREIGN KEY FK_4A178C6C148EB0CB');
        $this->addSql('ALTER TABLE warehouse_dish DROP FOREIGN KEY FK_4A178C6C5080ECDE');
        $this->addSql('ALTER TABLE warehouse_dish ADD id INT AUTO_INCREMENT NOT NULL, ADD quantity DOUBLE PRECISION NOT NULL, DROP PRIMARY KEY, ADD PRIMARY KEY (id)');
        $this->addSql('ALTER TABLE warehouse_dish ADD CONSTRAINT FK_4A178C6C148EB0CB FOREIGN KEY (dish_id) REFERENCES dish (id)');
        $this->addSql('ALTER TABLE warehouse_dish ADD CONSTRAINT FK_4A178C6C5080ECDE FOREIGN KEY (warehouse_id) REFERENCES warehouse (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE truck CHANGE franchisee_id franchisee_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE warehouse_dish MODIFY id INT NOT NULL');
        $this->addSql('ALTER TABLE warehouse_dish DROP FOREIGN KEY FK_4A178C6C5080ECDE');
        $this->addSql('ALTER TABLE warehouse_dish DROP FOREIGN KEY FK_4A178C6C148EB0CB');
        $this->addSql('ALTER TABLE warehouse_dish DROP PRIMARY KEY');
        $this->addSql('ALTER TABLE warehouse_dish DROP id, DROP quantity');
        $this->addSql('ALTER TABLE warehouse_dish ADD CONSTRAINT FK_4A178C6C5080ECDE FOREIGN KEY (warehouse_id) REFERENCES warehouse (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE warehouse_dish ADD CONSTRAINT FK_4A178C6C148EB0CB FOREIGN KEY (dish_id) REFERENCES dish (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE warehouse_dish ADD PRIMARY KEY (warehouse_id, dish_id)');
    }
}
