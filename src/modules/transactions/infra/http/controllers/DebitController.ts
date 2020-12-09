import { Request, Response } from 'express';
import { container } from 'tsyringe';

import DebitService from '@modules/transactions/services/DebitService';

class DebitController {
  public async store(request: Request, response: Response): Promise<Response> {
    const { account_id, value } = request.body;

    const debitService = container.resolve(DebitService);

    const debit = await debitService.execute({
      idConta: account_id,
      valor: value,
    });

    return response.json({
      success: true,
      message: 'Débito efetuado com sucesso!',
      data: {
        ...debit,
        valor: -debit.valor,
      },
    });
  }
}

export default new DebitController();
