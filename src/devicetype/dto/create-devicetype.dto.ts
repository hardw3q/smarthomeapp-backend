import { ApiProperty } from '@nestjs/swagger';

export class CreateDeviceTypeDto {
    @ApiProperty({ description: 'Название типа устройства', example: 'Умная лампа' })
    title: string;

    @ApiProperty({
        description: 'Описание типа устройства',
        example: 'Управляемая через Wi-Fi лампа с RGB-подсветкой',
        required: false,
    })
    description?: string;

    @ApiProperty({
        description: 'Дополнительные атрибуты в формате JSON',
        example: { color: 'RGB', power: '10W' },
        required: false,
    })
    attributes?: any;
}

