import { inject, injectable } from 'tsyringe';

import ITransactionsRepository from '@modules/transactions/repositories/ITransactionsRepository';

import IGetAccountBalanceDTO from '../dtos/IGetAccountBalanceDTO';

@injectable()
class GetAccountBalanceService {
  constructor(
    @inject('TransactionsRepository')
    private transactionsRepository: ITransactionsRepository,
  ) {}

  public async execute({ idConta }: IGetAccountBalanceDTO): Promise<number> {
    const balance = await this.transactionsRepository.getAccountBalance(
      idConta,
    );

    return balance;
  }
}

export default GetAccountBalanceService;
