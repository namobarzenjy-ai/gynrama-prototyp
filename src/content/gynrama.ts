/**
 * Allt innehåll är hämtat från gynrama.se (befintlig sida) — inget är påhittat.
 * Rubriker och brödtext följer klinikens egna formuleringar så nära som möjligt.
 */

export const kontakt = {
  telefon: "031-232 122",
  telefonHref: "tel:+4631232122",
  telefonAlt: "073-740 80 64",
  telefonAltHref: "tel:+46737408064",
  epost: "info@gynrama.se",
  adress: "Anders Personsgatan 12, Plan 4",
  postort: "416 64 Göteborg",
  karta: "https://www.google.com/maps?q=Anders+Personsgatan+12,+41664+Göteborg",
  oppet: t("Mån–lör: 8:30–17:00", "Mon–Sat: 8:30–17:00", "الإثنين–السبت: 8:30–17:00"),
  oppetNot: t("Söndagar: endast akuta tider", "Sundays: urgent appointments only", "الأحد: الحالات العاجلة فقط"),
  orgnr: "559368-8111",
  facebook: "https://m.facebook.com/100086003392370/",
  instagram: "https://www.instagram.com/gynrama",
  allabolag:
    "https://www.allabolag.se/foretag/gynrama-ab/göteborg/hälsotjänster/2KIC5DBI63IHB",
  gdpr: "https://gynrama.se/wp-content/uploads/2023/09/Personuppgiftspolicy-GynRaMa-AB-Ref.-23002A.pdf",
  verksamhetschef: t("Randa Akouri, Verksamhetschef", "Randa Akouri, Clinic Director", "رندة عكوري، مديرة العيادة"),
};

/*
   Bilder: klinikens EGNA foton, tagna på GynRaMa i Göteborg. Ersätter de
   tidigare stockfotona. Ligger i public/bilder/ som optimerad WebP.

   Sökvägen prefixas med basePath — next/image med unoptimized (Pages-bygget)
   lägger inte på det åt oss, så utan detta 404:ar bilderna på GitHub Pages
   men fungerar lokalt. Samma fälla som loggan, se Logo.tsx.

   Personporträtten (personalen) ligger INTE här — de hämtas från gynrama.se
   och rörs inte. Se omoss.ts.
*/
import { t } from "@/i18n";

const bas = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const b = (namn: string) => `${bas}/bilder/${namn}.webp`;

export const bilder = {
  hero: b("reception-hero"), // hero-bakgrund: receptionen med patient i disken
  manifest: b("reception-orkide"), // reception med orkidé
  ctaBakgrund: b("vantrum"), // väntrummet, bred bakgrund
  ctaKort: b("lakare-korridor"), // specialistläkare i korridoren
  bokaBesok: b("reception-logga"), // reception med GynRaMa-loggan på väggen
  gynekologi: b("gynrum"), // läkare vid kolposkopet i undersökningsrummet
  fertilitet: b("ivf-barn"), // samma bild som IVF-sidan, medvetet delad
  graviditet: b("ultraljud"), // ultraljud av gravid mage
  ivf: b("ivf-barn"), // barnhand i vuxenhand
  kolposkopi: b("kolposkopi"), // kolposkopiundersökning (endast behandlingssidan)
};

/*
   Bildvalen följer kundens besked 2026-08-05: bilden ska matcha ämnet på
   platsen. Tre av dem är provisoriska tills kliniken skickar resten av
   fotograferingen (numreringen i "egna bilder/" hoppar över 4–7, 10–13, 15–18
   och 20, så fler bilder finns hos dem):

   - gynekologi  Kunden vill ha gynrummet med gynstol och ultraljud. Det finns
                 inte fotograferat. gynrum.webp är kolposkopibilden beskuren
                 ovanför patientens ben — rätt ämne, men inte rätt bild.
   - fertilitet  Kunden vill ha samtalsrum med ett par. Finns inte. Kortet delar
                 därför bild med IVF-sidan på kundens begäran — samma fil på
                 båda ställena är alltså avsiktligt, inte ett slarvfel.
   - ivf         Kunden vill ha ägg, spermier eller barn. ivf-barn.webp är
                 urklippt ur klinikens egen IVF-annons (originalet ligger i
                 "egna bilder/"), fritt från text och logga.

   reception-hero.webp är den enda bilden vi har där folk syns, och den enda
   som ligger BAKOM text: den är hero-sektionens bakgrund med rubriken ovanpå.
   Hämtad oskuren från klinikens nuvarande förstasida (2100x891). Byts den mot
   en bild med andra mått måste width/height i Hero.tsx följa med, och tonings-
   styrkan där är avvägd mot just den här bildens ljushet — se Hero.tsx.

   kaffe.webp, modell.webp och lakare-dator.webp är därmed oanvända. De ligger
   kvar — kaffebilden låg tidigare på både fertilitet och IVF, modellen
   föreställer en gravid livmoder (obstetrik, inte gynekologi), och läkaren vid
   skrivbordet ersattes när fertilitetskortet fick IVF-bilden.
*/

export const omraden = [
  {
    titel: t("Gynekologi", "Gynaecology", "أمراض النساء"),
    text: t(
      "Regelbundna kontroller, ultraljud, cellförändringar, myom och klimakteriebesvär.",
      "Regular check-ups, ultrasound, cell changes, fibroids and menopause symptoms.",
      "فحوصات دورية، موجات فوق صوتية، تغيّرات خلوية، أورام ليفية وأعراض سن اليأس.",
    ),
    bild: bilder.gynekologi,
    alt: t(
      "Specialistläkare vid kolposkopet i undersökningsrummet på GynRaMa",
      "Specialist doctor at the colposcope in the examination room at GynRaMa",
      "طبيبة اختصاصية عند منظار عنق الرحم في غرفة الفحص في GynRaMa",
    ),
    href: "/behandlingar#kat-gynekologi",
  },
  {
    titel: t("Fertilitet & IVF", "Fertility & IVF", "الخصوبة وأطفال الأنابيب"),
    text: t(
      "Utredning, rådgivning och IVF i nära samarbete med Nordic IVF.",
      "Investigation, counselling and IVF in close partnership with Nordic IVF.",
      "فحوصات واستشارات وأطفال أنابيب بالتعاون الوثيق مع Nordic IVF.",
    ),
    bild: bilder.fertilitet,
    alt: t(
      "Nyfödd hand som håller om en vuxens finger",
      "A newborn hand holding an adult\u2019s finger",
      "يد مولود جديد تمسك بإصبع شخص بالغ",
    ),
    href: "/behandlingar#kat-fertilitet",
  },
  {
    titel: t("Graviditet", "Pregnancy", "الحمل"),
    text: t(
      "Bedömning i tidig graviditet och ultraljud med 3D- och 4D-teknik.",
      "Early pregnancy assessment and ultrasound with 3D and 4D technology.",
      "تقييم الحمل المبكر وتصوير بالموجات فوق الصوتية بتقنية ثلاثية ورباعية الأبعاد.",
    ),
    bild: bilder.graviditet,
    alt: t(
      "Ultraljudsundersökning av gravid mage",
      "Ultrasound examination of a pregnant belly",
      "فحص بالموجات فوق الصوتية لبطن حامل",
    ),
    href: "/behandlingar#kat-graviditet",
  },
];

/* Besökstyperna och priserna kommer från gynrama.se/priser/ och /boka-tid/ */
export const besok = [
  {
    titel: t("Gynekologiskt besök", "Gynaecological visit", "زيارة نسائية"),
    pris: t("1 600 kr", "SEK 1,600", "1 600 كرونا"),
    text: t(
      "Ett fysiskt besök hos specialistläkare inklusive ultraljud. Ingen remiss eller egenremiss krävs — du bokar direkt via bokningssystemet.",
      "An in-person visit with a specialist doctor, including ultrasound. No referral or self-referral needed — you book directly through the booking system.",
      "زيارة في العيادة لدى طبيبة اختصاصية شاملة الموجات فوق الصوتية. لا حاجة إلى إحالة — تحجزين مباشرة عبر نظام الحجز.",
    ),
    punkt: t("Inklusive ultraljud", "Ultrasound included", "شاملة الموجات فوق الصوتية"),
  },
  {
    titel: t("Videobesök", "Video consultation", "استشارة بالفيديو"),
    pris: t("1 000 kr", "SEK 1,000", "1 000 كرونا"),
    text: t(
      "Konsultation med specialistläkare via video, var du än befinner dig i landet eller världen.",
      "A video consultation with a specialist doctor, wherever you are in the country or the world.",
      "استشارة بالفيديو مع طبيبة اختصاصية أينما كنتِ في السويد أو حول العالم.",
    ),
    punkt: t("Digitalt, samma specialist", "Digital, same specialist", "رقمياً، نفس الاختصاصية"),
  },
  {
    titel: t("Telefonkonsultation", "Phone consultation", "استشارة هاتفية"),
    pris: t("500 kr", "SEK 500", "500 كرونا"),
    text: t(
      "Medicinsk rådgivning per telefon när du har frågor som inte kräver en undersökning.",
      "Medical advice by phone when you have questions that do not require an examination.",
      "استشارة طبية عبر الهاتف عندما تكون لديك أسئلة لا تتطلب فحصاً.",
    ),
    punkt: t("Medicinsk rådgivning", "Medical advice", "استشارة طبية"),
  },
  {
    titel: t("Akut besök inom 4 timmar", "Urgent visit within 4 hours", "زيارة عاجلة خلال 4 ساعات"),
    pris: t("3 900 kr", "SEK 3,900", "3 900 كرونا"),
    text: t(
      "När det inte kan vänta får du tid hos specialistläkare inom fyra timmar. Gäller även utanför ordinarie öppettider.",
      "When it cannot wait, you see a specialist doctor within four hours. Also available outside regular opening hours.",
      "عندما لا يحتمل الأمر الانتظار، تقابلين طبيبة اختصاصية خلال أربع ساعات. متاح أيضاً خارج ساعات العمل المعتادة.",
    ),
    punkt: t("Inga väntetider", "No waiting times", "بدون أوقات انتظار"),
  },
  {
    titel: t("Landstingsfinansierad vård", "Publicly funded care", "رعاية ممولة من القطاع العام"),
    pris: t("Ring oss", "Call us", "اتصلي بنا"),
    text: t(
      "Vi erbjuder även landstingsfinansierad vård. För att boka dessa tider behöver du ringa oss direkt.",
      "We also offer publicly funded care. To book these appointments you need to call us directly.",
      "نقدم أيضاً رعاية ممولة من القطاع العام. لحجز هذه المواعيد يلزم الاتصال بنا مباشرة.",
    ),
    punkt: t("Via regionavtal", "Via regional agreement", "عبر اتفاقية المنطقة"),
  },
];

export const fordelar = [
  t("Ingen remiss krävs", "No referral needed", "لا حاجة إلى إحالة"),
  t("Inga väntetider", "No waiting times", "بدون أوقات انتظار"),
  t("Samma specialistteam hela vägen", "The same specialist team throughout", "نفس الفريق المتخصص طوال الرحلة"),
  t("Privat och landstingsfinansierat", "Private and publicly funded", "رعاية خاصة وممولة من القطاع العام"),
];

/* Från gynrama.se/om-oss/ */
export const lakare = [
  {
    namn: "Randa Akouri",
    titel: t(
      "Docent, specialistläkare i kvinnosjukdomar",
      "Associate professor, specialist in gynaecology",
      "أستاذة مشاركة، اختصاصية في أمراض النساء",
    ),
    text: t(
      "Reproduktionsmedicin, reproduktionsfysiologi och benigna gynekologiska besvär. Verksamhetschef på GynRaMa.",
      "Reproductive medicine, reproductive physiology and benign gynaecological conditions. Clinic director at GynRaMa.",
      "طب الإنجاب وفسيولوجيا الإنجاب والحالات النسائية الحميدة. مديرة عيادة GynRaMa.",
    ),
  },
  {
    namn: "Mats Brännström",
    titel: t(
      "Professor, specialistläkare i kvinnosjukdomar",
      "Professor, specialist in gynaecology",
      "بروفيسور، اختصاصي في أمراض النساء",
    ),
    text: t(
      "Gynekologisk cancerkirurgi, reproduktionsmedicin, IVF och öppenvårdsgynekologi.",
      "Gynaecological cancer surgery, reproductive medicine, IVF and outpatient gynaecology.",
      "جراحة أورام النساء، طب الإنجاب، أطفال الأنابيب وأمراض النساء في العيادات الخارجية.",
    ),
  },
  {
    namn: "Sofia Ganidou",
    titel: t(
      "Överläkare i gynekologi och obstetrik",
      "Senior consultant in gynaecology and obstetrics",
      "استشارية في أمراض النساء والتوليد",
    ),
    text: t(
      "Cellförändringar i livmoderhalsen, klimakteriebesvär, blödningsrubbningar och gynekologiskt ultraljud.",
      "Cervical cell changes, menopause symptoms, bleeding disorders and gynaecological ultrasound.",
      "تغيّرات خلايا عنق الرحم، أعراض سن اليأس، اضطرابات النزيف والموجات فوق الصوتية النسائية.",
    ),
  },
  {
    namn: "Asha Kalra",
    titel: t(
      "Överläkare i gynekologi",
      "Senior consultant in gynaecology",
      "استشارية في أمراض النساء",
    ),
    text: t(
      "Obstetrik, gynekologi, klimakteriebesvär, inkontinens, infertilitet och cellförändringar.",
      "Obstetrics, gynaecology, menopause symptoms, incontinence, infertility and cell changes.",
      "التوليد وأمراض النساء وأعراض سن اليأس وسلس البول والعقم والتغيّرات الخلوية.",
    ),
  },
];

/* Från gynrama.se/gynrama-ivf/ — "Därför väljer patienter GynRaMa IVF" */
export const ivfPunkter = [
  t("IVF i nära samarbete med Nordic IVF", "IVF in close partnership with Nordic IVF", "أطفال أنابيب بالتعاون الوثيق مع Nordic IVF"),
  t("Individanpassade behandlingsplaner", "Individualised treatment plans", "خطط علاج مصممة لكل حالة"),
  t("Kontinuitet — samma läkare hela vägen", "Continuity — the same doctor throughout", "استمرارية — نفس الطبيبة طوال الرحلة"),
  t("Evidensbaserad vård med akademisk profil", "Evidence-based care with an academic profile", "رعاية قائمة على الأدلة بطابع أكاديمي"),
];
