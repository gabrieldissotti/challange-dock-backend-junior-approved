import { inject, injectable } from 'tsyringe';

import Account from '@modules/accounts/infra/typeorm/entities/Account';
import IAccountsRepository from '../repositories/IAccountsRepository';

import IDisableAccountDTO from '../dtos/IDisableAccountDTO';

@injectable()
class DisableAccountService {
  constructor(
    @inject('AccountsRepository')
    private accountsRepository: IAccountsRepository,
  ) {}

  public async execute(account: IDisableAccountDTO): Promise<Account> {
    const accountObject = await this.accountsRepository.disable(account);

    return accountObject;
  }
}

export default DisableAccountService;
