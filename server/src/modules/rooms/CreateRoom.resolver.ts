import { AuthMiddleware } from "../../middlewares/AuthMiddleware";
import { Room } from "../../models/Room";
import { Resolver, Mutation, Arg, UseMiddleware, Ctx } from "type-graphql";

import { CreateRoomInput } from './inputs/CreateRoomInput'
import { Document } from "mongoose";
import { RoomType } from "./typeDefs/RoomType";
import { ExpressContext } from "apollo-server-express/dist/ApolloServer";


@Resolver()
export class CreateRoomResolver {

    @Mutation(() => RoomType)
    @UseMiddleware(AuthMiddleware)
    async createRoom 
    (
        @Arg('data') { title, body }: CreateRoomInput,
        @Ctx() { req }: ExpressContext
    ): Promise<Document> {
        const newRoom = new Room({
            title,
            body,
            username: req.session!.username,
            createdAt: new Date(), 
            user: req.session!.userId
        });

        const room = await newRoom.save();
        return room;
    }

}