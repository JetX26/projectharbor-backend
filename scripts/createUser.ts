/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Prisma, PrismaClient } from '@prisma/client';
import { error } from 'console';
import { userInfo } from 'os';

const prisma = new PrismaClient();

async function createUser() {
  try {
    const username = 'Stanoj';
    if (
      await prisma.user.findUnique({
        where: {
          name: username,
          // Email: '',
        },
      })
    ) {
      console.error(`Username ${username} already exists on database.`);
    } else {
      await prisma.user.create({
        data: {
          name: username,
          // Email: '',
        },
      });
      console.log(`Username ${username} was just added to the database.`);
    }
  } catch (error) {
    console.error(
      'User was not created because it already exists in database.',
    );
  } finally {
    await prisma.$disconnect();
    console.log('Prisma disconnected');
  }
}

createUser();
