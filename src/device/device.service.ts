import {BadRequestException, Inject, Injectable, NotFoundException} from '@nestjs/common';
import { CreateDeviceDto } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';
import {PrismaService} from "../prisma/prisma.service";
import {CommandDto, CommandPushDto} from "./dto/command.dto";
import {ClientProxy} from "@nestjs/microservices";
import {DeviceTypeService} from "../devicetype/devicetype.service";

@Injectable()
export class DeviceService {
  constructor(private readonly prisma: PrismaService,
              @Inject('MQTT_SERVICE') private readonly client: ClientProxy,
              private readonly deviceTypeService: DeviceTypeService) {}

  async create(createDeviceDto: CreateDeviceDto) {
    // Проверка существования DeviceType и Room
    await this.validateRelationsExist(createDeviceDto);

    return this.prisma.device.create({
      data: {
        title: createDeviceDto.title,
        description: createDeviceDto.description,
        status: createDeviceDto.status || 'INACTIVE',
        attributes: createDeviceDto.attributes,
        type: { connect: { id: createDeviceDto.typeId } },
        room: { connect: { id: createDeviceDto.roomId } }
      },
      include: {
        type: true,
        room: true
      }
    });
  }
  async update(id: number, updateDeviceDto: UpdateDeviceDto) {
    await this.validateRelationsExist(updateDeviceDto);

    try {
      return await this.prisma.device.update({
        where: { id },
        data: {
          title: updateDeviceDto.title,
          description: updateDeviceDto.description,
          status: updateDeviceDto.status,
          attributes: updateDeviceDto.attributes,
          ...(updateDeviceDto.typeId && {
            type: { connect: { id: updateDeviceDto.typeId } }
          }),
          ...(updateDeviceDto.roomId && {
            room: { connect: { id: updateDeviceDto.roomId } }
          })
        },
        include: {
          type: true,
          room: true
        }
      });
    } catch (error) {
      this.handlePrismaError(error, id);
      throw error;
    }
  }
  async findAll() {
    return this.prisma.device.findMany({
      include: {
        type: true,
        room: {
          include: {
            appartment: true
          }
        }
      }
    });
  }

  async findOne(id: number) {
    const device = await this.prisma.device.findUnique({
      where: { id },
      include: {
        type: true,
        room: {
          include: {
            appartment: true
          }
        }
      }
    });

    if (!device) {
      throw new NotFoundException(`Device with ID ${id} not found`);
    }
    return device;
  }


  async remove(id: number) {
    return `This action removes a #${id} device`;
  }
  private async validateRelationsExist(dto: CreateDeviceDto | UpdateDeviceDto) {
    if (dto.typeId) {
      const typeExists = await this.prisma.deviceType.findUnique({
        where: { id: dto.typeId }
      });
      if (!typeExists) {
        throw new NotFoundException(`DeviceType with ID ${dto.typeId} not found`);
      }
    }

    if (dto.roomId) {
      const roomExists = await this.prisma.room.findUnique({
        where: { id: dto.roomId }
      });
      if (!roomExists) {
        throw new NotFoundException(`Room with ID ${dto.roomId} not found`);
      }
    }
  }

  private handlePrismaError(error: any, id: number) {
    if (error.code === 'P2025') {
      throw new NotFoundException(`Device with ID ${id} not found`);
    }
    throw error;
  }

  private sendCommand(deviceId: number, command: CommandDto){
      this.client.emit(`device.push[${deviceId}]`, command)
  }

  async pushDeviceCommand(data: CommandPushDto){
      const device = await this.findOne(data.deviceId);
      if(!device) throw new NotFoundException('Устройство не найдено')
      const deviceType = await this.deviceTypeService.findOne(device.typeId);
      if(!deviceType) throw new NotFoundException('Не найден тип устройства')
      const attributes = deviceType.attributes;
      if(!attributes) throw new NotFoundException('У типа устройства нет атрибутов')
      if(!attributes['commands'].includes(data.command)) throw new BadRequestException('У устройства нет такой команды')
      this.sendCommand(data.deviceId, {command: data.command, value: data.value})
  }
}

