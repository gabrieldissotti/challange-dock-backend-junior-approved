import 'reflect-metadata';

import DebitService from './DebitService';

import FakeTransactionsRepository from '../repositories/fakes/FakeTransactionsRepository';

describe('DebitTransaction', () => {
  it('should be able to debit in an account', async () => {
    const fakeTransactionsRepository = new FakeTransactionsRepository();

    const debitService = new DebitService(fakeTransactionsRepository);

    const transaction = await debitService.execute({
      idConta: 1,
      valor: 100,
    });

    expect(transaction).toHaveProperty('idTransacao');
    expect(transaction.idTransacao).toBe(1);
    expect(transaction.valor).toBe(-100);
  });
});
