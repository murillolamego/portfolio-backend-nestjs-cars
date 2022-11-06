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

import { CarModelService } from './car-model.service';

import { CreateCarModelDto } from './dto/create-car-model.dto';

import { UpdateCarModelDto } from './dto/update-car-model.dto';

@ApiTags('car-models')
@Controller('car-model')
export class CarModelController {
  constructor(private readonly carModelService: CarModelService) {}

  @Post()
  create(@Body() data: CreateCarModelDto) {
    return this.carModelService.create(data);
  }

  @Get()
  findAll() {
    return this.carModelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carModelService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCarModelDto: UpdateCarModelDto,
  ) {
    return this.carModelService.update(+id, updateCarModelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carModelService.remove(+id);
  }
}
