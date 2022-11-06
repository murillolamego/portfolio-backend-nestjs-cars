import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

import { CreateCarMakerDto } from './dto/create-car-maker.dto';

import { UpdateCarMakerDto } from './dto/update-car-maker.dto';
import { CarMaker } from './entities/car-maker.entity';

@Injectable()
export class CarMakerService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateCarMakerDto): Promise<CarMaker> {
    const exists = await this.prisma.carMaker.findFirst({
      where: {
        name: data.name,
        country: data.country,
      },
    });

    if (exists) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Car maker already exists',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    const carMaker = await this.prisma.carMaker.create({
      data,
    });

    return carMaker;
  }

  async findAll(): Promise<CarMaker[]> {
    const carMakers = await this.prisma.carMaker.findMany();

    return carMakers;
  }

  async findOne(id: number): Promise<CarMaker> {
    const carMaker = await this.prisma.carMaker.findFirst({
      where: {
        id,
      },
    });

    if (!carMaker) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Invalid id provided',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    return carMaker;
  }

  async update(id: number, data: UpdateCarMakerDto): Promise<CarMaker> {
    const carMaker = await this.prisma.carMaker.findFirst({
      where: {
        id,
      },
    });

    if (!carMaker) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Invalid id provided',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    const updatedCarMaker = await this.prisma.carMaker.update({
      where: {
        id,
      },
      data,
    });

    return updatedCarMaker;
  }

  async remove(id: number): Promise<void> {
    const carMaker = await this.prisma.carMaker.findFirst({
      where: {
        id,
      },
    });

    if (!carMaker) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Invalid id provided',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    await this.prisma.carMaker.delete({
      where: {
        id,
      },
    });
  }
}
