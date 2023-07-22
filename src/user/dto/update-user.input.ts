import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, Length } from "class-validator";

@InputType()
export class UpdateUserInput{
    @Field(()=>String)
    @IsNotEmpty()
    @Length(11 , 11)
    password : string ; 

    @Field(()=>String)
    @IsNotEmpty()
    firstName : string ; 


    @Field(()=>String)
    @IsNotEmpty()
    lastName : string ; 
}