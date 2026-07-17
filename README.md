# GynRaMa — designprototyp

Ny hemsida åt [gynrama.se](https://gynrama.se), byggd i Next.js 16 + Tailwind 4.

**▶ Live: <https://namobarzenjy-ai.github.io/gynrama-prototyp/>**

```bash
npm run dev     # http://localhost:3000
npm run build
```

## Vad det här är

En **designprototyp** — inte en färdig sida, och inte klinikens riktiga
webbplats. Innehållet är hämtat från GynRaMas befintliga WordPress-sida;
designspråket kommer från en Elementor-mall för kvinnohälsa
([demo](https://awakenedtemplates.com/doula)).

Alla åtta sidor är byggda:

| Sida | Innehåll |
| --- | --- |
| `/` | Startsida |
| `/behandlingar` | 17 behandlingar i 4 kategorier |
| `/gynrama-ivf` | IVF i samarbete med Nordic IVF |
| `/priser` | 41 tjänster i 7 kategorier |
| `/boka-tid` | 4 besökstyper, länkade till klinikens skarpa bokningssystem |
| `/om-oss` | Kliniken + 7 personer i teamet |
| `/formular-och-lankar` | 4 PDF-formulär |
| `/webshop` | 17 produkter i 4 kategorier (katalog, ingen kassa) |

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

- **Stämningsbilderna är platshållare.** Fria stockfoton (Unsplash/Pexels-licens,
  fri kommersiell användning, ingen attribution krävs). Byt till egna
  kliniksbilder. Gäller `bilder` i `content/gynrama.ts`.
- **Personalporträtten hotlänkas från gynrama.se.** Det är klinikens egna foton,
  men de laddas från deras WordPress vid varje visning. Lägg dem i `public/`
  innan skarp drift. Kopplingen bild→person är verifierad — se kommentaren i
  `content/omoss.ts`, och sätt aldrig ett annat foto under de namnen.
- **Inga patientomdömen.** Mallen har en omdömessektion; GynRaMa har inga
  omdömen på sin sida, så den är ersatt med de riktiga specialistläkarna.
  Omdömen får inte hittas på.
- **Webshoppen är en katalog, ingen butik.** Ingen varukorg och ingen kassa är
  byggd — "Till produkten" länkar till klinikens skarpa WooCommerce-sidor.
  Produktbilderna hotlänkas också från gynrama.se.
- **Priserna är hämtade 2026-07-17** (`content/priser.ts`, `prisHamtat`).
  Verifiera mot gynrama.se/priser/ innan publicering — priser ändras.
- Två stavfel i klinikens källtext är medvetet bevarade, se `kandaStavfel` i
  `content/omoss.ts`. Värda att påpeka för dem.

## Vad som INTE är platshållare

Bokningsknapparna går till klinikens **skarpa bokningssystem** (patient.nu),
med de fyra riktiga kalender-URL:erna hämtade från deras egen sida. Klickar
någon på "Boka" i prototypen hamnar de i den verkliga bokningen.
