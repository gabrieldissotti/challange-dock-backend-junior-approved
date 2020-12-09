import { EntityRepository } from 'typeorm';

import Account from '@modules/accounts/infra/typeorm/entities/Account';
import AppError from '@shared/errors/AppError';

type CreateAndSaveRequest = {
  idPessoa: number;
  idConta: number;
  saldo: number;
  limiteSaqueDiario: number;
  tipoConta: number;
};

@EntityRepository(Account)
class FakeAccountsRepository {
  private accounts: Account[] = [];

  public async create({
    idPessoa,
    saldo,
    limiteSaqueDiario,
    tipoConta,
  }: CreateAndSaveRequest): Promise<Account> {
    const account = new Account();

    Object.assign(account, {
      idConta: this.accounts.length + 1,
      idPessoa,
      saldo,
      limiteSaqueDiario,
      tipoConta,
      dataCriacao: new Date(),
    });

    this.accounts.push(account);

    return account;
  }

  public async disable({
    idConta,
  }: CreateAndSaveRequest): Promise<Account | undefined> {
    const accountIndex = this.accounts.findIndex(
      account => Number(account.idConta) === Number(idConta),
    );

    if (!this.accounts[accountIndex]) {
      throw new AppError('Account does not exists', 400);
    }

    this.accounts[accountIndex].flagAtivo = false;

    return this.accounts[accountIndex];
  }
}

export default FakeAccountsRepository;
