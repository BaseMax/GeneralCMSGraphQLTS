import { Test, TestingModule } from '@nestjs/testing';
import { SliderSlideService } from './slider-slide.service';

describe('SliderSlideService', () => {
  let service: SliderSlideService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SliderSlideService],
    }).compile();

    service = module.get<SliderSlideService>(SliderSlideService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
