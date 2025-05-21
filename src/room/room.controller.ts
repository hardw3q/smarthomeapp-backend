import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RoomService } from './room.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiResponse, ApiCreatedResponse, ApiNotFoundResponse } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('Комнаты')
@Controller('room')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Post()
  @ApiOperation({ summary: 'Создать новую комнату' })
  @ApiCreatedResponse({ description: 'Комната успешно создана.' })
  create(@Body() createRoomDto: CreateRoomDto) {
    return this.roomService.create(createRoomDto);
  }

  @Get()
  @ApiOperation({ summary: 'Получить все комнаты' })
  @ApiResponse({ status: 200, description: 'Список комнат успешно получен.' })
  findAll() {
    return this.roomService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Получить комнату по ID' })
  @ApiResponse({ status: 200, description: 'Комната успешно найдена.' })
  @ApiNotFoundResponse({ description: 'Комната с указанным ID не найдена.' })
  findOne(@Param('id') id: string) {
    return this.roomService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Обновить данные комнаты' })
  @ApiResponse({ status: 200, description: 'Комната успешно обновлена.' })
  @ApiNotFoundResponse({ description: 'Комната с указанным ID не найдена.' })
  update(
      @Param('id') id: string,
      @Body() updateRoomDto: UpdateRoomDto,
  ) {
    return this.roomService.update(+id, updateRoomDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Удалить комнату' })
  @ApiResponse({ status: 200, description: 'Комната успешно удалена.' })
  @ApiNotFoundResponse({ description: 'Комната с указанным ID не найдена.' })
  remove(@Param('id') id: string) {
    return this.roomService.remove(+id);
  }
}