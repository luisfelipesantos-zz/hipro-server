import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class JobAplication1617107805947 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'JobApplication',
      new TableColumn({
        name: 'userId',
        type: 'uuid',
      }),
    );

    await queryRunner.createForeignKey(
      'JobApplication',
      new TableForeignKey({
        columnNames: ['userId'],
        referencedColumnNames: ['subid'],
        referencedTableName: 'User',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('JobApplication');
    const foreignKey = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('userId') !== -1,
    );
    await queryRunner.dropForeignKey('userId', foreignKey);
    await queryRunner.dropColumn('userId', 'userId');
  }
}
