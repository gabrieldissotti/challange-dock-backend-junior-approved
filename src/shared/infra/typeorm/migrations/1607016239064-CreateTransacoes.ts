import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

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

    await queryRunner.createForeignKey(
      'Transacoes',
      new TableForeignKey({
        name: 'TransactionsOfAccount',
        columnNames: ['idConta'],
        referencedColumnNames: ['idConta'],
        referencedTableName: 'Contas',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('Transacoes', 'TransactionsOfAccount');

    await queryRunner.dropTable('Transacoes');
  }
}
