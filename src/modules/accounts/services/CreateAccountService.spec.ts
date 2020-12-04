import 'reflect-metadata';

import CreateAccountService from './CreateAccountService';

import FakeAccountsRepository from '../repositories/fakes/FakeAccountsRepository';

describe('CreateAccount', () => {
  it('should be able to create a new account', async () => {
    const fakeAccountsRepository = new FakeAccountsRepository();

    const createAccount = new CreateAccountService(fakeAccountsRepository);

    const account = await createAccount.execute({
      idPessoa: 1,
      saldo: 100,
      limiteSaqueDiario: 500,
      tipoConta: 1,
    });

    expect(account).toHaveProperty('idConta');
    expect(account.idPessoa).toBe(1);
  });
});
