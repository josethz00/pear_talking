import { prop as Property, getModelForClass } from '@typegoose/typegoose';
import { Field, ID, ObjectType } from 'type-graphql';
import { ObjectId } from 'mongodb';


@ObjectType()
export class UserModel {

    @Field(() => ID)
    public readonly _id: ObjectId;

    @Field()
    @Property({ required: true  })
    public username: string;

    @Field()
    @Property({ required: true })
    public email: string;

    @Field()
    @Property({ required: true })
    public password: string;

    @Field()
    @Property({ required: true, default: false })
    public confirmed: boolean;

    @Field()
    @Property({ required: true, default: 'https://www.watsonmartin.com/wp-content/uploads/2016/03/default-profile-picture.jpg' })
    public image_url: string;

    @Field()
    @Property({ required: true, default: new Date() })
    public createdAt: Date

}

export const User = getModelForClass(UserModel);