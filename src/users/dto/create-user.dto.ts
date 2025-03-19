/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */

import { IsString, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  // @IsEmail()
  // @IsNotEmpty()
  // email: string;
}
