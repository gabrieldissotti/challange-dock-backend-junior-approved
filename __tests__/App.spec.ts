import request from 'supertest';

import { Connection, getConnection } from 'typeorm';
import createConnection from '@shared/infra/typeorm';

import app from '@shared/infra/http/app';
import People from '@modules/accounts/infra/typeorm/entities/People';

let connection: Connection;

describe('App - API/Integration Tests', () => {
  beforeAll(async () => {
    connection = await createConnection('test-connection');

    await connection.query('DROP TABLE IF EXISTS Transacoes');
    await connection.query('DROP TABLE IF EXISTS Contas');
    await connection.query('DROP TABLE IF EXISTS Pessoas');

    await connection.runMigrations();

    await connection
      .createQueryBuilder()
      .insert()
      .into(People)
      .values({
        nome: 'Gabriel Dissotti',
        cpf: '56509937000',
        dataNascimento: new Date(1998, 9, 15),
      })
      .execute();
  });

  afterAll(async () => {
    const mainConnection = getConnection();

    await connection.close();
    await mainConnection.close();
  });

  it('should be able to create an account', async () => {
    const customer = await request(app).post('/accounts').send({
      idPessoa: 1,
      saldo: 25,
      limiteSaqueDiario: 700,
      tipoConta: 1,
    });

    expect(customer.body.success).toBe(true);
    expect(customer.body.data.idPessoa).toBe(1);
    expect(customer.body.data).toHaveProperty('idConta');
  });
});
