import { Length } from "class-validator";
import { Field, InputType } from "type-graphql";


@InputType()
export class CreateRoomInput {

    @Field()
    @Length(4, 50)
    title: string;

    @Field()
    @Length(50, 300)
    body: string;

}