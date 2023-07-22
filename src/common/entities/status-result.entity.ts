import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class StatusResult {
    @Field((type)=>String)
    message : string ; 

    @Field((type)=>Boolean)
    success : boolean ; 

    @Field((type)=>ID)
    id? : string ; 
}