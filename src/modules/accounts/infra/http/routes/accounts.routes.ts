import { Router } from 'express';

import AccountsController from '@modules/accounts/infra/http/controllers/AccountsController';
import BalanceController from '@modules/accounts/infra/http/controllers/BalanceController';

const accountsRoutes = Router();

accountsRoutes.post('/', AccountsController.store);

accountsRoutes.get('/:account_id/balance', BalanceController.show);

export default accountsRoutes;
