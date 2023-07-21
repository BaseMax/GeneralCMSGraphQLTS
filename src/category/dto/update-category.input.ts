import { CreateCategoryInput } from './create-category.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class UpdateCategoryInput extends PartialType(CreateCategoryInput) {
    @Field((type)=>ID)
    @IsNotEmpty()
    id : string ; 
}
