import { IsDate, Length } from "class-validator";
import { Field, ObjectType } from "type-graphql";
import { FavoritedType } from "./FavoritedType";
import { MessageType } from "./MessageType";

@ObjectType()
export class RoomType {

    @Field()
    _id: string;

    @Field()
    @Length(4, 50)
    title: string;

    @Field()
    @Length(50, 300)
    body: string;

    @Field()
    @Length(4, 50)
    username: string;

    @Field()
    @IsDate()
    createdAt: Date;

    @Field(() => [MessageType])
    messages: MessageType[];

    @Field(() => [FavoritedType])
    favorited: FavoritedType[];

}