import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CategoryService } from './category.service';
import { Category } from './entities/category.entity';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { StatusResult } from './entities/status-result.entity';
import { RoleGuard } from 'src/auth/guards/role.guard';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Role } from 'src/user/enums/role.enum';
import { HasRoles } from 'src/user/decorator/role.decorator';
import { UseGuards } from '@nestjs/common';

@Resolver(() => Category)
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @HasRoles(Role.Admin)
  @UseGuards(JwtAuthGuard , RoleGuard)
  @Mutation(() => Category)
  createCategory(@Args('createCategoryInput') createCategoryInput: CreateCategoryInput) {
    return this.categoryService.create(createCategoryInput);
  }

  @Query(() => [Category], { name: 'category' })
  findAll() {
    return this.categoryService.findAll();
  }

  @Query(() => Category, { name: 'category' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.categoryService.findOne(id);
  }


  @HasRoles(Role.Admin)
  @UseGuards(JwtAuthGuard , RoleGuard)
  @Mutation(() => StatusResult)
  updateCategory(@Args('updateCategoryInput') updateCategoryInput: UpdateCategoryInput) {
    return this.categoryService.update(updateCategoryInput.id, updateCategoryInput);
  }

  @HasRoles(Role.Admin)
  @UseGuards(JwtAuthGuard , RoleGuard)
  @Mutation(() => StatusResult)
  removeCategory(@Args('id', { type: () => String }) id: string) {
    return this.categoryService.remove(id);
  }
}
