import { PartialType } from '@nestjs/mapped-types';
import { CreateMinhaTabelaDto } from './create-minha-tabela.dto';

export class UpdateMinhaTabelaDto extends PartialType(CreateMinhaTabelaDto) {}
