import { User } from '../../models/User';
import { Resolver, Mutation, Arg } from 'type-graphql';
import { CreateUserInput } from '../users/inputs/CreateUserInput';
import { MailHandler } from '../../utils/MailHandler';
import { createConfirmationUrl } from '../../utils/createConfirmationUrl';
import bcrypt from 'bcryptjs';


@Resolver()
export class CreateUserResolver {

    @Mutation(() => String, { nullable: false })
    async createUser
    (
        @Arg('data') { username, email, password, vf_password }: CreateUserInput
    ): Promise<string> 
    {
        if (password !== vf_password) {
            return 'Senhas diferentes'
        }

        const user = await User.findOne({ email });
        if(user) {
            return 'Já existe uma conta cadastrada com esse e-mail';
        }

        try {
            const hashedPassword = await bcrypt.hash(password, 12)
            const user = await User.create({
                username,
                email,
                password: hashedPassword,
                confirmed: false,
                image_url: 'https://www.watsonmartin.com/wp-content/uploads/2016/03/default-profile-picture.jpg',
                createdAt: new Date()
            });
            user.save();
            const mailHandler = new MailHandler(email, await createConfirmationUrl(String(user._id)));
            mailHandler.sendMail('Confirmação de criação de conta', `Olá ${username}, este é um e-mail automático para confirmar a sua conta em nossa plataforma Pear Talking!`)
            return 'Conta criada com sucesso, acesse seu e-mail para confirmar o seu cadastro e ter acesso à plataforma';
        }
        catch(err) {
            return err.message;
        }
    }

}