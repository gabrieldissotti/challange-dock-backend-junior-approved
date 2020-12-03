import { Router } from 'express';

import AccountsController from './controllers/AccountsController';

const routes = Router();

routes.post('/accounts', AccountsController.store);

export default routes;
