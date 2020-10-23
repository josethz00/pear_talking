import { prop as Property, getModelForClass } from '@typegoose/typegoose';
import { Field, ID, ObjectType, Int } from 'type-graphql';
import { ObjectId } from 'mongodb';
import { UserModel } from "./User";
import { Ref } from '../@types/Ref';
import { MessageType } from '../modules/rooms/typeDefs/MessageType';
import { FavoritedType } from '../modules/rooms/typeDefs/FavoritedType';


@ObjectType()
export class RoomModel {

    @Field(() => ID)
    public readonly _id?: ObjectId;

    @Field()
    @Property({ required: true  })
    title: string;

    @Field()
    @Property({ required: true  })
    body?: string;

    @Field()
    @Property({ required: true  })
    username?: string;

    @Field()
    @Property({ required: true, default: new Date() })
    createdAt?: Date;

    @Field(() => [MessageType]!)
    @Property({ type: [MessageType]! })
    messages: MessageType[];

    @Field(() => [FavoritedType]!)
    @Property({ type: [FavoritedType]! })
    favorited: FavoritedType[];

    @Field(() => Int)
    favoritedCounter: number;

    @Field(() => UserModel)
    @Property({ ref: () => UserModel })
    user?: Ref<UserModel>


}

export const Room = getModelForClass(RoomModel);