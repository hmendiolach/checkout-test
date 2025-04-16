import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { User } from './user.entity';

@Entity('payment_methods')
export class PaymentMethod {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  lastFourDigits: string;

  @Column()
  cardType: string;

  @Column()
  expirationMonth: string;

  @Column()
  expirationYear: string;

  @Column({ default: false })
  isDefault: boolean;

  @Column({ nullable: true })
  tokenizedCardData: string;

  @Column()
  cardHolderName: string;

  @Column({ default: false })
  isVerified: boolean;

  @ManyToOne(() => User, user => user.paymentMethods)
  user: User;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}