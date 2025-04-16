import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { User } from './user.entity';

@Entity('addresses')
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  street: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  country: string;

  @Column()
  zipCode: string;

  @Column()
  type: 'shipping' | 'billing';

  @Column({ default: false })
  isDefault: boolean;

  @Column({ default: false })
  isVerified: boolean;

  @Column({ nullable: true })
  phoneNumber: string;

  @Column({ nullable: true })
  verificationCode: string;

  @ManyToOne(() => User, user => user.addresses)
  user: User;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ nullable: true })
  latitude: number;

  @Column({ nullable: true })
  longitude: number;

  @Column({ nullable: true })
  placeId: string;  // For OpenStreetMap/Google Maps reference

  @Column({ nullable: true })
  formattedAddress: string;  // Complete formatted address from API

  @Column({ nullable: true })
  additionalDetails: string;  // Apartment number, floor, etc.

  @Column({ type: 'jsonb', nullable: true })
  geocodingData: Record<string, any>;  // Store full API response
}