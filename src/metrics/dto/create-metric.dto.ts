import { ApiProperty } from '@nestjs/swagger';

export class CreateMetricDto {
    @ApiProperty({
        example: '2025-05-21T14:30:00Z',
        description: 'Дата и время метрики (формат ISO 8601)',
    })
    datetime: Date;

    @ApiProperty({
        example: { temperature: 22.5 },
        description: 'Значение метрики в формате JSON',
    })
    value: any;

    @ApiProperty({
        example: 1,
        description: 'ID сенсора, к которому относится метрика',
    })
    sensorId: number;
}
