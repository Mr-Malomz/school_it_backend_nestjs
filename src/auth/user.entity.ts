import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  userID: string;

  @Column()
  firstname: string;

  @Column()
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
}
