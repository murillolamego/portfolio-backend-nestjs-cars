import { CarModel } from 'src/modules/car-model/entities/car-model.entity';

export class CarModelFeatures {
  id: number;
  kmpl: number;
  cylinders: number;
  fuel: string;
  horsepower: number;
  weight: number;
  accel: number;
  year: number;
  model?: CarModel;
  carModelId: number;
}
