import { Controller, Post, Body, Request, UseGuards } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login-dto';
import {JwtService } from '@nestjs/jwt';
import { RefreshJwtGuard } from './guard/refresh.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly userService: UserService
    , private readonly authService: AuthService
  ) { }
  
  @Post('register')
  async registerUser(@Body() dto: CreateUserDto) {
    return await this.userService.create(dto)
  }

  @Post('login')
  async loginUser(@Body() dto: LoginDto) {
    return await this.authService.login(dto)
  }

  @UseGuards(RefreshJwtGuard)
  @Post('refresh')
  async refreshToken(@Request() req) {
    return await this.authService.refreshToken(req.user)
    }
}
