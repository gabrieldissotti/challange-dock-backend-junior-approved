import { inject, injectable } from 'tsyringe';

import Transaction from '@modules/transactions/infra/typeorm/entities/Transaction';
import ITransactionsRepository from '../repositories/ITransactionsRepository';

import ITransactionDTO from '../dtos/ITransactionDTO';

@injectable()
class DebitService {
  constructor(
    @inject('TransactionsRepository')
    private transactionsRepository: ITransactionsRepository,
  ) {}

  public async execute({
    idConta,
    valor,
  }: ITransactionDTO): Promise<Transaction> {
    const transaction = await this.transactionsRepository.create({
      idConta,
      valor: -valor,
    });

    return transaction;
  }
}

export default DebitService;
