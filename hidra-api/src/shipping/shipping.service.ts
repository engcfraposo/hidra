import { Shipping } from './entities/shipping.entity';
//import { ShippingService } from './shipping.service';
import { Injectable } from '@nestjs/common';
import { CreateShippingDto } from './dto/create-shipping.dto';
import { UpdateShippingDto } from './dto/update-shipping.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ShippingService {
  constructor(
    @InjectRepository(Shipping)
    private shippingRepository: Repository<Shipping>,
  ) {}
  create(createShippingDto: CreateShippingDto) {
    return this.shippingRepository.save(createShippingDto);
  }

  findAll() {
    return this.shippingRepository.find();
  }

  findOne(id: string) {
    return this.shippingRepository.findOneBy({ id });
  }

  update(id: string, updateShippingDto: UpdateShippingDto) {
    return `This action updates a #${id} shipping`;
  }

  async remove(id: string) {
    await this.shippingRepository.delete(id);
  }
}
