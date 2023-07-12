import { Resolver , Query, Args, Mutation } from "@nestjs/graphql";
import { CreateUserInput } from "./dto/create-user.input";
import { User } from "./entities/user.entity";
import { UserService } from "./user.service";


@Resolver(()=>User)
export class UserReslover {
    constructor(
        private readonly userService:UserService 
    ){}

    @Query(()=>[User] , {name : 'findAllUser'})
    async findAllUsers(){
        const users = await this.userService.findAll();

        return users ; 
    }

    @Query(()=> User , {name : 'findUserById'})
    async findUserById(@Args("id" , {type : ()=>String}) id : string){
        return await this.userService.findOne({id});
    }


    @Mutation(()=>User)
    async createUser(
        @Args("createUserInput") createUserInput:CreateUserInput 
    ){
        return this.userService.create(createUserInput);
    }
}