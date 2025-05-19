import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';

@Injectable()
export class RoomService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createRoomDto: CreateRoomDto) {
    const { title, description, appartmentId } = createRoomDto;
    return this.prisma.room.create({
      data: { title, description, appartmentId },
    });
  }

  async findAll() {
    return this.prisma.room.findMany({
      include: {
        Sensor: true,
        Device: true,
        appartment: true,
      },
    });
  }

  async findOne(id: number) {
    const room = await this.prisma.room.findUnique({
      where: { id },
      include: {
        Sensor: true,
        Device: true,
        appartment: true,
      },
    });
    if (!room) {
      throw new NotFoundException(`Room with id ${id} not found`);
    }
    return room;
  }

  async update(id: number, updateRoomDto: UpdateRoomDto) {
    await this.findOne(id);
    return this.prisma.room.update({
      where: { id },
      data: { ...updateRoomDto },
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.room.delete({
      where: { id },
    });
  }
}