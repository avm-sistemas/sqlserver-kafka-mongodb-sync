import { ApiProperty } from '@nestjs/swagger';

export class CreateMinhaTabelaDto {

  @ApiProperty({ description: 'O ID original do registro no SQL Server' })
  ID: number;

  @ApiProperty({ description: 'O nome do item' })
  Nome: string;

  @ApiProperty({ description: 'A descrição do item' })
  Descricao: string;

  @ApiProperty({ description: 'A data de criação do registro' })
  DataCriacao: Date;

}
