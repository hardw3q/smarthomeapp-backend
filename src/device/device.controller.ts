import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DeviceService } from './device.service';
import { CreateDeviceDto } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiResponse, ApiCreatedResponse, ApiNotFoundResponse } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('Устройства')
@Controller('v1/device')
export class DeviceController {
  constructor(private readonly deviceService: DeviceService) {}

  @Post()
  @ApiOperation({ summary: 'Создать новое устройство' })
  @ApiCreatedResponse({ description: 'Устройство успешно создано.' })
  create(@Body() createDeviceDto: CreateDeviceDto) {
    return this.deviceService.create(createDeviceDto);
  }

  @Get()
  @ApiOperation({ summary: 'Получить все устройства' })
  @ApiResponse({ status: 200, description: 'Список устройств успешно получен.' })
  findAll() {
    return this.deviceService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Получить устройство по ID' })
  @ApiResponse({ status: 200, description: 'Устройство успешно найдено.' })
  @ApiNotFoundResponse({ description: 'Устройство с указанным ID не найдено.' })
  findOne(@Param('id') id: string) {
    return this.deviceService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Обновить данные устройства' })
  @ApiResponse({ status: 200, description: 'Устройство успешно обновлено.' })
  @ApiNotFoundResponse({ description: 'Устройство с указанным ID не найдено.' })
  update(
      @Param('id') id: string,
      @Body() updateDeviceDto: UpdateDeviceDto,
  ) {
    return this.deviceService.update(+id, updateDeviceDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Удалить устройство' })
  @ApiResponse({ status: 200, description: 'Устройство успешно удалено.' })
  @ApiNotFoundResponse({ description: 'Устройство с указанным ID не найдено.' })
  remove(@Param('id') id: string){
    return this.deviceService.remove(+id);
  }
}
