import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FindOptionsWhere, Repository } from "typeorm";
import { CreateUserInput } from "./dto/create-user.input";
import { User  } from "./entities/user.entity";
import { Role } from "./enums/role.enum";

type Where = FindOptionsWhere<User>

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepo:Repository<User>
    ){}

    async findAll():Promise<User[]>{
        return await this.userRepo.find()
    }

    async findOne(where:Where):Promise<User>{
        return await this.userRepo.findOne({where}) ; 
    }

    async create(createUserInput:CreateUserInput):Promise<User>{
        let { 
            firstName , 
            lastName , 
            email , 
            password , 
            username
        } = createUserInput ;

    
        const userInDb = await this.findOne({email});
        const usernameInDb = await this.findOne({username});
        
        if(userInDb){
            throw new BadRequestException('this is email alredy exist');
        }

        if(usernameInDb){
            throw new BadRequestException('this is username alredy exist');
        }            

        // add admin role to first user registration
        const userCount: number = await this.userRepo.count();
        let roles:Role[] = [Role.User];

        if (userCount==0){
             roles.push(Role.Admin);
        }

        const user = new User()
        user.email = email ;
        user.username = username ; 
        user.password = password ;
        user.firstName = firstName ;
        user.lastName = lastName ;
        user.roles = roles;
        
        return this.userRepo.save(user);
    }
}