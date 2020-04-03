<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200403131350 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE franchisee_dish');
        $this->addSql('DROP TABLE franchisee_product');
        $this->addSql('ALTER TABLE truck DROP longitude, DROP latitude, CHANGE franchisee_id franchisee_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE warehouse_product DROP FOREIGN KEY FK_F4AD11D84584665A');
        $this->addSql('ALTER TABLE warehouse_product DROP FOREIGN KEY FK_F4AD11D85080ECDE');
        $this->addSql('ALTER TABLE warehouse_product ADD id INT AUTO_INCREMENT NOT NULL, ADD quantity DOUBLE PRECISION NOT NULL, DROP PRIMARY KEY, ADD PRIMARY KEY (id)');
        $this->addSql('ALTER TABLE warehouse_product ADD CONSTRAINT FK_F4AD11D84584665A FOREIGN KEY (product_id) REFERENCES product (id)');
        $this->addSql('ALTER TABLE warehouse_product ADD CONSTRAINT FK_F4AD11D85080ECDE FOREIGN KEY (warehouse_id) REFERENCES warehouse (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE franchisee_dish (franchisee_id INT NOT NULL, dish_id INT NOT NULL, INDEX IDX_F8C4BAF7635B249 (franchisee_id), INDEX IDX_F8C4BAF7148EB0CB (dish_id), PRIMARY KEY(franchisee_id, dish_id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE franchisee_product (franchisee_id INT NOT NULL, product_id INT NOT NULL, INDEX IDX_932D5460635B249 (franchisee_id), INDEX IDX_932D54604584665A (product_id), PRIMARY KEY(franchisee_id, product_id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE franchisee_dish ADD CONSTRAINT FK_F8C4BAF7148EB0CB FOREIGN KEY (dish_id) REFERENCES dish (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE franchisee_dish ADD CONSTRAINT FK_F8C4BAF7635B249 FOREIGN KEY (franchisee_id) REFERENCES franchisee (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE franchisee_product ADD CONSTRAINT FK_932D54604584665A FOREIGN KEY (product_id) REFERENCES product (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE franchisee_product ADD CONSTRAINT FK_932D5460635B249 FOREIGN KEY (franchisee_id) REFERENCES franchisee (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE truck ADD longitude DOUBLE PRECISION NOT NULL, ADD latitude DOUBLE PRECISION NOT NULL, CHANGE franchisee_id franchisee_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE warehouse_product MODIFY id INT NOT NULL');
        $this->addSql('ALTER TABLE warehouse_product DROP FOREIGN KEY FK_F4AD11D85080ECDE');
        $this->addSql('ALTER TABLE warehouse_product DROP FOREIGN KEY FK_F4AD11D84584665A');
        $this->addSql('ALTER TABLE warehouse_product DROP PRIMARY KEY');
        $this->addSql('ALTER TABLE warehouse_product DROP id, DROP quantity');
        $this->addSql('ALTER TABLE warehouse_product ADD CONSTRAINT FK_F4AD11D85080ECDE FOREIGN KEY (warehouse_id) REFERENCES warehouse (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE warehouse_product ADD CONSTRAINT FK_F4AD11D84584665A FOREIGN KEY (product_id) REFERENCES product (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE warehouse_product ADD PRIMARY KEY (warehouse_id, product_id)');
    }
}
