import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryResolver } from './category.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports : [
    TypeOrmModule.forFeature([CategoryModule]) ,
  ] ,
  providers: [CategoryResolver, CategoryService]
})
export class CategoryModule {}
