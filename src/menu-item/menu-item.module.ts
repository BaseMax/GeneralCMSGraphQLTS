import { Module } from '@nestjs/common';
import { MenuItemService } from './menu-item.service';
import { MenuItemResolver } from './menu-item.resolver';

@Module({
  providers: [MenuItemResolver, MenuItemService]
})
export class MenuItemModule {}
