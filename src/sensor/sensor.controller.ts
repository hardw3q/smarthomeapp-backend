import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SensorService } from './sensor.service';
import { CreateSensorDto } from './dto/create-sensor.dto';
import { UpdateSensorDto } from './dto/update-sensor.dto';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiResponse, ApiCreatedResponse, ApiNotFoundResponse } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('Датчики')
@Controller('v1/sensor')
export class SensorController {
  constructor(private readonly sensorService: SensorService) {}

  @Post()
  @ApiOperation({ summary: 'Создать новый датчик' })
  @ApiCreatedResponse({ description: 'Датчик успешно создан.' })
  create(@Body() createSensorDto: CreateSensorDto) {
    return this.sensorService.create(createSensorDto);
  }

  @Get()
  @ApiOperation({ summary: 'Получить все датчики' })
  @ApiResponse({ status: 200, description: 'Список датчиков успешно получен.' })
  findAll() {
    return this.sensorService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Получить датчик по ID' })
  @ApiResponse({ status: 200, description: 'Датчик успешно найден.' })
  @ApiNotFoundResponse({ description: 'Датчик с указанным ID не найден.' })
  findOne(@Param('id') id: string) {
    return this.sensorService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Обновить данные датчика' })
  @ApiResponse({ status: 200, description: 'Датчик успешно обновлен.' })
  @ApiNotFoundResponse({ description: 'Датчик с указанным ID не найден.' })
  update(
      @Param('id') id: string,
      @Body() updateSensorDto: UpdateSensorDto,
  ) {
    return this.sensorService.update(+id, updateSensorDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Удалить датчик' })
  @ApiResponse({ status: 200, description: 'Датчик успешно удален.' })
  @ApiNotFoundResponse({ description: 'Датчик с указанным ID не найден.' })
  remove(@Param('id') id: string) {
    return this.sensorService.remove(+id);
  }
}
