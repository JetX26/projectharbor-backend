/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { PostsService } from './posts.service';

@Controller('posts') // All routes here start with /posts
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post() //handles POST requests to /posts
  async createPost(@Body() CreatePostDto: CreatePostDto) {
    return this.postsService.create(CreatePostDto);
  }

  @Get()
  async getAllPosts() {
    return this.postsService.FindAll();
  }
}
