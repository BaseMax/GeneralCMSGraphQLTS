import { BadRequestException, HttpException, HttpStatus, Injectable, NotFoundException} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CategoryService } from "src/category/category.service";
import { StatusResult } from "src/common/entities/status-result.entity";
import { TagService } from "src/tag/tag.service";
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
        private readonly postRepo:Repository<Post> , 
        private readonly categoryService:CategoryService ,
        private readonly tagService:TagService ,
    ){}

    async findOne(where:Where):Promise<Post>{
        return await this.postRepo.findOne({where , relations : {
            author : true , 
            categories : true ,
            tags : true 
        }})
    }

    async findPostsByUser(user:User):Promise<Post[]>{
        return await this.postRepo.find({relations : {
            author : true ,
            categories : true  , 
            tags : true 
        }})
    }

    async findAllPost():Promise<Post[]>{
        return await this.postRepo.find({relations : {
            author : true , 
            categories : true ,
            tags : true 
        }})
    }

    async create(createPostInput:CreatePostInput , user:User):Promise<Post>{
        let { 
            title , 
            content ,
            fullContent ,  
            slug ,
            categoryIds , 
            tagIds ,   
        } = createPostInput ;

        const postInSlug = await this.findOne({slug});

        if(postInSlug){
            throw new BadRequestException('this slug alredy used')
        }

        const categories = await this.categoryService.findByIds(categoryIds);
        const tags = await this.tagService.findByIds(tagIds);
        

        const newPost = new Post() ;
        newPost.title = title ;
        newPost.content = content ; 
        newPost.fullContent = fullContent ; 
        newPost.slug = slug ; 
        newPost.author = user ;
        newPost.categories = categories ;
        newPost.tags = tags ;
        return await this.postRepo.save(newPost) ;
    }

    async update(id:string  ,updatePostInput:UpdatePostInput):Promise<StatusResult>{
        const statusResult:StatusResult = {
            success : true , 
            message : 'item edited successfully'
        }
        const {
            title , 
            content , 
            fullContent , 
            slug , 
        } = updatePostInput ;

        // check post exist 
        let postInDb = await this.findOne({id}) ;

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
            updatedAt : new Date() , 
        });

        return statusResult ; 
    }

    async remove(id:string):Promise<StatusResult>{
        const statusResult:StatusResult = {
            success : true , 
            message : 'item removed successfully'
        }
        
        await this.postRepo.delete({id})
        
        return statusResult ;
    }
}