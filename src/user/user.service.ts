import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { compare } from "bcrypt";
import { LoginInput } from "src/auth/dto/login.input";
import { StatusResult } from "src/common/entities/status-result.entity";
import { FindOptionsWhere, Repository } from "typeorm";
import { CreateUserInput } from "./dto/create-user.input";
import { UpdateUserInput } from "./dto/update-user.input";
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

    async findByLogin(loginInput:LoginInput):Promise<User>{
        const { username , password } = loginInput ;

        const user = await this.findOne({username}) ;

        if(!user){
            throw new BadRequestException('username is invalid');
        }

        const comparePassword = await compare(password , user.password);
        
        if(!comparePassword){
            throw new BadRequestException('password is invalid');
        }

        return user ; 
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

    async update(user:User , updateUserInput:UpdateUserInput):Promise<StatusResult>{
        const statusResult:StatusResult = {
            message : 'edited successfully' , 
            success : true , 
        }
        const {
            firstName , 
            lastName ,
            password , 
        } = updateUserInput ;

        await this.userRepo.update({id : user.id} , {firstName , lastName , password});

        return statusResult ; 
    }

    async remove(id:string):Promise<StatusResult>{
        const statusResult:StatusResult = {
            success : true , 
            message : 'user removed successfully'
        }

        await this.userRepo.delete({id}) ;

        return statusResult ;
    }
}