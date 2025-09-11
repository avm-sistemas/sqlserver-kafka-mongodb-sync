import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { MinhaTabela, MinhaTabelaDocument } from './schemas/minha-tabela.schema';
import { MinhaTabelaDto } from './dto/minha-tabela.dto';

@Injectable()
export class MinhaTabelaService {
  //private readonly logger = new Logger(MinhaTabelaService.name);

  constructor(    
    @InjectModel(MinhaTabela.name) private minhaTabelaModel: Model<MinhaTabelaDocument>
  ) {}

  private mapToDto(document: MinhaTabelaDocument | null): MinhaTabelaDto | null {    
    if (!document) {
      return null;
    }

    const dto = new MinhaTabelaDto();
    //dto._id = document._id;
    dto.ID = document.ID;
    dto.Nome = document.Nome;
    dto.Descricao = document.Descricao;
    dto.DataCriacao = document.DataCriacao;
    return dto;
  }

  async findAll(): Promise<MinhaTabelaDto[]> {    
    const documents = await this.minhaTabelaModel.find().exec();     
    return documents.map(doc => this.mapToDto(doc)).filter(dto => dto !== null);    
  }

  async findBySqlServerId(sqlServerId: number): Promise<MinhaTabelaDto | null> {    
    const document = await this.minhaTabelaModel.findOne({ ID: sqlServerId }).exec();    
    return this.mapToDto(document);    
  }  
}