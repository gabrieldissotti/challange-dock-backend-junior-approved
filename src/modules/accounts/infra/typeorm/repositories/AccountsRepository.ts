import { getRepository, Repository } from 'typeorm';

import AppError from '@shared/errors/AppError';

import Account from '@modules/accounts/infra/typeorm/entities/Account';
import IAccountsRepository from '@modules/accounts/repositories/IAccountsRepository';
import ICreateAccountDTO from '@modules/accounts/dtos/ICreateAccountDTO';
import IDisableAccountDTO from '@modules/accounts/dtos/IDisableAccountDTO';

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

  public async disable({ idConta }: IDisableAccountDTO): Promise<Account> {
    const account = await this.ormRepository.findOne({
      where: {
        idConta,
      },
    });

    if (!account) {
      throw new AppError('Account does not exists', 400);
    }

    account.flagAtivo = false;

    await this.ormRepository.save(account);

    return account;
  }
}

export default AccountsRepository;
