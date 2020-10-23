import { AuthMiddleware } from "../../middlewares/AuthMiddleware";
import { Room, RoomModel } from "../../models/Room";
import { Resolver, Arg, Mutation, UseMiddleware, Ctx, PubSub, Publisher } from "type-graphql";
import { DeleteRoomInput } from "./inputs/DeleteCommentInput";
import { ExpressContext } from "../../@types/ExpressContext";
import { AuthenticationError, UserInputError } from "apollo-server-express";


@Resolver()
export class DeleteMessageResolver {

    @Mutation(() =>  RoomModel || String)
    @UseMiddleware(AuthMiddleware)
    async deleteMessage 
    (
        @Arg('data') { roomId, commentId }: DeleteRoomInput,
        @PubSub('NEW_MESSAGE') publish: Publisher<RoomModel>,
        @Ctx() { req }: ExpressContext
    ): Promise<RoomModel | string> {

        const room = await Room.findById(roomId);

        if (room) {
            const messageIndex = room.messages.findIndex((comment) => comment!._id === commentId);
            
            if (room.messages[messageIndex].username === req.session!.username) {
                room.messages.splice(messageIndex, 1);
                await room.save();
                await publish(room);
                return room;
            }
            else throw new AuthenticationError ('Ação não autorizada');
        }
        else {
            throw new UserInputError ('Essa sala não existe')
        }

    }

}