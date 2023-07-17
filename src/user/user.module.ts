import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PassportConf } from "src/config/passport.config";
import { User } from "./entities/user.entity";
import { UserReslover } from "./user.resolver";
import { UserService } from "./user.service";

@Module({
    imports : [
        PassportModule.register(PassportConf),
        TypeOrmModule.forFeature([User]) ,
    ] ,
    providers : [UserService , UserReslover] ,
    exports : [UserService]
})
export class UserModule {}