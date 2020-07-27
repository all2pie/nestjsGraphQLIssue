import { InputType, PickType } from '@nestjs/graphql';
import { Cat } from '../cat.entity';

@InputType()
// export class CatCreate extends PickType(Cat, ['name'], InputType) {} - Works
export class CatCreate extends PickType(Cat, ['name', 'toy'], InputType) {}
