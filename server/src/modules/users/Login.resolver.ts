import { Resolver, Mutation, Arg, Ctx } from 'type-graphql';
import bcrypt from 'bcryptjs';
import { User, UserModel } from '../../models/User';
import { LoginInput } from './inputs/LoginInput';
import { ExpressContext } from '../../@types/ExpressContext';


@Resolver()
export class LoginResolver {
    
    @Mutation(() => UserModel || String, { nullable: true }) 
    async login 
    (

        @Arg('data') { email, password }: LoginInput,
        @Ctx() context: ExpressContext
    
    ): Promise<UserModel | string> {

        const user = await User.findOne({ email });
        if (!user) {
            return 'Usuário ou senha incorretos';
        }
        const valid = await bcrypt.compare(password!.toString(), user.password);

        if(!valid) {
            return 'Usuários ou senhas incorretos';
        }
        if (!user.confirmed) {
            return 'Usuários ou senhas incorretos';
        }

        context.req.session!.userId = user.id;
        context.req.session!.username = user.username;

        return user;
    }

}