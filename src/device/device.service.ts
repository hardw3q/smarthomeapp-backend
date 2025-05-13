import {Injectable, NotFoundException} from '@nestjs/common';
import { CreateDeviceDto } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';
import {PrismaService} from "../prisma/prisma.service";

@Injectable()
export class DeviceService {
  constructor(private readonly prisma: PrismaService) {}

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
  ''

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
}
