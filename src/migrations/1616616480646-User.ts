import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class User1616616480646 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    await queryRunner.createTable(
      new Table({
        name: 'User',
        columns: [
          {
            name: 'subid',
            type: 'uuid',
            isUnique: true,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'phone',
            type: 'character varying',
            isNullable: false,
          },
          {
            name: 'password',
            type: 'character varying',
            isNullable: false,
          },
          {
            name: 'name',
            type: 'character varying',
            isNullable: false,
          },
          {
            name: 'email',
            type: 'character varying',
            isNullable: false,
          },
          {
            name: 'gender',
            type: 'character varying',
            isNullable: false,
          },
          {
            name: 'birthDate',
            type: 'character varying',
            isNullable: false,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('User');
  }
}
