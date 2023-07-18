import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateMenuPositionInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
