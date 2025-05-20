import { Module } from '@nestjs/common';
import { YandexService } from './yandex.service';

@Module({
  providers: [YandexService]
})
export class YandexModule {}
