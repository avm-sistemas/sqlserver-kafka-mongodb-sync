import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiCreatedResponse, ApiExtraModels, ApiOkResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { MinhaTabelaService } from './minha-tabela.service';
import { CreateMinhaTabelaDto } from './dto/create-minha-tabela.dto';
import { UpdateMinhaTabelaDto } from './dto/update-minha-tabela.dto';
import { MinhaTabela } from './entities/minha-tabela.entity';
import { DeleteResult } from 'typeorm';
import { DeleteMinhaTabelaDto } from './dto/delete-minha-tabela.dto';

@ApiTags('Minha Tabela')
@ApiExtraModels(CreateMinhaTabelaDto)
@ApiExtraModels(UpdateMinhaTabelaDto)
@ApiExtraModels(MinhaTabela)
@Controller('minha-tabela')
export class MinhaTabelaController {
  constructor(private readonly minhaTabelaService: MinhaTabelaService) {}

  @Post()
  @ApiOperation({ summary: 'Cria um novo registro na tabela' })
  @ApiCreatedResponse({ 
    description: 'O registro foi criado com sucesso.',
    type: MinhaTabela
  })  
  async create(@Body() createMinhaTabelaDto: CreateMinhaTabelaDto) {
    return await this.minhaTabelaService.create(createMinhaTabelaDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtém todos os registros da tabela' })
  @ApiOkResponse({ 
    description: 'Retorna a lista de todos os registros.',
    type: MinhaTabela,
    isArray: true
  })
  async findAll() {
    return await this.minhaTabelaService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtém um registro por ID' })
  @ApiOkResponse({ 
    description: 'Retorna o registro correspondente.',
    type: MinhaTabela
  })    
  async findOne(@Param('id') id: string) {
    return await this.minhaTabelaService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualiza um registro por ID' })
  @ApiOkResponse({ 
    description: 'O registro foi atualizado com sucesso.',
    type: MinhaTabela 
  })
  async update(@Param('id') id: string, @Body() updateMinhaTabelaDto: UpdateMinhaTabelaDto) {
    return await this.minhaTabelaService.update(+id, updateMinhaTabelaDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deleta um registro por ID' })
  @ApiOkResponse({ 
    description: 'O registro foi deletado com sucesso.',
    type: DeleteMinhaTabelaDto
  })  
  async remove(@Param('id') id: string): Promise<DeleteMinhaTabelaDto> {
    const resultado = await this.minhaTabelaService.remove(+id);
    return { affected: resultado.affected! };
  }
}
