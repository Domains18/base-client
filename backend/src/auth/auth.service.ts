import { Injectable, UnauthorizedException } from "@nestjs/common";
import { LoginDto } from "./dto/login-dto";
import { UserService } from "src/user/user.service";
import * as bcrypt from 'bcrypt';
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) { }
    
    async login( dto: LoginDto) {
        const user = await this.validateUser(dto);

        const payload = {
            username: user.email,
            sub: {
                name: user.name,
            }
        };

        return {
            user,
            backendTokens: {
                accessToken: await this.jwtService.signAsync(payload, {
                    secret: process.env.JWT_SECRET,
                    expiresIn: '1h'
                }),
                refreshToken: await this.jwtService.signAsync(payload, {
                    secret: process.env.JWT_REFRESH_SECRET,
                    expiresIn: '7d'
                })
            }
        }
    }


    async validateUser(dto: LoginDto) {
        const user = await this.userService.findByEmail(dto.email);

        if(user && await bcrypt.compare(dto.password, user.password)) {
            const { password, ...result } = user;
            return result;
        } 
        throw new UnauthorizedException('Invalid credentials');
    }


    async refreshToken(user: any) {
        const payload = {
            username: user.username,
            sub: user.sub
        };

        return {
            backendTokens: {
                accessToken: await this.jwtService.signAsync(payload, {
                    secret: process.env.JWT_SECRET,
                    expiresIn: '1h'
                }),
                refreshToken: await this.jwtService.signAsync(payload, {
                    secret: process.env.JWT_REFRESH_SECRET,
                    expiresIn: '7d'
                })
            }
        }
    }
}