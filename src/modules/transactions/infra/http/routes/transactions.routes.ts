import { Router } from 'express';

import CreditController from '@modules/transactions/infra/http/controllers/CreditController';
import DebitController from '@modules/transactions/infra/http/controllers/DebitController';

const transactionsRoutes = Router();

transactionsRoutes.post('/credit', CreditController.store);
transactionsRoutes.post('/debit', DebitController.store);

export default transactionsRoutes;
