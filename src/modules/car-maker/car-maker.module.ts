import { Module } from '@nestjs/common';

import { CarMakerService } from './car-maker.service';

import { CarMakerController } from './car-maker.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [CarMakerController],

  providers: [CarMakerService, PrismaService],
})
export class CarMakerModule {}
