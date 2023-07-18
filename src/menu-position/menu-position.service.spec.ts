import { Test, TestingModule } from '@nestjs/testing';
import { MenuPositionService } from './menu-position.service';

describe('MenuPositionService', () => {
  let service: MenuPositionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MenuPositionService],
    }).compile();

    service = module.get<MenuPositionService>(MenuPositionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
