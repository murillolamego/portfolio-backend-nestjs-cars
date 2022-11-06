import { Test, TestingModule } from '@nestjs/testing';
import { CarModelFeaturesService } from './car-model-features.service';

describe('CarModelFeaturesService', () => {
  let service: CarModelFeaturesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarModelFeaturesService],
    }).compile();

    service = module.get<CarModelFeaturesService>(CarModelFeaturesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
