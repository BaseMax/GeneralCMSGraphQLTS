import { Injectable } from '@nestjs/common';
import { CreateSliderSlideInput } from './dto/create-slider-slide.input';
import { UpdateSliderSlideInput } from './dto/update-slider-slide.input';

@Injectable()
export class SliderSlideService {
  create(createSliderSlideInput: CreateSliderSlideInput) {
    return 'This action adds a new sliderSlide';
  }

  findAll() {
    return `This action returns all sliderSlide`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sliderSlide`;
  }

  update(id: number, updateSliderSlideInput: UpdateSliderSlideInput) {
    return `This action updates a #${id} sliderSlide`;
  }

  remove(id: number) {
    return `This action removes a #${id} sliderSlide`;
  }
}
