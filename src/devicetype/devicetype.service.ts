import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {CreateDeviceTypeDto} from "./dto/create-devicetype.dto";
import {UpdateDeviceTypeDto} from "./dto/update-devicetype.dto";

@Injectable()
export class DeviceTypeService {
  constructor(private prisma: PrismaService) {}

  async create(createDeviceTypeDto: CreateDeviceTypeDto) {
    return this.prisma.deviceType.create({
      data: createDeviceTypeDto,
    });
  }

  async findAll() {
    return this.prisma.deviceType.findMany();
  }

  async findOne(id: number) {
    return this.prisma.deviceType.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateDeviceTypeDto: UpdateDeviceTypeDto) {
    return this.prisma.deviceType.update({
      where: { id },
      data: updateDeviceTypeDto,
    });
  }

  async remove(id: number) {
    return this.prisma.deviceType.delete({
      where: { id },
    });
  }
}