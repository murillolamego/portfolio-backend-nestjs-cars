import { CarMaker } from 'src/modules/car-maker/entities/car-maker.entity';
import { CarModelFeatures } from 'src/modules/car-model-features/entities/car-model-features.entity';
import { Car } from 'src/modules/car/entities/car.entity';

export class CarModel {
  id: number;
  name: string;
  maker?: CarMaker;
  carMakerId: number;
  Car?: Car[];
  CarModelFeatures?: CarModelFeatures[];
}
