import { EntityRepository, Repository } from 'typeorm';
import Transaction from '@models/Transaction';

@EntityRepository(Transaction)
class TransactionRepository extends Repository<Transaction> {}

export default TransactionRepository;

