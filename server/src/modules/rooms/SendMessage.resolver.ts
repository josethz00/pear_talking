import { AuthMiddleware } from "../../middlewares/AuthMiddleware";
import { Room, RoomModel } from "../../models/Room";
import { Resolver, Arg, Mutation, UseMiddleware, Ctx, PubSub, Publisher } from "type-graphql";
import { SendMessageInput } from "./inputs/SendMessageInput";
import { ExpressContext } from "../../@types/ExpressContext";
import { UserInputError } from "apollo-server-express";


@Resolver()
export class SendMessageResolver {

    @Mutation(() =>  Boolean || String)
    @UseMiddleware(AuthMiddleware)
    async sendMessage 
    (
        @Arg('data') { body, roomId }: SendMessageInput,
        @Ctx() { req }: ExpressContext,
        @PubSub('NEW_MESSAGE') publish: Publisher<RoomModel>
    ): Promise<boolean | string> {

        const room = await Room.findById(roomId);
        if (room) {
            room.messages.unshift({
                body,
                username: req.session!.username
            });
            await room.save();
            await publish(room);
            return true;
        }
        else {
            throw new UserInputError('Essa sala não existe');
        }

    }

}