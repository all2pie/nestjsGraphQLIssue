import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Cat } from './cat.entity';
import { CatCreate } from './dto/cat-create.input';
import { Logger } from '@nestjs/common';

@Resolver(of => Cat)
export class AppResolver {
  constructor() {}

  @Query(returns => String)
  getHello(): string {
    return 'Hi, Bug Ahead';
  }

  @Mutation(returns => Cat)
  createCat(@Args('catCreate') catCreate: CatCreate): Cat {
    Logger.verbose(catCreate, 'CatCreate');
    return {
      name: 'mano',
      toy: {
        name: 'box',
        isBroken: true,
      },
      isLazy: true,
    };
  }
}
