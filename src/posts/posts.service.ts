/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';
import { Prisma } from '@prisma/client';

@Injectable() //Marks this class as a service that NestJS can inject into other components.
export class PostsService {
  constructor(private readonly prisma: PrismaService) {} // injects Prisma to interact with the database

  async create(data: CreatePostDto) {
    return this.prisma.post.create({
      data: {
        title: data.title,
        content: data.content,
        user: {
          connect: { id: data.userId },
        },
      },
    });
  }

  async FindAll() {
    return this.prisma.post.findMany();
  }
}
