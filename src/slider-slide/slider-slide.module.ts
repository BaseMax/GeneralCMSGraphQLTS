import { Module } from '@nestjs/common';
import { SliderSlideService } from './slider-slide.service';
import { SliderSlideResolver } from './slider-slide.resolver';

@Module({
  providers: [SliderSlideResolver, SliderSlideService]
})
export class SliderSlideModule {}
