import { PartialType } from '@nestjs/swagger';

import { CreateCarModelFeaturesDto } from './create-car-model-features.dto';

export class UpdateCarModelFeaturesDto extends PartialType(
  CreateCarModelFeaturesDto,
) {}
