import { Document } from "mongoose";

export interface IUserSchema extends Document {

    username: string,
    email: string,
    password: string,
    confirmed?: boolean,
    image_url: String,
    createdAt: Date

}