import { Module } from '@nestjs/common';
import { FaqService } from './faq.service';
import { FaqResolver } from './faq.resolver';

@Module({
  providers: [FaqResolver, FaqService]
})
export class FaqModule {}
