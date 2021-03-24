import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class JobApplication1616618700807 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
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
            type: 'string',
            isNullable: false,
          },
          {
            name: 'role',
            type: 'string',
            isNullable: false,
          },
          {
            name: 'status',
            type: 'string',
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
