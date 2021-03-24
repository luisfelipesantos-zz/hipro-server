import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class User1616616480646 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
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
            type: 'string',
            isNullable: false,
          },
          {
            name: 'password',
            type: 'string',
            isNullable: false,
          },
          {
            name: 'name',
            type: 'string',
            isNullable: false,
          },
          {
            name: 'email',
            type: 'string',
            isNullable: false,
          },
          {
            name: 'gender',
            type: 'string',
            isNullable: false,
          },
          {
            name: 'birthDate',
            type: 'string',
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
