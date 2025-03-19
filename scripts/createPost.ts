/* eslint-disable prettier/prettier */
import { PrismaClient } from '@prisma/client';
import { randomInt } from 'node:crypto';
import { CreatePostDto } from 'src/posts/dto/create-post.dto';

const prisma = new PrismaClient();

async function createPost(
  data: CreatePostDto = {
    title: 'asdasd',
    content: 'asdasdsad',
    userId: randomInt(1000).toString(),
  },
) {
  try {
    await prisma.post.create({
      data: {
        title: data.title,
        content: data.content,
        userId: data.userId,
      },
    });
  } catch (error) {
    console.error('Post was not made.', error);
  } finally {
    await prisma.$disconnect();
  }
}

createPost();
