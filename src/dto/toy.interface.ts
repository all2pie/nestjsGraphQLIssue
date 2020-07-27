import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Toy {
  name: string;
  isBroken: boolean;
}
