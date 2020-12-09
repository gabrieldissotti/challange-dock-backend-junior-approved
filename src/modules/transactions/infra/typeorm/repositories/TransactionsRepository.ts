import { getRepository, Repository } from 'typeorm';

import ITransactionsRepository from '@modules/transactions/repositories/ITransactionsRepository';

import Transaction from '@modules/transactions/infra/typeorm/entities/Transaction';
import ITransactionDTO from '@modules/transactions/dtos/ITransactionDTO';

class TransactionsRepository implements ITransactionsRepository {
  private ormRepository: Repository<Transaction>;

  constructor() {
    this.ormRepository = getRepository(Transaction);
  }

  public async create({
    idConta,
    valor,
  }: ITransactionDTO): Promise<Transaction> {
    const account = this.ormRepository.create({
      idConta,
      valor,
    });

    await this.ormRepository.save(account);

    return account;
  }
}

export default TransactionsRepository;
