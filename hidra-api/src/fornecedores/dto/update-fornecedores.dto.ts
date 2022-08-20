import { PartialType } from '@nestjs/mapped-types';
import { CreateFornecedoreDto } from './create-fornecedores.dto';

export class UpdateFornecedoreDto extends PartialType(CreateFornecedoreDto) {}
