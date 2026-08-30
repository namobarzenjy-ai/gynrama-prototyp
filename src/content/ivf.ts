/**
 * GynRaMa IVF — hämtat ordagrant från https://gynrama.se/gynrama-ivf/ 2026-07-17.
 *
 * Två stavfel i källan är rättade här eftersom de gäller klinikens eget namn:
 * "GynRaM Fertilitet" -> "GynRaMa Fertilitet", och "På GynRaMA" -> "På GynRaMa".
 * Övriga språkfel i källtexterna rättades 2026-08-30 på kundens begäran —
 * se noten längst ned i omoss.ts.
 *
 * Notera: källsidan saknar helt CTA-knappar — enda vägen vidare är menyn.
 * Här finns bokningslänkar, vilket är en medveten avvikelse.
 */

import { t } from "@/i18n";

export const ivfUnderrubrik =
  t(
    "GynRaMa Fertilitet & IVF i samarbete med Nordic IVF",
    "GynRaMa Fertility & IVF in partnership with Nordic IVF",
    "GynRaMa للخصوبة وأطفال الأنابيب بالتعاون مع Nordic IVF",
  );

export const ivfIngress = [
  t(
    `Drömmen om ett barn är unik och det är även din fertilitetsresa. På GynRaMa erbjuder vi individanpassade IVF-behandlingar i nära samarbete med Nordic IVF. Tillsammans kombinerar vi hög medicinsk kompetens, modern laboratorieverksamhet och ett personligt omhändertagande för att ge dig de bästa förutsättningarna.`,
    `The dream of a child is unique, and so is your fertility journey. At GynRaMa we offer individualised IVF treatment in close partnership with Nordic IVF. Together we combine high medical expertise, modern laboratory facilities and personal care to give you the best possible conditions.`,
    `حلم الإنجاب فريد، وكذلك رحلة خصوبتك. في GynRaMa نقدم علاجات أطفال أنابيب مصممة لكل حالة بالتعاون الوثيق مع Nordic IVF. نجمع معاً بين الكفاءة الطبية العالية والمختبرات الحديثة والرعاية الشخصية لنمنحك أفضل الظروف الممكنة.`,
  ),
  t(
    `Vi följer dig genom hela processen från den första fertilitetsutredningen och behandlingsplaneringen till IVF-behandling, embryoåterföring och uppföljning. Hos oss möter du samma specialistteam genom hela din resa, vilket skapar kontinuitet, trygghet och ett personligt bemötande.`,
    `We follow you through the whole process, from the first fertility investigation and treatment planning to IVF treatment, embryo transfer and follow-up. With us you meet the same specialist team throughout your journey, which creates continuity, security and a personal touch.`,
    `نرافقك خلال العملية كاملة، من أول فحص للخصوبة وتخطيط العلاج إلى علاج أطفال الأنابيب وإرجاع الأجنة والمتابعة. لديك نفس الفريق المتخصص طوال رحلتك، ما يمنحك الاستمرارية والطمأنينة والاهتمام الشخصي.`,
  ),
  t(
    `Varje behandling utformas utifrån dina eller era individuella förutsättningar. Oavsett om du kommer som par eller ensamstående får du en tydlig plan, nära uppföljning och tillgång till den senaste kunskapen inom reproduktionsmedicin.`,
    `Every treatment is designed around your individual circumstances. Whether you come as a couple or on your own, you receive a clear plan, close follow-up and access to the latest knowledge in reproductive medicine.`,
    `يُصمم كل علاج وفق ظروفك الفردية. سواء أتيتما كزوجين أو أتيتِ بمفردك، تحصلين على خطة واضحة ومتابعة دقيقة وأحدث المعارف في طب الإنجاب.`,
  ),
];

/** Från rubriken "Därför väljer patienter GynRaMa IVF". */
export const ivfDarfor = {
  rubrik: t("Därför väljer patienter GynRaMa IVF", "Why patients choose GynRaMa IVF", "لماذا تختار المريضات GynRaMa IVF"),
  punkter: [
    t("IVF i nära samarbete med Nordic IVF", "IVF in close partnership with Nordic IVF", "أطفال أنابيب بالتعاون الوثيق مع Nordic IVF"),
    t("Specialistläkare i gynekologi och reproduktionsmedicin", "Specialists in gynaecology and reproductive medicine", "أطباء اختصاصيون في أمراض النساء وطب الإنجاب"),
    t("Individanpassade behandlingsplaner", "Individualised treatment plans", "خطط علاج مصممة لكل حالة"),
    t("Kontinuitet, samma läkare genom hela behandlingen", "Continuity — the same doctor throughout the treatment", "استمرارية — نفس الطبيبة طوال العلاج"),
    t("Korta väntetider och hög tillgänglighet", "Short waiting times and high availability", "أوقات انتظار قصيرة وتوفر عالٍ"),
    t("Trygg uppföljning från första besöket till avslutad behandling", "Reliable follow-up from the first visit to completed treatment", "متابعة موثوقة من أول زيارة حتى اكتمال العلاج"),
    t("Evidensbaserad vård med akademisk profil", "Evidence-based care with an academic profile", "رعاية قائمة على الأدلة بطابع أكاديمي"),
  ],
};

export const ivfFilosofi = {
  rubrik: t("Vår filosofi", "Our philosophy", "فلسفتنا"),
  text: t(
    `På GynRaMa ser vi fertilitetsbehandling som mer än en medicinsk process. Vi vill att du ska känna dig välinformerad, delaktig och trygg genom hela behandlingen. Med hög medicinsk kvalitet och ett personligt bemötande finns vi vid din sida från det första samtalet till målet – att ge dig bästa möjliga förutsättningar att bli förälder.`,
    `At GynRaMa we see fertility treatment as more than a medical process. We want you to feel well informed, involved and secure throughout your treatment. With high medical quality and personal care we are at your side from the first conversation to the goal – giving you the best possible chance of becoming a parent.`,
    `في GynRaMa نرى علاج الخصوبة أكثر من مجرد إجراء طبي. نريدك أن تشعري بأنك على اطلاع ومشارِكة ومطمئنة طوال العلاج. بجودة طبية عالية ورعاية شخصية نقف إلى جانبك من أول حديث حتى الهدف – منحك أفضل فرصة ممكنة لتصبحي أماً.`,
  ),
};

/** Relevanta rader ur prislistan, för snabb överblick på IVF-sidan. */
export const ivfPriser = [
  { tjanst: t("Fertilitetskonsultation", "Fertility consultation", "استشارة خصوبة"), pris: t("2 000 kr", "SEK 2,000", "2 000 كرونا") },
  { tjanst: t("Komplett fertilitetsutredning inför ev. IVF-remiss", "Complete fertility investigation ahead of a possible IVF referral", "فحص خصوبة شامل قبل إحالة محتملة لأطفال الأنابيب"), pris: t("11 500 kr", "SEK 11,500", "11 500 كرونا") },
  { tjanst: t("Ägglossningsstimulering med hormontabletter", "Ovulation stimulation with hormone tablets", "تحفيز الإباضة بأقراص هرمونية"), pris: t("4 000 kr", "SEK 4,000", "4 000 كرونا") },
  { tjanst: t("Spermieprov", "Sperm test", "فحص الحيوانات المنوية"), pris: t("2 000 kr", "SEK 2,000", "2 000 كرونا") },
];
