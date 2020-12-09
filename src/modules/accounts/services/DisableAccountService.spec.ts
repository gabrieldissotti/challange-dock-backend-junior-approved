import 'reflect-metadata';

import DisableAccountService from './DisableAccountService';

import FakeAccountsRepository from '../repositories/fakes/FakeAccountsRepository';
import CreateAccountService from './CreateAccountService';

describe('DisableAccount', () => {
  it('should be able to create a new account', async () => {
    const fakeAccountsRepository = new FakeAccountsRepository();

    const disableAccountService = new DisableAccountService(
      fakeAccountsRepository,
    );

    const createAccount = new CreateAccountService(fakeAccountsRepository);

    const { idConta } = await createAccount.execute({
      idPessoa: 1,
      saldo: 100,
      limiteSaqueDiario: 500,
      tipoConta: 1,
    });

    const account = await disableAccountService.execute({
      idConta,
    });

    expect(account).toHaveProperty('idConta');
    expect(account.idPessoa).toBe(1);
    expect(account.flagAtivo).toBe(false);
  });
});
