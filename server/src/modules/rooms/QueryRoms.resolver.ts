import { Resolver, Query, Arg } from 'type-graphql';
import { Room } from '../../models/Room';
import { RoomType } from './typeDefs/RoomType';
import { Document } from 'mongoose';


@Resolver()
export class QueryRoomsResolver {

    @Query(() => [RoomType])
    async queryRooms (): Promise<Document[]> {
        const rooms = await Room.find().sort( { createdAt: -1 } );
        return rooms;
    }

    @Query(() => [RoomType])
    async findRoom 
    (

        @Arg('roomName') roomName: string

    ): Promise<Document[]> {

        const rooms = await Room.find({ title: roomName });
        return rooms;

    }

}