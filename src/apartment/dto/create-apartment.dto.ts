
class CreateRoomDto {

    title: string;

    description?: string;
}

export class CreateApartmentDto {

    title: string;

    description?: string;

    rooms?: CreateRoomDto[];
}