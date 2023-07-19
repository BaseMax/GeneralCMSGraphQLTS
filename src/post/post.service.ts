import { BadRequestException, HttpException, HttpStatus, Injectable, NotFoundException} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/user/entities/user.entity";
import { FindOptionsWhere, Repository, UpdateResult } from "typeorm";
import { CreatePostInput } from "./dto/create-post.input";
import { UpdatePostInput } from "./dto/update-post.input";
import { Post } from "./entity/post.entity";


type Where = FindOptionsWhere<Post>

@Injectable()
export class PostService {
    constructor(
        @InjectRepository(Post)
        private readonly postRepo:Repository<Post>
    ){}

    async findOne(where:Where):Promise<Post>{
        return await this.postRepo.findOne({where , relations : ['author']})
    }

    async findPostsByUser(user:User):Promise<Post[]>{
        return await this.postRepo.find({relations : ['author']})
    }

    async findAllPost():Promise<Post[]>{
        return await this.postRepo.find({select : {author : {firstName  : true, lastName : true}}})
    }

    async create(createPostInput:CreatePostInput , user:User):Promise<Post>{
        let { 
            title , 
            content ,
            fullContent ,  
            slug ,
            // categoryId , 
            // tagId ,   
        } = createPostInput ;


        const postInSlug = await this.findOne({slug});

        if(postInSlug){
            throw new BadRequestException('this slug alredy used')
        }

        const newPost = new Post() ;
        newPost.title = title ;
        newPost.content = content ; 
        newPost.fullContent = fullContent ; 
        newPost.slug = slug ; 
        newPost.author = user ;

        return await this.postRepo.save(newPost) ;
    }

    async update(id : string , updatePostInput:UpdatePostInput):Promise<HttpException>{
        let {
            title , 
            content , 
            fullContent , 
            slug , 
            // categoryId , 
            // tagId , 
        } = updatePostInput ;

        // check post exist 
        let postInDb = this.findOne({id}) ;

        if(!postInDb){
            throw new NotFoundException('post is not found')
        }

        await this.postRepo.update({
           id 
        },
        {
            title ,
            content , 
            fullContent , 
            slug , 
            updatedAt : new Date()
        });

        return new HttpException('post updated successfully' , HttpStatus.ACCEPTED) ; 
    }

    async delete(id:string):Promise<boolean>{
        await this.postRepo.delete({id})
        return true ;
    }
}