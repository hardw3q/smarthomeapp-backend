import { Module } from '@nestjs/common';
import { DeviceTypeService } from './devicetype.service';
import { DeviceTypeController } from './devicetype.controller';
import {DeviceService} from "../device/device.service";

@Module({
  controllers: [DeviceTypeController],
  providers: [DeviceTypeService],
  exports: [DeviceService]
})
export class DeviceTypeModule {}
