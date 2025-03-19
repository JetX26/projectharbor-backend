/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { donationsDto } from './dto/donations.dto';

@Injectable()
export class DonationsService {
  create(createDonationDto: donationsDto) {
    return 'This action adds a new donation';
  }

  findAll() {
    return `This action returns all donations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} donation`;
  }

  update(id: number, updateDonationDto: donationsDto) {
    return `This action updates a #${id} donation`;
  }

  remove(id: number) {
    return `This action removes a #${id} donation`;
  }
}
