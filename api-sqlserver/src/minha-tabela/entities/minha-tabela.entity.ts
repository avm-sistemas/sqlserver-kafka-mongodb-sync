// src/minha-tabela/minha-tabela.entity.ts
import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('MinhaTabela')
export class MinhaTabela {
  @PrimaryColumn()
  ID: number;

  @Column()
  Nome: string;

  @Column()
  Descricao: string;

  @Column()
  DataCriacao: Date;
}
