import { Module } from '@nestjs/common';

import { CarModelFeaturesService } from './car-model-features.service';

import { CarModelFeaturesController } from './car-model-features.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [CarModelFeaturesController],

  providers: [CarModelFeaturesService, PrismaService],
})
export class CarModelFeaturesModule {}
