import { PrismaService } from "src/prisma.service";

import { Module } from "@nestjs/common";

import { CarController } from "./car.controller";
import { CarService } from "./car.service";

@Module({
  controllers: [CarController],

  providers: [CarService, PrismaService],
})
export class CarModule {}
