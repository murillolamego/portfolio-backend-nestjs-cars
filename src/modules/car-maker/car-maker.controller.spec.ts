import { Test, TestingModule } from '@nestjs/testing';

import { CarMakerController } from './car-maker.controller';

import { CarMakerService } from './car-maker.service';

describe('CarMakerController', () => {
  let controller: CarMakerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarMakerController],

      providers: [CarMakerService],
    }).compile();

    controller = module.get<CarMakerController>(CarMakerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
