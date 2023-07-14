import { ApolloServerPluginLandingPageGraphQLPlayground } from '@apollo/server-plugin-landing-page-graphql-playground';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './config/database.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    DatabaseModule ,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver : ApolloDriver,
      autoSchemaFile : join(process.cwd() , "src/schema.gql"),
      playground : false , 
      plugins : [ApolloServerPluginLandingPageGraphQLPlayground()]
    }) , 
    UserModule , 
    AuthModule , 
  ] , 
  providers : [AppService] ,
})
export class AppModule {}
