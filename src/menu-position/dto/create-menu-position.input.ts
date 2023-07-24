import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateMenuPositionInput {
  @Field((type)=>String)
  @IsNotEmpty()
  name : string ; 

  @Field((type)=>String)
  @IsNotEmpty()
  slug : string ; 
}
