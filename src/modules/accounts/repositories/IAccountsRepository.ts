import Account from '../infra/typeorm/entities/Account';
import ICreateAccountDTO from '../dtos/ICreateAccountDTO';
import IDisableAccountDTO from '../dtos/IDisableAccountDTO';

export default interface IAccountsRepository {
  create(account: ICreateAccountDTO): Promise<Account | undefined>;
  disable(account: IDisableAccountDTO): Promise<Account | undefined>;
}
