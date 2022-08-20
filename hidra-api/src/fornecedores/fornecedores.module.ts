import { Module } from '@nestjs/common';
import { FornecedoresService } from './fornecedores.service';
import { FornecedoresController } from './fornecedores.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fornecedores } from './entities/fornecedores.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Fornecedores])],
  controllers: [FornecedoresController],
  providers: [FornecedoresService]
})
export class FornecedoresModule {}
