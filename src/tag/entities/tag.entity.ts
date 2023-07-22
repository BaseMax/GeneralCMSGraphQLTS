import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Post } from 'src/post/entity/post.entity';
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('Tag')
export class Tag {
  @Field((type)=>ID)
  @PrimaryGeneratedColumn('uuid')
  id : string ; 

  @Field((type)=>ID)
  @Column({type : 'varchar' , nullable : false})
  text : string ; 

  @Field(()=>[Post])
  @ManyToMany(()=>Post , (post)=>post.tags)
  @JoinTable()
  posts : Post[]
}
