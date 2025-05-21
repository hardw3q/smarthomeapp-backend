import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMetricDto } from './dto/create-metric.dto';
import { UpdateMetricDto } from './dto/update-metric.dto';

@Injectable()
export class MetricsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createMetricDto: CreateMetricDto) {
    console.log(createMetricDto)
    return this.prisma.sensorMetrics.create({
      data: {
        datetime: createMetricDto.datetime,
        value: createMetricDto.value,
        sensor: {
          connect: {
            id: createMetricDto.sensorId,
          },
        },
      },
    });
  }

  async findAll() {
    return this.prisma.sensorMetrics.findMany({
      include: {
        sensor: true,
      },
    });
  }

  async findOne(datetime: Date) {
    return this.prisma.sensorMetrics.findUnique({
      where: {
        datetime: datetime,
      },
      include: {
        sensor: true,
      },
    });
  }

  async update(datetime: Date, updateMetricDto: UpdateMetricDto) {
    return this.prisma.sensorMetrics.update({
      where: {
        datetime: datetime,
      },
      data: {
        value: updateMetricDto.value,
      },
    });
  }

  async remove(datetime: Date) {
    return this.prisma.sensorMetrics.delete({
      where: {
        datetime: datetime,
      },
    });
  }
}
