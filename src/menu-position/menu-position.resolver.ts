import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MenuPositionService } from './menu-position.service';
import { MenuPosition } from './entities/menu-position.entity';
import { CreateMenuPositionInput } from './dto/create-menu-position.input';
import { UpdateMenuPositionInput } from './dto/update-menu-position.input';
import { RoleGuard } from 'src/auth/guards/role.guard';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Role } from 'src/user/enums/role.enum';
import { HasRoles } from 'src/user/decorator/role.decorator';
import { UseGuards } from '@nestjs/common';
import { StatusResult } from 'src/common/entities/status-result.entity';

@Resolver(() => MenuPosition)
export class MenuPositionResolver {
  constructor(private readonly menuPositionService: MenuPositionService) {}

  @Mutation(() => MenuPosition)
  createMenuPosition(@Args('createMenuPositionInput') createMenuPositionInput: CreateMenuPositionInput) {
    return this.menuPositionService.create(createMenuPositionInput);
  }

  @Query(() => [MenuPosition], { name: 'findAllMenuPosition' })
  findAll() {
    return this.menuPositionService.findAll();
  }

  @Query(() => MenuPosition, { name: 'findOneMenuPosition' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.menuPositionService.findOne({id});
  }

  @HasRoles(Role.Admin)
  @UseGuards(JwtAuthGuard , RoleGuard)
  @Mutation(() => StatusResult)
  updateMenuPosition(@Args('updateMenuPositionInput') updateMenuPositionInput: UpdateMenuPositionInput) {
    return this.menuPositionService.update(updateMenuPositionInput.id, updateMenuPositionInput);
  }

  @HasRoles(Role.Admin)
  @UseGuards(JwtAuthGuard , RoleGuard)
  @Mutation(() => StatusResult , {name : "removeMenuPosition"})
  removeMenuPosition(@Args('id', { type: () => String }) id: string) {
    return this.menuPositionService.remove(id);
  }
}
