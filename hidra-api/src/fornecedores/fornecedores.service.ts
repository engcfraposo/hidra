import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFornecedoreDto } from './dto/create-fornecedores.dto';
import { UpdateFornecedoreDto } from './dto/update-fornecedores.dto';
import { Fornecedores } from './entities/fornecedores.entity';

@Injectable()
export class FornecedoresService {
  constructor(
    @InjectRepository(Fornecedores)
    private fornecedoresRepository: Repository<Fornecedores> ,
      
  ){}
  create(createFornecedoresDto: CreateFornecedoreDto) {
    return this.fornecedoresRepository.save(createFornecedoresDto);
  }

  findAll() {
    return this.fornecedoresRepository.find();
  }

  findOne(id: string) {
    return this.fornecedoresRepository.findOneBy({ id });
  }

  update(id: string, updateFornecedoresDto: UpdateFornecedoreDto) {
    return this.fornecedoresRepository.update(id, updateFornecedoresDto)
  }

  async remove(id: string) {
     await this.fornecedoresRepository.delete(id)
  }
}
