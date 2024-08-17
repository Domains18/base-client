import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  
  
  async create(createUserDto: CreateUserDto) {
    const user = await this.prisma.user.findUnique({ where: { email: createUserDto.email } });
    
    if (user) throw new ConflictException('Email already exists');

    const newUser = await this.prisma.user.create({
      data: {
        ...createUserDto,
        password: await bcrypt.hash(createUserDto.password, 10),
      }
    }) 

    const { password, ...result } = newUser
    return result
  }
  async findByEmail(email: string) {
    return await this.prisma.user.findUnique({ where: { email } })
  }

  async findById(id: number) {
    return await this.prisma.user.findUnique({ where: { id } })
  }
}
