import { Router } from 'express';

import CreditController from '@modules/transactions/infra/http/controllers/CreditController';

const transactionsRoutes = Router();

transactionsRoutes.post('/credit', CreditController.store);

export default transactionsRoutes;
