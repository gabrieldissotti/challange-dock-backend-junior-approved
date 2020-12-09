import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreatePessoas1607015000000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'Pessoas',
        columns: [
          {
            name: 'idPessoa',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'nome',
            type: 'varchar',
          },
          {
            name: 'cpf',
            type: 'varchar',
          },
          {
            name: 'dataNascimento',
            type: 'timestamp',
          },
        ],
      }),
    );

    await queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into('Pessoas')
      .values({
        idPessoa: 1,
        nome: 'Gabriel Dissotti',
        cpf: '56509937000',
        dataNascimento: new Date(1998, 9, 15),
      })
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager
      .createQueryBuilder()
      .delete()
      .where({
        idPessoa: 1,
      })
      .execute();

    await queryRunner.dropTable('Pessoas');
  }
}
