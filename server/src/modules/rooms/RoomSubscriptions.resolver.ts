import { RoomModel } from "../../models/Room";
import { Resolver, Root, Subscription } from "type-graphql";    
import { IMessagePayload } from '../../@types/IMessagePayload';


@Resolver()
export class RoomSubscriptionsResolver {

    @Subscription(() => RoomModel, {
        topics: 'NEW_MESSAGE'
    })
    newMessage 
    (
        @Root() { _id, title, messages, favorited, favoritedCounter }: IMessagePayload,
    ): RoomModel {
        return { _id, title, favorited, messages, favoritedCounter }
    }

}  