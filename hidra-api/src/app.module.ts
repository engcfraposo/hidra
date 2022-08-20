import { Shipping } from './shipping/entities/shipping.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShippingModule } from './shipping/shipping.module';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'hidra.sqlite',
      synchronize: true,
      logging: true,
      entities: [Shipping],
    }),
    ShippingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
