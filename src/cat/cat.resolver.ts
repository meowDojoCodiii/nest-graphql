import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CatService } from './cat.service';
import { Cat, CatResponse } from './entities/cat.entity';
import { CreateCatInput } from './dto/create-cat.input';
import { UpdateCatInput } from './dto/update-cat.input';
import { NotFoundException } from '@nestjs/common';

@Resolver(() => Cat)
export class CatResolver {
  constructor(private readonly catService: CatService) {}

  @Mutation(() => Cat)
  createCat(@Args('createCatInput') createCatInput: CreateCatInput) {
    return this.catService.create(createCatInput);
  }

  @Query(() => [Cat], { name: 'cat' })
  findAll() {
    return this.catService.findAll();
  }

  @Query(() => CatResponse, { name: 'cat' })
  async findOne(@Args('id', { type: () => Int }) id: number) {
    return await this.catService.findOne(id);
  }

  @Mutation(() => Cat)
  updateCat(@Args('updateCatInput') updateCatInput: UpdateCatInput) {
    return this.catService.update(updateCatInput.id, updateCatInput);
  }

  @Mutation(() => Cat)
  removeCat(@Args('id', { type: () => Int }) id: number) {
    return this.catService.remove(id);
  }
}
