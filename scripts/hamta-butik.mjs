/**
 * Hämtar lagerstatus, pris och produkt-id från klinikens WooCommerce
 * (Store API, öppet — inga nycklar) och sparar dem i
 * src/content/butik-lager.json, som webshop.ts läser vid bygget.
 *
 * Körs i deploy-workflowet före byggena (och varje natt, se deploy.yml),
 * lokalt med `npm run butik`. Går hämtningen inte — gynrama.se nere,
 * nätverksfel — byggs sajten med den senast sparade filen istället för att
 * bygget fallerar. Webbläsaren kan inte hämta det här själv: Store API
 * tillåter bara anrop från gynrama.se (CORS), inte från GitHub Pages.
 */
import { writeFileSync } from "node:fs";

const KALLA =
  "https://gynrama.se/wp-json/wc/store/v1/products?per_page=100&_fields=id,slug,is_in_stock,is_purchasable,prices";
const FIL = new URL("../src/content/butik-lager.json", import.meta.url);

try {
  const svar = await fetch(KALLA, { signal: AbortSignal.timeout(20_000) });
  if (!svar.ok) throw new Error(`HTTP ${svar.status}`);
  const lista = await svar.json();
  if (!Array.isArray(lista) || lista.length === 0) throw new Error("tom produktlista");

  const produkter = Object.fromEntries(
    lista.map((p) => [
      p.slug,
      {
        id: p.id,
        iLager: p.is_in_stock,
        kopbar: p.is_purchasable,
        // Store API anger priset i minsta enhet (öre)
        belopp: Number(p.prices.price) / 10 ** p.prices.currency_minor_unit,
      },
    ]),
  );
  writeFileSync(
    FIL,
    JSON.stringify({ hamtad: new Date().toISOString(), produkter }, null, 2) + "\n",
  );
  const slut = lista.filter((p) => !p.is_in_stock).map((p) => p.slug);
  console.log(
    `butik-lager.json: ${lista.length} produkter${slut.length ? `, slut i lager: ${slut.join(", ")}` : ""}`,
  );
} catch (fel) {
  console.warn(
    `Kunde inte hämta lager från WooCommerce (${fel.message}) — bygger med senast sparade butik-lager.json`,
  );
}
