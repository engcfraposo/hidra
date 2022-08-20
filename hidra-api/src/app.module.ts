import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Fornecedores } from './fornecedores/entities/fornecedores.entity';
import { FornecedoresModule } from './fornecedores/fornecedores.module';
import { Product } from './products/entities/product.entity';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'hidra.sqlite',
      synchronize: true,
      logging: true,
      entities: [Product, Fornecedores],
    }),
    FornecedoresModule,
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
