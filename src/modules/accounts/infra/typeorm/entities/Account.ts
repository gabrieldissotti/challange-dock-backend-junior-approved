import {
  Entity,
  Column,
  CreateDateColumn,
  OneToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import Transaction from '@modules/transactions/infra/typeorm/entities/Transaction';

import People from './People';

@Entity('Contas')
class Account {
  @PrimaryGeneratedColumn()
  idConta: number;

  @Column()
  idPessoa: number;

  @OneToOne(() => People, people => people.account)
  people: People;

  @OneToMany(() => Transaction, transaction => transaction.account)
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
