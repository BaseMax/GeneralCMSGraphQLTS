import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Post } from 'src/post/entity/post.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({name : "Category"})
export class Category {
  @Field((type)=>ID)
  @PrimaryGeneratedColumn('uuid')
  id : string ; 

  @Field((type)=>String)
  @Column({type : 'varchar' , nullable : false})
  name : string ; 

  @Field((type)=>[Post])
  @ManyToMany(()=>Post , (post)=>post.categories)
  posts : Post[]
}
