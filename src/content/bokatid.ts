/**
 * Boka tid — hämtat ordagrant från https://gynrama.se/boka-tid/ 2026-07-17.
 *
 * bokningsUrl pekar på klinikens SKARPA bokningssystem (patient.nu).
 * Länkarna är hämtade från deras egen sida, inte gissade.
 *
 * Avvikelse från källan: akutbesök är "inom 4 timmar" sedan kundens
 * besked 2026-08-30 (källsidan sade 24/8 timmar).
 */

import { t } from "@/i18n";

export type Besokstyp = {
  titel: string;
  pris: string;
  text: string;
  bokningsUrl: string;
};

/** Klinikens riktiga bokningskalendrar. */
export const besokstyper: Besokstyp[] = [
  {
    titel: t(
      "Gynekologisk eller obstetrisk undersökning",
      "Gynaecological or obstetric examination",
      "فحص نسائي أو توليدي",
    ),
    pris: t("1 600 kr", "SEK 1,600", "1 600 كرونا"),
    text: t(
      "Fysiskt besök hos specialistläkare på kliniken i Göteborg, inklusive ultraljud.",
      "In-person visit with a specialist doctor at the clinic in Gothenburg, including ultrasound.",
      "زيارة في العيادة في يوتيبوري لدى طبيبة اختصاصية، شاملة الموجات فوق الصوتية.",
    ),
    bokningsUrl:
      "https://patient.nu/portal/public/calendar/aaa9725c-aace-41ba-8cba-8fcf67a9eca1",
  },
  {
    titel: t(
      "Videobesök med specialistläkare",
      "Video consultation with a specialist doctor",
      "استشارة بالفيديو مع طبيبة اختصاصية",
    ),
    pris: t("1 000 kr", "SEK 1,000", "1 000 كرونا"),
    text: t(
      "Tillgängligt över hela världen – du behöver inte vara i Göteborg.",
      "Available worldwide – you do not need to be in Gothenburg.",
      "متاحة حول العالم – لا يلزم أن تكوني في يوتيبوري.",
    ),
    bokningsUrl:
      "https://patient.nu/portal/public/calendar/b3604bfd-5515-482f-a96c-3d079c392c4c",
  },
  {
    titel: t(
      "Telefonkonsultation med specialistläkare",
      "Phone consultation with a specialist doctor",
      "استشارة هاتفية مع طبيبة اختصاصية",
    ),
    pris: t("500 kr", "SEK 500", "500 كرونا"),
    text: t(
      "Medicinsk rådgivning per telefon när du har frågor som inte kräver undersökning.",
      "Medical advice by phone when your questions do not require an examination.",
      "استشارة طبية عبر الهاتف عندما لا تتطلب أسئلتك فحصاً.",
    ),
    bokningsUrl:
      "https://patient.nu/portal/public/calendar/6b81a651-4dc3-4afb-9536-8515edd083db",
  },
  {
    titel: t(
      "Psykiatrisk konsultation med specialistläkare",
      "Psychiatric consultation with a specialist doctor",
      "استشارة نفسية مع طبيب اختصاصي",
    ),
    pris: t("Från 1 000 kr", "From SEK 1,000", "ابتداءً من 1 000 كرونا"),
    text: t(
      "Fysiskt besök, videobesök eller telefon. Inklusive PMDS, utmattningssyndrom och postpartum depression.",
      "In person, by video or by phone. Including PMDD, burnout and postpartum depression.",
      "في العيادة أو بالفيديو أو الهاتف. يشمل اضطراب ما قبل الطمث الانزعاجي والإرهاق واكتئاب ما بعد الولادة.",
    ),
    bokningsUrl:
      "https://patient.nu/portal/public/calendar/d8c2a45d-c04a-4e7b-93e2-db81dcd130ec",
  },
];

export const bokaIngress = t(
  `Hos GynRaMa kan du boka både fysiska och digitala besök hos våra erfarna gynekologer med specialkompetens inom obstetrik, gynekologi, andrologi, reproduktionsmedicin och psykiatri.
Du behöver ingen remiss eller egenremiss för att komma på besök.`,
  `At GynRaMa you can book both in-person and digital visits with our experienced gynaecologists, specialised in obstetrics, gynaecology, andrology, reproductive medicine and psychiatry.
No referral or self-referral is needed to visit us.`,
  `في GynRaMa يمكنك حجز زيارات في العيادة أو رقمية لدى أطبائنا ذوي الخبرة المتخصصين في التوليد وأمراض النساء وطب الذكورة وطب الإنجاب والطب النفسي.
لا حاجة إلى أي إحالة لزيارتنا.`,
);

export const bokaFakta = [
  { etikett: t("Videobesök", "Video consultations", "استشارات الفيديو"), varde: t("Hela världen", "Worldwide", "حول العالم") },
  { etikett: t("Fysiska besök", "In-person visits", "الزيارات في العيادة"), varde: t("Göteborg", "Gothenburg", "يوتيبوري") },
  { etikett: t("Öppet", "Open", "مفتوح"), varde: t("Mån–lör 8:30–17:00", "Mon–Sat 8:30–17:00", "الإثنين–السبت 8:30–17:00") },
];

/** Från rubriken "Gällande bokning/avbokning". */
export const bokningsregler = [
  t("Avboka ditt besök senast 24 timmar innan planerad tid.",
    "Cancel your appointment no later than 24 hours before the scheduled time.",
    "ألغي موعدك قبل 24 ساعة على الأقل من الوقت المحدد."),
  t("Vid sen avbokning eller uteblivet besök debiteras hela besökskostnaden.",
    "Late cancellations and missed visits are charged the full visit fee.",
    "عند الإلغاء المتأخر أو عدم الحضور تُحتسب كامل تكلفة الزيارة."),
  t("Bokar du tid samma dag, välj akutbesök inom 4 timmar. Gäller oavsett besökstyp.",
    "If you book a same-day appointment, choose the urgent visit within 4 hours. Applies to all visit types.",
    "إذا حجزت موعداً في نفس اليوم، اختاري الزيارة العاجلة خلال 4 ساعات. ينطبق على جميع أنواع الزيارات."),
  t("Behöver du tolk kan vi ordna det. Vid privat besök betalar du själv tolkkostnaden.",
    "If you need an interpreter we can arrange one. For private visits you cover the interpreter cost yourself.",
    "إذا احتجت إلى مترجم يمكننا ترتيب ذلك. في الزيارات الخاصة تتحملين تكلفة الترجمة بنفسك."),
  t("Frikort gäller inte vid uteblivet besök.",
    "High-cost protection cards are not valid for missed visits.",
    "بطاقة الإعفاء لا تسري عند عدم الحضور."),
  t("Regionavtal gäller endast måndag–fredag. Privat vård kan bokas alla dagar.",
    "The regional agreement applies Monday–Friday only. Private care can be booked any day.",
    "اتفاقية المنطقة تسري من الإثنين إلى الجمعة فقط. الرعاية الخاصة تُحجز في جميع الأيام."),
];

export const regionavtal = {
  rubrik: t("Boka tid via regionavtal", "Book via the regional agreement", "الحجز عبر اتفاقية المنطقة"),
  text: [
    t(`Besöket är regionfinansierat och patientavgift tas ut enligt Västra Götalandsregionens (VGR) gällande regiontaxa.`,
      `The visit is regionally funded and a patient fee is charged according to the current tariff of Region Västra Götaland (VGR).`,
      `الزيارة ممولة من المنطقة وتُحتسب رسوم المريض وفق التعرفة السارية في منطقة فسترا يوتالاند (VGR).`),
    t(`För att boka dessa tider behöver du kontakta oss via telefon, då särskild tidsbokning krävs.`,
      `To book these appointments you need to call us, as special scheduling is required.`,
      `لحجز هذه المواعيد يلزم الاتصال بنا هاتفياً، إذ يتطلب الأمر حجزاً خاصاً.`),
  ],
};

export const betalning = t(
  `OBS! Vi tar endast emot betalning via kort eller Swish.`,
  `Please note: we only accept payment by card or Swish.`,
  `ملاحظة: نقبل الدفع بالبطاقة أو تطبيق Swish فقط.`,
);

/** Provtagning sker hos extern partner. */
export const provtagning = {
  rubrik: t("Provtagning", "Sample collection", "سحب العينات"),
  namn: "Unilabs Carlanderska provtagning",
  adress: "Carlandersparken 1, 412 55 Göteborg",
  oppet: [
    t("Drop-in mån–tor: 07.15–16.00", "Drop-in Mon–Thu: 07.15–16.00", "بدون موعد، الإثنين–الخميس: 07.15–16.00"),
    t("Fre: 07.15–15.00", "Fri: 07.15–15.00", "الجمعة: 07.15–15.00"),
  ],
};
