import { Module } from '@nestjs/common';
import { SensorTypeService } from './sensortype.service';
import { SensorTypeController } from './sensortype.controller';
import {PrismaModule} from "../prisma/prisma.module";

@Module({
  controllers: [SensorTypeController],
  providers: [SensorTypeService],
  imports: [PrismaModule]
})
export class SensorTypeModule {}
