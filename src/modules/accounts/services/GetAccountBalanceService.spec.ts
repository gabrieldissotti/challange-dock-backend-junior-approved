import 'reflect-metadata';

import GetAccountBalanceService from './GetAccountBalanceService';

import FakeTransactionsRepository from '@modules/transactions/repositories/fakes/FakeTransactionsRepository';
import CreditService from '@modules/transactions/services/CreditService';

describe('GetAccountBalance', () => {
  it('should be able to get account balance', async () => {
    const fakeTransactionsRepository = new FakeTransactionsRepository();

    const getAccountBalanceService = new GetAccountBalanceService(
      fakeTransactionsRepository,
    );

    const creditService = new CreditService(fakeTransactionsRepository);

    await creditService.execute({
      idConta: 1,
      valor: 100,
    });

    const balance = await getAccountBalanceService.execute({
      idConta: 1,
    });

    expect(balance).toBe(100);
  });
});
