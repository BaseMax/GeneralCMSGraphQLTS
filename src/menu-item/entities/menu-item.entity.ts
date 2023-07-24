import { ObjectType, Field, ID } from '@nestjs/graphql';
import { MenuPosition } from 'src/menu-position/entities/menu-position.entity';
import { Column, Entity, JoinTable, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({name : "MenuItem"})
export class MenuItem {
  @Field((type)=>ID)
  @PrimaryGeneratedColumn('uuid')
  id : string ; 

  @Field((type)=>String)
  @Column({type : 'varchar' , nullable : false})
  name : string ; 


  @Field((type)=>String)
  @Column({type : 'varchar' , nullable : false})
  link : string ; 

  @Field((type)=>[MenuPosition])
  @ManyToOne(()=>MenuPosition , (menuPosition)=>menuPosition.menuItems)
  @JoinTable()
  menuPosition : MenuPosition
}
