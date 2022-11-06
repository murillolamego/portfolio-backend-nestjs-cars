import { Test, TestingModule } from '@nestjs/testing';

import { CarMakerService } from './car-maker.service';

describe('CarMakerService', () => {
  let service: CarMakerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarMakerService],
    }).compile();

    service = module.get<CarMakerService>(CarMakerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
