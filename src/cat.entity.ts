import { ObjectType, Field } from '@nestjs/graphql';
import { Toy } from './dto/toy.interface';

@ObjectType()
export class Cat {
  name: string;

  @Field(type => Toy)
  toy: Toy;

  isLazy?: boolean;
}
