import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SliderSlideService } from './slider-slide.service';
import { SliderSlide } from './entities/slider-slide.entity';
import { CreateSliderSlideInput } from './dto/create-slider-slide.input';
import { UpdateSliderSlideInput } from './dto/update-slider-slide.input';

@Resolver(() => SliderSlide)
export class SliderSlideResolver {
  constructor(private readonly sliderSlideService: SliderSlideService) {}

  @Mutation(() => SliderSlide)
  createSliderSlide(@Args('createSliderSlideInput') createSliderSlideInput: CreateSliderSlideInput) {
    return this.sliderSlideService.create(createSliderSlideInput);
  }

  @Query(() => [SliderSlide], { name: 'sliderSlide' })
  findAll() {
    return this.sliderSlideService.findAll();
  }

  @Query(() => SliderSlide, { name: 'sliderSlide' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.sliderSlideService.findOne(id);
  }

  @Mutation(() => SliderSlide)
  updateSliderSlide(@Args('updateSliderSlideInput') updateSliderSlideInput: UpdateSliderSlideInput) {
    return this.sliderSlideService.update(updateSliderSlideInput.id, updateSliderSlideInput);
  }

  @Mutation(() => SliderSlide)
  removeSliderSlide(@Args('id', { type: () => Int }) id: number) {
    return this.sliderSlideService.remove(id);
  }
}
