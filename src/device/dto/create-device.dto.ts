import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateDeviceDto {
    @ApiProperty({
        example: 'Умная лампа',
        description: 'Название устройства',
    })
    title: string;

    @ApiPropertyOptional({
        example: 'Лампа с управлением по Wi-Fi',
        description: 'Описание устройства (необязательно)',
    })
    description?: string;

    @ApiPropertyOptional({
        example: 'online',
        description: 'Текущий статус устройства (например: online, offline)',
    })
    status?: string;

    @ApiPropertyOptional({
        example: {
            brightness: 80,
            color: 'white',
        },
        description: 'Дополнительные характеристики устройства в формате JSON',
    })
    attributes?: Record<string, any>;

    @ApiProperty({
        example: 2,
        description: 'ID типа устройства',
    })
    typeId: number;

    @ApiProperty({
        example: 5,
        description: 'ID комнаты, в которой установлено устройство',
    })
    roomId: number;
}
