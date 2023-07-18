import { Injectable } from '@nestjs/common';
import { CreateMenuPositionInput } from './dto/create-menu-position.input';
import { UpdateMenuPositionInput } from './dto/update-menu-position.input';

@Injectable()
export class MenuPositionService {
  create(createMenuPositionInput: CreateMenuPositionInput) {
    return 'This action adds a new menuPosition';
  }

  findAll() {
    return `This action returns all menuPosition`;
  }

  findOne(id: number) {
    return `This action returns a #${id} menuPosition`;
  }

  update(id: number, updateMenuPositionInput: UpdateMenuPositionInput) {
    return `This action updates a #${id} menuPosition`;
  }

  remove(id: number) {
    return `This action removes a #${id} menuPosition`;
  }
}
