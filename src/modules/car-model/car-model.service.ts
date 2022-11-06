import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

import { CreateCarModelDto } from './dto/create-car-model.dto';

import { UpdateCarModelDto } from './dto/update-car-model.dto';
import { CarModel } from './entities/car-model.entity';

@Injectable()
export class CarModelService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateCarModelDto): Promise<CarModel> {
    const carMaker = await this.prisma.carMaker.findFirst({
      where: {
        id: data.carMakerId,
      },
    });

    if (!carMaker) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Invalid car maker provided',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    const carModel = await this.prisma.carModel.create({
      data,
    });

    return carModel;
  }

  async findAll(): Promise<CarModel[]> {
    const carModels = await this.prisma.carModel.findMany({
      include: {
        maker: true,
      },
    });

    return carModels;
  }

  async findOne(id: number): Promise<CarModel> {
    const carModel = await this.prisma.carModel.findFirst({
      where: {
        id,
      },
    });

    if (!carModel) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Invalid id provided',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    return carModel;
  }

  async update(id: number, data: UpdateCarModelDto): Promise<CarModel> {
    const carMaker = await this.prisma.carMaker.findFirst({
      where: {
        id,
      },
    });

    if (!carMaker) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Invalid car maker provided',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    const carModel = await this.prisma.carModel.update({
      where: {
        id,
      },
      data,
    });

    return carModel;
  }

  async remove(id: number): Promise<void> {
    const carModel = await this.prisma.carModel.findFirst({
      where: {
        id,
      },
    });

    if (!carModel) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Invalid id provided',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    await this.prisma.carModel.delete({
      where: {
        id,
      },
    });
  }
}
