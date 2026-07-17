# GynRaMa — designprototyp

Ny hemsida åt [gynrama.se](https://gynrama.se), byggd i Next.js 16 + Tailwind 4.

**▶ Live: <https://namobarzenjy-ai.github.io/gynrama-prototyp/>**

```bash
npm run dev     # http://localhost:3000
npm run build
```

## Vad det här är

En **designprototyp** — inte en färdig sida, och inte klinikens riktiga
webbplats. Klara sidor: startsidan och `/behandlingar`. Innehållet är hämtat
från GynRaMas befintliga WordPress-sida; designspråket kommer från en
Elementor-mall för kvinnohälsa ([demo](https://awakenedtemplates.com/doula)).

Live-sidan är satt till `noindex, nofollow` och deployas automatiskt till
GitHub Pages vid varje push till `main` (se `.github/workflows/deploy.yml`).

## Designtokens

Hämtade ur mallens live-demo via computed styles. Ligger i
[`src/app/globals.css`](src/app/globals.css) under `@theme`.

| Roll | Värde |
| --- | --- |
| Rubriker | DM Serif Display 400 |
| Brödtext | DM Sans 18px |
| Handskrivet | Caveat |
| Lime (CTA) | `#DBFE87` |
| Lavendel | `#D6D3F0` |
| Mörk slate | `#404051` |
| Text | `#1F1F28` |
| Off-white | `#F7F8FA` |
| Knappar | pill, 999px · Kort/bilder 25px |

Alla tre typsnitten är fria Google Fonts. Färger och layoutmönster är
återskapade från grunden — ingen kod eller bild från mallen är kopierad.

## Innehåll

Allt i [`src/content/gynrama.ts`](src/content/gynrama.ts) är hämtat från
gynrama.se. Redigera den filen, inte komponenterna.

## Att lösa innan skarp lansering

- **Bilderna är platshållare.** Fria stockfoton (Unsplash/Pexels-licens, fri
  kommersiell användning, ingen attribution krävs). Byt till egna kliniksbilder.
- **Inga porträtt på läkarna.** Sektionen använder initialer, eftersom ett
  stockfoto under en verklig läkares namn vore att förfalska personens utseende.
  Byt till riktiga foton när de finns.
- **Inga patientomdömen.** Mallen har en omdömessektion; GynRaMa har inga
  omdömen på sin sida, så den är ersatt med de riktiga specialistläkarna.
  Omdömen får inte hittas på.
- **Alla CTA:er går till `#boka`** — inte till det riktiga bokningssystemet.
- **Webshoppen (17 produkter) och WooCommerce-flödet är inte byggt.**
- Priserna i `content/gynrama.ts` är hämtade 2026-07-17 — verifiera mot
  gynrama.se/priser/ innan publicering.
