import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { MetricsService } from './metrics.service';
import { CreateMetricDto } from './dto/create-metric.dto';

@Controller()
export class MetricsController {
  constructor(private readonly metricsService: MetricsService) {}

  @MessagePattern('sensor.metrics.push')
  create(@Payload() createMetricDto: CreateMetricDto) {
    return this.metricsService.create(createMetricDto);
  }

}
