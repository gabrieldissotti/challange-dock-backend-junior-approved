import { getCustomRepository } from 'typeorm';

import AccountRepository from '@repositories/AccountRepository';

type Request = {
  idPessoa: number;
  saldo: number;
  limiteSaqueDiario: number;
  tipoConta: number;
};

class CreateAccountService {
  public async execute(account: Request): Promise<boolean> {
    try {
      const accountRepository = getCustomRepository(AccountRepository);

      const accountObject = accountRepository.create(account);

      await accountRepository.save(accountObject);

      return true;
    } catch (error) {
      console.log(error);

      return false;
    }
  }
}

export default CreateAccountService;
