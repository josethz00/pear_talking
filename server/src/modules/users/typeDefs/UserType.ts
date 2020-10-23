import { IsBoolean, IsDate, IsEmail, Length } from "class-validator";
import { Field, ObjectType } from "type-graphql";


@ObjectType()
export class UserType {

    @Field()
    @Length(4, 50)
    username: string;

    @Field()
    @Length(10, 50)
    @IsEmail()
    email: string;

    @Field()
    password: string;

    @Field()
    @IsBoolean()
    confirmed: boolean;

    @Field()
    @IsDate()
    createdAt: Date;

}