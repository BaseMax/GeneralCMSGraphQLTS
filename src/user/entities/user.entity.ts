import { Field, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "../enums/role.enum";

@ObjectType()
@Entity({name : 'User'})
export class UserEntity {
    
    @Field()
    @PrimaryGeneratedColumn('uuid')
    id : string ; 
    
    @Field()
    @Column({ type : 'varchar', unique : true ,nullable : false })
    username : string ;

    @Field()
    @Column({ type : 'varchar' , nullable : false })
    password : string ;

    @Field()
    @Column({ type : 'varchar' , unique : true ,nullable : false })
    email : string ;

    @Field()
    @Column({ type : 'varchar'})
    firstName : string ;

    @Field()
    @Column({ type : 'varchar'})
    lastName : string ;

    @Field()
    @Column({ type : 'varchar' , nullable : false , default : Role.User})
    role : Role 
}