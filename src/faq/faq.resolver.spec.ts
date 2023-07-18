import { Test, TestingModule } from '@nestjs/testing';
import { FaqResolver } from './faq.resolver';
import { FaqService } from './faq.service';

describe('FaqResolver', () => {
  let resolver: FaqResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FaqResolver, FaqService],
    }).compile();

    resolver = module.get<FaqResolver>(FaqResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
