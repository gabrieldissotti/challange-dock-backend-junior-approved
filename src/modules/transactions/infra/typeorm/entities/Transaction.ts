import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import Account from '@modules/accounts/infra/typeorm/entities/Account';

@Entity('Transacoes')
class Transactions {
  @PrimaryGeneratedColumn()
  idTransacao: number;

  @ManyToOne(() => Account, account => account.transactions)
  @JoinColumn({ name: 'idConta' })
  account: Account;

  @Column()
  idConta: number;

  @Column()
  valor: number;

  @CreateDateColumn()
  dataTransacao: Date;
}

export default Transactions;
