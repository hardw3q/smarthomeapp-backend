import { Module } from '@nestjs/common';
import { ApartmentService } from './apartment.service';
import { ApartmentController } from './apartment.controller';
import {PrismaModule} from "../prisma/prisma.module";

@Module({
  controllers: [ApartmentController],
  providers: [ApartmentService],
  exports: [ApartmentModule],
  imports: [PrismaModule]
})
export class ApartmentModule {}
