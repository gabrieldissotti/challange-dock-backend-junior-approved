import { inject, injectable } from 'tsyringe';

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
  }: IGetAccountBalanceDTO): Promise<Transaction[]> {
    const statement = await this.transactionsRepository.getAccountStatement(
      idConta,
    );

    return statement;
  }
}

export default GetAccountStatementService;
