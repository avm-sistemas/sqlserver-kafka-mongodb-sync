import { ApiProperty } from '@nestjs/swagger';

export class DeleteMinhaTabelaDto {
  @ApiProperty({ description: 'O número de registros afetados pela operação de deleção.' })
  affected: number;
}
