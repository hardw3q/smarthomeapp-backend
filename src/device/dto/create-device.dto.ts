export class CreateDeviceDto {

    title: string;

    description?: string;


    status?: string;

    attributes?: Record<string, any>;

    typeId: number;

    roomId: number;
}