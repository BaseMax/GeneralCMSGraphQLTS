import { BadRequestException, Injectable, UnauthorizedException } from "@nestjs/common";
import { UserService } from "src/user/user.service";
import { RegisterInput } from "./dto/register.input";
import { JwtPayload } from "./jwt/jwt.payload";


@Injectable()
export class AuthService{
    constructor(
        private readonly userService:UserService 
    ){}

    async register(registerInput:RegisterInput){
        const {
            firstName ,
            lastName ,
            email , 
            username , 
            password , 
        } = registerInput ;
        // check user esxist 
        const user = await this.userService.findOne({email }) ;
    }
    
    async login(){
        
    }

    async validateUser({ sub } :JwtPayload){
        const user = await this.userService.findOne({id : sub});

        if(!user){
            throw new UnauthorizedException('Invalid token')
        }

        return user ; 
    }
}