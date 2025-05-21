import { Module } from '@nestjs/common';
import { DeviceService } from './device.service';
import { DeviceController } from './device.controller';
import {PrismaModule} from "../prisma/prisma.module";
import {ClientsModule, Transport} from "@nestjs/microservices";
import {DeviceTypeModule} from "../devicetype/devicetype.module";

@Module({
  controllers: [DeviceController],
  providers: [DeviceService],
  exports: [DeviceService],
  imports: [PrismaModule,
            ClientsModule.register([
              {
                name: 'MQTT_SERVICE',
                transport: Transport.MQTT,
                options: {
                  url: 'mqtt://83.217.223.148:1883',
                }
              }
            ]),
            DeviceTypeModule]
})
export class DeviceModule {}
