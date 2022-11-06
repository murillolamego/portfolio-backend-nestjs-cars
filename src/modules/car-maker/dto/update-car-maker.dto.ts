import { PartialType } from '@nestjs/swagger';

import { CreateCarMakerDto } from './create-car-maker.dto';

export class UpdateCarMakerDto extends PartialType(CreateCarMakerDto) {}
