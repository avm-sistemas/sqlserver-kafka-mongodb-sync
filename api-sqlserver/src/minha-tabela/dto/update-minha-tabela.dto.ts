import { PartialType } from '@nestjs/swagger';
import { CreateMinhaTabelaDto } from './create-minha-tabela.dto';

export class UpdateMinhaTabelaDto extends PartialType(CreateMinhaTabelaDto) {}
