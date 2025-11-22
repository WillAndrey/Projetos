import nodemailer from "nodemailer"
import dotenv from "dotenv"

dotenv.config()


const transporter = nodemailer.createTransport({
    service: 'ethereal',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
})

export async function sendEmailNotification(currentPrice) {
    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.NOTIFY_TO,
        subject: "Alerta de preço: produto abaixo do limite!",
        text: `O produto está custando R$ ${currentPrice.toFixed(2)}!`,
    })
}