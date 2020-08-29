import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from './auth.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthSignUpDto } from './dto/auth-signup.dto';
import { AuthSignInDto } from './dto/auth-signin.dto';
import { SignInResponse } from './dto/auth.signinresponse.dto';
import { JwtService } from '@nestjs/jwt';
import { UserJwtResponse } from './user-jwt-response.interface';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async signUp(authSignUpDto: AuthSignUpDto): Promise<void> {
    return this.userRepository.signUp(authSignUpDto);
  }

  async signIn(authSignInDto: AuthSignInDto): Promise<UserJwtResponse> {
    const userResult = await this.userRepository.signIn(authSignInDto);
    if (!userResult) {
      throw new UnauthorizedException('Invalid Credential!');
    }

    const payload = { userResult };
    const accessToken = await this.jwtService.sign(payload);

    const signInResponse: UserJwtResponse = {user: userResult, accessToken}

    return signInResponse;
  }
}
