import {
  Between,
  getRepository,
  LessThanOrEqual,
  MoreThanOrEqual,
  Repository,
} from 'typeorm';

import ITransactionsRepository from '@modules/transactions/repositories/ITransactionsRepository';

import Transaction from '@modules/transactions/infra/typeorm/entities/Transaction';
import ITransactionDTO from '@modules/transactions/dtos/ITransactionDTO';

class TransactionsRepository implements ITransactionsRepository {
  private ormRepository: Repository<Transaction>;

  constructor() {
    this.ormRepository = getRepository(Transaction);
  }

  private convertMoneyToNumber(money: string): number {
    if (!money) return 0;

    return Number(money.slice(1));
  }

  private getFilterByPeriod(start_date, end_date) {
    if (start_date && end_date) {
      return {
        dataTransacao: Between(start_date, end_date),
      };
    }

    if (start_date) {
      return {
        dataTransacao: MoreThanOrEqual(start_date),
      };
    }

    if (end_date) {
      return {
        dataTransacao: LessThanOrEqual(start_date),
      };
    }
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

  public async getAccountBalance(accountId: number): Promise<number> {
    const queryBuilder = this.ormRepository.createQueryBuilder('Transacoes');

    const { sum } = await queryBuilder
      .select('SUM(valor)')
      .where(`Transacoes.idConta = ${accountId}`)
      .getRawOne();

    const balance = this.convertMoneyToNumber(sum);

    return balance;
  }

  public async getAccountStatement(
    accountId: number,
    start_date?: Date,
    end_date?: Date,
  ): Promise<Transaction[]> {
    const statement = this.ormRepository.find({
      where: {
        idConta: accountId,
        ...this.getFilterByPeriod(start_date, end_date),
      },
    });

    return statement;
  }
}

export default TransactionsRepository;
