import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateSliderSlideInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
