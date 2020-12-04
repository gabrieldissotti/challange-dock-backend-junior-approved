import { createConnection, getConnectionOptions, Connection } from 'typeorm';

import Account from '@modules/accounts/infra/typeorm/entities/Account';
import People from '@modules/accounts/infra/typeorm/entities/People';
import Transactions from '@modules/transactions/infra/typeorm/entities/Transaction';

export default async (name = 'default'): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();

  return createConnection(
    Object.assign(defaultOptions, {
      name,
      database: defaultOptions.database,
      entities: [Account, People, Transactions],
    }),
  );
};
