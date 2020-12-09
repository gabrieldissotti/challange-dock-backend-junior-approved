import { Request, Response } from 'express';
import { container } from 'tsyringe';

import GetAccountStatementService from '@modules/accounts/services/GetAccountStatementService';
import { parseISO } from 'date-fns';

class StatementController {
  public async show(request: Request, response: Response): Promise<Response> {
    const { account_id } = request.params;

    const { start_date, end_date } = request.query;

    const getAccountStatementService: GetAccountStatementService = container.resolve(
      GetAccountStatementService,
    );

    const statement = await getAccountStatementService.execute({
      idConta: Number(account_id),
      start_date: start_date ? parseISO(String(start_date)) : undefined,
      end_date: end_date ? parseISO(String(end_date)) : undefined,
    });

    return response.json({
      success: true,
      message: 'Extrato resgatado com sucesso!',
      data: statement,
    });
  }
}

export default new StatementController();
