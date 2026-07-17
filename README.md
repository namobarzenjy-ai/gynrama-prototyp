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

### Loggan

Klinikens egen logga i två varianter, båda i `public/`:

| Fil | Används |
| --- | --- |
| `gynrama-logo.svg` | Header och ljusa ytor |
| `gynrama-logo-vit.svg` | Footern och mörka ytor |

Originalfilen hade en vit bakgrundsruta bakom emblemet som är borttagen —
kvinnoprofilen är urklippt negativ yta och visar underlaget. Därför krävs den
vita varianten: emblemets lila `#84277F` mot footerns `#404051` ger bara
1.25:1 i kontrast, alltså osynligt. Helvit ger 10.1:1.

Loggans sökväg måste prefixas med `NEXT_PUBLIC_BASE_PATH` (se `Logo.tsx`).
`next/image` med `unoptimized:true` lägger inte på basePath åt oss, så utan
det 404:ar loggan på Pages men fungerar lokalt.

## Innehåll

Allt i [`src/content/gynrama.ts`](src/content/gynrama.ts) är hämtat från
gynrama.se. Redigera den filen, inte komponenterna.

## Mobil — och hur desktop hålls orörd

Tailwind är mobile-first: en klass utan prefix gäller **alla** skärmar,
inklusive desktop. Allt mobilspecifikt ligger därför bakom `max-lg:`, som bara
gäller **under** 1024px. Desktop kan då inte påverkas.

Mobilmenyn ([`MobilMeny.tsx`](src/components/MobilMeny.tsx)) är byggd på
`<details>` — ingen klient-JS, precis som dragspelen, och fungerar även om JS
inte laddar. Hela komponenten är `lg:hidden`.

### Regressionstest av desktop

`BASE_PATH` i [`next.config.ts`](next.config.ts) finns för att kunna bygga två
versioner sida vid sida under samma origin och jämföra dem:

```bash
git stash push -- src/                                  # baseline
BASE_PATH=/a GITHUB_PAGES=true npm run build && mv out /tmp/cmp/a
git stash pop                                           # med ändringarna
BASE_PATH=/b GITHUB_PAGES=true npm run build && mv out /tmp/cmp/b
cd /tmp/cmp && python3 -m http.server 8850
```

Öppna `/a/` och jämför mot `/b/` i iframes vid 1440px — varje elements
position, storlek, typsnittsgrad och färg. Noll avvikelser = desktop orörd.

Stasha bara `src/`. Tar du med `next.config.ts` byggs baselinen utan `BASE_PATH`
och laddar ingen CSS — då blir varje element en falsk avvikelse.

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
