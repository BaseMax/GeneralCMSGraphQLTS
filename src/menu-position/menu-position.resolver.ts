import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MenuPositionService } from './menu-position.service';
import { MenuPosition } from './entities/menu-position.entity';
import { CreateMenuPositionInput } from './dto/create-menu-position.input';
import { UpdateMenuPositionInput } from './dto/update-menu-position.input';

@Resolver(() => MenuPosition)
export class MenuPositionResolver {
  constructor(private readonly menuPositionService: MenuPositionService) {}

  @Mutation(() => MenuPosition)
  createMenuPosition(@Args('createMenuPositionInput') createMenuPositionInput: CreateMenuPositionInput) {
    return this.menuPositionService.create(createMenuPositionInput);
  }

  @Query(() => [MenuPosition], { name: 'menuPosition' })
  findAll() {
    return this.menuPositionService.findAll();
  }

  @Query(() => MenuPosition, { name: 'menuPosition' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.menuPositionService.findOne(id);
  }

  @Mutation(() => MenuPosition)
  updateMenuPosition(@Args('updateMenuPositionInput') updateMenuPositionInput: UpdateMenuPositionInput) {
    return this.menuPositionService.update(updateMenuPositionInput.id, updateMenuPositionInput);
  }

  @Mutation(() => MenuPosition)
  removeMenuPosition(@Args('id', { type: () => Int }) id: number) {
    return this.menuPositionService.remove(id);
  }
}
