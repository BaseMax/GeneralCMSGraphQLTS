import { Module } from '@nestjs/common';
import { MenuPositionService } from './menu-position.service';
import { MenuPositionResolver } from './menu-position.resolver';

@Module({
  providers: [MenuPositionResolver, MenuPositionService]
})
export class MenuPositionModule {}
