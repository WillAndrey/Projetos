import axios from "axios";
import * as cheerio from "cheerio";

export async function getProductPrice(url) {
  const response = await axios.get(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      "Accept-Language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
      "Accept":
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
      "Referer": "https://www.google.com/",
    },
    // talvez permitir com cookie jar ou outro, se necessário
  });

  const html = response.data;
  const $ = cheerio.load(html);

  // Olhando no HTML, localize o seletor que contém o preço
  // Exemplo (você vai inspecionar no browser): .product-price, .price-value ou similar
  const priceText = $("._mainPrice_1dnvn_52").first().text().trim()
    || $(".product-price").first().text().trim();

  if (!priceText) {
    throw new Error("Não consegui encontrar o elemento de preço na página");
  }

  // Remove “R$” e espaços, converte vírgula para ponto
  const price = parseFloat(
    priceText.replace(/[^\d,]/g, "").replace(",", ".")
  );

  if (isNaN(price)) {
    throw new Error("Preço extraído não é um número: " + priceText);
  }

  return price;
}