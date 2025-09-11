import { ApiProperty } from '@nestjs/swagger';

export class CreateMinhaTabelaDto {

  @ApiProperty({ description: 'O nome do item', nullable: false })
  Nome: string;

  @ApiProperty({ description: 'A descrição do item', nullable: true })
  Descricao: string;

}
