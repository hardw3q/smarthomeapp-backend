import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {MicroserviceOptions, Transport} from "@nestjs/microservices";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/v1');

  const config = new DocumentBuilder()
      .setTitle('API Pixels Smart Home')
      .setDescription('API Веб сервиса управления умным домом.')
      .setVersion('1.0')
      .addBearerAuth()
      .build();

  app.enableCors();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document); // Теперь доступен по /v1/docs

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.MQTT,
    options: {
      url: 'mqtt://83.217.223.148:1883',
    },
  });


  await app.startAllMicroservices();
  await app.listen(3002, '0.0.0.0');
}
bootstrap();
