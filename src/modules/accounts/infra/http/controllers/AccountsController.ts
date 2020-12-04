import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateAccountService from '@modules/accounts/services/CreateAccountService';

class AccountsController {
  public async store(request: Request, response: Response): Promise<Response> {
    const { saldo, limiteSaqueDiario, tipoConta, idPessoa } = request.body;

    const createAccountService = container.resolve(CreateAccountService);

    const account = await createAccountService.execute({
      idPessoa,
      saldo,
      limiteSaqueDiario,
      tipoConta,
    });

    return response.json({
      success: true,
      message: 'Conta cadastrada com sucesso',
      data: {
        ...account,
      },
    });
  }
}

export default new AccountsController();
