import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreditService from '@modules/transactions/services/CreditService';

class CreditController {
  public async store(request: Request, response: Response): Promise<Response> {
    const { account_id, value } = request.body;

    const creditService = container.resolve(CreditService);

    const credit = await creditService.execute({
      idConta: account_id,
      valor: value,
    });

    return response.json({
      success: true,
      message: 'Crédito efetuado com sucesso!',
      data: {
        ...credit,
      },
    });
  }
}

export default new CreditController();
