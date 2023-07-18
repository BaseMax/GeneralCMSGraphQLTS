import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Faq {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
