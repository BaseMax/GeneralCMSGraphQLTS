import { BadRequestException, Injectable} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FindOptionsWhere, Repository } from "typeorm";
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
        return await this.postRepo.findOne({where})
    }

    async findAllPost():Promise<Post[]>{
        return await this.postRepo.find({})
    }

    async create(createPostInput:CreatePostInput):Promise<Post>{
        let { 
            title , 
            content ,
            fullContent ,  
            slug ,
            categoryId , 
            tagId ,   
        } = createPostInput ;


        const postInSlug = await this.findOne({slug});

        if(postInSlug){
            throw new BadRequestException('this slug alredy used')
        }

        const newPost = new Post();

        
    }

    async update(updatePostInput:UpdatePostInput):Promise<Post>{

    }

    async delete(){}
}