import cron from "node-cron"
import { getProductPrice } from "./scraper.js";
import { sendEmailNotification } from "./emailService.js"
import dotenv from "dotenv"

dotenv.config()

export function startScheduler() {
    cron.schedule(process.env.CHECK_INTERVAL, async () => {
        console.log("Verificando preço...")

        try {
            const price = await getProductPrice(process.env.PRODUCT_URL)
            console.log(`Preço atual: R$ ${price}`)

            if (price <= parseFloat(process.env.PRICE_TARGET)) {
                console.log("Preço abaixo do alvo! Enviando e-mail...")
                await sendEmailNotification(price)
            } else {
                console.log("Ainda acima do preço desejado.")
            }
        }catch (error) {
            console.error("Erro ao verificar preço:", error.message)
        }
    })
}