import Account from '../infra/typeorm/entities/Account';
import ICreateAccountDTO from '../dtos/ICreateAccountDTO';

export default interface IAccountsRepository {
  create(account: ICreateAccountDTO): Promise<Account | undefined>;
}
