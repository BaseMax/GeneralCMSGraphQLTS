import { ApolloServerPluginLandingPageGraphQLPlayground } from '@apollo/server-plugin-landing-page-graphql-playground';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './config/database.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    // GraphQLModule.forRoot<ApolloDriverConfig>({
    //   driver : ApolloDriver,
    //   autoSchemaFile : join(process.cwd() , "src/schema.gql"),
    //   playground : false , 
    //   plugins : [ApolloServerPluginLandingPageGraphQLPlayground()]
    // }) , 
    DatabaseModule , 
    UserModule , 
  ] , 
  controllers : [AppController] , 
  providers : [AppService]
})
export class AppModule {}
