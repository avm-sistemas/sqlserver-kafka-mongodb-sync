import { Optional } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('MinhaTabela')
export class MinhaTabela {

  @PrimaryGeneratedColumn("identity")
  @ApiProperty({ description: 'Chave primária do Registro (PK)', required: true, nullable: false, uniqueItems: true })
  ID: number;

  @Column({ nullable: false, unique: true })
  @ApiProperty({ description: 'O nome do item', required: true, nullable: true, uniqueItems: true })
  Nome: string;

  @Column({ nullable: true })
  @ApiProperty({ description: 'A descrição do item', required: false, nullable: true })
  Descricao: string;

  @Optional()
  @Column()
  @ApiProperty({ description: 'A Data de Criação do Registro', required: true, nullable: false })
  DataCriacao: Date;
}
