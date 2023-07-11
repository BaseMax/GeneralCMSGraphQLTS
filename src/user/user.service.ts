import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserEntity } from "./entities/user.entity";


@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepo:Repository<UserEntity>
    ){}

    async findAll():Promise<UserEntity[]>{
        return await this.userRepo.find({})
    }
}