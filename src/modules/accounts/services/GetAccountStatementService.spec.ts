import 'reflect-metadata';

import GetAccountStatementService from './GetAccountStatementService';

import FakeTransactionsRepository from '@modules/transactions/repositories/fakes/FakeTransactionsRepository';
import CreditService from '@modules/transactions/services/CreditService';

describe('GetAccountstatement', () => {
  it('should be able to get account statement', async () => {
    const fakeTransactionsRepository = new FakeTransactionsRepository();

    const getAccountStatementService = new GetAccountStatementService(
      fakeTransactionsRepository,
    );

    const creditService = new CreditService(fakeTransactionsRepository);

    await creditService.execute({
      idConta: 1,
      valor: 100,
    });

    const statement = await getAccountStatementService.execute({
      idConta: 1,
    });

    expect(statement[0].valor).toBe(100);
  });

  it('should be able to get account statement by period', async () => {
    const fakeTransactionsRepository = new FakeTransactionsRepository();

    const getAccountStatementService = new GetAccountStatementService(
      fakeTransactionsRepository,
    );

    const creditService = new CreditService(fakeTransactionsRepository);

    await creditService.execute({
      idConta: 1,
      valor: 100,
    });

    const statement = await getAccountStatementService.execute({
      idConta: 1,
      start_date: new Date(),
      end_date: new Date(),
    });

    expect(statement[0].valor).toBe(100);
  });
});
