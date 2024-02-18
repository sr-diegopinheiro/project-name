// user.repository.ts

import { EntityRepository, Repository } from 'typeorm';
import { User } from './user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  // Se houver métodos específicos do repositório, você pode adicioná-los aqui
}
