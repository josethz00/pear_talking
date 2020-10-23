import { Length } from "class-validator";
import { Field, ID, InputType } from "type-graphql";
import { ObjectId } from 'mongodb';


@InputType()
export class SendMessageInput {

    @Field(() => String)
    @Length(1, 300)
    body: string;

    @Field(() => ID)
    @Length(20, 50)
    roomId: ObjectId;

}