/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DonationsService } from './donations.service';
import { donationsDto } from './dto/donations.dto';

@Controller('donations')
export class DonationsController {
  constructor(private readonly donationsService: DonationsService) {}

  @Post()
  create(@Body() donationsDto: donationsDto) {
    return this.donationsService.create(donationsDto);
  }

  @Get()
  findAll() {
    return this.donationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.donationsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() donationsDto: donationsDto) {
    return this.donationsService.update(+id, donationsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.donationsService.remove(+id);
  }
}
