<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200418122642 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE franchisee CHANGE truck_id truck_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE order_by_franchisee DROP INDEX UNIQ_4990DEF65080ECDE, ADD INDEX IDX_4990DEF65080ECDE (warehouse_id)');
        $this->addSql('ALTER TABLE order_by_franchisee CHANGE warehouse_id warehouse_id INT NOT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE franchisee CHANGE truck_id truck_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE order_by_franchisee DROP INDEX IDX_4990DEF65080ECDE, ADD UNIQUE INDEX UNIQ_4990DEF65080ECDE (warehouse_id)');
        $this->addSql('ALTER TABLE order_by_franchisee CHANGE warehouse_id warehouse_id INT DEFAULT NULL');
    }
}
