import { CreateMenuPositionInput } from './create-menu-position.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMenuPositionInput extends PartialType(CreateMenuPositionInput) {
  @Field(() => Int)
  id: number;
}
