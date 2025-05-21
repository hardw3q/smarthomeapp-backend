import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateSensorTypeDto {
    @ApiProperty({
        example: 'Температурный датчик',
        description: 'Название типа сенсора',
    })
    title: string;

    @ApiPropertyOptional({
        example: 'Сенсор, измеряющий температуру в помещении',
        description: 'Описание типа сенсора',
    })
    description?: string;

    @ApiPropertyOptional({
        example: {
            unit: '°C',
            precision: 2,
        },
        description: 'Дополнительные характеристики сенсора в формате JSON',
    })
    attributes?: Record<string, any>;
}
