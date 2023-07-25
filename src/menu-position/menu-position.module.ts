import { Module } from '@nestjs/common';
import { MenuPositionService } from './menu-position.service';
import { MenuPositionResolver } from './menu-position.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenuPosition } from './entities/menu-position.entity';

@Module({
  imports : [ TypeOrmModule.forFeature([MenuPosition]) ],
  providers: [MenuPositionService ,MenuPositionResolver]
})
export class MenuPositionModule {}
