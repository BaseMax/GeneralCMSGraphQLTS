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
  let token : string ; 


  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    userRepo = app.get<Repository<User>>(getRepositoryToken(User));
    postRepo = app.get<Repository<Post>>(getRepositoryToken(Post));
    await app.init();
  });

  afterAll(async ()=>{
    await app.close()
  })


  describe("auth", () => {
    it("must register", async () => {
      const mutation = `mutation register($registerInput: RegisterInput!) {
        register(registerInput: $registerInput) {
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

    it("must login", async () => {
      const mutation = `mutation login($loginInput: LoginInput!) {
        login(loginInput: $loginInput) {
          access_token 
        }
      }`;
      const variables = {
        registerInput: {
          username : "john" ,
          password : "123456", 
        }
      };

      const response = await request(app.getHttpServer())
        .post("/graphql")
        .send({
          query: mutation,
          variables,
        });

      expect(response.status).toBe(200);
      token = response.body.data.access_token ;
      });
  });


  describe("book", () => {
    it("must create book", async () => {
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
        .set({Authorization : token})
        .send({
          query: mutation,
          variables,
        });

      expect(response.status).toBe(200);
      
      });

      it("find all books", async () => {
        const query = `query {
            findAllPost{
            title , 
            content ,
            fullContent , 
            slug 
          }
      }`

        const response = await request(app.getHttpServer())
          .post("/graphql")
          .set({Authorization : token})
          .send({
            query: query,
          });
  
        expect(response.status).toBe(200);
        
      }); 
    });


    describe("category", () => {
      it("must create ctategory", async () => {
        const mutation = `mutation createCategory($createCategory: CreateCategoryInput!) {
          createCategory(createCategoryInput: $createCategory) {
            name 
          }
        }`;
        const variables = {
          categoryInput : {
           name : "cat"
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
  
      it("find All category", async () => {
        const query = `query {
          findAllCategory {
            name 
          }
        }`;
  
        const response = await request(app.getHttpServer())
          .post("/graphql")
          .send({
            query: query
          });
  
        expect(response.status).toBe(200);
        });
    });
    
});
