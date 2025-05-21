import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSensorTypeDto } from './dto/create-sensor-type.dto';
import { UpdateSensorTypeDto } from './dto/update-sensor-type.dto';

@Injectable()
export class SensorTypeService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createSensortypeDto: CreateSensorTypeDto) {
    return this.prisma.sensorType.create({
      data: {
        title: createSensortypeDto.title,
        description: createSensortypeDto.description,
        attributes: createSensortypeDto.attributes,
      },
    });
  }

  async findAll() {
    return this.prisma.sensorType.findMany();
  }

  async findOne(id: number) {
    const sensortype = await this.prisma.sensorType.findUnique({ where: { id } });
    if (!sensortype) {
      throw new NotFoundException(`SensorType with id ${id} not found`);
    }
    return sensortype;
  }

  async update(id: number, updateSensortypeDto: UpdateSensorTypeDto) {
    await this.findOne(id);
    return this.prisma.sensorType.update({
      where: { id },
      data: {
        title: updateSensortypeDto.title,
        description: updateSensortypeDto.description,
        attributes: updateSensortypeDto.attributes,
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.sensorType.delete({ where: { id } });
  }
}
