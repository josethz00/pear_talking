import { IsEmail, Length } from "class-validator";
import { Field, InputType } from "type-graphql";


@InputType()
export class LoginInput {

    @Field()
    @IsEmail()
    public email: string;

    @Field()
    @Length(8, 30)
    public password: string;

}