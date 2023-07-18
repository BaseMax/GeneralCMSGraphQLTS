import { InputType ,  Field} from "@nestjs/graphql";
import { IsNotEmpty , IsEmail} from 'class-validator';


@InputType()
export class RegisterInput{
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