import { Test, TestingModule } from '@nestjs/testing';
import { MenuPositionResolver } from './menu-position.resolver';
import { MenuPositionService } from './menu-position.service';

describe('MenuPositionResolver', () => {
  let resolver: MenuPositionResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MenuPositionResolver, MenuPositionService],
    }).compile();

    resolver = module.get<MenuPositionResolver>(MenuPositionResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
