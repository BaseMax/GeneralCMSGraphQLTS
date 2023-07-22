import { Req, UseGuards } from "@nestjs/common";
import { Resolver , Query, Args, Mutation, Context } from "@nestjs/graphql";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { RoleGuard } from "src/auth/guards/role.guard";
import { GqlUser } from "src/common/decorators/gql-user.decorator";
import { StatusResult } from "src/common/entities/status-result.entity";
import { HasRoles } from "./decorator/role.decorator";
import { CreateUserInput } from "./dto/create-user.input";
import { UpdateUserInput } from "./dto/update-user.input";
import { User } from "./entities/user.entity";
import { Role } from "./enums/role.enum";
import { UserService } from "./user.service";


@Resolver(()=>User)
export class UserReslover {
    constructor(
        private readonly userService:UserService 
    ){}

    @HasRoles(Role.Admin)
    @UseGuards(JwtAuthGuard , RoleGuard)
    @Query(()=>[User] , {name : 'findAllUser'})
    async findAllUsers(){
        const users = await this.userService.findAll();

        return users ; 
    }

    @UseGuards(JwtAuthGuard)
    @Query(()=> User , {name : 'findUserById'})
    async findUserById(@Args("id" , {type : ()=>String}) id : string){
        return await this.userService.findOne({id});
    }


    @HasRoles(Role.Admin)
    @UseGuards(JwtAuthGuard , RoleGuard)
    @Mutation(()=>User)
    async createUser(
        @Args("createUserInput") createUserInput:CreateUserInput 
    ){
        return this.userService.create(createUserInput);
    }

    @HasRoles(Role.Admin)
    @UseGuards(JwtAuthGuard , RoleGuard)
    @Mutation(()=>StatusResult)
    async updateUser(
        @Args('updateUserInput') updateUserInput:UpdateUserInput ,
        @GqlUser() user ,
    ){
        return this.userService.update(user , updateUserInput);
    }

    @HasRoles(Role.Admin)
    @UseGuards(JwtAuthGuard , RoleGuard)
    @Mutation(()=>StatusResult)
    async removeUser(
        @Args('id' , {name : "removeUser"}) id:string ,
    ){
        return this.userService.remove(id);
    }
}