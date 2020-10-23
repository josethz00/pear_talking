import { ObjectId } from 'mongodb';

export interface IMessagePayload {
    _id: ObjectId;
    title: string;
    messages:
    {
        _id?: ObjectId,
        body?: string,
        username?: string,
        createdAt?: Date
    }[];
    favorited: 
    {
        username: string,
        createdAt: Date
    }[];
    favoritedCounter: number 
}