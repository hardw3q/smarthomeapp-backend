import { Module } from '@nestjs/common';
import {PrismaModule} from "./prisma/prisma.module";
import { ApartmentModule } from './apartment/apartment.module';
import { RoomModule } from './room/room.module';
import { SensorModule } from './sensor/sensor.module';
import { DeviceModule } from './device/device.module';
import { YandexModule } from './yandex/yandex.module';
import { MetricsModule } from './metrics/metrics.module';
import { SensorTypeModule } from './sensortype/sensortype.module';
import { DeviceTypeModule } from './devicetype/devicetype.module';

@Module({
  imports: [PrismaModule, ApartmentModule, RoomModule, SensorModule, DeviceModule, YandexModule, MetricsModule, SensorTypeModule, DeviceTypeModule],
})
export class AppModule {}
