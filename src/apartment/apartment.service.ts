import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateApartmentDto } from './dto/create-apartment.dto';
import { UpdateApartmentDto } from './dto/update-apartment.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ApartmentService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createApartmentDto: CreateApartmentDto) {
    return this.prisma.appartment.create({
      data: {
        title: createApartmentDto.title,
        description: createApartmentDto.description,
        rooms: createApartmentDto.rooms
            ? { create: createApartmentDto.rooms }
            : undefined,
      },
      include: { rooms: true },
    });
  }

  async findAll() {
    return this.prisma.appartment.findMany({
      include: { rooms: true },
    });
  }

  async findOne(id: number) {
    const apartment = await this.prisma.appartment.findUnique({
      where: { id },
      include: { rooms: true },
    });
    if (!apartment) {
      throw new NotFoundException(`Apartment with ID ${id} not found`);
    }
    return apartment;
  }

  async update(id: number, updateApartmentDto: UpdateApartmentDto) {
    try {
      return await this.prisma.appartment.update({
        where: { id },
        data: updateApartmentDto,
        include: { rooms: true },
      });
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(`Apartment with ID ${id} not found`);
      }
      throw error;
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.appartment.delete({
        where: { id },
      });
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(`Apartment with ID ${id} not found`);
      }
      throw error;
    }
  }
}