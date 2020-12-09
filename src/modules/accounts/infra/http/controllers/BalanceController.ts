import { Request, Response } from 'express';
import { container } from 'tsyringe';

import GetAccountBalanceService from '@modules/accounts/services/GetAccountBalanceService';

class BalanceController {
  public async show(request: Request, response: Response): Promise<Response> {
    const { account_id } = request.params;

    const getBalanceByAccountService: GetAccountBalanceService = container.resolve(
      GetAccountBalanceService,
    );

    const balance = await getBalanceByAccountService.execute({
      idConta: Number(account_id),
    });

    return response.json({
      success: true,
      message: 'Saldo resgatado com sucesso!',
      data: {
        balance,
      },
    });
  }
}

export default new BalanceController();
