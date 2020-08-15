import { Repository, EntityRepository } from 'typeorm';
import { User } from 'src/auth/user.entity';
import { AuthSignUpDto } from './dto/auth-signup.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async signUp(authSignUpDto: AuthSignUpDto): Promise<void> {
    const { email, password, firstname, lastname } = authSignUpDto;

    const user = new User();
    user.email = email;
    user.password = password;
    user.firstname = firstname;
    user.lastname = lastname;

    await user.save()
  }
}
