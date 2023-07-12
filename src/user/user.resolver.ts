import { Resolver , Query } from "@nestjs/graphql";
import { UserEntity } from "./entities/user.entity";
import { UserService } from "./user.service";


@Resolver(()=>UserEntity)
export class UserReslover {
    constructor(
        private readonly userService:UserService 
    ){}

    @Query(()=>[UserEntity] , {name : 'getAllUsers'})
    async getAllUsers(){
        const users = await this.userService.findAll();

        return users ; 
    }
}