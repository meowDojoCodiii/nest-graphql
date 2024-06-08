import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Cat {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  createAt: Date;

  @Field({ nullable: true })
  updateAt: Date;
}

@ObjectType()
export class CatResponse {
  @Field({ nullable: true })
  message: string;

  @Field(() => Cat, { nullable: true })
  data?: Cat;
}
