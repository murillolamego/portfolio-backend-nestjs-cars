import { CarMaker } from 'src/modules/car-maker/entities/car-maker.entity';
import { CarModel } from 'src/modules/car-model/entities/car-model.entity';

export class Car {
  id: number;
  plate: string;
  chassis: string;
  rent: number;
  sale: number;
  available: boolean;
  maker: CarMaker;
  model: CarModel;
  carMakerId: number;
  carModelId: number;
}
