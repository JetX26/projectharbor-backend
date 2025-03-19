/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { PostsModule } from './posts/posts.module';
import { PostsController } from './posts/posts.controller';
import { PostsService } from './posts/posts.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [PostsModule, UsersModule],
  controllers: [AppController, PostsController],
  providers: [AppService, PrismaService, PostsService],
})
export class AppModule {}
