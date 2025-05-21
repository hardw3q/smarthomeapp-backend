import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMetricDto } from './dto/create-metric.dto';

@Injectable()
export class MetricsService {
  constructor(private prisma: PrismaService) {}

  async create(createMetricDto: CreateMetricDto) {
    console.log(createMetricDto)
    return this.prisma.$transaction(async (prisma) => {
      // Создаем новую метрику
      const metric = await prisma.sensorMetrics.create({
        data: {
          sensorId: createMetricDto.sensorId,
          value: createMetricDto.value,
        },
      });

      // Обновляем значение сенсора
      await prisma.sensor.update({
        where: { id: createMetricDto.sensorId },
        data: { value: createMetricDto.value },
      });

      return metric;
    });
  }
}