import { Strategy , ExtractJwt } from 'passport-jwt';
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { AuthService } from '../auth.service';
import { ConfigService } from '@nestjs/config';
import { JwtPayload } from './jwt.payload';

@Injectable()
export class JwtStartegy extends PassportStrategy(Strategy){
    constructor(
        private readonly authService:AuthService , 
        private readonly configService:ConfigService ,
    ){
        super({
            jwtFromRequest: ExtractJwt.fromExtractors([
                ExtractJwt.fromAuthHeaderAsBearerToken(),
            ]),
            secretOrKey : configService.get<string>("JWT_SECRET_KEY" , "123456"),
        });
    }

    async validate(jwtPayload:JwtPayload){
        const user = await this.authService.validateUser(jwtPayload);

        if(!user){
            throw new UnauthorizedException('Invalid token');
        }

        return user ;
    }
}