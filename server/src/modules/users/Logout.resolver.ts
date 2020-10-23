import { Resolver, Mutation, Ctx, UseMiddleware } from 'type-graphql';
import { ExpressContext } from '../../@types/ExpressContext';
import { AuthMiddleware } from '../../middlewares/AuthMiddleware';


@Resolver()
export class LogoutResolver {
    @Mutation(() => Boolean) 
    @UseMiddleware(AuthMiddleware)
    logout
    (

        @Ctx() context: ExpressContext

    ): boolean {
        context.req.session!.destroy(() => 'Não foi possível efetuar logout');
        return true;
    }

}  