// src/minha-tabela/minha-tabela.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMinhaTabelaDto } from './dto/create-minha-tabela.dto';
import { UpdateMinhaTabelaDto } from './dto/update-minha-tabela.dto';
import { MinhaTabela } from './entities/minha-tabela.entity';

@Injectable()
export class MinhaTabelaService {
  constructor(
    @InjectRepository(MinhaTabela)
    private readonly minhaTabelaRepository: Repository<MinhaTabela>,
  ) {}

  async create(createMinhaTabelaDto: CreateMinhaTabelaDto): Promise<MinhaTabela> {
    const registro = this.minhaTabelaRepository.create(createMinhaTabelaDto);
    return this.minhaTabelaRepository.save(registro);
  }

  async findAll(): Promise<MinhaTabela[]> {
    return this.minhaTabelaRepository.find();
  }

  async findOne(id: number): Promise<MinhaTabela> {
    const registro = await this.minhaTabelaRepository.findOne({ where: { ID: id } });
    if (!registro) {
      throw new NotFoundException(`Registro com ID "${id}" não encontrado.`);
    }
    return registro;
  }

  async update(id: number, updateMinhaTabelaDto: UpdateMinhaTabelaDto): Promise<MinhaTabela> {
    const registro = await this.findOne(id);
    this.minhaTabelaRepository.merge(registro, updateMinhaTabelaDto);
    return this.minhaTabelaRepository.save(registro);
  }

  async remove(id: number): Promise<void> {
    const resultado = await this.minhaTabelaRepository.delete(id);
    if (resultado.affected === 0) {
      throw new NotFoundException(`Registro com ID "${id}" não encontrado.`);
    }
  }
}