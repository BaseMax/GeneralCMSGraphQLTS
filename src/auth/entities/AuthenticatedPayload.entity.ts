import { Field, ObjectType } from "@nestjs/graphql";


@ObjectType()
export class AuthenticatedPayload {
    @Field()
    access_token : string ;

}