import { EntityRepository } from 'typeorm';

import Transaction from '@modules/transactions/infra/typeorm/entities/Transaction';

type CreateAndSaveRequest = {
  idConta: number;
  valor: number;
};

@EntityRepository(Transaction)
class FakeTransactionsRepository {
  private transactions: Transaction[] = [];

  public async create({
    idConta,
    valor,
  }: CreateAndSaveRequest): Promise<Transaction> {
    const transaction = new Transaction();

    Object.assign(transaction, {
      idTransacao: this.transactions.length + 1,
      idConta,
      valor,
      dataCriacao: new Date(),
    });

    this.transactions.push(transaction);

    return transaction;
  }
}

export default FakeTransactionsRepository;
