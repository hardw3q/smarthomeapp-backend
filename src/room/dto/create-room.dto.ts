import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateRoomDto {
    @ApiProperty({
        example: 'Гостиная',
        description: 'Название комнаты',
    })
    title: string;

    @ApiPropertyOptional({
        example: 'Основная комната с телевизором и диваном',
        description: 'Описание комнаты (необязательно)',
    })
    description?: string;

    @ApiProperty({
        example: 1,
        description: 'ID квартиры, к которой относится комната',
    })
    appartmentId: number;
}
