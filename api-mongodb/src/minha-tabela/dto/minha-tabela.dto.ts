import { ApiProperty } from '@nestjs/swagger';

export class MinhaTabelaDto {
  /*
  @ApiProperty({
    description: 'O ID único do documento no MongoDB',
    example: '60c72b2f9b1d8c001f8e1a1b',
  })
  _id: string;
  */

  @ApiProperty({ description: 'ID original do registro no SQL Server' })
  ID: number;

  @ApiProperty({ description: 'Nome do registro' })
  Nome: string;

  @ApiProperty({ description: 'Descricao do registro' })
  Descricao: string;

  @ApiProperty({ description: 'Timestamp de criação' })
  DataCriacao: number;
}
