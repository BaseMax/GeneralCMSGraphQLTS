import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StatusResult } from 'src/common/entities/status-result.entity';
import { In, Repository } from 'typeorm';
import { CreateTagInput } from './dto/create-tag.input';
import { UpdateTagInput } from './dto/update-tag.input';
import { Tag } from './entities/tag.entity';

@Injectable()
export class TagService {

  constructor(
    @InjectRepository(Tag)
    private readonly tagRepo:Repository<Tag>
  ){}
  
  async create(createTagInput: CreateTagInput) {
    let { text } = createTagInput ; 
    let tagInDb = await this.tagRepo.findOneBy({text})

    if(tagInDb){
      throw new BadRequestException('tag alerdy used')
    }

    let newTag = new Tag()
    newTag.text = text ; 

    return await this.tagRepo.save(newTag);
  }

  async findAll():Promise<Tag[]> {
    return await this.tagRepo.find()
  }

  async findOne(id: string):Promise<Tag> {
    return await this.tagRepo.findOneBy({id});
  }

  async findByIds(ids:string[]):Promise<Tag[]>{
    const validTags = await this.tagRepo.findBy({id : In(ids)});
  
    // Check if all category IDs provided by the user are valid
    if (validTags.length !== ids.length) {
      const invalidTagsIds = ids.filter((tagId) => {
          return !validTags.some((tag) => tag.id === tagId)
      });
      throw new NotFoundException(`Invalid tags IDs : ${invalidTagsIds}`);
    }

    return validTags ; 
  }


  async remove(id: string):Promise<StatusResult>{
    let result:StatusResult = {
      success : true , 
      message : "item removed successfully" ,
    }

    await this.tagRepo.delete({id})

    return result ; 
  }
}
