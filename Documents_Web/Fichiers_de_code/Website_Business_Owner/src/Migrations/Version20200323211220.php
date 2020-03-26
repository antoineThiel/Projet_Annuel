<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200323211220 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE dish (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, price DOUBLE PRECISION NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE franchisee (id INT AUTO_INCREMENT NOT NULL, last_name VARCHAR(255) NOT NULL, first_name VARCHAR(255) NOT NULL, mail VARCHAR(255) NOT NULL, city VARCHAR(255) NOT NULL, postal_code VARCHAR(255) NOT NULL, address VARCHAR(255) NOT NULL, license VARCHAR(255) NOT NULL, phone VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE franchisee_dish (franchisee_id INT NOT NULL, dish_id INT NOT NULL, INDEX IDX_F8C4BAF7635B249 (franchisee_id), INDEX IDX_F8C4BAF7148EB0CB (dish_id), PRIMARY KEY(franchisee_id, dish_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE franchisee_product (franchisee_id INT NOT NULL, product_id INT NOT NULL, INDEX IDX_932D5460635B249 (franchisee_id), INDEX IDX_932D54604584665A (product_id), PRIMARY KEY(franchisee_id, product_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE product (id INT AUTO_INCREMENT NOT NULL, origin_id INT NOT NULL, category_id INT NOT NULL, name VARCHAR(255) NOT NULL, price DOUBLE PRECISION NOT NULL, INDEX IDX_D34A04AD56A273CC (origin_id), INDEX IDX_D34A04AD12469DE2 (category_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE product_dish (product_id INT NOT NULL, dish_id INT NOT NULL, INDEX IDX_1895AE194584665A (product_id), INDEX IDX_1895AE19148EB0CB (dish_id), PRIMARY KEY(product_id, dish_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE product_category (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE product_origin (id INT AUTO_INCREMENT NOT NULL, country VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE role (id INT AUTO_INCREMENT NOT NULL, title VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE truck (id INT AUTO_INCREMENT NOT NULL, franchisee_id INT DEFAULT NULL, registration VARCHAR(255) NOT NULL, longitude DOUBLE PRECISION NOT NULL, latitude DOUBLE PRECISION NOT NULL, INDEX IDX_CDCCF30A635B249 (franchisee_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, role_id INT NOT NULL, username VARCHAR(180) NOT NULL, password VARCHAR(255) NOT NULL, UNIQUE INDEX UNIQ_8D93D649F85E0677 (username), INDEX IDX_8D93D649D60322AC (role_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE franchisee_dish ADD CONSTRAINT FK_F8C4BAF7635B249 FOREIGN KEY (franchisee_id) REFERENCES franchisee (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE franchisee_dish ADD CONSTRAINT FK_F8C4BAF7148EB0CB FOREIGN KEY (dish_id) REFERENCES dish (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE franchisee_product ADD CONSTRAINT FK_932D5460635B249 FOREIGN KEY (franchisee_id) REFERENCES franchisee (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE franchisee_product ADD CONSTRAINT FK_932D54604584665A FOREIGN KEY (product_id) REFERENCES product (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE product ADD CONSTRAINT FK_D34A04AD56A273CC FOREIGN KEY (origin_id) REFERENCES product_origin (id)');
        $this->addSql('ALTER TABLE product ADD CONSTRAINT FK_D34A04AD12469DE2 FOREIGN KEY (category_id) REFERENCES product_category (id)');
        $this->addSql('ALTER TABLE product_dish ADD CONSTRAINT FK_1895AE194584665A FOREIGN KEY (product_id) REFERENCES product (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE product_dish ADD CONSTRAINT FK_1895AE19148EB0CB FOREIGN KEY (dish_id) REFERENCES dish (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE truck ADD CONSTRAINT FK_CDCCF30A635B249 FOREIGN KEY (franchisee_id) REFERENCES franchisee (id)');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D649D60322AC FOREIGN KEY (role_id) REFERENCES role (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE franchisee_dish DROP FOREIGN KEY FK_F8C4BAF7148EB0CB');
        $this->addSql('ALTER TABLE product_dish DROP FOREIGN KEY FK_1895AE19148EB0CB');
        $this->addSql('ALTER TABLE franchisee_dish DROP FOREIGN KEY FK_F8C4BAF7635B249');
        $this->addSql('ALTER TABLE franchisee_product DROP FOREIGN KEY FK_932D5460635B249');
        $this->addSql('ALTER TABLE truck DROP FOREIGN KEY FK_CDCCF30A635B249');
        $this->addSql('ALTER TABLE franchisee_product DROP FOREIGN KEY FK_932D54604584665A');
        $this->addSql('ALTER TABLE product_dish DROP FOREIGN KEY FK_1895AE194584665A');
        $this->addSql('ALTER TABLE product DROP FOREIGN KEY FK_D34A04AD12469DE2');
        $this->addSql('ALTER TABLE product DROP FOREIGN KEY FK_D34A04AD56A273CC');
        $this->addSql('ALTER TABLE user DROP FOREIGN KEY FK_8D93D649D60322AC');
        $this->addSql('DROP TABLE dish');
        $this->addSql('DROP TABLE franchisee');
        $this->addSql('DROP TABLE franchisee_dish');
        $this->addSql('DROP TABLE franchisee_product');
        $this->addSql('DROP TABLE product');
        $this->addSql('DROP TABLE product_dish');
        $this->addSql('DROP TABLE product_category');
        $this->addSql('DROP TABLE product_origin');
        $this->addSql('DROP TABLE role');
        $this->addSql('DROP TABLE truck');
        $this->addSql('DROP TABLE user');
    }
}
