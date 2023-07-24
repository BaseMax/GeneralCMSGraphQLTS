import { Test, TestingModule } from '@nestjs/testing';
import { SliderSlideResolver } from './slider-slide.resolver';
import { SliderSlideService } from './slider-slide.service';

describe('SliderSlideResolver', () => {
  let resolver: SliderSlideResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SliderSlideResolver, SliderSlideService],
    }).compile();

    resolver = module.get<SliderSlideResolver>(SliderSlideResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
