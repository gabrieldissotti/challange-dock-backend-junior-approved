import { Request, Response } from 'express';
import { container } from 'tsyringe';

import GetAccountStatementService from '@modules/accounts/services/GetAccountStatementService';

class StatementController {
  public async show(request: Request, response: Response): Promise<Response> {
    const { account_id } = request.params;

    const getAccountStatementService: GetAccountStatementService = container.resolve(
      GetAccountStatementService,
    );

    const statement = await getAccountStatementService.execute({
      idConta: Number(account_id),
    });

    return response.json({
      success: true,
      message: 'Extrato resgatado com sucesso!',
      data: statement,
    });
  }
}

export default new StatementController();
