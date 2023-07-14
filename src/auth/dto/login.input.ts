import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

@InputType()
export class LoginInput { 
    @IsNotEmpty()
    @Field()
    username : string ; 
    
    @IsNotEmpty()
    @Field()
    password : string;
}