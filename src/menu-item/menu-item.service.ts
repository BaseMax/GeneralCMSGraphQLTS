import { Injectable } from '@nestjs/common';
import { CreateMenuItemInput } from './dto/create-menu-item.input';
import { UpdateMenuItemInput } from './dto/update-menu-item.input';

@Injectable()
export class MenuItemService {
  create(createMenuItemInput: CreateMenuItemInput) {
    return 'This action adds a new menuItem';
  }

  findAll() {
    return `This action returns all menuItem`;
  }

  findOne(id: number) {
    return `This action returns a #${id} menuItem`;
  }

  update(id: number, updateMenuItemInput: UpdateMenuItemInput) {
    return `This action updates a #${id} menuItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} menuItem`;
  }
}
