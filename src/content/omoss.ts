/**
 * Om oss — hämtat ordagrant från https://gynrama.se/om-oss/ 2026-07-17.
 *
 * Porträtten är GynRaMas egna publicerade foton på sin egen personal.
 * Kopplingen bild→person är verifierad: varje bild ligger exakt 51 px under
 * sin rubrik på källsidan (samma offset för alla sju), och filnamnet
 * mats-brannstrom.jpg landar precis där mönstret förutsäger.
 *
 * Sätt ALDRIG ett annat foto under ett av de här namnen — det är verkliga,
 * identifierbara personer.
 *
 * Texten följde källan ordagrant fram till 2026-08-30, då kunden begärde
 * språkrättningar och innehållsändringar — se noten längst ned.
 */

export type Person = {
  slug: string;
  namn: string;
  titel: string;
  bild: string;
  bio: string[];
  meriter?: string[];
  not?: string;
};

import { t } from "@/i18n";

const UPLOADS = "https://gynrama.se/wp-content/uploads";

export const introRubrik = t("Om oss", "About us", "من نحن");

export const intro = [
  t(
    `GynRaMa är en privat gynekologklinik i Göteborg, som startade hösten 2022. Grundare och doktorer i verksamheten är överläkare/docent Randa Akouri och överläkare/professor Mats Brännström. Våra doktorer har mycket lång erfarenhet av obstetrik, gynekologi och reproduktionsmedicin, både avseende klinisk handläggning och forskning.`,
    `GynRaMa is a private gynaecology clinic in Gothenburg, opened in the autumn of 2022. Its founders and physicians are senior consultant/associate professor Randa Akouri and senior consultant/professor Mats Brännström. Our doctors have very long experience of obstetrics, gynaecology and reproductive medicine, in both clinical practice and research.`,
    `GynRaMa عيادة نسائية خاصة في يوتيبوري افتُتحت خريف 2022. مؤسساها وطبيباها هما الاستشارية والأستاذة المشاركة رندة عكوري والاستشاري والبروفيسور ماتس برينستروم. يتمتع طبيبانا بخبرة طويلة جداً في التوليد وأمراض النساء وطب الإنجاب، في الممارسة السريرية والبحث العلمي على حد سواء.`,
  ),
  t(
    `Vi har mycket bred kompetens och baserar vår diagnostik samt behandling på nationella riktlinjer och på senaste forskningsresultat.`,
    `We have very broad expertise and base our diagnostics and treatment on national guidelines and the latest research.`,
    `نمتلك كفاءة واسعة جداً ونبني تشخيصنا وعلاجنا على الإرشادات الوطنية وأحدث نتائج الأبحاث.`,
  ),
];

export const praktiskt = [
  {
    rubrik: t("Mottagningen", "The clinic", "العيادة"),
    text: t(
      `GynRaMa är en gynekologimottagning i Göteborg som har öppet vardagar samt kvälls- och helgöppet. Vår utrustning är modern och lokalerna är nyupprustade.`,
      `GynRaMa is a gynaecology clinic in Gothenburg, open on weekdays as well as evenings and weekends. Our equipment is modern and the premises newly renovated.`,
      `GynRaMa عيادة نسائية في يوتيبوري تفتح أيام الأسبوع وكذلك مساءً وفي عطلات نهاية الأسبوع. معداتنا حديثة ومقرنا مجدد بالكامل.`,
    ),
  },
  {
    rubrik: t("Hitta hit", "Getting here", "كيف تصلين إلينا"),
    text: t(
      `Betalparkering finns i direkt anslutning till kliniken. Vid transport med kommunala färdmedel så åker du enklast buss till hållplatsen Vagnhallen Gårda eller spårvagn till Svingeln, varifrån det är några minuters promenad till mottagningen.`,
      `Paid parking is available right next to the clinic. By public transport, the easiest way is the bus to Vagnhallen Gårda or the tram to Svingeln, from which the clinic is a few minutes' walk.`,
      `تتوفر مواقف سيارات مدفوعة ملاصقة للعيادة. بالمواصلات العامة، أسهل طريق هو الحافلة إلى محطة Vagnhallen Gårda أو الترام إلى Svingeln، ومنهما بضع دقائق مشياً إلى العيادة.`,
    ),
  },
  {
    rubrik: t("Boka besök", "Booking a visit", "حجز زيارة"),
    text: t(
      `Du kan boka besök hos oss via bokningssystemet på hemsidan för privat vård. Du har även möjlighet att boka landstingsfinansierat besök via vår telefonrådgivning som är öppen Mån–Fre kl. 8:30–17:00. Du behöver ingen remiss eller egenremiss för att komma på besök.`,
      `You can book a private care visit through the booking system on our website. You can also book a publicly funded visit through our phone line, open Mon–Fri 8:30–17:00. No referral or self-referral is needed to visit us.`,
      `يمكنك حجز زيارة رعاية خاصة عبر نظام الحجز في موقعنا. كما يمكنك حجز زيارة ممولة من القطاع العام عبر خطنا الهاتفي المفتوح من الإثنين إلى الجمعة 8:30–17:00. لا حاجة إلى إحالة لزيارتنا.`,
    ),
  },
  {
    rubrik: t("Vad vi tar emot", "What we see patients for", "ما نستقبله من حالات"),
    text: t(
      `För privat vård tar vi emot besök för alla möjliga gynekologiska, obstetriska, andrologiska och infertilitetsbesvär inför vård i Sverige eller i utlandet. Vi utför även 3D/4D ultraljud samt mindre kirurgiska ingrepp.`,
      `For private care we see patients for all kinds of gynaecological, obstetric, andrological and infertility concerns, ahead of care in Sweden or abroad. We also perform 3D/4D ultrasound and minor surgical procedures.`,
      `في الرعاية الخاصة نستقبل جميع الحالات النسائية والتوليدية وحالات طب الذكورة والعقم، تمهيداً للعلاج في السويد أو خارجها. كما نجري تصويراً ثلاثي/رباعي الأبعاد وعمليات جراحية صغيرة.`,
    ),
  },
];

/** Från rubriken "Världskända doktorer" på källsidan. */
export const varldskanda = {
  rubrik: t("Världskända doktorer", "World-renowned doctors", "أطباء مشهورون عالمياً"),
  text: t(
    `Docent Randa Akouri & Professor Mats Brännström, som jobbar på GynRaMa, är världskända doktorer som ligger bakom livmodertransplantation som ledde till första barnet som föddes år 2014. Kvinnor som saknar livmoder av olika orsaker har nu fått möjlighet att få egna biologiska barn tack vare dem och deras framgångar. De har rest världen runt för att sprida sin banbrytande forskning som idag har lett till att över 70 barn är födda i världen.`,
    `Associate professor Randa Akouri & professor Mats Brännström, who work at GynRaMa, are world-renowned doctors behind the uterus transplantation that led to the first baby being born in 2014. Women who lack a uterus, for whatever reason, can now have their own biological children thanks to them and their achievements. They have travelled the world to share their pioneering research, which has now led to more than 70 babies being born worldwide.`,
    `الدكتورة رندة عكوري والبروفيسور ماتس برينستروم، العاملان في GynRaMa، طبيبان مشهوران عالمياً وهما وراء عملية زرع الرحم التي أدت إلى ولادة أول طفل عام 2014. النساء اللواتي لا رحم لهن لأي سبب أصبح بإمكانهن اليوم إنجاب أطفال بيولوجيين بفضلهما وبفضل إنجازاتهما. جابا العالم لنشر أبحاثهما الرائدة التي أدت حتى اليوم إلى ولادة أكثر من 70 طفلاً حول العالم.`,
  ),
  avslut: t(
    `Nu finns GynRaMa efter många års patientefterfrågan.`,
    `GynRaMa now exists after many years of patient demand.`,
    `واليوم افتُتحت GynRaMa بعد سنوات من طلب المريضات.`,
  ),
  statistik: [
    {
      etikett: t("Världens första", "World\u2019s first", "الأول في العالم"),
      varde: "2014",
      beskrivning: t("barn efter livmodertransplantation", "baby born after uterus transplantation", "طفل وُلد بعد زرع رحم"),
    },
    {
      etikett: t("Globalt hittills", "Worldwide so far", "عالمياً حتى الآن"),
      varde: "70+",
      beskrivning: t("barn födda tack vare forskningen", "babies born thanks to the research", "طفلاً وُلدوا بفضل هذه الأبحاث"),
    },
  ],
};

/**
 * Radioinslaget som gamla hemsidan länkade under "Om oss". Ljudet ligger hos
 * Sveriges Radio och är deras upphovsrättsskyddade material — vi länkar/bäddar
 * in, vi kopierar ALDRIG ljudfilen till sajten.
 */
export const sverigesRadio = {
  etikett: "Sveriges Radio",
  rubrik: t("Livmodertransplantation", "Uterus transplantation", "زرع الرحم"),
  beskrivning: t(
    "Hör inslaget om forskningen bakom livmodertransplantationerna vid Sahlgrenska, med intervjuer med forskarteamet.",
    "Listen to the radio segment about the research behind the uterus transplantations at Sahlgrenska, with interviews with the research team. In Swedish.",
    "استمعي إلى الحلقة الإذاعية عن الأبحاث وراء عمليات زرع الرحم في مستشفى سالغرينسكا، مع مقابلات مع فريق البحث. باللغة السويدية.",
  ),
  datum: t("30 april 2012", "30 April 2012", "30 أبريل 2012"),
  langd: "9:31",
  url: "https://www.sverigesradio.se/artikel/5087318",
};

export const lakare: Person[] = [
  {
    slug: "randa-akouri",
    namn: "Randa Akouri",
    titel: t(
      "Specialistläkare i kvinnosjukdomar och docent i ämnesområdet Obstetrik och Gynekologi",
      "Specialist in gynaecology and associate professor of obstetrics and gynaecology",
      "اختصاصية في أمراض النساء وأستاذة مشاركة في التوليد وأمراض النساء",
    ),
    bild: `${UPLOADS}/2026/04/IMG_0509-941x1024.jpeg`,
    bio: [
      t(
        `Randa Akouri har en lång karriär inom forskning och klinik inom området kvinnosjukdomar, fr.a. reproduktionsfysiologi och reproduktionsmedicin. Hon har stor erfarenhet av diagnostik och behandling av benigna gynekologiska besvär och sjukdomar samt infertilitet.`,
        `Randa Akouri has a long career in research and clinical work within gynaecology, above all reproductive physiology and reproductive medicine. She has extensive experience of diagnosing and treating benign gynaecological conditions and infertility.`,
        `للدكتورة رندة عكوري مسيرة طويلة في البحث والعمل السريري في مجال أمراض النساء، وخصوصاً فسيولوجيا الإنجاب وطب الإنجاب. تتمتع بخبرة واسعة في تشخيص وعلاج الحالات النسائية الحميدة والعقم.`,
      ),
    ],
    meriter: [
      t(
        `År 2001 var Randa Akouri den första i världen som visade lyckade livmodertransplantationer i en djurmodell. Detta var forskningsgrunden till att första barnet i världen, efter lyckad livmodertransplantation, föddes 2014 senare i Göteborg.`,
        `In 2001, Randa Akouri was the first in the world to demonstrate successful uterus transplantations in an animal model. This laid the research foundation for the world's first baby born after a successful uterus transplantation, in Gothenburg in 2014.`,
        `في عام 2001 كانت رندة عكوري أول من أثبت في العالم نجاح زرع الرحم في نموذج حيواني، وكان ذلك الأساس البحثي لولادة أول طفل في العالم بعد زرع رحم ناجح في يوتيبوري عام 2014.`,
      ),
      t(
        `Docent Akouri har varit författare och medförfattare till ett flertal vetenskapliga forskningsartiklar och översiktsartiklar inom uterustransplantation och reproduktionsmedicin, samt skrivit bokkapitel.`,
        `Dr Akouri has authored and co-authored numerous scientific research papers and review articles on uterus transplantation and reproductive medicine, as well as book chapters.`,
        `ألّفت الدكتورة عكوري وشاركت في تأليف العديد من الأوراق البحثية والمقالات المرجعية في زرع الرحم وطب الإنجاب، إضافة إلى فصول في كتب علمية.`,
      ),
      t(
        `Docent Akouri har lett arbete bakom introduktion av livmodertransplantation utomlands, vilket bl.a. gav den första lyckade livmodertransplantationen i MENAT (Mellanöstern, Turkiet och Nordafrika), där första barnet föddes år 2019.`,
        `Dr Akouri has led the work of introducing uterus transplantation abroad, which among other things resulted in the first successful uterus transplantation in the MENAT region (Middle East, Turkey and North Africa), where the first baby was born in 2019.`,
        `قادت الدكتورة عكوري إدخال زرع الرحم إلى الخارج، ما أثمر عن أول عملية زرع رحم ناجحة في منطقة الشرق الأوسط وتركيا وشمال أفريقيا، حيث وُلد أول طفل عام 2019.`,
      ),
      t(
        `Docent Akouri har varit föredragshållare inom gynekologi och reproduktionsmedicin vid ett flertal tillfällen nationellt och internationellt.`,
        `Dr Akouri has lectured on gynaecology and reproductive medicine on numerous occasions, nationally and internationally.`,
        `حاضرت الدكتورة عكوري في أمراض النساء وطب الإنجاب في مناسبات عديدة داخل السويد وخارجها.`,
      ),
      t(
        `Docent Akouri har tilldelats Göteborgs Stads förtjänsttecken 2025.`,
        `Dr Akouri was awarded the City of Gothenburg's Badge of Merit in 2025.`,
        `مُنحت الدكتورة عكوري وسام الاستحقاق من مدينة يوتيبوري عام 2025.`,
      ),
    ],
  },
  {
    slug: "mats-brannstrom",
    namn: "Mats Brännström",
    titel: t(
      "Specialistläkare i kvinnosjukdomar och professor i ämnesområdet Obstetrik och Gynekologi",
      "Specialist in gynaecology and professor of obstetrics and gynaecology",
      "اختصاصي في أمراض النساء وبروفيسور في التوليد وأمراض النساء",
    ),
    bild: `${UPLOADS}/2022/10/mats-brannstrom.jpg`,
    bio: [
      t(
        `Professor Brännström är en av världens mest kända gynekologer efter en lång karriär inom forskning och klinik inom området kvinnosjukdomar. Han har mer än 30 års klinisk erfarenhet inom området gynekologisk cancerkirurgi och mer än 10 års erfarenhet av reproduktionsmedicin och IVF. Professor Brännström har också en mycket lång erfarenhet av öppenvårdsgynekologi avseende benigna gynekologiska besvär och sjukdomar.`,
        `Professor Brännström is one of the world's best-known gynaecologists after a long career in research and clinical work within gynaecology. He has more than 30 years of clinical experience in gynaecological cancer surgery and more than 10 years in reproductive medicine and IVF. He also has very long experience of outpatient gynaecology for benign gynaecological conditions.`,
        `البروفيسور برينستروم من أشهر أطباء النساء في العالم بعد مسيرة طويلة في البحث والعمل السريري في أمراض النساء. لديه أكثر من 30 عاماً من الخبرة السريرية في جراحة أورام النساء وأكثر من 10 أعوام في طب الإنجاب وأطفال الأنابيب، إضافة إلى خبرة طويلة جداً في أمراض النساء بالعيادات الخارجية للحالات الحميدة.`,
      ),
    ],
    meriter: [
      t(
        `Författare till över 400 vetenskapliga forskningsartiklar inom gynekologi och reproduktionsmedicin.`,
        `Author of more than 400 scientific research papers in gynaecology and reproductive medicine.`,
        `مؤلف أكثر من 400 ورقة بحثية علمية في أمراض النساء وطب الإنجاب.`,
      ),
      t(
        `Författare till läroböcker inom gynekologi, obstetrik och reproduktionsmedicin.`,
        `Author of textbooks in gynaecology, obstetrics and reproductive medicine.`,
        `مؤلف كتب دراسية في أمراض النساء والتوليد وطب الإنجاب.`,
      ),
      t(
        `Professor i obstetrik och gynekologi sedan 2001.`,
        `Professor of obstetrics and gynaecology since 2001.`,
        `بروفيسور في التوليد وأمراض النساء منذ 2001.`,
      ),
      t(
        `Forskningsledare och kirurg bakom det svenska livmodertransplantationsprojektet, med världens första livmodertransplantationsbarn, fött 2014.`,
        `Research leader and surgeon behind the Swedish uterus transplantation project, with the world's first baby born after uterus transplantation, in 2014.`,
        `قائد الأبحاث والجرّاح وراء المشروع السويدي لزرع الرحم، الذي شهد ولادة أول طفل في العالم بعد زرع رحم عام 2014.`,
      ),
      t(
        `Tidigare gästprofessor vid Harvard Medical School, USA.`,
        `Former visiting professor at Harvard Medical School, USA.`,
        `أستاذ زائر سابق في كلية الطب بجامعة هارفارد، الولايات المتحدة.`,
      ),
      t(
        `Tidigare gästprofessor vid Mayo Clinic, USA.`,
        `Former visiting professor at the Mayo Clinic, USA.`,
        `أستاذ زائر سابق في مايو كلينك، الولايات المتحدة.`,
      ),
      t(
        `Internationellt mycket anlitad föreläsare i obstetrik och gynekologi.`,
        `A frequently engaged international lecturer in obstetrics and gynaecology.`,
        `محاضر دولي مطلوب بكثرة في التوليد وأمراض النساء.`,
      ),
      t(
        `Mottagare av ett flertal större forskningspris, senast från Franska Vetenskapsakademin.`,
        `Recipient of several major research prizes, most recently from the French Academy of Sciences.`,
        `حائز على عدة جوائز بحثية كبرى، آخرها من الأكاديمية الفرنسية للعلوم.`,
      ),
      t(
        `Past-president i International Society of Uterus Transplantation (ISUTx).`,
        `Past president of the International Society of Uterus Transplantation (ISUTx).`,
        `رئيس سابق للجمعية الدولية لزرع الرحم (ISUTx).`,
      ),
      t(
        `Ordförande i Swedish Society of Reproductive Medicine (SSRM).`,
        `Chair of the Swedish Society of Reproductive Medicine (SSRM).`,
        `رئيس الجمعية السويدية لطب الإنجاب (SSRM).`,
      ),
    ],
  },
  {
    slug: "sofia-ganidou",
    namn: "Sofia Ganidou",
    titel: t(
      "Överläkare i gynekologi och obstetrik",
      "Senior consultant in gynaecology and obstetrics",
      "استشارية في أمراض النساء والتوليد",
    ),
    bild: `${UPLOADS}/2026/04/IMG_0507-1024x992.jpeg`,
    bio: [
      t(
        `Sofia Ganidou är överläkare i gynekologi och obstetrik med mångårig erfarenhet från både öppenvård och slutenvård.`,
        `Sofia Ganidou is a senior consultant in gynaecology and obstetrics with many years of experience from both outpatient and inpatient care.`,
        `صوفيا غانيدو استشارية في أمراض النساء والتوليد بخبرة سنوات طويلة في العيادات الخارجية والأقسام الداخلية.`,
      ),
      t(
        `Hon har en särskild kompetens inom utredning och behandling av cellförändringar i livmoderhalsen och är certifierad handledare i Sverige för utbildning av gynekologer inom detta område. Hon har även lång erfarenhet av att behandla klimakteriebesvär, blödningsrubbningar samt andra gynekologiska tillstånd. Sofia är IOTA-certifierad inom gynekologiskt ultraljud, vilket möjliggör noggrann diagnostik och individualiserade behandlingsplaner.`,
        `She has particular expertise in the investigation and treatment of cervical cell changes and is a certified supervisor in Sweden for training gynaecologists in this area. She also has long experience of treating menopause symptoms, bleeding disorders and other gynaecological conditions. Sofia is IOTA-certified in gynaecological ultrasound, enabling precise diagnostics and individualised treatment plans.`,
        `لديها كفاءة خاصة في فحص وعلاج تغيّرات خلايا عنق الرحم، وهي مشرفة معتمدة في السويد لتدريب أطباء النساء في هذا المجال. كما تتمتع بخبرة طويلة في علاج أعراض سن اليأس واضطرابات النزيف وحالات نسائية أخرى. صوفيا حاصلة على اعتماد IOTA في الموجات فوق الصوتية النسائية، ما يتيح تشخيصاً دقيقاً وخطط علاج فردية.`,
      ),
    ],
    not: t(
      `För närvarande arbetar hon inom den offentliga sjukvården och tar därför endast emot privatbetalande patienter.`,
      `She currently works in public healthcare and therefore only sees privately paying patients here.`,
      `تعمل حالياً في القطاع الصحي العام، لذا تستقبل هنا المريضات الخاصات فقط.`,
    ),
  },
  {
    slug: "asha-kalra",
    namn: "Asha Kalra",
    titel: t(
      "Överläkare i gynekologi",
      "Senior consultant in gynaecology",
      "استشارية في أمراض النساء",
    ),
    bild: `${UPLOADS}/2026/04/IMG_0601-838x1024.webp`,
    bio: [
      t(
        `Asha Kalra är överläkare i gynekologi med över 30 års erfarenhet inom både obstetrik och gynekologi. Hon tog sin läkarexamen vid Köpenhamns universitet och genomförde sin specialistutbildning i Norrbotten.`,
        `Asha Kalra is a senior consultant in gynaecology with over 30 years of experience in both obstetrics and gynaecology. She received her medical degree from the University of Copenhagen and completed her specialist training in Norrbotten.`,
        `آشا كالرا استشارية في أمراض النساء بخبرة تزيد على 30 عاماً في التوليد وأمراض النساء. نالت شهادتها الطبية من جامعة كوبنهاغن وأكملت تخصصها في نوربوتن.`,
      ),
      t(
        `Efter sin specialistutbildning arbetade hon under många år inom slutenvården, där hon handlade både gynekologiska och obstetriska patienter, och var under en period ansvarig för specialistmödravården vid sin klinik.`,
        `After her specialist training she worked for many years in inpatient care, treating both gynaecological and obstetric patients, and was for a period in charge of specialist maternity care at her clinic.`,
        `بعد تخصصها عملت لسنوات طويلة في الأقسام الداخلية معالجةً حالات نسائية وتوليدية، وكانت لفترة مسؤولة عن رعاية الأمومة التخصصية في عيادتها.`,
      ),
      t(
        `Sedan 2001 är Asha Kalra verksam inom öppenvården i Göteborg, där hon utreder och behandlar ett brett spektrum av gynekologiska tillstånd, såsom klimakteriebesvär, inkontinens, infertilitet samt preventivmedelsrådgivning.`,
        `Since 2001 Asha Kalra has worked in outpatient care in Gothenburg, investigating and treating a wide range of gynaecological conditions such as menopause symptoms, incontinence and infertility, as well as contraceptive counselling.`,
        `منذ 2001 تعمل آشا كالرا في العيادات الخارجية في يوتيبوري، حيث تفحص وتعالج طيفاً واسعاً من الحالات النسائية مثل أعراض سن اليأس وسلس البول والعقم، إضافة إلى استشارات منع الحمل.`,
      ),
      t(
        `På senare år har hon haft ett särskilt fokus på utredning och behandling av cellförändringar i livmoderhalsen och är dysplasiansvarig inom sitt verksamhetsområde.`,
        `In recent years she has focused particularly on the investigation and treatment of cervical cell changes, and is the dysplasia lead within her field of practice.`,
        `في السنوات الأخيرة ركزت خصوصاً على فحص وعلاج تغيّرات خلايا عنق الرحم، وهي المسؤولة عن حالات خلل التنسج في نطاق عملها.`,
      ),
    ],
  },
  {
    slug: "mikael-helou",
    namn: "Mikael Helou",
    titel: t(
      "Överläkare i psykiatri",
      "Senior consultant in psychiatry",
      "استشاري في الطب النفسي",
    ),
    bild: `${UPLOADS}/2026/04/IMG_0508-836x1024.jpeg`,
    bio: [
      t(
        `Mikael Helou är överläkare i psykiatri med lång och omfattande erfarenhet av psykiatrisk specialistvård. Han har arbetat i både psykiatrisk öppenvård och slutenvård och har därigenom fördjupat sin kompetens i att utreda, diagnostisera och behandla ett brett spektrum av psykiska tillstånd – från akuta och komplexa symtombilder till mer långvariga och återkommande besvär.`,
        `Mikael Helou is a senior consultant in psychiatry with long and extensive experience of specialist psychiatric care. He has worked in both outpatient and inpatient psychiatry, deepening his expertise in investigating, diagnosing and treating a wide range of mental health conditions – from acute and complex presentations to more long-term and recurring problems.`,
        `ميكائيل حلو استشاري في الطب النفسي بخبرة طويلة وواسعة في الرعاية النفسية التخصصية. عمل في العيادات النفسية الخارجية والأقسام الداخلية، فعمّق كفاءته في فحص وتشخيص وعلاج طيف واسع من الحالات النفسية – من الأعراض الحادة والمعقدة إلى المشاكل المزمنة والمتكررة.`,
      ),
      t(
        `Genom sin kliniska bredd har Mikael utvecklat en stark förmåga att möta patienter i olika faser av sjukdomsförloppet. Hans erfarenhet sträcker sig över flera stora psykiatriska kliniker i landet, vilket har gett honom en gedigen förståelse för hur psykiatrisk vård bedrivs i olika regioner och miljöer.`,
        `Through his clinical breadth, Mikael has developed a strong ability to meet patients at different stages of illness. His experience spans several large psychiatric clinics across the country, giving him a solid understanding of how psychiatric care is delivered in different regions and settings.`,
        `بفضل اتساع خبرته السريرية طوّر ميكائيل قدرة قوية على مواكبة المرضى في مختلف مراحل المرض. تمتد خبرته عبر عدة عيادات نفسية كبيرة في السويد، ما أكسبه فهماً متيناً لكيفية تقديم الرعاية النفسية في مناطق وبيئات مختلفة.`,
      ),
      t(
        `Mikael arbetar utifrån evidensbaserade metoder och lägger stor vikt vid ett personcentrerat förhållningssätt. Han strävar alltid efter att skapa trygghet, struktur och delaktighet i behandlingen, och han är mån om att integrera medicinsk expertis med respekt för patientens livssituation, mål och värderingar.`,
        `Mikael works with evidence-based methods and places great emphasis on a person-centred approach. He always strives to create security, structure and involvement in treatment, and is careful to combine medical expertise with respect for the patient's life situation, goals and values.`,
        `يعمل ميكائيل بأساليب قائمة على الأدلة ويولي أهمية كبيرة للنهج المتمحور حول الشخص. يسعى دائماً إلى توفير الطمأنينة والانتظام والمشاركة في العلاج، ويحرص على الجمع بين الخبرة الطبية واحترام ظروف المريض وأهدافه وقيمه.`,
      ),
    ],
    not: t(
      `För närvarande arbetar han inom den offentliga sjukvården och tar därför endast emot privatbetalande patienter.`,
      `He currently works in public healthcare and therefore only sees privately paying patients here.`,
      `يعمل حالياً في القطاع الصحي العام، لذا يستقبل هنا المرضى الخاصين فقط.`,
    ),
  },
];

export const personal: Person[] = [
  {
    slug: "therese-larsson",
    namn: "Therese Larsson",
    titel: t("Undersköterska", "Assistant nurse", "مساعدة تمريض"),
    bild: `${UPLOADS}/2026/04/IMG_0505-864x1024.jpeg`,
    bio: [
      t(
        `Therese Larsson är undersköterska med över 30 års erfarenhet inom obstetrik, gynekologi samt förlossningssjukvård. Hon har flera ansvarsområden på kliniken och ansvarar bland annat för patientomhändertagande, provtagning, assistering vid undersökningar och ingrepp samt att säkerställa att våra patientflöden fungerar smidigt och tryggt.`,
        `Therese Larsson is an assistant nurse with over 30 years of experience in obstetrics, gynaecology and delivery care. She has several areas of responsibility at the clinic, including patient care, sampling, assisting during examinations and procedures, and making sure our patient flows run smoothly and safely.`,
        `تيريز لارشون مساعدة تمريض بخبرة تزيد على 30 عاماً في التوليد وأمراض النساء ورعاية الولادة. لديها عدة مسؤوليات في العيادة، منها رعاية المريضات وسحب العينات والمساعدة في الفحوصات والإجراءات، وضمان سير رحلة المريضة بسلاسة وأمان.`,
      ),
    ],
  },
];

export const teamAvslutning = t(
  `Vi som arbetar på GynRaMa är läkare, psykiatriker, sjuksköterskor, undersköterskor och receptionister.`,
  `Those of us working at GynRaMa are doctors, psychiatrists, nurses, assistant nurses and receptionists.`,
  `نحن العاملين في GynRaMa أطباء وأطباء نفسيون وممرضات ومساعدات تمريض وموظفات استقبال.`,
);

/**
 * Källans stavfel var länge medvetet bevarade ("återge ordagrant"). Kunden
 * gav 2026-08-30 klartecken att rätta språkfel — följande är RÄTTADE ovan
 * och texten är därmed inte längre ordagrann mot källan:
 *  - "forskning ock klinik" -> "och" (Mats bio)
 *  - "för sprida" -> "för att sprida" (Världskända)
 *  - "livmodertransplantation i MENAT" -> "livmodertransplantationen" (merit)
 *  - "Nord Afrika" -> "Nordafrika" (merit)
 * Samma besked ändrade "över 45 barn"/"45+" till 70, bytte ordningen till
 * Randa & Mats i Världskända-texten, och tog bort Louise Haag ur personal.
 */
export const rattadeStavfel = true;
