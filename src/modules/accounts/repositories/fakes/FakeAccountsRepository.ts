import { EntityRepository } from 'typeorm';

import Account from '@modules/accounts/infra/typeorm/entities/Account';

type CreateAndSaveRequest = {
  idPessoa: number;
  idConta: number;
  saldo: number;
  limiteSaqueDiario: number;
  tipoConta: number;
};

@EntityRepository(Account)
class AccountsRepository {
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
}

export default AccountsRepository;
