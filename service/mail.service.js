import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

class MailService {
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: true,
            auth: {
                user: process.env.SMTP_USERNAME,
                pass: process.env.SMTP_PASSWORD
            }
        })
    }

    async sendActivationMail(to, link) {
        await this.transporter.sendMail({
            form: process.env.SMTP_USERNAME,
            to,
            subject: 'Активация аккаунта на ' + process.env.API_URL,
            text: '',
            html: `
                    <div>
                        <h1>Для фктивации перейдите по ссылке</h1>
                        <a href="${link}">${link}</a>
                    </div>
                `,
        })
    }
}

export default new MailService()
