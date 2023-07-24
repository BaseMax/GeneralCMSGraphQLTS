import { CreateSliderSlideInput } from './create-slider-slide.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSliderSlideInput extends PartialType(CreateSliderSlideInput) {
  @Field(() => Int)
  id: number;
}
