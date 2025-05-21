import {Body, Controller, Post} from '@nestjs/common';
import {YandexRequestDTO} from "./dto/yandex.dto";
import {DeviceService} from "../device/device.service";
import {SensorService} from "../sensor/sensor.service";
import {RoomService} from "../room/room.service";

@Controller('yandex')
export class YandexController {
    constructor(private readonly devicesService: DeviceService,
                private readonly sensorsService: SensorService,
                private readonly roomsService: RoomService) {
    }
    @Post('webhook')
    async handleWebhook(@Body() body: YandexRequestDTO) {
        const command = body.request.command?.toLowerCase();

        if (command?.includes('список устройств')) {
            return this.formatResponse(await this.devicesService.findAll());
        }

        if (command?.includes('список сенсоров')) {
            return this.formatResponse(await this.sensorsService.findAll());
        }

        if (command?.includes('список комнат')) {
            return this.formatResponse(await this.roomsService.findAll());
        }

        return this.formatResponse('Неизвестная команда');
    }

    private formatResponse(data: any) {
        return {
            response: {
                text: Array.isArray(data)
                    ? this.formatList(data)
                    : data.toString(),
                end_session: false,
            },
            version: '1.0',
        };
    }

    private formatList(items: Array<{name: string}>) {
        return items.map(item => item.name).join(', ');
    }
}
