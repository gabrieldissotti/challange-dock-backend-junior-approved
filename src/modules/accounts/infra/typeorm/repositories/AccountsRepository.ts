import { getRepository, Repository } from 'typeorm';

import Account from '@modules/accounts/infra/typeorm/entities/Account';
import IAccountsRepository from '@modules/accounts/repositories/IAccountsRepository';
import ICreateAccountDTO from '@modules/accounts/dtos/ICreateAccountDTO';

class AccountsRepository implements IAccountsRepository {
  private ormRepository: Repository<Account>;

  constructor() {
    this.ormRepository = getRepository(Account);
  }

  public async create({
    idPessoa,
    saldo,
    limiteSaqueDiario,
    tipoConta,
  }: ICreateAccountDTO): Promise<Account> {
    const account = this.ormRepository.create({
      idPessoa,
      saldo,
      limiteSaqueDiario,
      tipoConta,
    });

    await this.ormRepository.save(account);

    return account;
  }
}

export default AccountsRepository;
