import { inject, injectable } from 'tsyringe';

import Transaction from '@modules/transactions/infra/typeorm/entities/Transaction';
import ITransactionsRepository from '../repositories/ITransactionsRepository';

import ITransactionDTO from '../dtos/ITransactionDTO';

@injectable()
class CreditService {
  constructor(
    @inject('TransactionsRepository')
    private transactionsRepository: ITransactionsRepository,
  ) {}

  public async execute(account: ITransactionDTO): Promise<Transaction> {
    const transaction = await this.transactionsRepository.create(account);

    return transaction;
  }
}

export default CreditService;
