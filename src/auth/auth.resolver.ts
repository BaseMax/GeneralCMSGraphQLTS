import { Args, InputType, Mutation, Resolver } from "@nestjs/graphql";
import { AuthService } from "./auth.service";
import { LoginInput } from "./dto/login.input";
import { RegisterInput } from "./dto/register.input";
import { AuthenticatedPayload } from "./entities/AuthenticatedPayload.entity";


@Resolver(()=> AuthenticatedPayload)
export class AuthResolver {
    constructor(
        private readonly authServise: AuthService , 
    ){}

    @Mutation(()=>AuthenticatedPayload)
    async register(@Args('registerInput') registerInput:RegisterInput){
        const result = await this.authServise.register(registerInput);

        return result ; 
    }

    @Mutation(()=> AuthenticatedPayload)
    async login(@Args('loginInput') loginInput:LoginInput){
        const result = await this.authServise.login(loginInput);

        return result ; 
    }

}