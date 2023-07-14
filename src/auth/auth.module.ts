import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { PassportConf } from "src/config/passport.config";
import { AuthService } from "./auth.service";
import { JwtStartegy } from "./jwt/jwt.strategy";


@Module({
    imports : [
        PassportModule.register(PassportConf),
        JwtModule.registerAsync({
            imports : [ConfigModule],
            inject : [ConfigService] , 
            useFactory : async (configService:ConfigService)=>({
                secret : configService.get<string>('JWT_SECRET_KEY'),
                signOptions : {
                    expiresIn : configService.get<string>('TOKEN_EXPIRATION')
                }
            })
        })
    ],
    providers : [AuthService , JwtStartegy] ,
    exports : [
        PassportModule , 
        JwtModule ,
    ]
})
export class AuthModule{}