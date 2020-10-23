import { IsDate, Length } from "class-validator";
import { Field, ID, ObjectType } from "type-graphql";
import { prop as Property } from '@typegoose/typegoose';
import { ObjectId } from 'mongodb';
import { mongoose } from '@typegoose/typegoose';


@ObjectType()
export class FavoritedType {

    @Field(() => ID, { nullable: true })
    @Property({ type: ObjectId, default: mongoose.Types.ObjectId() })
    @Length(20, 50)
    _id?: ObjectId;

    @Field({ nullable: true})
    @Property({ type: String })
    @Length(4, 50)
    username?: string;

    @Field({ nullable: true })
    @Property({ type: Date, default: new Date() })
    @IsDate()
    createdAt?: Date;

}