import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSensorDto } from './dto/create-sensor.dto';
import { UpdateSensorDto } from './dto/update-sensor.dto';

@Injectable()
export class SensorService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createSensorDto: CreateSensorDto) {
    const { title, description, attributes, roomId, typeId } = createSensorDto;
    return this.prisma.sensor.create({
      data: { title, description, attributes, roomId, typeId },
    });
  }

  async findAll() {
    return this.prisma.sensor.findMany({
      include: {
        room: true,
        type: true,
      },
    });
  }

  async findOne(id: number) {
    const sensor = await this.prisma.sensor.findUnique({
      where: { id },
      include: {
        room: true,
        type: true,
      },
    });
    if (!sensor) {
      throw new NotFoundException(`Sensor with id ${id} not found`);
    }
    return sensor;
  }

  async update(id: number, updateSensorDto: UpdateSensorDto) {
    await this.findOne(id);
    return this.prisma.sensor.update({
      where: { id },
      data: { ...updateSensorDto },
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.sensor.delete({
      where: { id },
    });
  }
}
