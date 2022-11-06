export class CreateCarDto {
  plate: string;
  chassis: string;
  rent: number;
  sale: number;
  available = true;
  carMakerId: number;
  carModelId: number;
}
