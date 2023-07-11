import { Module } from "@nestjs/common";
import { TypeOrmModule, TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import {ConfigModule, ConfigService} from '@nestjs/config';


@Module({
    imports : [
        TypeOrmModule.forRootAsync({
            imports :  [ ConfigModule ], 
            useFactory : async (configService:ConfigService)=>({
                type : 'postgres' , 
                host : configService.get<string>("POSTGRES_HOST"),
                port : configService.get<number>("POSTGRES_PORT"),
                username : configService.get<string>("POSTGRES_USERNAME" , 'mohamad'),
                password : configService.get<string>("POSTGRES_PASSWORD" , 'mohamad'),
                database : configService.get<string>("POSTGRES_DATABASE" , 'project') , 
                entities : ["dist/**/*.entity{.ts,.js}"],
                synchronize : true , 
            }), 
            inject : [ConfigService]
        }) 
    ] , 
    
})
export class DatabaseModule{}