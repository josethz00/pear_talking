import { AuthMiddleware } from "../../middlewares/AuthMiddleware";
import { User } from "../../models/User";
import { Arg, Mutation, Resolver, UseMiddleware } from "type-graphql";
import { createForgotPasswordUrl } from "../../utils/createForgotPasswordUrl";
import { MailHandler } from "../../utils/MailHandler";


@Resolver()
export class ForgotPasswordResolver {

    @Mutation(() => Boolean)
    @UseMiddleware(AuthMiddleware)
    async forgotPassword 
    (
        @Arg('email') email: string
    ): Promise<boolean> {

        const user = await User.findOne({ email });

        if (!user) {
            return true;
        }

        const mailHandler = new MailHandler(email, await createForgotPasswordUrl(String(user.id)));
        await mailHandler.sendMail('Alteração de senha',  `Olá ${user.username}, este é um e-mail automático para confirmar a sua alteração de senha em nossa plataforma Pear Talking!`)

        return true;

    }

}