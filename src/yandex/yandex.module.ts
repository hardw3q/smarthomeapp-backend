import { Module } from '@nestjs/common';
import { YandexService } from './yandex.service';
import { YandexController } from './yandex.controller';
import {SensorModule} from "../sensor/sensor.module";
import {RoomModule} from "../room/room.module";
import {DeviceModule} from "../device/device.module";

@Module({
  providers: [YandexService],
  controllers: [YandexController],
  imports: [
      SensorModule,
      RoomModule,
      DeviceModule
  ]
})
export class YandexModule {}
