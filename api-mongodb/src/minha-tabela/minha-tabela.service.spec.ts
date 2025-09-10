import { Test, TestingModule } from '@nestjs/testing';
import { MinhaTabelaService } from './minha-tabela.service';

describe('MinhaTabelaService', () => {
  let service: MinhaTabelaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MinhaTabelaService],
    }).compile();

    service = module.get<MinhaTabelaService>(MinhaTabelaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
