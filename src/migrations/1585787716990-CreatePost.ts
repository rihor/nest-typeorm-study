import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreatePost1585787716990 implements MigrationInterface {
  private table = new Table({
    name: 'posts',
    columns: [
      {
        name: 'id',
        type: 'int',
        isGenerated: true,
        generationStrategy: 'increment',
      },
      {
        name: 'body',
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
