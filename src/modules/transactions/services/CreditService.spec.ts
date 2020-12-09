import 'reflect-metadata';

import CreditService from './CreditService';

import FakeTransactionsRepository from '../repositories/fakes/FakeTransactionsRepository';

describe('CreditTransaction', () => {
  it('should be able to credit in an account', async () => {
    const fakeTransactionsRepository = new FakeTransactionsRepository();

    const creditService = new CreditService(fakeTransactionsRepository);

    const transaction = await creditService.execute({
      idConta: 1,
      valor: 100,
    });

    expect(transaction).toHaveProperty('idTransacao');
    expect(transaction.idTransacao).toBe(1);
  });
});
