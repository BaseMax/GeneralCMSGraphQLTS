import { CreateMenuPositionInput } from './create-menu-position.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateMenuPositionInput extends PartialType(CreateMenuPositionInput) {
  @Field(() => ID)
  id: string;
}
