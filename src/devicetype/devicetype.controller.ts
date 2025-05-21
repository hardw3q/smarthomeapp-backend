import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';
import {CreateDeviceTypeDto} from "./dto/create-devicetype.dto";
import {UpdateDeviceTypeDto} from "./dto/update-devicetype.dto";
import {DeviceTypeService} from "./devicetype.service";


@ApiTags('Типы устройств')
@Controller('devicetype')
export class DeviceTypeController {
  constructor(private readonly devicetypeService: DeviceTypeService) {}

  @Post()
  @ApiOperation({ summary: 'Создать новый тип устройства' })
  @ApiResponse({ status: 201, description: 'Тип устройства успешно создан' })
  @ApiBody({ type: CreateDeviceTypeDto })
  create(@Body() createDeviceTypeDto: CreateDeviceTypeDto) {
    return this.devicetypeService.create(createDeviceTypeDto);
  }

  @Get()
  @ApiOperation({ summary: 'Получить все типы устройств' })
  @ApiResponse({ status: 200, description: 'Список всех типов устройств' })
  findAll() {
    return this.devicetypeService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Получить тип устройства по ID' })
  @ApiParam({ name: 'id', description: 'Идентификатор типа устройства', type: Number })
  @ApiResponse({ status: 200, description: 'Тип устройства найден' })
  @ApiResponse({ status: 404, description: 'Тип устройства не найден' })
  findOne(@Param('id') id: string) {
    return this.devicetypeService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Обновить тип устройства' })
  @ApiParam({ name: 'id', description: 'Идентификатор типа устройства', type: Number })
  @ApiBody({ type: UpdateDeviceTypeDto })
  @ApiResponse({ status: 200, description: 'Тип устройства обновлен' })
  @ApiResponse({ status: 404, description: 'Тип устройства не найден' })
  update(
      @Param('id') id: string,
      @Body() updateDeviceTypeDto: UpdateDeviceTypeDto,
  ) {
    return this.devicetypeService.update(+id, updateDeviceTypeDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Удалить тип устройства' })
  @ApiParam({ name: 'id', description: 'Идентификатор типа устройства', type: Number })
  @ApiResponse({ status: 200, description: 'Тип устройства удален' })
  @ApiResponse({ status: 404, description: 'Тип устройства не найден' })
  remove(@Param('id') id: string) {
    return this.devicetypeService.remove(+id);
  }
}