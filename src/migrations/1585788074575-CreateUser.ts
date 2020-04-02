import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUser1585788074575 implements MigrationInterface {
  private table = new Table({
    name: 'users',
    columns: [
      {
        name: 'id',
        type: 'int',
        isGenerated: true,
        generationStrategy: 'increment',
      },
      {
        name: 'email',
        type: 'varchar',
        length: '250',
        isNullable: false,
      },
    ],
  });

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(this.table);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable(this.table);
  }
}
