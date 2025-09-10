import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Torna o ConfigModule disponível em toda a aplicação
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: `mongodb://${configService.get('MONGODB')}:27017/cdc_db`,
      }),
      inject: [ConfigService],
    }),            
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
