import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "../enums/role.enum";


@Entity({name : 'User'})
export class UserEntity {
    @PrimaryGeneratedColumn('uuid')
    id : string ; 

    @Column({ type : 'varchar', unique : true ,nullable : false })
    username : string ;

    @Column({ type : 'varchar' , nullable : false })
    password : string ;

    @Column({ type : 'varchar' , unique : true ,nullable : false })
    email : string ;

    @Column({ type : 'varchar'})
    firstName : string ;

    @Column({ type : 'varchar'})
    lastName : string ;

    @Column({ type : 'varchar' , nullable : false , default : Role.User})
    role : Role 
}