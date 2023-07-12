import { Field, ID, ObjectType } from "@nestjs/graphql";
import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "../enums/role.enum";
import * as bcrypt from 'bcrypt'


@ObjectType()
@Entity({name : 'User'})
export class User {
    
    @Field((type)=>ID)
    @PrimaryGeneratedColumn('uuid')
    id : string ; 
    
    @Field()
    @Column({ type : 'varchar', unique : true ,nullable : false })
    username : string ;

    @Field()
    @Column({ type : 'varchar' , nullable : false })
    password : string ;

    // hash password before insert
    @BeforeInsert()
    @BeforeUpdate()
    async hashPassword(){
        if(this.password){
            this.password = await bcrypt.hash(this.password , 10)
        }
    }

    @Field()
    @Column({ type : 'varchar' , unique : true ,nullable : false })
    email : string ;

    @Field()
    @Column({ type : 'varchar'})
    firstName : string ;

    @Field()
    @Column({ type : 'varchar'})
    lastName : string ;

    @Field((type)=>[String])
    @Column({ type : 'enum', array : true , enum : Role , nullable : false , default : []})
    roles : Role[] ;
}