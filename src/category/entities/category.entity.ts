import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity } from 'typeorm';

@ObjectType()
// @Entity({name : "Category"})
export class Category {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
