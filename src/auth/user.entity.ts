import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  userID: string;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  role: string;

  @Column('bytea')
  profilePicture: string;

  @Column()
  email: string;

  @Column()
  password: string;
}
