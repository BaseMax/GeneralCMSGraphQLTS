import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FindOptionsWhere, Repository } from "typeorm";
import { UserEntity } from "./entities/user.entity";

type Where = FindOptionsWhere<UserEntity>

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepo:Repository<UserEntity>
    ){}

    async findAll():Promise<UserEntity[]>{
        return await this.userRepo.find()
    }

    async findOne(where:Where):Promise<UserEntity>{
        const user = await this.userRepo.findOne({where}) ;

        if(!user){
            throw new NotFoundException('user not found')
        }

        return user ; 
    }

}