/**
 * Behandlingar — hämtat ordagrant från https://gynrama.se/behandlingar/ 2026-07-17.
 *
 * Texten är medicinsk information och är INTE omskriven, förkortad eller
 * parafraserad. Ändra bara om GynRaMa själva ändrar sin källtext.
 *
 * Rader som börjar med "• " renderas som punktlista. Korta rader utan
 * avslutande punkt renderas som underrubrik. Se `Brodtext` i
 * components/sections/BehandlingsLista.tsx.
 */

export type Kategori = "Gynekologi" | "Graviditet" | "Fertilitet" | "Abort";

export type Behandling = {
  slug: string;
  namn: string;
  kategori: Kategori;
  text: string;
  /** Valfri bild i det öppnade dragspelet. Klinikens egna foton. */
  bild?: string;
  bildAlt?: string;
};

const bas = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const kategorier: Kategori[] = [
  "Gynekologi",
  "Graviditet",
  "Fertilitet",
  "Abort",
];

export const ingress = `Hos oss på GynRaMa erbjuder vi ett brett utbud av gynekologiska undersökningar och behandlingar med fokus på trygghet, kvalitet och individuellt bemötande. Oavsett om du söker för en rutinmässig kontroll eller specifika besvär, är vårt mål att ge dig professionell vård baserad på aktuell medicinsk kunskap.
Nedan hittar du våra vanligaste behandlingar och tjänster. Vid frågor om ytterligare behandlingar, kontakta oss gärna.`;

export const behandlingar: Behandling[] = [
  {
    slug: "gynekologisk-halsokontroll",
    namn: "Gynekologisk hälsokontroll",
    kategori: "Gynekologi",
    text: `Regelbundna gynekologiska hälsokontroller möjliggör tidig upptäckt av sjukdomar och därmed mer effektiv behandling. Vid kontrollen kan även gynekologiska cancersjukdomar upptäckas, såsom livmodercancer, äggstockscancer och livmoderhalscancer, samt infektionssjukdomar som exempelvis klamydia. En årlig eller tvåårig kontroll rekommenderas, beroende på individuella behov och eventuella riskfaktorer.
Vad ingår i en gynekologisk hälsokontroll?
1. Anamnes
Genomgång av aktuella besvär, tidigare sjukdomar, menstruation, graviditeter och ärftlighet. Eventuella förändringar i underliv, buk, vikt eller aptit under det senaste året är viktiga att informera om.
2. Gynekologisk undersökning
Inspektion av yttre genitalier, spekulumundersökning av vagina och livmodertapp samt palpation för att bedöma livmoder och äggstockar. Prover för STI och cellprov kan tas vid behov.
3. Ultraljud
Vaginalt ultraljud används för att undersöka livmoder, äggstockar, slemhinna och urinblåsa samt för att upptäcka eventuella cystor.
4. Laboratorieprover
Standardprover som blodvärde och infektionsmarkörer tas, med möjlighet till kompletterande tester vid behov.`,
  },
  {
    slug: "ultraljudsundersokning",
    namn: "Ultraljudsundersökning",
    kategori: "Gynekologi",
    text: `Vid en gynekologisk ultraljudsundersökning förs en vaginal ultraljudsprobe försiktigt in för att ge tydliga bilder av livmoder, äggstockar, livmoderslemhinna och urinblåsa. Undersökningen upplevs vanligtvis som obesvärlig.
När görs ultraljud?
Vanliga indikationer är:
• Ovarialcystor
• Oregelbundna blödningar
• Tidig graviditetskontroll
• Oklara buksmärtor
• Besvär med blåstömning
• Myom
• Polyper
Ultraljud är även ett centralt verktyg vid fertilitetsutredningar.
Läkarna på GynRaMa har lång erfarenhet och fördjupad kompetens inom gynekologiskt ultraljud, inklusive forskning inom området.`,
  },
  {
    slug: "cellforandringar",
    namn: "Cellförändringar (dysplasi)",
    kategori: "Gynekologi",
    text: `Cellförändringar på livmodertappen är oftast ett förstadium till livmoderhalscancer och orsakas vanligen av HPV, ett vanligt virus som sprids sexuellt. Infektionen ger sällan symtom, vilket gör regelbundna cellprov viktiga. Cellförändringar är inte cancer, men obehandlade kan de utvecklas vidare.
Grader av cellförändringar
• CIN I – lätt dysplasi
• CIN II – medelsvår dysplasi
• CIN III – svår dysplasi
Risk för utveckling
• CIN III: ca 15 % risk att utvecklas till cancer
• CIN I & CIN II: kan utvecklas vidare till CIN III om obehandlade
Upptäckt
Cellförändringar upptäcks genom cellprov (cytologi), ibland i kombination med analys för högrisk-HPV.
Vidare utredning och behandling
• CIN I: oftast uppföljande cellprov
• Misstänkt CIN II–III: kolposkopi och eventuellt biopsi
• Bekräftad CIN II–III: behandlas vanligtvis med slyngkonisering där det förändrade området avlägsnas under lokalbedövning
Läkarna på GynRaMa har lång erfarenhet av utredning och behandling av dysplasi, samt forskningsbakgrund inom området.`,
    // Randas kolposkopi-bild — endast här, som önskat
    bild: `${bas}/bilder/kolposkopi.webp`,
    bildAlt: "Kolposkopiundersökning på GynRaMa",
  },
  {
    slug: "myom",
    namn: "Myom",
    kategori: "Gynekologi",
    text: `Myom är godartade muskelknutor i livmodern och kan förekomma på livmoderns yta, i muskelväggen eller in mot livmoderhålan. De kan vara allt från några millimeter till över 20 cm stora.
Myom är vanliga och ses hos cirka 40 % av kvinnor i 40-årsåldern och hos upp till 70 % efter klimakteriet.
Symtom
Små myom är ofta symtomfria och upptäcks vid ultraljud. Större myom eller myom som trycker mot andra organ kan ge:
• Rikliga menstruationer
• Mens- och buksmärta
• Urinbesvär eller urinläckage
• Samlagssmärta
• Infertilitet eller ökad risk för missfall
Behandling
• Mindre myom: Kan opereras vid besvär
• Stora myom eller postmenopausala besvär: Hysterektomi kan vara aktuellt
• Blödningar och smärta: Kan delvis behandlas medicinskt
Läkarna på GynRaMa har modern ultraljudsutrustning och mångårig erfarenhet av diagnostik och behandling av myom.`,
  },
  {
    slug: "flytningar",
    namn: "Flytningar från underlivet",
    kategori: "Gynekologi",
    text: `Flytningar är en normal och viktig del av underlivets funktion. De håller slemhinnorna fuktiga, skyddar mot infektioner och bidrar till att hålla slidan ren. Normala flytningar är oftast vita eller klara och har en lätt syrlig doft.
När ska du söka vård?
Vård bör sökas vid illaluktande flytningar, missfärgade flytningar (gröna, gula, grå, gryniga eller blodblandade), klåda, sveda eller smärta. Sök också vård vid misstanke om könssjukdom, feber, buksmärta, allmän sjukdomskänsla eller om du får feber och illaluktande flytningar i samband med tamponganvändning.
Vanliga orsaker till förändrade flytningar
Svampinfektion
Ger ofta vit, grynig flytning samt klåda och sveda. Kan ibland behandlas med receptfria läkemedel, men återkommande besvär bör utredas.
Bakteriell vaginos
Ger tunn, gråvit och illaluktande flytning. Tillståndet är ofarligt men kräver behandling, särskilt under graviditet.
Livmoder- och äggledarinflammation
Kan ge gula eller gröna, illaluktande flytningar, buksmärta, feber och sjukdomskänsla. Orsakas ofta av infektion efter gynekologiskt ingrepp, förlossning eller obehandlad könssjukdom.
Könssjukdomar (STI)
De vanligaste är klamydia, gonorré och mykoplasma. Symtom inkluderar flytningar och sveda vid urinering. Obehandlade infektioner kan leda till infertilitet. Diagnos ställs med provtagning och behandlas med antibiotika.
Klåda i underlivet
Klåda kan bero på svampinfektion, irritativt eller allergiskt eksem, lichen simplex eller lichen sclerosus. I ovanliga fall kan klåda orsakas av vulvacancer.
Lichen sclerosus
En kronisk inflammation som ger uttalad klåda och tunn, vitaktig slemhinna. Behandlas med stark kortisonsalva och bör följas upp regelbundet på grund av en liten risk för cellförändringar.
Vård på GynRaMa
Läkarna på GynRaMa utför provtagning, gynekologisk undersökning och erbjuder behandling för alla typer av flytningsbesvär, inklusive infektioner och hudsjukdomar i underlivet.`,
  },
  {
    slug: "preventivmedel",
    namn: "Preventivmedelsrådgivning – skydd mot graviditet",
    kategori: "Gynekologi",
    text: `Det finns flera sätt att skydda sig mot graviditet. Dessa kallas preventivmedel och kan vara hormonella eller icke-hormonella. Kondom och femidom är de enda metoderna som även skyddar mot könssjukdomar. Ansvar för preventivmedel delas av alla som deltar i det sexuella mötet.
Hormonella preventivmedel
Preventivmedel som innehåller både östrogen och gestagen är p-piller, p-ring och p-plåster. De förhindrar ägglossning och gör sekretet i livmoderhalsen segt. Dessa metoder bör inte användas under de första sex veckorna efter förlossning på grund av ökad risk för blodpropp.
Preventivmedel som innehåller gestagen är mellanpiller, minipiller, p-stav, p-spruta och hormonspiral. De gör livmoderhalsens sekret ogenomträngligt för spermier och gör slemhinnan i livmodern tunnare. Alla hormonella metoder ger mycket effektivt skydd när de används korrekt.
Preventivmedel utan hormoner
Icke-hormonella metoder är kopparspiral, kondom, pessar och femidom. Kopparspiralen verkar genom kopparjoner som försvårar befruktning och implantation. Den påverkar inte ägglossningen, innehåller inga hormoner och ger ett mycket säkert graviditetsskydd.
Kondom skyddar både mot könssjukdomar och graviditet. Pessar och femidom fungerar som barriärer som hindrar spermier från att nå livmodern, men ger något lägre skyddsnivå än exempelvis p-stav och spiral.
Sterilisering
Sterilisering innebär att äggledarna förstörs genom titthålskirurgi eller hysteroskopi och är en permanent metod. Kvinnor över 25 år kan steriliseras utan särskilda tillstånd. Mellan 18 och 25 år krävs godkännande från Socialstyrelsen vid särskilda skäl.
GynRaMa kan hjälpa till med rådgivning kring val av preventivmedel och remiss för sterilisering vid behov.
Spiral – koppar- och hormonspiral
Spiraler är T-formade och sätts in i livmodern av barnmorska eller gynekolog. På GynRaMa görs insättningen av gynekolog, vilket möjliggör direkt ultraljudskontroll av spiralens läge.
Kopparspiralen utsöndrar kopparjoner som förhindrar befruktning och fungerar i upp till fem år. Hormonspiralen innehåller gestagen som gör slemhinnan tunn och sekretet segt; den är effektiv i tre till fem år beroende på modell.
Vanliga besöksorsaker på GynRaMa är spiralinsättning, kontroll av läge, uttag eller byte.`,
  },
  {
    slug: "klimakteriebesvar",
    namn: "Klimakteriebesvär",
    kategori: "Gynekologi",
    text: `Klimakteriet, eller övergångsåldern, orsakas av en naturlig minskning av äggblåsor i äggstockarna, vilket leder till oregelbundna ägglossningar och sjunkande östrogennivåer. Perioden kan pågå från några månader upp till flera år, och symtomen varierar kraftigt mellan olika kvinnor. Vanliga tidiga tecken är förändrat blödningsmönster samt värmevallningar, humörsvängningar och sömnproblem.
Den sista menstruationen inträffar i genomsnitt vid 52 års ålder. När mensen uteblivit i ett år kallas det menopaus, normalt mellan 45 och 55 år. Om menopaus inträffar före 45 år kallas det tidig menopaus och före 40 år prematur ovarialsvikt (POI), vilket kan bero på till exempel strål- eller cytostatikabehandling.
Vanliga symtom
Klimakteriet kan ge ett eller flera av följande besvär:
• Värmevallningar och svettningar
• Humörsvängningar och nedstämdhet
• Sömnproblem
• Torra slemhinnor i slidan, ögon, näsa och hals
• Urinvägsbesvär som sveda eller täta trängningar
Symtomen kommer ofta i perioder och värmevallningar kan pågå i flera år.
När bör du söka vård?
Kontakta vården vid:
• Värmevallningar, svettningar eller sömnproblem som påverkar livskvaliteten
• Torra slemhinnor eller sveda som inte förbättras trots receptfri behandling
• Urinvägsbesvär
• Blödning mer än ett år efter sista menstruationen
• Täta, rikliga eller oregelbundna blödningar`,
  },
  {
    slug: "framfall",
    namn: "Framfall",
    kategori: "Gynekologi",
    text: `Framfall innebär att någon del av de inre genitalorganen, såsom urinblåsan, livmodern eller slidväggarna, buktar ned mot eller ut genom slidöppningen. Det är vanligt och behöver oftast endast behandlas om det ger besvär. Risken ökar med ålder, vaginala förlossningar, övervikt och ärftlighet.
Symtom
Vanliga symtom är känslan av något som buktar fram i underlivet, tyngdkänsla eller skav. Besvären kan komma gradvis, men kan även uppstå snabbt efter tungt lyft, förstoppning eller graviditet.
Riskfaktorer
Framfall ökar vid påfrestningar på bäckenbotten, såsom graviditet, vaginal förlossning, tungt arbete, kronisk hosta, förstoppning eller skador på muskler och nerver i bäckenbotten. Risken ökar med antalet vaginala förlossningar och vid skador som stora bristningar.
Utredning inleds ofta med undersökning, ultraljud och eventuellt provtagning. Behandlingen beror på graden av framfallet och kan vara både konservativ, exempelvis knipövningar och stödjande hjälpmedel, eller kirurgisk.
Om du upplever tyngdkänsla, skav eller ser att något buktar fram i underlivet kan du kontakta GynRaMa för undersökning, rådgivning och eventuell remiss för operation`,
  },
  {
    slug: "urininkontinens",
    namn: "Urininkontinens",
    kategori: "Gynekologi",
    text: `Urininkontinens innebär att urin kan läcka mellan toalettbesök. Det är vanligt och det finns både egenvård och medicinska behandlingar som kan hjälpa, beroende på typ av inkontinens.
Vanliga symtom är att urin läcker vid ansträngning, hosta eller nysning, att du plötsligt känner dig kissnödig, att du behöver kissa ofta eller att urin läcker i små mängder.
Typer av urininkontinens
• Ansträngningsinkontinens: Läckage vid ökat tryck i magen, exempelvis vid hosta, nysning eller hopp. Kan behandlas med bäckenbottenträning eller operation vid behov.
• Trängningsinkontinens: Plötslig kissnödighet med svårt att hålla sig. Behandlas ofta med läkemedel som lugnar blåsan.
• Blandinkontinens: Kombination av ansträngnings- och trängningsinkontinens. Behandling kan innefatta bäckenbottenträning, blåsträning och ibland läkemedel eller operation.
• Överrinningsinkontinens: Mindre vanlig form där blåsan inte töms helt.
Bäckenbottenträning och blåsträning är ofta första steget. Vid vissa typer kan läkemedel eller operation bli aktuellt.
Om du har urinläckage eller symtom på inkontinens kan du kontakta GynRaMa för undersökning, behandling och rådgivning om läkemedel eller eventuell operation.`,
  },
  {
    slug: "endo-test",
    namn: "Endo test",
    kategori: "Gynekologi",
    text: `Vad är endometrios?
Endometrios kännetecknas av endometrieliknande vävnad utanför livmodern, så kallade endometrios lesioner. Tillväxten av dessa lesioner är ofta förknippad med en inflammatorisk process.
Under menstruation kan endometrios lesioner reagera på variationer i hormonella nivåer, vilket leder till akut inflammation, blödning, svår smärta och många andra symtom. Endometrios drabbar cirka 10 % av kvinnor i fertil ålder. I dagsläget är cirka 250 000 kvinnor i Sverige drabbade.
Symtom av endometrios
• Svår mensvärk
• Smärta under samlag
• Långvarig bäckensmärta
• Smärta i höger axel
• Matsmältningsproblem
• Intensiv trötthet
• Urinvägssjukdomar
• Infertilitet
• Smärta vid avföring
• Smärtsam rektal blödning
• Hematuri under menstruationen
• Omväxlande diarré – förstoppning`,
  },
  {
    slug: "tidig-graviditet",
    namn: "Kontroll av tidig graviditet",
    kategori: "Graviditet",
    text: `En graviditet kan oftast upptäckas med urintest cirka tre veckor efter befruktning, vilket motsvarar ungefär fem veckor efter första dagen på senaste mens. Tidig ultraljudsundersökning är viktig för att bekräfta att graviditeten sitter i livmodern och utvecklas normalt.
Från slutet av graviditetsvecka 6 kan man med vaginalt ultraljud se graviditeten i livmoderhålan, bedöma storlek i förhållande till graviditetslängden och se om hjärtaktivitet finns. Undersökningen kan också upptäcka tidiga graviditetsavvikelser, såsom missed abortion, missfall eller utomkvedshavandeskap, där graviditeten oftast sitter i äggledaren.
Blödning under tidig graviditet är vanligt och oftast ofarligt, men kan vara något vanligare vid missfall eller avstannad graviditet. I vissa fall behövs upprepade ultraljud och blodprov för hCG för att följa utvecklingen.
Läkarna på GynRaMa har lång erfarenhet av tidiga graviditetsutredningar och använder modern ultraljudsutrustning för att ge trygg och noggrann bedömning.`,
  },
  {
    slug: "blodning-graviditet",
    namn: "Blödning under graviditet",
    kategori: "Graviditet",
    text: `Blödning under graviditeten är vanligt, särskilt under första halvan. De flesta blödningar är helt ofarliga, men de kan ibland vara tecken på missfall eller utomkvedshavandeskap. Det är naturligt att bli orolig, men en blödning behöver inte innebära att något är fel.
Vanliga orsaker till blödning tidigt i graviditeten
Implantationsblödning
En liten blödning kan uppstå när det befruktade ägget fäster i livmoderslemhinnan, oftast i vecka 2–3. Den går över av sig själv och påverkar inte graviditeten.
Blödning från livmoderslemhinnan
Under de första månaderna kan kroppen ännu inte vara helt anpassad till graviditeten, vilket kan ge en mindre blödning som vanligtvis avtar spontant.
Blödning från livmodertappen
Livmodertappen är extra känslig under graviditet och kan blöda efter exempelvis samlag. Detta är ofarligt.
Polyp på livmodertappen
En polyp kan orsaka mindre blödningar utan att påverka graviditeten. Den kan vid behov tas bort av läkare.
Orsaker som kräver utredning
Missfall
Vid missfall förekommer ofta blödning i kombination med smärta i nedre delen av magen. De flesta missfall sker före vecka 12.
Extrauterin graviditet (utomkvedshavandeskap)
Innebär att graviditeten sitter utanför livmodern, oftast i äggledaren. Ger oftast ensidig buksmärta och en mindre blödning.
Infektion
Infektion i slidan eller livmodertappen kan orsaka blödning och illaluktande flytningar, men påverkar sällan själva graviditeten.
Druvbörd (mola)
En ovanlig, onormal graviditet där fostret inte utvecklas. Ger ofta kraftig blödning, hög hCG-nivå och typisk ultraljudsbild.
Blödning senare i graviditeten
Moderkakan lossnar för tidigt
En ovanlig men allvarlig komplikation som ger kraftig buksmärta och blödning, oftast i graviditetens slutskede.
Föreliggande moderkaka
Moderkakan kan blockera livmoderhalsens öppning och orsaka blödningar. Diagnostiseras med ultraljud. Kejsarsnitt krävs om moderkakan täcker öppningen helt eller delvis.
Teckningsblödning
En mindre blödning kan uppstå när förlossningen startar. Den är helt normal.
Andra orsaker
Blödning kan även komma från hemorrojder, vilket är vanligt under graviditet. Blodet kommer då från ändtarmsöppningen, inte från slidan. Ibland finns ingen tydlig förklaring.
Vid blödning under graviditeten eller om du får något av ovanstående symtom bör du kontakta GynRaMa för bedömning och undersökning.`,
  },
  {
    slug: "foster-test",
    namn: "Foster test (NIPT)",
    kategori: "Graviditet",
    text: `Fostertest, även kallat NIPT (Non-Invasive Prenatal Test) är ett enkelt, säkert och mycket tillförlitligt fostertest som mäter sannolikheten för trisomi 21, 18 och 13. Det finns olika märken på NIPT där vi erbjuder Roche Harmony NIPT med analys hos Life Genomics i Göteborg. Harmony NIPT har en känslighet på 99%, jämfört med 79% för KUB. Det går dessutom att välja till analys av könskromosomavvikelser utan extra kostnad. Mindre än 0,1% falskt positiva svar kan förekomma med Harmony NIPT test jämfört med 5% med KUB test. NIPT kan göras från och med 10 fullgångna graviditetsveckor.
Fördelar med Harmony NIPT
• Riskfritt – icke-invasivt och därmed ingen risk för missfall
• Enkelt – endast ett blodprov behövs
• Tillförlitligt – bevisad specificitet och sensitivitet är över 99%
• Välbeprövat – över 70 kliniska studier
• Över 2 800 000 Harmony NIPT har utförts globalt`,
  },
  {
    slug: "ofrivillig-barnloshet",
    namn: "Ofrivillig barnlöshet",
    kategori: "Fertilitet",
    text: `Ofrivillig barnlöshet innebär att man har försökt att bli gravid i mer än ett år utan att lyckas. Det är vanligt och kan bero på flera faktorer. Barnlöshet kan också uppstå i olika familjekonstellationer, till exempel om du är ensamstående, i ett samkönat förhållande eller om partnern inte vill ha barn.
När ska man söka vård?
Sök vård om ni har försökt bli gravida i minst ett år utan resultat. Sök tidigare om någon av följande gäller:
• Du som vill bli gravid är över 35 år.
• Du har sällan eller ingen mens.
• Du har tidigare genomgått operation i magen med komplikationer.
• Du eller partnern har behandlats med cellgifter eller strålning.
Orsaker till ofrivillig barnlöshet
Barnlöshet kan bero på problem med spermier, ägg, äggledare, livmoder eller en kombination av dessa.
Spermier
Hos cirka en tredjedel av fallen är orsaken relaterad till spermiernas antal, funktion eller frånvaro. Vanliga orsaker kan vara infektioner (t.ex. klamydia eller gonorré), testiklar som inte kommit ner, tidigare cancerbehandling eller användning av anabola steroider.
Ägg och livmoder
Hos en tredjedel beror barnlösheten på äggstockar eller livmodern. Det kan vara utebliven ägglossning (t.ex. vid PCOS), påverkade äggledare efter infektion, endometrios, polyper eller muskelknutor, extrem undervikt eller övervikt, strål- eller cellgiftsbehandling, eller medfödda tillstånd som Turners syndrom.
Oförklarad barnlöshet
Hos ungefär en tredjedel hittar man ingen tydlig förklaring, eller det kan bero på en kombination av faktorer.
Utredning av infertilitet
På GynRaMa kan du få hjälp med snabb utredning. Den kan inkludera:
• Spermaprov för att undersöka antal, rörlighet och förekomst av spermier.
• Ägglossningstest med LH-stickor eller morgontemperatur.
• Blodprov för ägglossning och hormonnivåer (FSH, LH, AMH, progesteron).
• Vaginalt ultraljud för att undersöka äggstockar, äggledare och livmoder.
• Hysterosalpingografi (HSSG) för att se livmoderhålan och passage i äggledare.
• HSG för att undersöka livmoderns vägg för polyper, myom eller missbildningar.
När utredningen är klar
Efter utredning diskuterar ni och läkaren vilken behandling som passar bäst. Ibland behövs ingen behandling, ibland rekommenderas IVF eller donationsbehandling. Alla utredningar och remisser kan hanteras av GynRaMa, som har lång erfarenhet inom infertilitet.`,
  },
  {
    slug: "stimulerad-agglossning",
    namn: "Stimulerad ägglossning",
    kategori: "Fertilitet",
    text: `För att en graviditet ska uppstå måste ett ägg lossna från äggstocken och befruktas i äggledaren. Om ägglossningen är oregelbunden eller uteblir kan hormonbehandling hjälpa till att stimulera äggen att mogna och lossna. Behandlingen kallas även ovulationsstimulering och kan ges som tabletter eller sprutor. Cirka hälften av de som behandlas blir gravida.
Före behandlingen
En fertilitetsutredning visar om du har problem med ägglossningen. Stimulerad ägglossning kan hjälpa vid oregelbunden eller utebliven ägglossning.
Så går behandlingen till
Vanligtvis får du ta tabletter som stimulerar kroppens eget äggblåsestimulerande hormon (FSH). Behandlingen pågår i fem dagar, och efter cirka tio dagar görs ultraljud för att följa äggblåsornas utveckling. Om tabletterna inte fungerar kan sprutor med FSH ges dagligen i cirka två veckor. Sprutorna tas vanligtvis i mage eller lår, och personalen visar hur det går till.
Ultraljudsundersökning
Vaginalt ultraljud används för att följa äggblåsornas tillväxt, både vid tabletter och sprutor.
Tidpunkt för ägglossning
Ibland behövs en spruta som gör att ägget lossnar, ungefär 30–35 timmar före samlag eller insemination, för att optimera chansen för graviditet.
Varför behandlingen görs
Stimulerad ägglossning ökar chansen att spermier kan befrukta ett ägg och gör det enklare att planera samlag eller insemination.
Om du har försökt bli gravid i över ett år utan framgång kan du kontakta GynRaMa för hjälp med stimulerad ägglossning. Våra läkare är specialister och du kan känna dig trygg hos oss.`,
  },
  {
    slug: "spermaprov",
    namn: "Spermaprov",
    kategori: "Fertilitet",
    // GynRaMa har ingen text för den här behandlingen ännu — deras egna ord.
    text: `Text kommer snart!`,
  },
  {
    slug: "abort",
    namn: "Abort",
    kategori: "Abort",
    text: `På GynRaMa erbjuder vi medicinsk abort. Vi tar emot patienter som är 18 år eller äldre.
Behandlingen är landstingsfinansierad, vilket innebär att den täcks enligt gällande regionala regler.
Vid ditt besök träffar du vår erfarna personal som:
• Går igenom hela processen
• Informerar om medicinen
• Finns tillgänglig för stöd under hela förloppet
För dig som önskar finns även möjlighet till extra samtalsstöd hos kurator.
Vi lägger stor vikt vid trygghet, sekretess och ett respektfullt bemötande.`,
  },
];
