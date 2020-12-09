import Transaction from '../infra/typeorm/entities/Transaction';
import ITransactionDTO from '../dtos/ITransactionDTO';

export default interface ITransactionsRepository {
  create(account: ITransactionDTO): Promise<Transaction | undefined>;

  getAccountBalance(accountId: number): Promise<number>;
}
