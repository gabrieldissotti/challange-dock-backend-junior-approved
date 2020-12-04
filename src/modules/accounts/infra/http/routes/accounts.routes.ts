import { Router } from 'express';

import AccountsController from '@modules/accounts/infra/http/controllers/AccountsController';

const accountsRoutes = Router();

accountsRoutes.post('/', AccountsController.store);

export default accountsRoutes;
