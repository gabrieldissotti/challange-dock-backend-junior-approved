import 'dotenv/config';

import express from 'express';
import 'express-async-errors';

import cors from 'cors';

import '@shared/infra/typeorm';
import '@shared/container';

import routes from './routes';
import errorHandler from './middlewares/errorHandler';

const app = express();

app.use(express.json());
app.use(cors());

app.use(routes);
app.use(errorHandler);

export default app;
