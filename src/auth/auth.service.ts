import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UserService } from "src/user/user.service";
import { JwtPayload } from "./jwt/jwt.payload";


@Injectable()
export class AuthService{
    constructor(
        private readonly userService:UserService 
    ){}

    async register(){
        
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