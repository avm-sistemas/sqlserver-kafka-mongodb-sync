import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Health')
@Controller('health')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Testa se a API está a responder' })
  @ApiOkResponse({
    description: 'Retorna o indicador de sucesso de funcionamento.',
    type: [Boolean],
  })

  @Get()
  getHealth(): boolean {
    return this.appService.getHealth();
  }
}