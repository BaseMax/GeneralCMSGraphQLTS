import { UseGuards } from "@nestjs/common";
import { Args, Context, Mutation, Query, Resolver } from "@nestjs/graphql";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { GqlUser } from "src/common/decorators/gql-user.decorator";
import { CreatePostInput } from "./dto/create-post.input";
import { Post } from "./entity/post.entity";
import { PostService } from "./post.service";


@Resolver(()=>Post)
export class PostResolver {
    constructor(
        private readonly postService:PostService ,
    ){}

    @Query(()=>[Post] , {name : 'findAllPost'})
    @UseGuards(JwtAuthGuard)
    async findAllPost(){
       return await this.postService.findAllPost()
    }

    @Query(()=>Post , {name : 'findOnePost'})
    @UseGuards(JwtAuthGuard)
    async findOnePost(@Args('id' , {type : ()=>String}) id : string ){
        return await this.postService.findOne({id})
    }

    @Mutation(()=>Post)
    @UseGuards(JwtAuthGuard)
    async createPost(
        @Args('createPostInput') createPostInput:CreatePostInput,
        @GqlUser() user ,
        ){
        return await this.postService.create(createPostInput , user) ; 
    }
};