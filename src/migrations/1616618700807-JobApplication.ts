import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class JobApplication1616618700807 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    await queryRunner.createTable(
      new Table({
        name: 'JobApplication',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isGenerated: true,
            generationStrategy: 'uuid',
            isUnique: true,
          },
          {
            name: 'company',
            type: 'character varying',
            isNullable: false,
          },
          {
            name: 'role',
            type: 'character varying',
            isNullable: false,
          },
          {
            name: 'status',
            type: 'character varying',
            isNullable: false,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('JobApplication');
  }
}
