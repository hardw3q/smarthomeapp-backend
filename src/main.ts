import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {MicroserviceOptions, Transport} from "@nestjs/microservices";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice<MicroserviceOptions>({
    options: {
      url: 'mqtt://83.217.223.148:1883',
    },
  });
  // Запускаем оба сервиса
  await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
