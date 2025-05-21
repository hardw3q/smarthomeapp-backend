import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { SensorTypeService } from './sensortype.service';
import { CreateSensorTypeDto } from './dto/create-sensor-type.dto';
import { UpdateSensorTypeDto } from './dto/update-sensor-type.dto';

@ApiTags('Типы сенсоров')
@Controller('sensortype')
export class SensorTypeController {
  constructor(private readonly service: SensorTypeService) {}

  @Post()
  @ApiOperation({ summary: 'Создать новый тип сенсора' })
  @ApiResponse({ status: 201, description: 'Тип сенсора успешно создан.' })
  @ApiResponse({ status: 400, description: 'Некорректные данные запроса.' })
  create(@Body() createDto: CreateSensorTypeDto) {
    return this.service.create(createDto);
  }

  @Get()
  @ApiOperation({ summary: 'Получить список всех типов сенсоров' })
  @ApiResponse({ status: 200, description: 'Список типов сенсоров.' })
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Получить тип сенсора по ID' })
  @ApiParam({ name: 'id', type: 'number', description: 'ID типа сенсора' })
  @ApiResponse({ status: 200, description: 'Тип сенсора найден.' })
  @ApiResponse({ status: 404, description: 'Тип сенсора не найден.' })
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Обновить тип сенсора по ID' })
  @ApiParam({ name: 'id', type: 'number', description: 'ID типа сенсора' })
  @ApiResponse({ status: 200, description: 'Тип сенсора успешно обновлен.' })
  @ApiResponse({ status: 400, description: 'Некорректные данные запроса.' })
  @ApiResponse({ status: 404, description: 'Тип сенсора не найден.' })
  update(
      @Param('id') id: string,
      @Body() updateDto: UpdateSensorTypeDto,
  ) {
    return this.service.update(+id, updateDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Удалить тип сенсора по ID' })
  @ApiParam({ name: 'id', type: 'number', description: 'ID типа сенсора' })
  @ApiResponse({ status: 200, description: 'Тип сенсора успешно удален.' })
  @ApiResponse({ status: 404, description: 'Тип сенсора не найден.' })
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}