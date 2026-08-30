/**
 * Prislista — hämtad från https://gynrama.se/priser/ 2026-07-17, med
 * kundens ändringar 2026-08-30:
 *  - Akuttiden är "inom 4 timmar, 3 900 kr" (ersätter 24 tim/2 600 och
 *    3 tim-raden).
 *  - NIPT är borttaget ur sortimentet, inklusive mikrodeletions-tillvalet
 *    som bara fanns som tillägg till NIPT.
 *
 * Kunden har aviserat ett NYTT PRISUNDERLAG som ännu inte kommit — övriga
 * belopp är alltså fortfarande 2026-07-17 och ska bytas när underlaget
 * finns. VERIFIERA MOT KLINIKEN INNAN SKARP DRIFT.
 *
 * slug bygger ankar-id:t på prissidan och får inte översättas — arabiska
 * rubriker kan inte bli id:n, och sökindexet länkar hit.
 *
 * EN/AR-texterna är UTKAST och ska granskas av kliniken (se README).
 */
import { t } from "@/i18n";

export type Prisrad = { tjanst: string; pris: string; not?: string };
export type Priskategori = { rubrik: string; slug: string; rader: Prisrad[] };

export const prisHamtat = "2026-07-17";

const kr = (belopp: string, en: string, ar: string) => t(`${belopp} kr`, `SEK ${en}`, `${ar} كرونا`);

export const priser: Priskategori[] = [
  {
    rubrik: t("Konsultationer & besök", "Consultations & visits", "الاستشارات والزيارات"),
    slug: "konsultationer-besok",
    rader: [
      {
        tjanst: t("Gynekolog besök inkl. ultraljud", "Gynaecologist visit incl. ultrasound", "زيارة طبيبة النساء شاملة الموجات فوق الصوتية"),
        pris: kr("1 600", "1,600", "1 600"),
        not: t("Laboratorieprover tillkommer enligt separat prislista", "Laboratory tests are charged according to a separate price list", "تُضاف الفحوصات المخبرية وفق قائمة أسعار منفصلة"),
      },
      { tjanst: t("Telefonkonsultation / medicinsk rådgivning", "Phone consultation / medical advice", "استشارة هاتفية / مشورة طبية"), pris: kr("500", "500", "500") },
      { tjanst: t("Videobesök konsultation med specialist", "Video consultation with a specialist", "استشارة بالفيديو مع اختصاصية"), pris: kr("1 000", "1,000", "1 000") },
      { tjanst: t("Receptförskrivning utanför läkarbesök", "Prescription outside a doctor's visit", "وصفة طبية خارج الزيارة"), pris: kr("500", "500", "500") },
      {
        tjanst: t("Akut besök inom 4 timmar", "Urgent visit within 4 hours", "زيارة عاجلة خلال 4 ساعات"),
        pris: kr("3 900", "3,900", "3 900"),
        not: t("Gäller även utanför ordinarie öppettider", "Also available outside regular opening hours", "متاحة أيضاً خارج ساعات العمل المعتادة"),
      },
      { tjanst: t("Remiss i samband med besöket", "Referral in connection with the visit", "إحالة مرتبطة بالزيارة"), pris: kr("500", "500", "500") },
    ],
  },
  {
    rubrik: t("Graviditetsrelaterade tjänster", "Pregnancy-related services", "خدمات متعلقة بالحمل"),
    slug: "graviditet",
    rader: [
      { tjanst: t("Tidigt graviditetsultraljud (från v 6+)", "Early pregnancy ultrasound (from week 6+)", "تصوير الحمل المبكر بالموجات فوق الصوتية (من الأسبوع 6+)"), pris: kr("1 600", "1,600", "1 600") },
      { tjanst: t("Abdominellt graviditetsultraljud", "Abdominal pregnancy ultrasound", "تصوير الحمل عبر البطن بالموجات فوق الصوتية"), pris: kr("1 900", "1,900", "1 900") },
    ],
  },
  {
    rubrik: t("Fertilitetsutredningar & behandlingar", "Fertility investigations & treatments", "فحوصات وعلاجات الخصوبة"),
    slug: "fertilitet",
    rader: [
      { tjanst: t("Fertilitetskonsultation", "Fertility consultation", "استشارة خصوبة"), pris: kr("2 000", "2,000", "2 000") },
      {
        tjanst: t("Komplett fertilitetsutredning inför ev. IVF-remiss", "Complete fertility investigation ahead of a possible IVF referral", "فحص خصوبة شامل قبل إحالة محتملة لأطفال الأنابيب"),
        pris: kr("11 500", "11,500", "11 500"),
      },
      {
        tjanst: t("Missfallsutredning", "Miscarriage investigation", "فحص الإجهاض المتكرر"),
        pris: kr("9 800", "9,800", "9 800"),
        not: t("Exklusive kromosomanalys", "Excluding chromosome analysis", "لا يشمل تحليل الكروموسومات"),
      },
      {
        tjanst: t(
          "Ägglossningsstimulering med hormontabletter / Letrozol-behandling inklusive en uppföljning med ultraljud",
          "Ovulation stimulation with hormone tablets / letrozole treatment, including one ultrasound follow-up",
          "تحفيز الإباضة بأقراص هرمونية / علاج ليتروزول شاملاً متابعة واحدة بالموجات فوق الصوتية",
        ),
        pris: kr("4 000", "4,000", "4 000"),
      },
      {
        tjanst: t(
          "Ägglossningsstimulering med hormonsprutor inklusive uppföljning med ultraljud",
          "Ovulation stimulation with hormone injections, including ultrasound follow-up",
          "تحفيز الإباضة بالحقن الهرمونية شاملاً المتابعة بالموجات فوق الصوتية",
        ),
        pris: kr("9 000", "9,000", "9 000"),
        not: t("Exklusive läkemedelskostnad", "Excluding medication costs", "لا يشمل تكلفة الأدوية"),
      },
      {
        tjanst: t("Undersökning av livmoder och äggledare – HyCoSy/HSSG", "Examination of the uterus and fallopian tubes – HyCoSy/HSSG", "فحص الرحم وقناتي فالوب – HyCoSy/HSSG"),
        pris: kr("4 000", "4,000", "4 000"),
      },
      {
        tjanst: t("Undersökning av livmoder – hydrosonografi (KAVUS)", "Examination of the uterus – hydrosonography (SIS)", "فحص الرحم – التصوير بالمحلول الملحي (KAVUS)"),
        pris: kr("2 000", "2,000", "2 000"),
      },
      { tjanst: t("Spermieprov", "Sperm test", "فحص الحيوانات المنوية"), pris: kr("2 000", "2,000", "2 000") },
      { tjanst: t("Kolposkopi inklusive biopsi och cellprov", "Colposcopy including biopsy and smear test", "تنظير عنق الرحم شاملاً الخزعة ومسحة الخلايا"), pris: kr("8 000", "8,000", "8 000") },
      { tjanst: t("Kolposkopi exklusive biopsi och cellprov", "Colposcopy excluding biopsy and smear test", "تنظير عنق الرحم دون خزعة أو مسحة"), pris: kr("3 500", "3,500", "3 500") },
    ],
  },
  {
    rubrik: t("Gynekologiska tjänster", "Gynaecological services", "خدمات نسائية"),
    slug: "gynekologi",
    rader: [
      {
        tjanst: t("Spiraluttag (inklusive läkarbesök och ultraljud)", "IUD removal (including doctor's visit and ultrasound)", "إزالة اللولب (شاملة الزيارة والموجات فوق الصوتية)"),
        pris: kr("1 700", "1,700", "1 700"),
        not: t("Extra kostnad tillkommer vid bedövning", "Extra cost for anaesthesia", "تُضاف تكلفة إضافية عند التخدير"),
      },
      {
        tjanst: t("Spiralinsättning (inklusive läkarbesök och ultraljud)", "IUD insertion (including doctor's visit and ultrasound)", "تركيب اللولب (شاملاً الزيارة والموجات فوق الصوتية)"),
        pris: kr("2 000", "2,000", "2 000"),
        not: t(
          "600 kr tillkommer för kopparspiralen. 200 kr tillkommer för samtidigt spiraluttag",
          "SEK 600 extra for a copper IUD. SEK 200 extra for simultaneous IUD removal",
          "تُضاف 600 كرونا للولب النحاسي و200 كرونا عند إزالة لولب في نفس الجلسة",
        ),
      },
      {
        tjanst: t("Spiraluttag + spiralinsättning", "IUD removal + insertion", "إزالة وتركيب اللولب"),
        pris: kr("2 500", "2,500", "2 500"),
        not: t("Extra kostnad tillkommer vid bedövning", "Extra cost for anaesthesia", "تُضاف تكلفة إضافية عند التخدير"),
      },
      {
        tjanst: t(
          "Gynekologisk undersökning vid IVF-behandling på annan klinik eller utomlands",
          "Gynaecological examination during IVF treatment at another clinic or abroad",
          "فحص نسائي أثناء علاج أطفال الأنابيب في عيادة أخرى أو في الخارج",
        ),
        pris: kr("1 600", "1,600", "1 600"),
        not: t(
          "För gynekologisk undersökning inklusive ultraljud. Kostnad för laboratorieprover tillkommer enligt prislista. Receptförskrivning 500 kr per recept, exklusive förmån. 200 kr tillkommer för kopia av journalanteckning i samband med besöket",
          "For a gynaecological examination including ultrasound. Laboratory tests are charged according to the price list. Prescriptions SEK 500 each, excluding subsidy. SEK 200 extra for a copy of the medical record from the visit",
          "لفحص نسائي شامل الموجات فوق الصوتية. تُضاف الفحوصات المخبرية وفق قائمة الأسعار. الوصفة الطبية 500 كرونا، دون دعم. تُضاف 200 كرونا لنسخة من ملاحظات السجل الطبي للزيارة",
        ),
      },
      {
        tjanst: t("Cellprov (HPV + cytologi)", "Smear test (HPV + cytology)", "مسحة الخلايا (فيروس الورم الحليمي + الخلايا)"),
        pris: kr("1 800", "1,800", "1 800"),
        not: t("Exklusive läkarbesök", "Excluding doctor's visit", "لا تشمل زيارة الطبيبة"),
      },
      {
        tjanst: t("HPV-analys", "HPV analysis", "تحليل فيروس الورم الحليمي HPV"),
        pris: kr("900", "900", "900"),
        not: t("Exklusive läkarbesök", "Excluding doctor's visit", "لا يشمل زيارة الطبيبة"),
      },
      {
        tjanst: t("Utredning/provtagning av postmenopausal blödning", "Investigation/sampling of postmenopausal bleeding", "فحص وأخذ عينات لنزيف ما بعد سن اليأس"),
        pris: t("Från 3 000 kr", "From SEK 3,000", "ابتداءً من 3 000 كرونا"),
        not: t("Exklusive läkarkostnad", "Excluding doctor's fee", "لا يشمل أتعاب الطبيبة"),
      },
      { tjanst: t("Uttag av P-stav inklusive bedövning", "Contraceptive implant removal including anaesthesia", "إزالة غرسة منع الحمل شاملة التخدير"), pris: kr("1 800", "1,800", "1 800") },
      { tjanst: t("Insättning av P-stav inklusive bedövning", "Contraceptive implant insertion including anaesthesia", "تركيب غرسة منع الحمل شاملاً التخدير"), pris: kr("1 800", "1,800", "1 800") },
      { tjanst: t("3D/4D-ultraljud", "3D/4D ultrasound", "موجات فوق صوتية ثلاثية/رباعية الأبعاد"), pris: kr("2 500", "2,500", "2 500") },
    ],
  },
  {
    rubrik: t("Psykiatri", "Psychiatry", "الطب النفسي"),
    slug: "psykiatri",
    rader: [
      {
        tjanst: t("Psykiatrisk konsultation – fysiskt besök (60 min)", "Psychiatric consultation – in person (60 min)", "استشارة نفسية – في العيادة (60 دقيقة)"),
        pris: kr("2 000", "2,000", "2 000"),
        not: t(
          "Inklusive PMDS, utmattningssyndrom och postpartum depression",
          "Including PMDD, burnout and postpartum depression",
          "تشمل اضطراب ما قبل الطمث الانزعاجي والإرهاق واكتئاب ما بعد الولادة",
        ),
      },
      { tjanst: t("Psykiatrisk konsultation – videobesök (45 min)", "Psychiatric consultation – video (45 min)", "استشارة نفسية – فيديو (45 دقيقة)"), pris: kr("1 500", "1,500", "1 500") },
      { tjanst: t("Psykiatrisk telefonkonsultation (20 min)", "Psychiatric phone consultation (20 min)", "استشارة نفسية هاتفية (20 دقيقة)"), pris: kr("1 000", "1,000", "1 000") },
    ],
  },
  {
    rubrik: t("Kirurgiska ingrepp", "Surgical procedures", "العمليات الجراحية"),
    slug: "kirurgi",
    rader: [
      { tjanst: t("Hysteroskopi diagnostisk", "Diagnostic hysteroscopy", "تنظير الرحم التشخيصي"), pris: kr("18 000", "18,000", "18 000") },
      { tjanst: t("Hysteroskopi med biopsi/polypborttagning", "Hysteroscopy with biopsy/polyp removal", "تنظير الرحم مع خزعة/إزالة سليلة"), pris: kr("25 000", "25,000", "25 000") },
    ],
  },
  {
    rubrik: t("Övriga tjänster", "Other services", "خدمات أخرى"),
    slug: "ovrigt",
    rader: [
      { tjanst: t("Kopia av journalanteckning i samband med besöket", "Copy of the medical record from the visit", "نسخة من ملاحظات السجل الطبي للزيارة"), pris: kr("200", "200", "200") },
      {
        tjanst: t("Utskick av kopia på labbprover/journalkopior utanför besökstiden", "Copies of lab results/medical records sent outside visit hours", "إرسال نسخ نتائج المختبر/السجل الطبي خارج وقت الزيارة"),
        pris: kr("300", "300", "300"),
      },
      { tjanst: t("Enstaka blodprover", "Individual blood tests", "فحوصات دم مفردة"), pris: t("Från 900 kr", "From SEK 900", "ابتداءً من 900 كرونا") },
      { tjanst: t("Läkarintyg", "Medical certificate", "شهادة طبية"), pris: t("Från 1 000 kr", "From SEK 1,000", "ابتداءً من 1 000 كرونا") },
      {
        tjanst: t(
          "Endometrial microbiome test vid RIF eller upprepade missfall",
          "Endometrial microbiome test for RIF or recurrent miscarriage",
          "فحص ميكروبيوم بطانة الرحم عند فشل الانغراس المتكرر أو الإجهاض المتكرر",
        ),
        pris: kr("8 600", "8,600", "8 600"),
      },
    ],
  },
];

export const prisIngress = t(
  `Nedan hittar du våra priser för privat vård. Vi erbjuder även landstingsfinansierad vård, där patientavgift tas ut enligt Västra Götalandsregionens gällande regiontaxa.`,
  `Below you find our prices for private care. We also offer publicly funded care, where a patient fee is charged according to the current tariff of Region Västra Götaland.`,
  `تجدين أدناه أسعار الرعاية الخاصة لدينا. نقدم أيضاً رعاية ممولة من القطاع العام تُحتسب فيها رسوم المريض وفق التعرفة السارية في منطقة فسترا يوتالاند.`,
);

export const prisNoter = [
  t("Vi tar endast emot betalning via kort eller Swish.",
    "We only accept payment by card or Swish.",
    "نقبل الدفع بالبطاقة أو تطبيق Swish فقط."),
  t("Ingen remiss eller egenremiss krävs för privat vård.",
    "No referral or self-referral is needed for private care.",
    "لا حاجة إلى إحالة للرعاية الخاصة."),
  t("Avboka senast 24 timmar innan planerad tid. Vid sen avbokning eller uteblivet besök debiteras hela besökskostnaden.",
    "Cancel no later than 24 hours before the scheduled time. Late cancellations and missed visits are charged the full visit fee.",
    "ألغي الموعد قبل 24 ساعة على الأقل. عند الإلغاء المتأخر أو عدم الحضور تُحتسب كامل تكلفة الزيارة."),
];
