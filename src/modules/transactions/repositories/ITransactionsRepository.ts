import Transaction from '../infra/typeorm/entities/Transaction';
import ITransactionDTO from '../dtos/ITransactionDTO';

export default interface ITransactionsRepository {
  create(account: ITransactionDTO): Promise<Transaction | undefined>;

  getAccountBalance(accountId: number): Promise<number>;

  getAccountStatement(
    accountId: number,
    start_date?: Date,
    end_date?: Date,
  ): Promise<Transaction[]>;
}
