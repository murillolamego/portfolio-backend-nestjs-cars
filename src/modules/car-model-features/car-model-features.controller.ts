import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CarModelFeaturesService } from './car-model-features.service';

import { CreateCarModelFeaturesDto } from './dto/create-car-model-features.dto';

import { UpdateCarModelFeaturesDto } from './dto/update-car-model-features.dto';

@ApiTags('car-model-features')
@Controller('car-model-features')
export class CarModelFeaturesController {
  constructor(
    private readonly carModelFeaturesService: CarModelFeaturesService,
  ) {}

  @Post()
  create(@Body() createCarModelFeaturesDto: CreateCarModelFeaturesDto) {
    return this.carModelFeaturesService.create(createCarModelFeaturesDto);
  }

  @Get()
  findAll() {
    return this.carModelFeaturesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carModelFeaturesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCarModelFeaturesDto: UpdateCarModelFeaturesDto,
  ) {
    return this.carModelFeaturesService.update(+id, updateCarModelFeaturesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carModelFeaturesService.remove(+id);
  }
}
