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

import { CarMakerService } from './car-maker.service';

import { CreateCarMakerDto } from './dto/create-car-maker.dto';

import { UpdateCarMakerDto } from './dto/update-car-maker.dto';

@ApiTags('car-makers')
@Controller('car-maker')
export class CarMakerController {
  constructor(private readonly carMakerService: CarMakerService) {}

  @Post()
  create(@Body() data: CreateCarMakerDto) {
    console.log('teste');
    return this.carMakerService.create(data);
  }

  @Get()
  findAll() {
    return this.carMakerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carMakerService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCarMakerDto: UpdateCarMakerDto,
  ) {
    return this.carMakerService.update(+id, updateCarMakerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carMakerService.remove(+id);
  }
}
