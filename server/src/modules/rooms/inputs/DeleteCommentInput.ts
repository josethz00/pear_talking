import { Length } from "class-validator";
import { Field, ID, InputType } from "type-graphql";
import { ObjectId } from 'mongodb';


@InputType()
export class DeleteRoomInput {

    @Field(() => ID)
    @Length(4, 50)
    roomId: ObjectId;

    @Field(() => ID)
    @Length(4, 50)
    commentId: ObjectId;

}