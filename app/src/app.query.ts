import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Query {
    @Field()
    hello():string {
        return 'hello world'
    }
}