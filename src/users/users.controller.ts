/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Post, Body, Get, Delete } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users') // All routes here start with /users
export class UsersController {
  constructor(private readonly UsersService: UsersService) {}

  @Post() //handles POST requests to /users
  async createUser(@Body() data: CreateUserDto) {
    return this.UsersService.createUser(data);
  }

  @Get()
  async fetchAllUsers(@Body() data: CreateUserDto) {
    return this.UsersService.fetchUsers();
  }

  @Delete()
  async deleteAllUsers(@Body() data: CreateUserDto) {
    return this.UsersService.deleteUsers();
  }
}
