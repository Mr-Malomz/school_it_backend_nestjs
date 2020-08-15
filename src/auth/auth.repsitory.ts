import { Repository, EntityRepository } from 'typeorm';
import { User } from 'src/auth/user.entity';
import { AuthSignUpDto } from './dto/auth-signup.dto';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async signUp(authSignUpDto: AuthSignUpDto): Promise<void> {
    const { email, password, firstname, lastname } = authSignUpDto;

    const user = new User();
    user.email = email;
    //encrypting our password
    user.salt = await bcrypt.genSalt();
    user.password = await this.hashPassword(password, user.salt);
    user.firstname = firstname;
    user.lastname = lastname;

    try {
      await user.save();
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('Email already exists');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  //private method to decrypt password with salt
  private async hashPassword(password: string, salt: string) {
    return bcrypt.hash(password, salt);
  }
}
