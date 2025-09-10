import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('API de Replicacao CDC')
    .setDescription('API RESTful para ler dados replicados do SQL Server para o MongoDB via Debezium CDC.')
    .setVersion('1.0')
    .addTag('Fast Reading API')
    .build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // 'api' é o caminho da URL para a documentação

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
