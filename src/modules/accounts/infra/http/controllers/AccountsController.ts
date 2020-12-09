import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateAccountService from '@modules/accounts/services/CreateAccountService';
import DisableAccountService from '@modules/accounts/services/DisableAccountService';

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

  public async destroy(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { account_id } = request.params;

    const disableAccountService = container.resolve(DisableAccountService);

    const account = await disableAccountService.execute({
      idConta: Number(account_id),
    });

    return response.json({
      success: true,
      message: 'Conta desativada com sucesso',
      data: {
        ...account,
      },
    });
  }
}

export default new AccountsController();
