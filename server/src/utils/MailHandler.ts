import nodemailer from 'nodemailer';


export class MailHandler {

    private transporter: nodemailer.Transporter;
    private email: string;
    private url: string;
    private testAccount: nodemailer.TestAccount;

    constructor (email: string, url: string) {
        this.email = email;
        this.url = url;
    }

    async createTestAccount (): Promise<void> {
        this.testAccount = await nodemailer.createTestAccount();
    }

    async createTransport (): Promise<nodemailer.Transporter> {
        await this.createTestAccount()
        const transport = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false,
            auth: {
              user: this.testAccount.user, 
              pass: this.testAccount.pass, 
            },
        });
        return transport
    }

    async sendMail (subject: string, text: string): Promise<void> {
        this.transporter = await this.createTransport();
        const info = await this.transporter.sendMail({
            from: 'PearTalking Mailer',
            to: this.email,
            subject,
            text,
            html: `<a href="${this.url}">${this.url}</a>`
        });
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    }

}