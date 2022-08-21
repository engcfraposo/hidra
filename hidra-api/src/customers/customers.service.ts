import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from './entities/customer.entity';
import { Repository } from 'typeorm';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Injectable()
export class CustomersService {
    constructor(
      @InjectRepository(Customer)
      private customersRepository: Repository<Customer>,

    ) {}

  create(createCustomerDto: CreateCustomerDto) {
    return this.customersRepository.save(createCustomerDto);
  }

  findAll() {
    return this.customersRepository.find();
  }

  findOne(id: string) {
    return this.customersRepository.findOneBy({ id });  
  }

  update(id: string, updateCustomerDto: UpdateCustomerDto) {
    return this.customersRepository.update(id , updateCustomerDto);
  }

  async remove(id: string) {
    await this.customersRepository.delete(id);
  }
}
