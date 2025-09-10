import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiCreatedResponse, ApiExtraModels, ApiOkResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { MinhaTabelaService } from './minha-tabela.service';
import { CreateMinhaTabelaDto } from './dto/create-minha-tabela.dto';
import { UpdateMinhaTabelaDto } from './dto/update-minha-tabela.dto';
import { MinhaTabela } from './entities/minha-tabela.entity';

@ApiTags('Minha Tabela')
@ApiExtraModels(CreateMinhaTabelaDto)
@ApiExtraModels(UpdateMinhaTabelaDto)
@Controller('minha-tabela')
export class MinhaTabelaController {
  constructor(private readonly minhaTabelaService: MinhaTabelaService) {}

  @Post()
  @ApiOperation({ summary: 'Cria um novo registro na tabela' })
  @ApiCreatedResponse({ description: 'O registro foi criado com sucesso.' })  
  create(@Body() createMinhaTabelaDto: CreateMinhaTabelaDto) {
    return this.minhaTabelaService.create(createMinhaTabelaDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtém todos os registros da tabela' })
  @ApiOkResponse({ description: 'Retorna a lista de todos os registros.' })
  findAll() {
    return this.minhaTabelaService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtém um registro por ID' })
  @ApiOkResponse({ description: 'Retorna o registro correspondente.' })    
  findOne(@Param('id') id: string) {
    return this.minhaTabelaService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualiza um registro por ID' })
  @ApiOkResponse({ description: 'O registro foi atualizado com sucesso.' })
  update(@Param('id') id: string, @Body() updateMinhaTabelaDto: UpdateMinhaTabelaDto) {
    return this.minhaTabelaService.update(+id, updateMinhaTabelaDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deleta um registro por ID' })
  @ApiOkResponse({ description: 'O registro foi deletado com sucesso.' })  
  remove(@Param('id') id: string) {
    return this.minhaTabelaService.remove(+id);
  }
}
