import { Field, ID, ObjectType } from "@nestjs/graphql";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@ObjectType()
@Entity({name : "Post"})
export class Post{
    
    @Field(type=>ID)
    @PrimaryGeneratedColumn('uuid')
    id : string ; 

    @Field(type=>String)
    @Column({type : 'varchar' , nullable : false})
    title : string ; 

    @Field(type=>String)
    @Column({type : 'varchar' , nullable : false})
    slug : string ; 
    
    @Field(type=>String)
    @Column({type : 'varchar' , nullable : false})
    content : string ; 

    @Field(type=>String)
    @Column({type : 'varchar' , nullable : false})
    fullContent : string ; 

    @Field(type=>String)
    @Column({type : "date" , default : new Date()})
    createdAt : Date ;

    @Field(type=>String)
    @Column({type : 'date' , nullable : false})
    updatedAt : Date ;

    @Field(type=>User)
    @ManyToOne(()=>User , (user)=>user)
    author : User ; 
}