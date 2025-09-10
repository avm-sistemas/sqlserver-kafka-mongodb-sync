import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { MinhaTabelaService } from './minha-tabela.service';
import { MinhaTabela } from './schemas/minha-tabela.schema';
import { ApiExtraModels, ApiOkResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { MinhaTabelaDto } from './dto/minha-tabela.dto';

@ApiTags('Minha Tabela')
@ApiExtraModels(MinhaTabelaDto)
@Controller('minha-tabela')
export class MinhaTabelaController {
  constructor(private readonly minhaTabelaService: MinhaTabelaService) {}

  @Get()
  @ApiOperation({ summary: 'Obter todos os registros da tabela' })
  @ApiOkResponse({
    description: 'Lista de todos os registros.',
    type: [MinhaTabelaDto],
  })
  async findAll(): Promise<MinhaTabelaDto[]> {
    return (await this.minhaTabelaService.findAll());
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obter um registro por ID do SQL Server' })
  @ApiParam({
    name: 'id',
    description: 'ID original do registro no SQL Server',
    example: 123,
  })
  @ApiOkResponse({
    description: 'O registro correspondente ao ID do SQL Server.',
    type: MinhaTabelaDto,
  })
  async findBySqlServerId(@Param('id', ParseIntPipe) id: number): Promise<MinhaTabelaDto | null> {
    return this.minhaTabelaService.findBySqlServerId(id);
  }  
}