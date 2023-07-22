import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoryModule } from "src/category/category.module";
import { Post } from "./entity/post.entity";
import { PostResolver } from "./post.resolver";
import { PostService } from "./post.service";


@Module({
    imports : [ 
        TypeOrmModule.forFeature([Post]),
        CategoryModule
    ] , 
    providers : [PostResolver , PostService] , 
    exports : []
})
export class PostModule {} ;