import { User, UserModel } from "../../models/User";
import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { ExpressContext } from "../../@types/ExpressContext";
import { RedisDB } from "../../utils/RedisDB";
import bcrypt from 'bcryptjs';
import { ChangePasswordInput } from './inputs/ChangePasswordInput';


@Resolver()
export class ChangePasswordResolver {

    @Mutation(() => UserModel || null)
    async changePassword 
    (
        @Arg("data") { token, password }: ChangePasswordInput,
        @Ctx() context: ExpressContext
    ): Promise<UserModel | null> {

        const userId = await RedisDB.get(`forgot-password${token}`);
    
        if (!userId) {
          return null;
        }
    
        const user = await User.findById(userId);

        if (!user) {
          return null;
        }
    
        await RedisDB.del(`forgot-password${token}`);
    
        user.password = await bcrypt.hash(password, 12);
    
        await user.save();
    
        context.req.session!.userId = user.id;
    
        return user;
 
    }

}