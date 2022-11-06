import { Test, TestingModule } from '@nestjs/testing';

import { CarModelFeaturesController } from './car-model-features.controller';

import { CarModelFeaturesService } from './car-model-features.service';

describe('CarModelFeaturesController', () => {
  let controller: CarModelFeaturesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarModelFeaturesController],

      providers: [CarModelFeaturesService],
    }).compile();

    controller = module.get<CarModelFeaturesController>(
      CarModelFeaturesController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
