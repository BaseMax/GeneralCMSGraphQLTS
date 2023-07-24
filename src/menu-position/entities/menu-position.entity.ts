import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { MenuItem } from 'src/menu-item/entities/menu-item.entity';
import { Column, Entity, JoinTable, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({name : "MenuPosition"})
export class MenuPosition {
  @Field((type)=>ID)
  @PrimaryGeneratedColumn('uuid')
  id : string ; 

  @Field((type)=>String)
  @Column({type : 'varchar' , nullable : false})
  name : string ; 

  @Field((type)=>String)
  @Column({type : 'varchar' , nullable : false})
  slug : string ; 

  @Field((type)=>[MenuItem])
  @OneToMany(()=>MenuItem , (menuItem)=>menuItem.menuPosition)
  @JoinTable()
  menuItems : MenuItem[]
}
