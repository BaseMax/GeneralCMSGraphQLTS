import { ApolloServerPluginLandingPageGraphQLPlayground } from '@apollo/server-plugin-landing-page-graphql-playground';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './config/database.module';
import { PostModule } from './post/post.module';
import { UserModule } from './user/user.module';
import { CategoryModule } from './category/category.module';
import { FaqModule } from './faq/faq.module';
import { MenuPositionModule } from './menu-position/menu-position.module';
import { TagModule } from './tag/tag.module';
import { SliderSlideModule } from './slider-slide/slider-slide.module';
import { MenuItemModule } from './menu-item/menu-item.module';

@Module({
  imports: [
    DatabaseModule ,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      context: ({ req  }) => ({ req }),
      driver : ApolloDriver,
      autoSchemaFile : join(process.cwd() , "src/schema.gql"),
      playground : false , 
      plugins : [ApolloServerPluginLandingPageGraphQLPlayground()] , 
    }) , 
    UserModule , 
    AuthModule , 
    PostModule, 
    CategoryModule, 
    FaqModule, 
    MenuPositionModule, TagModule, SliderSlideModule, MenuItemModule
  ] , 
  providers : [] ,
})
export class AppModule {}
