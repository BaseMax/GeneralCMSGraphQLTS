import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MenuItemService } from './menu-item.service';
import { MenuItem } from './entities/menu-item.entity';
import { CreateMenuItemInput } from './dto/create-menu-item.input';
import { UpdateMenuItemInput } from './dto/update-menu-item.input';

@Resolver(() => MenuItem)
export class MenuItemResolver {
  constructor(private readonly menuItemService: MenuItemService) {}

  @Mutation(() => MenuItem)
  createMenuItem(@Args('createMenuItemInput') createMenuItemInput: CreateMenuItemInput) {
    return this.menuItemService.create(createMenuItemInput);
  }

  @Query(() => [MenuItem], { name: 'menuItem' })
  findAll() {
    return this.menuItemService.findAll();
  }

  @Query(() => MenuItem, { name: 'menuItem' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.menuItemService.findOne(id);
  }

  @Mutation(() => MenuItem)
  updateMenuItem(@Args('updateMenuItemInput') updateMenuItemInput: UpdateMenuItemInput) {
    return this.menuItemService.update(updateMenuItemInput.id, updateMenuItemInput);
  }

  @Mutation(() => MenuItem)
  removeMenuItem(@Args('id', { type: () => Int }) id: number) {
    return this.menuItemService.remove(id);
  }
}
