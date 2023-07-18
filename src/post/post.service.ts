import { Injectable} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FindOptionsWhere, Repository } from "typeorm";
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

    async create(createPostInput){}

    async update(){}

    async delete(){}
}