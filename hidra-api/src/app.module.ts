import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Fornecedores } from './fornecedores/entities/fornecedores.entity';
import { FornecedoresModule } from './fornecedores/fornecedores.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'hidra.sqlite',
      synchronize: true,
      logging: true,
      entities: [Fornecedores],
    }),
    FornecedoresModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
