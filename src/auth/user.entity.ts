import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
} from 'typeorm';

@Entity()
@Unique(['email'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  userID: string;

  @Column({ nullable: true })
  firstname: string;

  @Column({ nullable: true })
  lastname: string;

  @Column({ nullable: true })
  role: string;

  @Column('varchar', { length: 11, nullable: true })
  phoneNumber: string;

  @Column('bytea', { nullable: true })
  profilePicture: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  salt: string;
}
