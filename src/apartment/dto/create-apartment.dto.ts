import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {CreateRoomDto} from "../../room/dto/create-room.dto";


export class CreateApartmentDto {
    @ApiProperty({
        example: 'Квартира на Пушкинской',
        description: 'Название квартиры',
    })
    title: string;

    @ApiPropertyOptional({
        example: 'Квартира с двумя спальнями и кухней-студией',
        description: 'Описание квартиры (необязательно)',
    })
    description?: string;

    @ApiPropertyOptional({
        type: [CreateRoomDto],
        description: 'Список комнат, входящих в состав квартиры (необязательно)',
        example: [
            { title: 'Гостиная', description: 'Комната с телевизором и диваном' },
            { title: 'Кухня', description: 'Оснащена плитой и холодильником' },
        ],
    })
    rooms?: CreateRoomDto[];
}
