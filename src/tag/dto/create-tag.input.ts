import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateTagInput {
  
  @Field()
  @IsNotEmpty()
  text : string ; 
}
