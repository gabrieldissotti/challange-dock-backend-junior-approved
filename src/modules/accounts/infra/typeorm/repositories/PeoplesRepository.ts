import { EntityRepository, Repository } from 'typeorm';

import People from '@modules/accounts/infra/typeorm/entities/People';

@EntityRepository(People)
class PeoplesRepository extends Repository<People> {}

export default PeoplesRepository;
