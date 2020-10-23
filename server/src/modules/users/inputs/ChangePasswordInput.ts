import { Length } from 'class-validator';
import { Field, InputType } from "type-graphql";


@InputType()
export class ChangePasswordInput {

    @Field()
    @Length(10, 50)
    token : string;

    @Field()
    @Length(8, 30)
    password : string;

}