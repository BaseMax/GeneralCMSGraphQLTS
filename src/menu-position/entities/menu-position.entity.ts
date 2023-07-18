import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class MenuPosition {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
