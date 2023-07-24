import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class SliderSlide {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
