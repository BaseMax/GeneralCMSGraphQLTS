import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

@InputType()
export class UpdatePostInput { 
    @Field()
    @IsNotEmpty()
    title : string ; 


    @Field()
    @IsNotEmpty()
    slug : string ; 
    

    @Field()
    @IsNotEmpty()
    content : string ; 
    

    @Field()
    @IsNotEmpty()
    fullContent : string ; 
    

    @Field()
    @IsNotEmpty()
    tagId : string[] ;
    
    @Field()
    @IsNotEmpty()
    categoryId : string[] ;
}