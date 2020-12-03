import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTransacoes1607016239064 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'Transacoes',
        columns: [
          {
            name: 'idTransacao',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'idConta',
            type: 'integer',
          },
          {
            name: 'valor',
            type: 'money',
            default: 0,
          },
          {
            name: 'dataTransacao',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('Transacoes');
  }
}
