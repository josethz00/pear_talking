import { Document } from "mongoose";

export interface IRoomSchema extends Document {

    title: string;
    body: string;
    username: string;
    createdAt: Date;
    messages:
        {
            body: string,
            username: string,
            createdAt: Date
        }[];
    favorited: 
        {
            username: string,
            createdAt: Date
        }[];

} 