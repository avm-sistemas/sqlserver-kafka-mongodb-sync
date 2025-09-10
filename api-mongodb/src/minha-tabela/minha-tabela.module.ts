import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MinhaTabelaController } from './minha-tabela.controller';
import { MinhaTabelaService } from './minha-tabela.service';
import { MinhaTabela, MinhaTabelaSchema } from './schemas/minha-tabela.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: MinhaTabela.name, schema: MinhaTabelaSchema }]),
  ],
  controllers: [MinhaTabelaController],
  providers: [MinhaTabelaService],  
})
export class MinhaTabelaModule {}
