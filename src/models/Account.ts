import {
  Entity,
  Column,
  CreateDateColumn,
  OneToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import People from './People';
import Transaction from './Transaction';

@Entity('Contas')
class Account {
  @PrimaryGeneratedColumn()
  idConta: number;

  @Column()
  idPessoa: number;

  @OneToOne(type => People, people => people.account)
  people: People;

  @OneToMany(type => Transaction, transaction => transaction.account)
  transactions: Transaction[];

  @Column()
  saldo: number;

  @Column()
  limiteSaqueDiario: number;

  @Column()
  flagAtivo: boolean;

  @Column()
  tipoConta: number;

  @CreateDateColumn()
  dataCriacao: Date;
}

export default Account;
