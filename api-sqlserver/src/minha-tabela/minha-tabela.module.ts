// src/minha-tabela/minha-tabela.module.ts
import { Module } from '@nestjs/common';
import { MinhaTabelaService } from './minha-tabela.service';
import { MinhaTabelaController } from './minha-tabela.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MinhaTabela } from './entities/minha-tabela.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MinhaTabela])],
  controllers: [MinhaTabelaController],
  providers: [MinhaTabelaService],
})
export class MinhaTabelaModule {}