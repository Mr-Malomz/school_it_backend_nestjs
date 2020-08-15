import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from './auth.repsitory';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthSignUpDto } from './dto/auth-signup.dto';
import { AuthSignInDto } from './dto/auth-signin.dto';
import { SignInResponse } from './dto/auth.signinresponse.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

  async signUp(authSignUpDto: AuthSignUpDto): Promise<void> {
    return this.userRepository.signUp(authSignUpDto);
  }

  async signIn(authSignInDto: AuthSignInDto) {
    const userResult = await this.userRepository.signIn(authSignInDto);
    if (!userResult) {
      throw new UnauthorizedException('Invalid Credential!');
    }
  }
}
