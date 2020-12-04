import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToOne,
} from 'typeorm';

import Account from './Account';

@Entity('Pessoas')
class People {
  @PrimaryGeneratedColumn()
  idPessoa: number;

  @OneToOne(() => Account, account => account.people)
  account: Account;

  @Column()
  nome: string;

  @Column()
  cpf: string;

  @CreateDateColumn()
  dataNascimento: Date;
}

export default People;
