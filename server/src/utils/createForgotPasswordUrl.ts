import { v4 } from 'uuid';
import { RedisDB } from './RedisDB';

export const createForgotPasswordUrl = async (user_id: string) => {

    const token = v4();
    await RedisDB.set(`forgot-password${token}`, user_id, 'ex', 60*60*12);
    return `http://localhost:3000/forgot-password/${token}`; 

} 