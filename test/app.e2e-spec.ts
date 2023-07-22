import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication  } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Post } from 'src/post/entity/post.entity';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let userRepo : Repository<User> ; 
  let postRepo : Repository<Post> ; 


  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    userRepo = app.get<Repository<User>>(getRepositoryToken(User));
    postRepo = app.get<Repository<Post>>(getRepositoryToken(Post));
    await app.init();
  });


  describe("auth", () => {
    it("must register", async () => {
      const mutation = `mutation register($registerInput: RegisterInput!) {
        register(signupInput: $registerInput) {
          access_token 
        }
      }`;
      const variables = {
        registerInput: {
          username : "john" ,
          password : "123456", 
          email : "john@gmail.com",
          firstName : "john" , 
          lastname : "doe"
        }
      };

      const response = await request(app.getHttpServer())
        .post("/graphql")
        .send({
          query: mutation,
          variables,
        });

      expect(response.status).toBe(200);
      });
    });


    describe("book", () => {
      it("must register", async () => {
        const mutation = `mutation createBook($createBookInput: CreateBookInput!) {
          createBook(createBookInput: $createBookInput) {
            title , 
          }
        }`;
        const variables = {
          createBookInput: {
            title : "talk the animals" ,
            content : "cats", 
            fullContent : "talk about cats ",
            slug : "cat-is-cool" , 
          }
        };
  
        const response = await request(app.getHttpServer())
          .post("/graphql")
          .send({
            query: mutation,
            variables,
          });
  
        expect(response.status).toBe(200);
        
        });
      });
});
