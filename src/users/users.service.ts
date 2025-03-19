/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(data: CreateUserDto) {
    await this.prisma.user.create({
      data: {
        name: data.name,
      },
    });
  }

  async fetchUsers() {
    return await this.prisma.user.findMany({
      select: {
        name: true,
        // Email: true,
      },
    });
  }

  async deleteUsers() {
    await this.prisma.user.deleteMany({});
  }
}
