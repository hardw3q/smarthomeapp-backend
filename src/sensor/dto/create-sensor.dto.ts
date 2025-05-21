import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateSensorDto {
    @ApiProperty({
        example: 'Датчик температуры',
        description: 'Название сенсора',
    })
    title: string;

    @ApiPropertyOptional({
        example: 'Измеряет температуру в комнате',
        description: 'Описание сенсора',
    })
    description?: string;

    @ApiPropertyOptional({
        example: {
            unit: '°C',
            min: -40,
            max: 125,
        },
        description: 'Дополнительные характеристики сенсора в формате JSON',
    })
    attributes?: Record<string, any>;

    @ApiProperty({
        example: 1,
        description: 'ID комнаты, в которой находится сенсор',
    })
    roomId: number;

    @ApiProperty({
        example: 2,
        description: 'ID типа сенсора',
    })
    typeId: number;
}
