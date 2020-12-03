import { EntityRepository, Repository } from 'typeorm';
import People from '@models/People';

@EntityRepository(People)
class PeopleRepository extends Repository<People> {}

export default PeopleRepository;

