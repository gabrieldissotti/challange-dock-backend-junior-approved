import { EntityRepository, Repository } from 'typeorm';
import Account from '@models/Account';

@EntityRepository(Account)
class AccountRepository extends Repository<Account> {}

export default AccountRepository;

