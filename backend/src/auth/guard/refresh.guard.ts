import { CanActivate, ExecutionContext, UnauthorizedException, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class RefreshJwtGuard implements CanActivate {
    constructor(private jwtService: JwtService) {}
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request);
        if (!token) throw new UnauthorizedException('Token not found');
        try {
            const payload = await this.jwtService.verifyAsync(token, {
                secret: process.env.JWT_REFRESH_SECRET,
            });
            request['user'] = payload;
        } catch (error) {
            throw new UnauthorizedException('Invalid token');
        }

        return true;
    }

    private extractTokenFromHeader(request: Request) {
        const [type, token] = request.headers?.authorization?.split(' ') ?? [];
        return type === 'Refresh' ? token : undefined;
    }
}
