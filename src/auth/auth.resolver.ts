import { HttpException } from "@nestjs/common";
import { Args, InputType, Mutation, Resolver } from "@nestjs/graphql";
import { User } from "src/user/entities/user.entity";
import { AuthService } from "./auth.service";
import { LoginInput } from "./dto/login.input";
import { RegisterInput } from "./dto/register.input";
import { AuthenticatedPayload } from "./entities/AuthenticatedPayload.entity";


@Resolver(()=> AuthenticatedPayload)
export class AuthResolver {
    constructor(
        private readonly authServise: AuthService , 
    ){}

    @Mutation(()=>[HttpException , User])
    async register(@Args('registerInput') registerInput:RegisterInput){
        const result = await this.authServise.register(registerInput);

        return result ; 
    }

    @Mutation(()=>[HttpException , User])
    async login(@Args('loginInput') loginInput:LoginInput){
        const result = await this.authServise.login(loginInput);

        return result ; 
    }

}