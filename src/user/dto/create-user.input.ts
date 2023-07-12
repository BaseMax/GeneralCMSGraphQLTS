import { Field, InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty } from "class-validator";

@InputType()
export class CreateUserInput{
    @IsNotEmpty()
    @Field()
    username : string ; 
    
    @IsNotEmpty()
    @Field()
    password : string;
    
    @IsNotEmpty()
    @IsEmail()
    @Field()
    email : string ;
    
    @IsNotEmpty()
    @Field()
    firstName : string ; 
    
    @IsNotEmpty()
    @Field()
    lastName : string ; 
}