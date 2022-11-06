import { Module } from '@nestjs/common';
import { CarModule } from './modules/car/car.module';
import { CarMakerModule } from './modules/car-maker/car-maker.module';
import { CarModelModule } from './modules/car-model/car-model.module';
import { CarModelFeaturesModule } from './modules/car-model-features/car-model-features.module';

@Module({
  imports: [CarModule, CarMakerModule, CarModelModule, CarModelFeaturesModule],

  controllers: [],

  providers: [],
})
export class AppModule {}
