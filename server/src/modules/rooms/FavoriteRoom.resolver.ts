import { AuthMiddleware } from "../../middlewares/AuthMiddleware";
import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from "type-graphql";
import { ExpressContext } from "../../@types/ExpressContext";
import { Room, RoomModel } from "../../models/Room";
import { UserInputError } from "apollo-server-express";
import { SendMessageInput } from "./inputs/SendMessageInput";


@Resolver()
export class FavoriteRoomResolver {

    @Mutation(() => RoomModel)
    @UseMiddleware(AuthMiddleware)
    async favoriteRoom 
    (
        @Arg('roomId') { roomId }: SendMessageInput,
        @Ctx() { req }: ExpressContext
    ): Promise<RoomModel | string> {

        const room = await Room.findById(roomId);
        if (room) {
            room.favorited.unshift({
                username: req.session!.username
            })
            await room.save();
            return room;
        }
        else {
            throw new UserInputError('Essa sala não existe');
        }

    }

    @Mutation(() => RoomModel) 
    @UseMiddleware(AuthMiddleware)
    async unfavoriteRoom
    (
        @Arg('roomId') { roomId }: SendMessageInput,
        @Ctx() { req }: ExpressContext
    ): Promise<RoomModel | string> {

        const room = await Room.findById(roomId);
        if (room) {
            if (room.favorited.find((like) => like.username === req.session!.username)) {
                room.favorited = room.favorited.filter((like) => like.username !== req.session!.username); //remove like
            }
            else {
                room.favorited.push({
                    username: req.session!.username
                });
            }
            room.favoritedCounter = room.favorited.length;
            await room.save();
            return room;
        }
        else {
            throw new UserInputError('Essa sala não existe');
        }
    }

}