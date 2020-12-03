import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateContas1607015955777 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'Contas',
        columns: [
          {
            name: 'idConta',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'idPessoa',
            type: 'integer',
          },
          {
            name: 'saldo',
            type: 'money',
            default: 0,
          },
          {
            name: 'limiteSaqueDiario',
            type: 'money',
            default: 0,
          },
          {
            name: 'flagAtivo',
            type: 'boolean',
            default: true,
          },
          {
            name: 'tipoConta',
            type: 'integer',
          },
          {
            name: 'dataCriacao',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('Contas');
  }
}
