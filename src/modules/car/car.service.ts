import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

import { CreateCarDto } from './dto/create-car.dto';

import { UpdateCarDto } from './dto/update-car.dto';
import { Car } from './entities/car.entity';

@Injectable()
export class CarService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateCarDto): Promise<Car> {
    const plateExists = await this.prisma.car.findFirst({
      where: { plate: data.plate },
    });

    if (plateExists) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Invalid plate provided',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    const chassisExists = await this.prisma.car.findFirst({
      where: { chassis: data.chassis },
    });

    if (chassisExists) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Invalid chassis provided',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    const carMaker = await this.prisma.carMaker.findFirst({
      where: { id: data.carMakerId },
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

    const carModel = await this.prisma.carModel.findFirst({
      where: { id: data.carModelId },
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

    const car = await this.prisma.car.create({
      data,
      include: {
        maker: true,
        model: true,
      },
    });

    return car;
  }

  async findAll(): Promise<Car[]> {
    const cars = await this.prisma.car.findMany({
      include: {
        maker: true,
        model: true,
      },
    });

    return cars;
  }

  async findOne(id: number): Promise<Car> {
    const car = await this.prisma.car.findFirst({
      where: { id },
      include: {
        maker: true,
        model: true,
      },
    });

    if (!car) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Invalid id provided',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    return car;
  }

  async update(id: number, data: UpdateCarDto): Promise<Car> {
    const plateExists = await this.prisma.car.findFirst({
      where: { plate: data.plate },
    });

    if (plateExists) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Invalid plate provided',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    const chassisExists = await this.prisma.car.findFirst({
      where: { chassis: data.chassis },
    });

    if (chassisExists) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Invalid chassis provided',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    const car = await this.prisma.car.findFirst({
      where: { id },
      include: {
        maker: true,
        model: true,
      },
    });

    if (!car) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Invalid id provided',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    const carMaker = await this.prisma.carMaker.findFirst({
      where: { id: data.carMakerId },
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

    const carModel = await this.prisma.carModel.findFirst({
      where: { id: data.carModelId },
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

    const updatedCar = await this.prisma.car.update({
      where: {
        id,
      },
      data: {
        ...data,
      },
      include: {
        maker: true,
        model: true,
      },
    });

    return updatedCar;
  }

  async remove(id: number): Promise<void> {
    const car = await this.prisma.car.findFirst({
      where: { id },
      include: {
        maker: true,
        model: true,
      },
    });

    if (!car) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Invalid id provided',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    await this.prisma.car.delete({
      where: { id },
    });
  }
}
