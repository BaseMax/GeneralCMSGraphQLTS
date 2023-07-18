import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateFaqInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
