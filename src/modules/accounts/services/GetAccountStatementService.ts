import { inject, injectable } from 'tsyringe';
import { startOfDay, endOfDay } from 'date-fns';

import Transaction from '@modules/transactions/infra/typeorm/entities/Transaction';

import ITransactionsRepository from '@modules/transactions/repositories/ITransactionsRepository';

import IGetAccountBalanceDTO from '../dtos/IGetAccountBalanceDTO';

@injectable()
class GetAccountStatementService {
  constructor(
    @inject('TransactionsRepository')
    private transactionsRepository: ITransactionsRepository,
  ) {}

  public async execute({
    idConta,
    start_date,
    end_date,
  }: IGetAccountBalanceDTO): Promise<Transaction[]> {
    const startDate = start_date ? startOfDay(start_date) : undefined;
    const endDate = end_date ? endOfDay(end_date) : undefined;

    const statement = await this.transactionsRepository.getAccountStatement(
      idConta,
      startDate,
      endDate,
    );

    return statement;
  }
}

export default GetAccountStatementService;
