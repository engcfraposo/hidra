import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShippingModule } from './shipping/shipping.module';
import { Shipping } from './shipping/entities/shipping.entity';
import { Fornecedores } from './fornecedores/entities/fornecedores.entity';
import { FornecedoresModule } from './fornecedores/fornecedores.module';
import { Product } from './products/entities/product.entity';
import { ProductsModule } from './products/products.module';
import { CustomersModule } from './customers/customers.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'hidra.sqlite',
      synchronize: true,
      logging: true,
      entities: [Product, Shipping, Fornecedores],
    }),
    ShippingModule,
    FornecedoresModule,
    ProductsModule,
    CustomersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
