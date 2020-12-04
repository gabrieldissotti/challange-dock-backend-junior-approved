import { inject, injectable } from 'tsyringe';

import Account from '@modules/accounts/infra/typeorm/entities/Account';
import IAccountsRepository from '../repositories/IAccountsRepository';

import ICreateAccountDTO from '../dtos/ICreateAccountDTO';

@injectable()
class CreateAccountService {
  constructor(
    @inject('AccountsRepository')
    private accountsRepository: IAccountsRepository,
  ) {}

  public async execute(account: ICreateAccountDTO): Promise<Account> {
    const accountObject = await this.accountsRepository.create(account);

    return accountObject;
  }
}

export default CreateAccountService;
