import { Test, TestingModule } from '@nestjs/testing';
import { MinhaTabelaController } from './minha-tabela.controller';

describe('MinhaTabelaController', () => {
  let controller: MinhaTabelaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MinhaTabelaController],
    }).compile();

    controller = module.get<MinhaTabelaController>(MinhaTabelaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
