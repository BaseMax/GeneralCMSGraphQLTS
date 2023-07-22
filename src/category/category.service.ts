import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StatusResult } from 'src/common/utils/status-result';
import { In, Repository } from 'typeorm';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {
  
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepo:Repository<Category>
  ){}
  
  async create(createCategoryInput: CreateCategoryInput):Promise<Category>{
    const { name } = createCategoryInput ;
    const categoryInDb = await this.categoryRepo.findOne({where : {name}});

    if(categoryInDb){
      throw new BadRequestException('this category alredy used');
    }

    const newCategory = new Category();
    newCategory.name = name ; 

    return await this.categoryRepo.save(newCategory);
  }

  async findAll():Promise<Category[]>{
    return await this.categoryRepo.find({relations : ['posts']}) ;
  }

  async findOne(id: string):Promise<Category>{
    return await this.categoryRepo.findOneBy({id});
  }

  async findByIds(ids:string[]):Promise<Category[]>{
    const validCategories = await this.categoryRepo.findBy({id : In(ids)});
  
    // Check if all category IDs provided by the user are valid
    if (validCategories.length !== ids.length) {
      const invalidCategoryIds = ids.filter((categoryId) => {
          return !validCategories.some((category) => category.id === categoryId)
      });
      throw new NotFoundException(`Invalid category IDs : ${invalidCategoryIds}`);
    }

    return validCategories ; 
  }

  async update(id: string, updateCategoryInput: UpdateCategoryInput):Promise<StatusResult>{
    const result:StatusResult = {
      message : 'item edited successfully' , 
      success : true , 
    }
    const { name } = updateCategoryInput ;
    const category = await this.findOne(id) ;

    if(!category){
      throw new NotFoundException('category not found');
    }

    await this.categoryRepo.update({id} , {name})

    return result ; 
  }

  async remove(id: string):Promise<StatusResult> {
    let result:StatusResult = {
      message : 'item deleted successfully' ,
      success : true ,
    }
    
    await this.categoryRepo.delete({id}) ;

    return result ;
  }
}
