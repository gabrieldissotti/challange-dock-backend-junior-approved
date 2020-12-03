import { Request, Response } from 'express';
import CreateAccountService from '../services/CreateAccountService';

class AccountsController {
  public async store(
    request: Request,
    response: Response,
  ): Promise<Response | void> {
    const {
      idPessoa,
      saldo,
      limiteSaqueDiario,
      tipoConta,
    } = request.body;

    const createAccountService = new CreateAccountService();

    const success = await createAccountService.execute({
      idPessoa,
      saldo,
      limiteSaqueDiario,
      tipoConta,
    });

    if (!success) {
      return response.status(500).json({ success })
    }


    return response.json({ success });
  }
}

export default new AccountsController();
