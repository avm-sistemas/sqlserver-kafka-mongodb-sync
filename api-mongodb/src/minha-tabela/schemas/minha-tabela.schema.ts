import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type MinhaTabelaDocument = MinhaTabela & Document;

@Schema({ collection: 'minha_tabela' }) // Mapeia para a coleção que o Debezium está usando
export class MinhaTabela {

  @ApiProperty({
    description: 'O ID único do registro no MongoDB',
    example: '60c72b2f9b1d8c001f8e1a1b',
  })
  @Prop()
  _id: string; 

  @ApiProperty({
    description: 'O ID original do registro no SQL Server',
    example: 123,
  })
  @Prop({unique: true})
  ID: number;

  @ApiProperty({
    description: 'O nome do item',
    example: 'Item 1',
  })
  @Prop()
  Nome: string;

  @ApiProperty({
    description: 'A descrição do item',
    example: 'Descrição detalhada do item 1.',
  })
  @Prop()
  Descricao: string;

  @ApiProperty({
    description: 'A data de criação do registro',
    example: '1976-01-29',
  })
  @Prop()
  DataCriacao: number;

}

export const MinhaTabelaSchema = SchemaFactory.createForClass(MinhaTabela);
