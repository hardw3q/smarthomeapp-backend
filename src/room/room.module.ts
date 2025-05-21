import { Module } from '@nestjs/common';
import { RoomService } from './room.service';
import { RoomController } from './room.controller';
import {PrismaModule} from "../prisma/prisma.module";

@Module({
  controllers: [RoomController],
  providers: [RoomService],
  exports: [RoomService],
  imports: [PrismaModule]
})
export class RoomModule {}
