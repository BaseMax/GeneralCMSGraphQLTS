import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StatusResult } from 'src/common/utils/status-result';
import { FindOptionsWhere, Repository } from 'typeorm';
import { CreateMenuPositionInput } from './dto/create-menu-position.input';
import { UpdateMenuPositionInput } from './dto/update-menu-position.input';
import { MenuPosition } from './entities/menu-position.entity';

type Where = FindOptionsWhere<MenuPosition> ;

@Injectable()
export class MenuPositionService {
  constructor(
    @InjectRepository(MenuPosition)
    private readonly menuPositionRepo:Repository<MenuPosition>
  ){}
  
  async create(createMenuPositionInput: CreateMenuPositionInput):Promise<MenuPosition>{
    const { name , slug } = createMenuPositionInput ; 
    const exist = await this.menuPositionRepo.findOneBy({slug}) ;

    if(exist){
      throw new  BadRequestException("this slug alredy used")
    }

    const newMenuPosition = new MenuPosition() ;
    newMenuPosition.name = name ; 
    newMenuPosition.slug = slug ; 

    return await this.menuPositionRepo.save(newMenuPosition) ;

  }

  async findAll():Promise<MenuPosition[]>{
    return await this.menuPositionRepo.find({relations : {
      menuItems : true , 
    }})
  }

  async findOne(where:Where):Promise<MenuPosition>{
    const menuPosition = await this.menuPositionRepo.findOne({where }) ;

    if(!menuPosition){
      throw new NotFoundException('menuPostion not found') ;
    }

    return menuPosition ; 
  }

  async update(id: string, updateMenuPositionInput: UpdateMenuPositionInput):Promise<StatusResult>{
    const statusResult:StatusResult = {
      success : true , 
      message : "item edited successfully"
    }
    const { name , slug } = updateMenuPositionInput ;
    
    try {
      await this.findOne({id}) ; 
      await this.menuPositionRepo.update({id} , {name , slug});
    } catch (error) {
      return {
        message : error , 
        success : false
      }
    }

    return statusResult ; 
  }

  async remove(id: string ):Promise<StatusResult>{
    await this.menuPositionRepo.delete({id})

    return {
      message : "item deleted successfully" , 
      success : false
    }
  }
}
