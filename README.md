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
| `/` | Startsida (sv på roten; en/ar under `/en/` resp. `/ar/`) |
| `/behandlingar` | 17 behandlingar i 4 kategorier |
| `/gynrama-ivf` | IVF i samarbete med Nordic IVF |
| `/priser` | 39 tjänster i 7 kategorier |
| `/boka-tid` | 4 besökstyper, länkade till klinikens skarpa bokningssystem |
| `/om-oss` | Kliniken + 6 personer i teamet |
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
| Lila (CTA) | `#84277F` — klinikens lila ur loggan; `lila-deep` för hover, `lila-ljus` som accent på mörka ytor |
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
- **Priserna är hämtade 2026-07-17** (`content/priser.ts`, `prisHamtat`),
  med två undantag från kundens besked 2026-08-30: akuttiden (inom 4 timmar,
  3 900 kr) och NIPT som är borttaget. Kunden har aviserat ett **nytt
  prisunderlag som ännu inte kommit** — övriga belopp ska bytas när det finns.
- ~~Två stavfel i källtexten är medvetet bevarade~~ Kunden gav 2026-08-30
  klartecken att rätta språkfel; de är rättade och dokumenterade i noten
  längst ned i `content/omoss.ts`. Texterna är därmed inte längre ordagranna
  mot källan.

## Kundens ändringsbesked 2026-08-30 (genomfört)

- **Akuttid:** "inom 4 timmar, 3 900 kr" överallt (priser, startsida,
  bokningsregler). Ersätter 24 tim/2 600 kr och 3 tim-raden.
- **NIPT borttaget** ur behandlingar och prislista, inklusive
  mikrodeletions-tillvalet som bara fanns som NIPT-tillägg.
- **IVF är egen behandling** under kategorin som nu heter "Fertilitet &
  IVF" (ankar-sluggen `kat-fertilitet` är oförändrad — startsidans kort
  länkar dit). Behandlingstexten är klinikens egen från IVF-sidan.
- **"Behandlingar & priser"-brygga** på både `/behandlingar` och `/priser`
  (`BehandlingarPriser.tsx`).
- **Louise Haag borttagen** ur teamet.
- **Världskända doktorer:** Randa står först, "över 70 barn" och "70+"
  (siffran är antal födda barn efter livmodertransplantation — inte ett
  åldersspann, trots kundens formulering).
- **Sveriges Radio-inslaget** (Livmodertransplantation, 30 april 2012, 9:31)
  ligger som spelar-kort i Världskända-sektionen. Ljudet är SR:s
  upphovsrättsskyddade material — vi LÄNKAR till SR, filen får inte kopieras
  in på sajten.
- **CTA-bandets rubrik** "Din hälsa förtjänar tid..." borttagen; kortet är
  ett rent bokningskort.
- **Juridikblock i footern** (= på varje sida): GDPR, Allabolag,
  kontaktperson, klagomålsväg, e-post. Samlat i footerns nedre list.
- **Boka tid-knappen**: kundens önskan "koppla som gamla sidan" var redan
  uppfylld — gamla sidans knapp går till /boka-tid-sidan med samma fyra
  patient.nu-kalendrar som vår. patient.nu ÄR Webdocs patientportal, så
  "koppling mot Webdoc" finns redan.

- **CTA-färgen är klinikens lila** (beslut 2026-08-30): mallens lime
  ersattes av `#84277F` överallt — knappar, pil-cirklar, statistikkort,
  badges. Fylld lila kräver VIT text (8.1:1; mot ink bara ~2.6:1), och på
  mörka ytor används ljusa accenten `lila-ljus` — mörklila mot slate-deep är
  oläsligt. Se tokens i `globals.css`.
- **Sökruta i headern** (`Sok.tsx` + `content/sokindex.ts`): helt
  klientbaserad — sajten är statisk, så indexet byggs vid bygget ur
  content-filerna och söks i webbläsaren. Ny content-fil måste läggas till i
  sokindex.ts för att bli sökbar. Träffar länkar till ankare (behandlingsrad,
  priskategori, personkort, webshopkategori).

Kvar från samma besked, väntar på underlag/beslut: nytt prisunderlag,
"gryniga bilden" (oklart vilken), AI-chatt (juridik först).

## Tre språk: svenska, engelska, arabiska

Sajten finns på svenska (standard, roten), engelska (`/en/`) och arabiska
(`/ar/`). Flaggorna i headerns hörn växlar språk och behåller sidan man
står på (`SprakVal.tsx`).

**Arkitekturen är ett bygge per språk** — sajten är statisk utan server, så
språket väljs vid byggtid via `NEXT_PUBLIC_SPRAK` och deployen bygger tre
gånger (se `deploy.yml`). All text går genom `t(sv, en, ar)` i `src/i18n.ts`;
svenskan är källa och fallback. Översättningarna ligger inline bredvid
källtexten i content-filerna — de kan inte tappa synk, och kliniken kan
granska språken sida vid sida.

- **ÖVERSÄTTNINGARNA ÄR UTKAST** (2026-08-30, maskinellt framtagna med
  medicinsk omsorg) och SKA granskas av kliniken innan skarp drift — de har
  språkkunnig personal. Detta gäller särskilt behandlingstexterna.
- **Lokalt:** `npm run dev` är svenska; `NEXT_PUBLIC_SPRAK=en npm run dev`
  visar engelska på rot-URL:en. Språkväxlarens länkar fungerar bara i det
  ihopsatta Pages-bygget.
- **Arabiska är RTL** (`dir="rtl"`): layouten speglas automatiskt eftersom
  komponenterna använder logiska utilities (`ps-`/`pe-`/`ms-`/`me-`/`start-`/
  `end-`), inte fysiska (`pl-`/`left-` …). Två fällor är dokumenterade i
  koden: centrera absoluta element med `inset-0 + mx-auto`, ALDRIG
  `left-1/2 -translate-x-1/2` (RTL ignorerar `left` vid överbestämd
  positionering — boxen hamnar utanför skärmen), och riktade gradienter
  behöver `rtl:bg-linear-to-l`-varianten (se Hero.tsx).
- **Sökrutan är flerspråkig gratis** — indexet byggs ur content-filerna per
  bygge. Ankar-id:n (kategorislugs) är däremot språkoberoende och får inte
  översättas.
- **Flaggan för arabiska** är Saudiarabiens (arabiskan har ingen egen
  flagga; detta är konventionen på svenska sajter). Lätt att byta i
  `SPRAKVAL` i `i18n.ts` om kunden vill.
- Radioinslaget hos SR och personalens porträttbildtexter är på svenska —
  SR-kortet säger det uttryckligen på en/ar. Broschyr-PDF:erna på
  formulärsidan finns bara på svenska.

## Bilderna

Alla stämningsbilder är **klinikens egna foton**, tagna på GynRaMa, optimerade
till WebP i `public/bilder/` (via `sharp`, se git-historiken). Inga stockfoton
kvar. Råoriginalen ligger i `egna bilder/` (gitignore:ad) — kör om konverteringen
därifrån om du vill ändra storlek/kvalitet.

Kvalitetsnot: 8 av 9 källor är 2048px (fin 2K-klass, inte 4K) och är **inte**
uppskalade — uppskalning skapar bara suddighet. Bara kolposkopi-bilden är ett
äkta 4K-original (levereras i 2560px). Vill du ha riktig 4K på övriga behövs
nya foton i högre upplösning.

Kolposkopi-bilden i sin helhet (pågående undersökning) ligger **bara** på
behandlingssidan, vid Cellförändringar. Randas övriga bilder används som
stämningsbilder, inte som profilbild — hennes profilbild är orörd.

### Bilden ska matcha ämnet

Kunden gav 2026-08-05 beskedet att varje bild ska sitta där ämnet stämmer:
gynstol och ultraljud vid gynekologi, samtalsrum och par vid fertilitet, ägg
eller barn vid IVF, gravidmage vid obstetrik, och folk i receptionen. Slottarna
i `bilder`-objektet i [`content/gynrama.ts`](src/content/gynrama.ts) är omkopplade
efter det. Tre av dem är **provisoriska** och kommenterade i filen:

| Slot | Ligger där nu | Varför provisorisk |
| --- | --- | --- |
| `gynekologi` | `gynrum.webp` | Gynrum med gynstol och ultraljud är inte fotograferat. Bilden är kolposkopibilden beskuren ovanför patientens ben. |
| `fertilitet` | `lakare-dator.webp` | Samtalsrum med par saknas helt. Läkaren vid skrivbordet är närmaste rådgivningsmiljö. |
| `ivf` | `ivf-barn.webp` | Ägg, spermier och IVF-miljö saknas. Bilden är urklippt ur klinikens egen IVF-annons. |

### Hero-sektionen

`reception-hero.webp` är **hero-bakgrunden** och den enda bild vi har där folk
syns — en patient tas emot vid disken. Kunden bad uttryckligen om den. Källan är
klinikens nuvarande förstasida
(`gynrama.se/wp-content/uploads/2026/06/gynrama-header.webp`), ett panorama på
2100×891 som ligger oskuret.

Hero-sektionen ritades om för det här: tidigare låg en liten stående bild till
höger som rubriken petade in över. Nu är bilden en banner i full bredd med
rubriken ovanpå — samma grepp som klinikens nuvarande sida.

Tre saker hänger ihop i [`Hero.tsx`](src/components/sections/Hero.tsx) och går
sönder var för sig:

- **Bildens mått.** `width`/`height` måste matcha filen. På desktop ligger
  bilden i flödet och sätter sektionens höjd, så fel mått ger fel höjd.
- **Mobil beskär.** Samma panorama blir bara ~145px högt i full bredd, och där
  ryms ingen rubrik. Under `lg` byts därför layouten: bilden blir absolut
  bakgrund med `object-cover` och höjden kommer från texten istället.
- **Toningen.** Bilden är ljus (vita väggar) och rubriken vit — utan dämpning är
  texten oläslig. Desktop har en sidled-toning som är tyngst till vänster där
  texten ligger och släpper fram receptionsdisken till höger. Mobil har en jämn
  dämpning, eftersom texten där går över hela bredden. Byts bilden mot en mörkare
  måste styrkan justeras, annars blir det onödigt grått.

Kedjan i övrigt: `reception-logga.webp` flyttade dit hero-bilden låg förut
(Boka-besök), och CTA-bandet fick tillbaka det tomma väntrummet. Det finns
alltså bara **ett** ställe på sajten där patienter syns. Behövs fler krävs nya
foton.

**Det finns fler foton hos kunden.** Filnamnen i `egna bilder/` är numrerade
1, 2, 3, 8, 9, 14, 19 och 21, och kamerasekvensen löper F30B9153 → F30B9503. Vi
har alltså ett urval ur en betydligt större fotografering. Be om hela serien i
originalupplösning innan ni bokar ny fotografering — de tre provisoriska
bilderna ovan finns troligen redan tagna. Notera också att de åtta numrerade är
nedskalade till 2048px medan `F30B9447.JPG` är full upplösning (5760×3840), så
nedskalningen skedde i överföringen.

`ivf-barn.webp` ligger på **två** ställen — startsidans Fertilitet & IVF-kort och
IVF-sidan. Det är kundens uttryckliga val, inte ett slarvfel: byt inte ut det ena
i tron att det är en dubblett.

`kaffe.webp`, `modell.webp` och `lakare-dator.webp` är oanvända sedan
omkopplingen. De ligger kvar. Kaffebilden satt tidigare på både fertilitet och
IVF, modellen föreställer en gravid livmoder (obstetrik snarare än gynekologi),
och läkaren vid skrivbordet ersattes när fertilitetskortet fick IVF-bilden.

Ersätter du en fil i `public/bilder/` under samma namn fortsätter dev-servern
att visa den gamla — `next/image` cachar den optimerade varianten på disk. I
Next 16 ligger den cachen i **`.next/dev/cache/images`**, inte `.next/cache/images`
som i tidigare versioner. Rensa den och starta om, annars felsöker du en bild
som redan är rätt på disk.

## Vad som INTE är platshållare

Bokningsknapparna går till klinikens **skarpa bokningssystem** (patient.nu),
med de fyra riktiga kalender-URL:erna hämtade från deras egen sida. Klickar
någon på "Boka" i prototypen hamnar de i den verkliga bokningen.
