import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

import { CreateCarModelFeaturesDto } from './dto/create-car-model-features.dto';

import { UpdateCarModelFeaturesDto } from './dto/update-car-model-features.dto';
import { CarModelFeatures } from './entities/car-model-features.entity';

@Injectable()
export class CarModelFeaturesService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateCarModelFeaturesDto): Promise<CarModelFeatures> {
    const carModelFeatures = await this.prisma.carModelFeatures.create({
      data,
      include: {
        model: true,
      },
    });

    return carModelFeatures;
  }

  async findAll(): Promise<CarModelFeatures[]> {
    const carModelFeatures = await this.prisma.carModelFeatures.findMany({
      include: {
        model: true,
      },
    });

    return carModelFeatures;
  }

  async findOne(id: number): Promise<CarModelFeatures> {
    const carModelFeatures = await this.prisma.carModelFeatures.findFirst({
      where: { id },
    });

    if (!carModelFeatures) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Invalid id provided',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    return carModelFeatures;
  }

  async update(
    id: number,
    data: UpdateCarModelFeaturesDto,
  ): Promise<CarModelFeatures> {
    const carModel = await this.prisma.carModel.findFirst({
      where: { id },
    });

    if (!carModel) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Invalid car model provided',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    const carModelFeatures = await this.prisma.carModelFeatures.update({
      where: { id },
      data,
    });

    return carModelFeatures;
  }

  async remove(id: number): Promise<void> {
    const carModelFeatures = await this.prisma.carModelFeatures.findFirst({
      where: { id },
    });

    if (!carModelFeatures) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Invalid id provided',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    await this.prisma.carModelFeatures.delete({
      where: { id },
    });
  }
}
