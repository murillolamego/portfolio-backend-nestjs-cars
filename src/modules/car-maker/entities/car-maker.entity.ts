import { CarModel } from 'src/modules/car-model/entities/car-model.entity';
import { Car } from 'src/modules/car/entities/car.entity';

export class CarMaker {
  id: number;
  name: string;
  country: string;
  Car?: Car[];
  CarModel?: CarModel[];
}
