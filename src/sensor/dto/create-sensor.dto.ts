
export class CreateSensorDto {
    title: string;

    description?: string;

    attributes?: Record<string, any>;

    roomId: number;

    typeId: number;
}
