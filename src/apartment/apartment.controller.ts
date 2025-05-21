import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApartmentService } from './apartment.service';
import { CreateApartmentDto } from './dto/create-apartment.dto';
import { UpdateApartmentDto } from './dto/update-apartment.dto';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiResponse, ApiCreatedResponse, ApiNotFoundResponse } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('Квартиры')
@Controller('apartment')
export class ApartmentController {
  constructor(private readonly apartmentService: ApartmentService) {}

  @Post()
  @ApiOperation({ summary: 'Создать новую квартиру' })
  @ApiCreatedResponse({ description: 'Квартира успешно создана.' })
  create(@Body() createApartmentDto: CreateApartmentDto) {
    return this.apartmentService.create(createApartmentDto);
  }

  @Get()
  @ApiOperation({ summary: 'Получить все квартиры' })
  @ApiResponse({ status: 200, description: 'Список квартир успешно получен.'})
  findAll() {
    return this.apartmentService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Получить квартиру по ID' })
  @ApiResponse({ status: 200, description: 'Квартира успешно найдена.' })
  @ApiNotFoundResponse({ description: 'Квартира с указанным ID не найдена.' })
  findOne(@Param('id') id: string) {
    return this.apartmentService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Обновить данные квартиры' })
  @ApiResponse({ status: 200, description: 'Квартира успешно обновлена.' })
  @ApiNotFoundResponse({ description: 'Квартира с указанным ID не найдена.' })
  update(
      @Param('id') id: string,
      @Body() updateApartmentDto: UpdateApartmentDto,
  ) {
    return this.apartmentService.update(+id, updateApartmentDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Удалить квартиру' })
  @ApiResponse({ status: 200, description: 'Квартира успешно удалена.' })
  @ApiNotFoundResponse({ description: 'Квартира с указанным ID не найдена.' })
  remove(@Param('id') id: string) {
    return this.apartmentService.remove(+id);
  }
}