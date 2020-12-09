import { Router } from 'express';

import AccountsController from '@modules/accounts/infra/http/controllers/AccountsController';
import BalanceController from '@modules/accounts/infra/http/controllers/BalanceController';
import StatementController from '@modules/accounts/infra/http/controllers/StatementController';

const accountsRoutes = Router();

accountsRoutes.post('/', AccountsController.store);

accountsRoutes.delete('/:account_id', AccountsController.destroy);

accountsRoutes.get('/:account_id/balance', BalanceController.show);

accountsRoutes.get('/:account_id/statement', StatementController.show);

export default accountsRoutes;
