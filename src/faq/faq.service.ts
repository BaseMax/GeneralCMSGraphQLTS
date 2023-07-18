import { Injectable } from '@nestjs/common';
import { CreateFaqInput } from './dto/create-faq.input';
import { UpdateFaqInput } from './dto/update-faq.input';

@Injectable()
export class FaqService {
  create(createFaqInput: CreateFaqInput) {
    return 'This action adds a new faq';
  }

  findAll() {
    return `This action returns all faq`;
  }

  findOne(id: number) {
    return `This action returns a #${id} faq`;
  }

  update(id: number, updateFaqInput: UpdateFaqInput) {
    return `This action updates a #${id} faq`;
  }

  remove(id: number) {
    return `This action removes a #${id} faq`;
  }
}
