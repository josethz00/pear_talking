import { IsEmail, Length } from "class-validator";
import { Field, InputType } from "type-graphql";


@InputType()
export class CreateUserInput {

    @Field()
    @Length(4, 50)
    public username: string;

    @Field()
    @IsEmail()
    public email: string;

    @Field()
    @Length(8, 30)
    public password: string;

    @Field()
    @Length(8, 30)
    public vf_password: string;

}