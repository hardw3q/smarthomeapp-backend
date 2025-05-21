import { Module } from '@nestjs/common';
import { DeviceService } from './device.service';
import { DeviceController } from './device.controller';
import {PrismaModule} from "../prisma/prisma.module";

@Module({
  controllers: [DeviceController],
  providers: [DeviceService],
  exports: [DeviceService],
  imports: [PrismaModule]
})
export class DeviceModule {}
