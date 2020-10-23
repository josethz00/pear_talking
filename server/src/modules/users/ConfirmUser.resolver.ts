import { User } from "../../models/User";
import { RedisDB } from "../../utils/RedisDB";
import { Arg, Mutation, Resolver } from "type-graphql";


@Resolver()
export class ConfirmUserResolver {

    @Mutation(() => Boolean)
    async confirmUser 
    (
        @Arg('token') token: string
    ): Promise<boolean> {

        const userId = await RedisDB.get(`account-confirm${token}`);
        if (!userId) {
            return false;
        }

        await User.update({ _id: userId }, { confirmed: true });
        await RedisDB.del(token)
        return true;

    }

}