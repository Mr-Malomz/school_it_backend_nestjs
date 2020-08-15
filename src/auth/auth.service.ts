import { Injectable } from '@nestjs/common';
import { UserRepository } from './auth.repsitory';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthSignUpDto } from './dto/auth-signup.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

  async signUp(authSignUpDto: AuthSignUpDto): Promise<void> {
    return this.userRepository.signUp(authSignUpDto);
  }
}
