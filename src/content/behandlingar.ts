/**
 * Behandlingar — hämtat ordagrant från https://gynrama.se/behandlingar/ 2026-07-17.
 *
 * Texten är medicinsk information och är INTE omskriven, förkortad eller
 * parafraserad. Ändra bara om GynRaMa själva ändrar sin källtext.
 *
 * Kundens ändringar 2026-08-30:
 *  - NIPT (foster-test) borttagen ur sortimentet.
 *  - IVF tillagd som egen behandling; texten är klinikens egen från
 *    gynrama.se/gynrama-ivf/ (samma källa som ivf.ts).
 *  - Kategorin Fertilitet visas som "Fertilitet & IVF".
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
  /** Valfri vidare-länk, renderas som knapp bredvid Boka tid. */
  mer?: { label: string; href: string };
};

import { t } from "@/i18n";

const bas = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/**
 * rubrik visas på sidan; slug bygger ankaret kat-<slug> och får INTE ändras —
 * startsidans områdeskort länkar till #kat-fertilitet m.fl.
 */
export const kategorier: { kategori: Kategori; rubrik: string; slug: string }[] = [
  { kategori: "Gynekologi", rubrik: t("Gynekologi", "Gynaecology", "أمراض النساء"), slug: "gynekologi" },
  { kategori: "Graviditet", rubrik: t("Graviditet", "Pregnancy", "الحمل"), slug: "graviditet" },
  { kategori: "Fertilitet", rubrik: t("Fertilitet & IVF", "Fertility & IVF", "الخصوبة وأطفال الأنابيب"), slug: "fertilitet" },
  { kategori: "Abort", rubrik: t("Abort", "Abortion", "الإجهاض"), slug: "abort" },
];

export const ingress = t(
  `Hos oss på GynRaMa erbjuder vi ett brett utbud av gynekologiska undersökningar och behandlingar med fokus på trygghet, kvalitet och individuellt bemötande. Oavsett om du söker för en rutinmässig kontroll eller specifika besvär, är vårt mål att ge dig professionell vård baserad på aktuell medicinsk kunskap.
Nedan hittar du våra vanligaste behandlingar och tjänster. Vid frågor om ytterligare behandlingar, kontakta oss gärna.`,
  `At GynRaMa we offer a wide range of gynaecological examinations and treatments, with a focus on safety, quality and individual care. Whether you come for a routine check-up or a specific concern, our goal is to give you professional care based on current medical knowledge.
Below you find our most common treatments and services. If you have questions about other treatments, please contact us.`,
  `نقدم في GynRaMa طيفاً واسعاً من الفحوصات والعلاجات النسائية مع تركيز على الأمان والجودة والرعاية الفردية. سواء أتيتِ لفحص دوري أو لشكوى محددة، هدفنا أن نقدم لك رعاية مهنية مبنية على أحدث المعارف الطبية.
تجدين أدناه أكثر علاجاتنا وخدماتنا شيوعاً. لأي سؤال عن علاجات أخرى، يسعدنا تواصلك معنا.`,
);

export const behandlingar: Behandling[] = [
  {
    slug: "gynekologisk-halsokontroll",
    namn: t("Gynekologisk hälsokontroll", "Gynaecological health check-up", "الفحص النسائي الدوري"),
    kategori: "Gynekologi",
    text: t(
      `Regelbundna gynekologiska hälsokontroller möjliggör tidig upptäckt av sjukdomar och därmed mer effektiv behandling. Vid kontrollen kan även gynekologiska cancersjukdomar upptäckas, såsom livmodercancer, äggstockscancer och livmoderhalscancer, samt infektionssjukdomar som exempelvis klamydia. En årlig eller tvåårig kontroll rekommenderas, beroende på individuella behov och eventuella riskfaktorer.
Vad ingår i en gynekologisk hälsokontroll?
1. Anamnes
Genomgång av aktuella besvär, tidigare sjukdomar, menstruation, graviditeter och ärftlighet. Eventuella förändringar i underliv, buk, vikt eller aptit under det senaste året är viktiga att informera om.
2. Gynekologisk undersökning
Inspektion av yttre genitalier, spekulumundersökning av vagina och livmodertapp samt palpation för att bedöma livmoder och äggstockar. Prover för STI och cellprov kan tas vid behov.
3. Ultraljud
Vaginalt ultraljud används för att undersöka livmoder, äggstockar, slemhinna och urinblåsa samt för att upptäcka eventuella cystor.
4. Laboratorieprover
Standardprover som blodvärde och infektionsmarkörer tas, med möjlighet till kompletterande tester vid behov.`,
      `Regular gynaecological check-ups allow diseases to be discovered early, and therefore treated more effectively. A check-up can also detect gynaecological cancers such as uterine, ovarian and cervical cancer, as well as infections such as chlamydia. A check-up every one or two years is recommended, depending on individual needs and any risk factors.
What does a gynaecological check-up include?
1. Medical history
A review of current concerns, previous illnesses, menstruation, pregnancies and heredity. Any changes in the genital area, abdomen, weight or appetite during the past year are important to mention.
2. Gynaecological examination
Inspection of the external genitals, a speculum examination of the vagina and cervix, and palpation to assess the uterus and ovaries. STI tests and a smear test can be taken if needed.
3. Ultrasound
Vaginal ultrasound is used to examine the uterus, ovaries, uterine lining and bladder, and to detect any cysts.
4. Laboratory tests
Standard tests such as blood count and infection markers are taken, with additional tests as needed.`,
      `الفحوصات النسائية الدورية تتيح اكتشاف الأمراض مبكراً وبالتالي علاجها بفاعلية أكبر. يمكن في الفحص أيضاً اكتشاف سرطانات نسائية مثل سرطان الرحم والمبيض وعنق الرحم، وكذلك أمراض معدية مثل الكلاميديا. يُنصح بفحص كل سنة أو سنتين حسب الحاجة الفردية وعوامل الخطر.
ماذا يشمل الفحص النسائي الدوري؟
1. التاريخ الطبي
مراجعة الشكاوى الحالية والأمراض السابقة والدورة الشهرية والحمل والوراثة. من المهم ذكر أي تغيّرات في المنطقة التناسلية أو البطن أو الوزن أو الشهية خلال العام الأخير.
2. الفحص النسائي
معاينة الأعضاء التناسلية الخارجية، فحص المهبل وعنق الرحم بالمنظار المهبلي، وجسّ لتقييم الرحم والمبيضين. يمكن أخذ عينات للأمراض المنقولة جنسياً ومسحة خلايا عند الحاجة.
3. الموجات فوق الصوتية
يُستخدم التصوير المهبلي لفحص الرحم والمبيضين وبطانة الرحم والمثانة وللكشف عن أي أكياس.
4. الفحوصات المخبرية
تُؤخذ فحوصات قياسية مثل تعداد الدم ومؤشرات الالتهاب، مع إمكانية فحوصات إضافية عند الحاجة.`,
    ),
  },
  {
    slug: "ultraljudsundersokning",
    namn: t("Ultraljudsundersökning", "Ultrasound examination", "فحص الموجات فوق الصوتية"),
    kategori: "Gynekologi",
    text: t(
      `Vid en gynekologisk ultraljudsundersökning förs en vaginal ultraljudsprobe försiktigt in för att ge tydliga bilder av livmoder, äggstockar, livmoderslemhinna och urinblåsa. Undersökningen upplevs vanligtvis som obesvärlig.
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
      `During a gynaecological ultrasound examination, a vaginal ultrasound probe is gently inserted to give clear images of the uterus, ovaries, uterine lining and bladder. The examination is usually not uncomfortable.
When is ultrasound used?
Common indications are:
• Ovarian cysts
• Irregular bleeding
• Early pregnancy check
• Unexplained abdominal pain
• Bladder emptying problems
• Fibroids
• Polyps
Ultrasound is also a central tool in fertility investigations.
The doctors at GynRaMa have long experience and deep expertise in gynaecological ultrasound, including research in the field.`,
      `في فحص الموجات فوق الصوتية النسائي يُدخل مسبار مهبلي بلطف لإعطاء صور واضحة للرحم والمبيضين وبطانة الرحم والمثانة. لا يسبب الفحص عادةً أي انزعاج يُذكر.
متى يُجرى الفحص؟
من دواعيه الشائعة:
• أكياس المبيض
• النزيف غير المنتظم
• فحص الحمل المبكر
• آلام البطن غير المفسرة
• مشاكل تفريغ المثانة
• الأورام الليفية
• السلائل (الزوائد اللحمية)
الموجات فوق الصوتية أداة أساسية أيضاً في فحوصات الخصوبة.
أطباء GynRaMa لديهم خبرة طويلة وكفاءة عميقة في الموجات فوق الصوتية النسائية، بما في ذلك البحث العلمي في المجال.`,
    ),
  },
  {
    slug: "cellforandringar",
    namn: t("Cellförändringar (dysplasi)", "Cell changes (dysplasia)", "التغيّرات الخلوية (خلل التنسج)"),
    kategori: "Gynekologi",
    text: t(
      `Cellförändringar på livmodertappen är oftast ett förstadium till livmoderhalscancer och orsakas vanligen av HPV, ett vanligt virus som sprids sexuellt. Infektionen ger sällan symtom, vilket gör regelbundna cellprov viktiga. Cellförändringar är inte cancer, men obehandlade kan de utvecklas vidare.
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
      `Cell changes on the cervix are usually a precursor to cervical cancer and are most often caused by HPV, a common sexually transmitted virus. The infection rarely causes symptoms, which is why regular smear tests are important. Cell changes are not cancer, but if untreated they can progress.
Grades of cell changes
• CIN I – mild dysplasia
• CIN II – moderate dysplasia
• CIN III – severe dysplasia
Risk of progression
• CIN III: about 15% risk of developing into cancer
• CIN I & CIN II: can progress to CIN III if untreated
Detection
Cell changes are detected through smear tests (cytology), sometimes combined with testing for high-risk HPV.
Further investigation and treatment
• CIN I: usually a follow-up smear test
• Suspected CIN II–III: colposcopy and possibly a biopsy
• Confirmed CIN II–III: usually treated with loop excision, where the affected area is removed under local anaesthesia
The doctors at GynRaMa have long experience of investigating and treating dysplasia, and a research background in the field.`,
      `التغيّرات الخلوية في عنق الرحم هي غالباً مرحلة سابقة لسرطان عنق الرحم وسببها عادةً فيروس الورم الحليمي HPV، وهو فيروس شائع ينتقل جنسياً. نادراً ما تسبب العدوى أعراضاً، لذا فإن مسحات الخلايا المنتظمة مهمة. التغيّرات الخلوية ليست سرطاناً، لكنها قد تتطور إن لم تُعالج.
درجات التغيّرات الخلوية
• CIN I – خلل تنسج خفيف
• CIN II – خلل تنسج متوسط
• CIN III – خلل تنسج شديد
خطر التطور
• CIN III: نحو 15% خطر التحول إلى سرطان
• CIN I وCIN II: قد تتطور إلى CIN III إن لم تُعالج
الاكتشاف
تُكتشف التغيّرات بمسحة الخلايا، أحياناً مع تحليل لفيروس HPV عالي الخطورة.
الفحص الإضافي والعلاج
• CIN I: غالباً مسحة متابعة
• اشتباه CIN II–III: تنظير عنق الرحم وربما خزعة
• CIN II–III مؤكد: يُعالج عادةً بالاستئصال الحلقي حيث تُزال المنطقة المتغيّرة تحت تخدير موضعي
أطباء GynRaMa لديهم خبرة طويلة في فحص وعلاج خلل التنسج وخلفية بحثية في المجال.`,
    ),
    // Randas kolposkopi-bild — endast här, som önskat
    bild: `${bas}/bilder/kolposkopi.webp`,
    bildAlt: t("Kolposkopiundersökning på GynRaMa", "Colposcopy examination at GynRaMa", "فحص تنظير عنق الرحم في GynRaMa"),
  },
  {
    slug: "myom",
    namn: t("Myom", "Fibroids", "الأورام الليفية"),
    kategori: "Gynekologi",
    text: t(
      `Myom är godartade muskelknutor i livmodern och kan förekomma på livmoderns yta, i muskelväggen eller in mot livmoderhålan. De kan vara allt från några millimeter till över 20 cm stora.
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
      `Fibroids are benign muscle nodules in the uterus and can occur on its surface, in the muscle wall or towards the uterine cavity. They range from a few millimetres to more than 20 cm.
Fibroids are common, seen in about 40% of women in their forties and up to 70% after menopause.
Symptoms
Small fibroids often cause no symptoms and are found on ultrasound. Larger fibroids, or fibroids pressing on other organs, can cause:
• Heavy periods
• Period and abdominal pain
• Urinary problems or leakage
• Pain during intercourse
• Infertility or increased risk of miscarriage
Treatment
• Smaller fibroids: Can be operated on if they cause problems
• Large fibroids or postmenopausal symptoms: Hysterectomy may be considered
• Bleeding and pain: Can partly be treated with medication
The doctors at GynRaMa have modern ultrasound equipment and many years of experience diagnosing and treating fibroids.`,
      `الأورام الليفية عقد عضلية حميدة في الرحم، وقد تظهر على سطحه أو في جداره العضلي أو باتجاه تجويفه. يتراوح حجمها من بضعة مليمترات إلى أكثر من 20 سم.
الأورام الليفية شائعة، وتُرى لدى نحو 40% من النساء في الأربعينيات وحتى 70% بعد سن اليأس.
الأعراض
غالباً لا تسبب الأورام الصغيرة أعراضاً وتُكتشف بالموجات فوق الصوتية. أما الأورام الأكبر أو الضاغطة على أعضاء أخرى فقد تسبب:
• دورات شهرية غزيرة
• آلام الدورة والبطن
• مشاكل بولية أو تسرب البول
• ألماً أثناء الجماع
• العقم أو زيادة خطر الإجهاض
العلاج
• الأورام الصغيرة: يمكن استئصالها عند وجود شكوى
• الأورام الكبيرة أو أعراض ما بعد سن اليأس: قد يُنظر في استئصال الرحم
• النزيف والألم: يمكن علاجهما جزئياً بالأدوية
أطباء GynRaMa لديهم أجهزة موجات فوق صوتية حديثة وخبرة سنوات طويلة في تشخيص الأورام الليفية وعلاجها.`,
    ),
  },
  {
    slug: "flytningar",
    namn: t("Flytningar från underlivet", "Vaginal discharge", "الإفرازات المهبلية"),
    kategori: "Gynekologi",
    text: t(
      `Flytningar är en normal och viktig del av underlivets funktion. De håller slemhinnorna fuktiga, skyddar mot infektioner och bidrar till att hålla slidan ren. Normala flytningar är oftast vita eller klara och har en lätt syrlig doft.
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
      `Discharge is a normal and important part of how the genital area works. It keeps the mucous membranes moist, protects against infection and helps keep the vagina clean. Normal discharge is usually white or clear with a slightly acidic scent.
When should you seek care?
Seek care for foul-smelling discharge, discoloured discharge (green, yellow, grey, grainy or blood-stained), itching, stinging or pain. Also seek care if you suspect an STI, have fever, abdominal pain, general malaise, or if you develop fever and foul-smelling discharge in connection with tampon use.
Common causes of changed discharge
Yeast infection
Often causes white, grainy discharge with itching and stinging. Can sometimes be treated with over-the-counter medication, but recurring problems should be investigated.
Bacterial vaginosis
Causes thin, grey-white, foul-smelling discharge. The condition is harmless but requires treatment, especially during pregnancy.
Uterine and fallopian tube inflammation
Can cause yellow or green foul-smelling discharge, abdominal pain, fever and malaise. Often caused by infection after a gynaecological procedure, childbirth or an untreated STI.
Sexually transmitted infections (STIs)
The most common are chlamydia, gonorrhoea and mycoplasma. Symptoms include discharge and stinging when urinating. Untreated infections can lead to infertility. Diagnosis is made through testing, and treatment is with antibiotics.
Genital itching
Itching can be due to a yeast infection, irritant or allergic eczema, lichen simplex or lichen sclerosus. In rare cases itching can be caused by vulvar cancer.
Lichen sclerosus
A chronic inflammation that causes pronounced itching and thin, whitish mucosa. Treated with strong cortisone ointment and should be followed up regularly due to a small risk of cell changes.
Care at GynRaMa
The doctors at GynRaMa perform testing and gynaecological examinations, and offer treatment for all types of discharge problems, including infections and skin conditions in the genital area.`,
      `الإفرازات جزء طبيعي ومهم من وظيفة الجهاز التناسلي. فهي تحافظ على رطوبة الأغشية المخاطية وتحمي من العدوى وتساعد على نظافة المهبل. الإفرازات الطبيعية غالباً بيضاء أو شفافة برائحة حمضية خفيفة.
متى ينبغي طلب الرعاية؟
اطلبي الرعاية عند إفرازات كريهة الرائحة أو متغيرة اللون (خضراء أو صفراء أو رمادية أو متحببة أو مدمّاة)، أو عند حكة أو حرقان أو ألم. اطلبي الرعاية أيضاً عند الاشتباه بمرض منقول جنسياً، أو عند حمى وألم في البطن وشعور عام بالتوعك، أو إذا ظهرت حمى وإفرازات كريهة مع استخدام السدادات القطنية.
أسباب شائعة لتغيّر الإفرازات
عدوى الفطريات
تسبب غالباً إفرازات بيضاء متحببة مع حكة وحرقان. يمكن أحياناً علاجها بأدوية دون وصفة، لكن الشكاوى المتكررة تستدعي الفحص.
التهاب المهبل البكتيري
يسبب إفرازات رقيقة رمادية بيضاء كريهة الرائحة. حالة غير خطيرة لكنها تتطلب علاجاً، خصوصاً أثناء الحمل.
التهاب الرحم وقناتي فالوب
قد يسبب إفرازات صفراء أو خضراء كريهة، وألماً في البطن وحمى وتوعكاً. غالباً بسبب عدوى بعد إجراء نسائي أو ولادة أو مرض منقول جنسياً غير معالج.
الأمراض المنقولة جنسياً
أشيعها الكلاميديا والسيلان والميكوبلازما. من الأعراض إفرازات وحرقان عند التبول. العدوى غير المعالجة قد تؤدي إلى العقم. يُشخّص بالفحص ويُعالج بالمضادات الحيوية.
حكة المنطقة التناسلية
قد تنجم عن عدوى فطرية أو إكزيما تهيّجية أو تحسسية أو الحزاز البسيط أو الحزاز المتصلب. في حالات نادرة قد يكون سببها سرطان الفرج.
الحزاز المتصلب
التهاب مزمن يسبب حكة شديدة وغشاء مخاطياً رقيقاً مائلاً للبياض. يُعالج بمرهم كورتيزون قوي ويستلزم متابعة منتظمة لوجود خطر ضئيل لتغيّرات خلوية.
الرعاية في GynRaMa
يجري أطباء GynRaMa الفحوصات والفحص النسائي ويقدمون العلاج لجميع أنواع مشاكل الإفرازات، بما فيها الالتهابات وأمراض الجلد التناسلية.`,
    ),
  },
  {
    slug: "preventivmedel",
    namn: t(
      "Preventivmedelsrådgivning – skydd mot graviditet",
      "Contraceptive counselling – protection against pregnancy",
      "استشارات منع الحمل – الوقاية من الحمل",
    ),
    kategori: "Gynekologi",
    text: t(
      `Det finns flera sätt att skydda sig mot graviditet. Dessa kallas preventivmedel och kan vara hormonella eller icke-hormonella. Kondom och femidom är de enda metoderna som även skyddar mot könssjukdomar. Ansvar för preventivmedel delas av alla som deltar i det sexuella mötet.
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
      `There are several ways to protect yourself against pregnancy. These are called contraceptives and can be hormonal or non-hormonal. Condoms and femidoms are the only methods that also protect against STIs. Responsibility for contraception is shared by everyone taking part in the sexual encounter.
Hormonal contraceptives
Contraceptives containing both oestrogen and progestogen are the combined pill, the vaginal ring and the patch. They prevent ovulation and make the cervical mucus thick. These methods should not be used during the first six weeks after childbirth due to an increased risk of blood clots.
Progestogen-only contraceptives are the mid-dose pill, the mini pill, the implant, the injection and the hormonal IUD. They make the cervical mucus impenetrable to sperm and thin the uterine lining. All hormonal methods give very effective protection when used correctly.
Non-hormonal contraceptives
Non-hormonal methods are the copper IUD, condoms, diaphragms and femidoms. The copper IUD works through copper ions that impede fertilisation and implantation. It does not affect ovulation, contains no hormones and gives very reliable protection against pregnancy.
Condoms protect against both STIs and pregnancy. Diaphragms and femidoms work as barriers preventing sperm from reaching the uterus, but give a somewhat lower level of protection than, for example, the implant or an IUD.
Sterilisation
Sterilisation means the fallopian tubes are destroyed through keyhole surgery or hysteroscopy, and is a permanent method. Women over 25 can be sterilised without special permission. Between 18 and 25, approval from the National Board of Health and Welfare is required for special reasons.
GynRaMa can help with counselling on the choice of contraception and a referral for sterilisation if needed.
IUD – copper and hormonal
IUDs are T-shaped and inserted into the uterus by a midwife or gynaecologist. At GynRaMa the insertion is done by a gynaecologist, allowing immediate ultrasound verification of the IUD's position.
The copper IUD releases copper ions that prevent fertilisation and works for up to five years. The hormonal IUD contains progestogen, which thins the lining and thickens the mucus; it is effective for three to five years depending on the model.
Common reasons for visits at GynRaMa are IUD insertion, position checks, removal or replacement.`,
      `هناك عدة وسائل للوقاية من الحمل تُسمى موانع الحمل، وقد تكون هرمونية أو غير هرمونية. الواقي الذكري والأنثوي هما الوسيلتان الوحيدتان اللتان تقيان أيضاً من الأمراض المنقولة جنسياً. مسؤولية منع الحمل يتشاركها جميع أطراف العلاقة.
موانع الحمل الهرمونية
الموانع الحاوية على الإستروجين والبروجستوجين معاً هي حبوب منع الحمل المركبة والحلقة المهبلية واللصقة. تمنع الإباضة وتجعل مخاط عنق الرحم كثيفاً. لا يُنصح بها خلال الأسابيع الستة الأولى بعد الولادة لزيادة خطر الجلطات.
الموانع الحاوية على البروجستوجين فقط هي الحبوب متوسطة الجرعة والحبوب المصغرة والغرسة والحقنة واللولب الهرموني. تجعل مخاط عنق الرحم عازلاً للحيوانات المنوية وترقق بطانة الرحم. جميع الوسائل الهرمونية فعالة جداً عند استخدامها بشكل صحيح.
موانع الحمل غير الهرمونية
الوسائل غير الهرمونية هي اللولب النحاسي والواقي الذكري والحاجز المهبلي والواقي الأنثوي. يعمل اللولب النحاسي بأيونات النحاس التي تعيق الإخصاب والانغراس. لا يؤثر على الإباضة ولا يحتوي هرمونات ويوفر حماية موثوقة جداً.
الواقي الذكري يقي من الأمراض المنقولة جنسياً والحمل معاً. الحاجز والواقي الأنثوي حاجزان يمنعان وصول الحيوانات المنوية إلى الرحم، لكن حمايتهما أقل قليلاً من الغرسة أو اللولب مثلاً.
التعقيم
التعقيم يعني إتلاف قناتي فالوب بجراحة المنظار أو تنظير الرحم، وهو وسيلة دائمة. يمكن للنساء فوق 25 عاماً التعقيم دون إذن خاص، أما بين 18 و25 عاماً فيلزم موافقة المجلس الوطني للصحة والرعاية لأسباب خاصة.
يمكن لـ GynRaMa المساعدة باستشارات اختيار وسيلة منع الحمل وبإحالة للتعقيم عند الحاجة.
اللولب – النحاسي والهرموني
اللوالب على شكل حرف T وتُركّب في الرحم بواسطة قابلة أو طبيبة نساء. في GynRaMa تجري طبيبة النساء التركيب، ما يتيح التحقق الفوري من موضع اللولب بالموجات فوق الصوتية.
يطلق اللولب النحاسي أيونات نحاس تمنع الإخصاب ويعمل حتى خمس سنوات. اللولب الهرموني يحتوي بروجستوجين يرقق البطانة ويكثف المخاط، وهو فعال من ثلاث إلى خمس سنوات حسب الطراز.
من أسباب الزيارة الشائعة في GynRaMa: تركيب اللولب، فحص موضعه، إزالته أو استبداله.`,
    ),
  },
  {
    slug: "klimakteriebesvar",
    namn: t("Klimakteriebesvär", "Menopause symptoms", "أعراض سن اليأس"),
    kategori: "Gynekologi",
    text: t(
      `Klimakteriet, eller övergångsåldern, orsakas av en naturlig minskning av äggblåsor i äggstockarna, vilket leder till oregelbundna ägglossningar och sjunkande östrogennivåer. Perioden kan pågå från några månader upp till flera år, och symtomen varierar kraftigt mellan olika kvinnor. Vanliga tidiga tecken är förändrat blödningsmönster samt värmevallningar, humörsvängningar och sömnproblem.
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
      `The menopause transition is caused by a natural decline in the number of follicles in the ovaries, leading to irregular ovulation and falling oestrogen levels. The period can last from a few months up to several years, and symptoms vary greatly between women. Common early signs are a changed bleeding pattern, hot flushes, mood swings and sleep problems.
The final period occurs on average at age 52. When menstruation has been absent for a year it is called menopause, normally between 45 and 55. Menopause before 45 is called early menopause, and before 40 premature ovarian insufficiency (POI), which can be due to, for example, radiotherapy or chemotherapy.
Common symptoms
The menopause can cause one or more of the following:
• Hot flushes and sweating
• Mood swings and low mood
• Sleep problems
• Dry mucous membranes in the vagina, eyes, nose and throat
• Urinary symptoms such as stinging or frequent urges
Symptoms often come in periods, and hot flushes can continue for several years.
When should you seek care?
Contact healthcare for:
• Hot flushes, sweating or sleep problems affecting your quality of life
• Dry mucous membranes or stinging that does not improve despite over-the-counter treatment
• Urinary symptoms
• Bleeding more than a year after your last period
• Frequent, heavy or irregular bleeding`,
      `ينجم سن اليأس، أو سن الانتقال، عن نقص طبيعي في عدد الجريبات في المبيضين، ما يؤدي إلى إباضة غير منتظمة وانخفاض مستويات الإستروجين. قد تستمر هذه المرحلة من بضعة أشهر إلى عدة سنوات، وتتفاوت الأعراض كثيراً بين النساء. من العلامات المبكرة الشائعة تغيّر نمط النزيف والهبّات الساخنة وتقلب المزاج ومشاكل النوم.
تحدث آخر دورة شهرية في المتوسط عند سن 52. عند انقطاع الدورة لمدة سنة يُسمى ذلك سن اليأس، عادةً بين 45 و55 عاماً. إذا حدث قبل 45 يُسمى سن يأس مبكراً، وقبل 40 قصوراً مبكراً في المبيض (POI)، وقد ينجم مثلاً عن العلاج الإشعاعي أو الكيميائي.
الأعراض الشائعة
قد يسبب سن اليأس واحداً أو أكثر مما يلي:
• هبّات ساخنة وتعرّق
• تقلب المزاج والاكتئاب
• مشاكل النوم
• جفاف الأغشية المخاطية في المهبل والعينين والأنف والحلق
• أعراض بولية كالحرقان أو كثرة الإلحاح
غالباً ما تأتي الأعراض على فترات، وقد تستمر الهبّات الساخنة عدة سنوات.
متى ينبغي طلب الرعاية؟
تواصلي مع الرعاية الصحية عند:
• هبّات ساخنة أو تعرّق أو مشاكل نوم تؤثر على جودة الحياة
• جفاف أو حرقان لا يتحسن رغم العلاج دون وصفة
• أعراض بولية
• نزيف بعد أكثر من سنة من آخر دورة
• نزيف متكرر أو غزير أو غير منتظم`,
    ),
  },
  {
    slug: "framfall",
    namn: t("Framfall", "Prolapse", "الهبوط التناسلي"),
    kategori: "Gynekologi",
    text: t(
      `Framfall innebär att någon del av de inre genitalorganen, såsom urinblåsan, livmodern eller slidväggarna, buktar ned mot eller ut genom slidöppningen. Det är vanligt och behöver oftast endast behandlas om det ger besvär. Risken ökar med ålder, vaginala förlossningar, övervikt och ärftlighet.
Symtom
Vanliga symtom är känslan av något som buktar fram i underlivet, tyngdkänsla eller skav. Besvären kan komma gradvis, men kan även uppstå snabbt efter tungt lyft, förstoppning eller graviditet.
Riskfaktorer
Framfall ökar vid påfrestningar på bäckenbotten, såsom graviditet, vaginal förlossning, tungt arbete, kronisk hosta, förstoppning eller skador på muskler och nerver i bäckenbotten. Risken ökar med antalet vaginala förlossningar och vid skador som stora bristningar.
Utredning inleds ofta med undersökning, ultraljud och eventuellt provtagning. Behandlingen beror på graden av framfallet och kan vara både konservativ, exempelvis knipövningar och stödjande hjälpmedel, eller kirurgisk.
Om du upplever tyngdkänsla, skav eller ser att något buktar fram i underlivet kan du kontakta GynRaMa för undersökning, rådgivning och eventuell remiss för operation`,
      `Prolapse means that part of the internal genital organs, such as the bladder, the uterus or the vaginal walls, bulges down towards or out through the vaginal opening. It is common and usually only needs treatment if it causes problems. The risk increases with age, vaginal deliveries, excess weight and heredity.
Symptoms
Common symptoms are the feeling of something bulging in the genital area, heaviness or chafing. Problems can develop gradually, but can also appear quickly after heavy lifting, constipation or pregnancy.
Risk factors
Prolapse increases with strain on the pelvic floor, such as pregnancy, vaginal delivery, heavy work, chronic cough, constipation or damage to the muscles and nerves of the pelvic floor. The risk increases with the number of vaginal deliveries and with injuries such as major tears.
Investigation often starts with an examination, ultrasound and possibly sampling. Treatment depends on the degree of prolapse and can be conservative, such as pelvic floor exercises and supporting aids, or surgical.
If you experience heaviness, chafing or see something bulging in the genital area, you can contact GynRaMa for examination, advice and a possible referral for surgery`,
      `الهبوط التناسلي يعني أن جزءاً من الأعضاء التناسلية الداخلية، كالمثانة أو الرحم أو جدران المهبل، ينزل نحو فتحة المهبل أو يبرز خارجها. وهو شائع ولا يحتاج علاجاً غالباً إلا إذا سبب شكوى. يزداد الخطر مع التقدم في السن والولادات المهبلية وزيادة الوزن والوراثة.
الأعراض
من الأعراض الشائعة الإحساس بشيء بارز في المنطقة التناسلية أو ثقل أو احتكاك. قد تأتي الشكوى تدريجياً، وقد تظهر سريعاً بعد حمل ثقيل أو إمساك أو حمل.
عوامل الخطر
يزداد الهبوط مع إجهاد قاع الحوض، كالحمل والولادة المهبلية والعمل الشاق والسعال المزمن والإمساك أو إصابات عضلات وأعصاب قاع الحوض. يزداد الخطر مع عدد الولادات المهبلية ومع إصابات كالتمزقات الكبيرة.
يبدأ التقييم غالباً بالفحص والموجات فوق الصوتية وربما أخذ عينات. يعتمد العلاج على درجة الهبوط وقد يكون تحفظياً، كتمارين قاع الحوض والوسائل الداعمة، أو جراحياً.
إذا شعرت بثقل أو احتكاك أو لاحظت شيئاً بارزاً في المنطقة التناسلية، تواصلي مع GynRaMa للفحص والاستشارة وربما إحالة للجراحة`,
    ),
  },
  {
    slug: "urininkontinens",
    namn: t("Urininkontinens", "Urinary incontinence", "سلس البول"),
    kategori: "Gynekologi",
    text: t(
      `Urininkontinens innebär att urin kan läcka mellan toalettbesök. Det är vanligt och det finns både egenvård och medicinska behandlingar som kan hjälpa, beroende på typ av inkontinens.
Vanliga symtom är att urin läcker vid ansträngning, hosta eller nysning, att du plötsligt känner dig kissnödig, att du behöver kissa ofta eller att urin läcker i små mängder.
Typer av urininkontinens
• Ansträngningsinkontinens: Läckage vid ökat tryck i magen, exempelvis vid hosta, nysning eller hopp. Kan behandlas med bäckenbottenträning eller operation vid behov.
• Trängningsinkontinens: Plötslig kissnödighet med svårt att hålla sig. Behandlas ofta med läkemedel som lugnar blåsan.
• Blandinkontinens: Kombination av ansträngnings- och trängningsinkontinens. Behandling kan innefatta bäckenbottenträning, blåsträning och ibland läkemedel eller operation.
• Överrinningsinkontinens: Mindre vanlig form där blåsan inte töms helt.
Bäckenbottenträning och blåsträning är ofta första steget. Vid vissa typer kan läkemedel eller operation bli aktuellt.
Om du har urinläckage eller symtom på inkontinens kan du kontakta GynRaMa för undersökning, behandling och rådgivning om läkemedel eller eventuell operation.`,
      `Urinary incontinence means urine can leak between toilet visits. It is common, and both self-care and medical treatments can help, depending on the type of incontinence.
Common symptoms are urine leaking during exertion, coughing or sneezing, suddenly feeling a strong urge to urinate, needing to urinate often, or urine leaking in small amounts.
Types of urinary incontinence
• Stress incontinence: Leakage with increased abdominal pressure, for example when coughing, sneezing or jumping. Can be treated with pelvic floor training or surgery if needed.
• Urge incontinence: A sudden urge to urinate that is hard to hold back. Often treated with medication that calms the bladder.
• Mixed incontinence: A combination of stress and urge incontinence. Treatment can include pelvic floor training, bladder training and sometimes medication or surgery.
• Overflow incontinence: A less common form where the bladder does not empty completely.
Pelvic floor training and bladder training are often the first step. For some types, medication or surgery may become relevant.
If you have urine leakage or symptoms of incontinence, you can contact GynRaMa for examination, treatment and advice on medication or possible surgery.`,
      `سلس البول يعني تسرب البول بين زيارات الحمّام. وهو شائع، وتساعد فيه الرعاية الذاتية والعلاجات الطبية على حد سواء، حسب نوع السلس.
من الأعراض الشائعة تسرب البول عند الجهد أو السعال أو العطس، أو شعور مفاجئ وملحّ بالحاجة للتبول، أو كثرة التبول، أو تسرب البول بكميات صغيرة.
أنواع سلس البول
• السلس الجهدي: تسرب عند زيادة الضغط في البطن، كالسعال أو العطس أو القفز. يُعالج بتمارين قاع الحوض أو بالجراحة عند الحاجة.
• السلس الإلحاحي: حاجة مفاجئة للتبول يصعب حبسها. يُعالج غالباً بأدوية تهدئ المثانة.
• السلس المختلط: مزيج من الجهدي والإلحاحي. قد يشمل العلاج تمارين قاع الحوض وتدريب المثانة وأحياناً الأدوية أو الجراحة.
• سلس الفيض: شكل أقل شيوعاً لا تفرغ فيه المثانة تماماً.
تمارين قاع الحوض وتدريب المثانة هما الخطوة الأولى غالباً. في بعض الأنواع قد يلزم دواء أو جراحة.
إذا كان لديك تسرب بول أو أعراض سلس، تواصلي مع GynRaMa للفحص والعلاج والاستشارة حول الأدوية أو الجراحة المحتملة.`,
    ),
  },
  {
    slug: "endo-test",
    namn: t("Endo test", "Endo test", "فحص بطانة الرحم المهاجرة"),
    kategori: "Gynekologi",
    text: t(
      `Vad är endometrios?
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
      `What is endometriosis?
Endometriosis is characterised by endometrium-like tissue outside the uterus, known as endometriosis lesions. The growth of these lesions is often associated with an inflammatory process.
During menstruation, endometriosis lesions can react to variations in hormone levels, leading to acute inflammation, bleeding, severe pain and many other symptoms. Endometriosis affects about 10% of women of fertile age. Today around 250,000 women in Sweden are affected.
Symptoms of endometriosis
• Severe period pain
• Pain during intercourse
• Long-lasting pelvic pain
• Pain in the right shoulder
• Digestive problems
• Intense fatigue
• Urinary tract conditions
• Infertility
• Pain when passing stools
• Painful rectal bleeding
• Blood in the urine during menstruation
• Alternating diarrhoea and constipation`,
      `ما هي بطانة الرحم المهاجرة؟
تتميز بطانة الرحم المهاجرة (الانتباذ البطاني الرحمي) بوجود نسيج شبيه ببطانة الرحم خارج الرحم، يُعرف بآفات الانتباذ. غالباً ما يرتبط نمو هذه الآفات بعملية التهابية.
أثناء الدورة الشهرية قد تتفاعل هذه الآفات مع تغيّرات مستويات الهرمونات، ما يؤدي إلى التهاب حاد ونزيف وألم شديد وأعراض كثيرة أخرى. تصيب الحالة نحو 10% من النساء في سن الإنجاب، ونحو 250 ألف امرأة في السويد اليوم.
أعراض بطانة الرحم المهاجرة
• ألم شديد أثناء الدورة
• ألم أثناء الجماع
• ألم حوضي طويل الأمد
• ألم في الكتف الأيمن
• مشاكل هضمية
• تعب شديد
• أمراض المسالك البولية
• العقم
• ألم عند التبرز
• نزيف شرجي مؤلم
• دم في البول أثناء الدورة
• تناوب الإسهال والإمساك`,
    ),
  },
  {
    slug: "tidig-graviditet",
    namn: t("Kontroll av tidig graviditet", "Early pregnancy check", "فحص الحمل المبكر"),
    kategori: "Graviditet",
    text: t(
      `En graviditet kan oftast upptäckas med urintest cirka tre veckor efter befruktning, vilket motsvarar ungefär fem veckor efter första dagen på senaste mens. Tidig ultraljudsundersökning är viktig för att bekräfta att graviditeten sitter i livmodern och utvecklas normalt.
Från slutet av graviditetsvecka 6 kan man med vaginalt ultraljud se graviditeten i livmoderhålan, bedöma storlek i förhållande till graviditetslängden och se om hjärtaktivitet finns. Undersökningen kan också upptäcka tidiga graviditetsavvikelser, såsom missed abortion, missfall eller utomkvedshavandeskap, där graviditeten oftast sitter i äggledaren.
Blödning under tidig graviditet är vanligt och oftast ofarligt, men kan vara något vanligare vid missfall eller avstannad graviditet. I vissa fall behövs upprepade ultraljud och blodprov för hCG för att följa utvecklingen.
Läkarna på GynRaMa har lång erfarenhet av tidiga graviditetsutredningar och använder modern ultraljudsutrustning för att ge trygg och noggrann bedömning.`,
      `A pregnancy can usually be detected with a urine test about three weeks after conception, corresponding to roughly five weeks after the first day of the last period. An early ultrasound examination is important to confirm that the pregnancy is in the uterus and developing normally.
From the end of pregnancy week 6, vaginal ultrasound can show the pregnancy in the uterine cavity, assess its size relative to the length of the pregnancy and detect heart activity. The examination can also discover early pregnancy abnormalities such as missed abortion, miscarriage or ectopic pregnancy, where the pregnancy is usually located in the fallopian tube.
Bleeding in early pregnancy is common and usually harmless, but can be somewhat more common with miscarriage or a non-viable pregnancy. In some cases repeated ultrasounds and hCG blood tests are needed to follow the development.
The doctors at GynRaMa have long experience of early pregnancy investigations and use modern ultrasound equipment to provide safe and precise assessment.`,
      `يمكن عادةً اكتشاف الحمل باختبار البول بعد نحو ثلاثة أسابيع من الإخصاب، أي نحو خمسة أسابيع بعد أول يوم من آخر دورة. فحص الموجات فوق الصوتية المبكر مهم للتأكد من أن الحمل داخل الرحم وأنه يتطور طبيعياً.
من نهاية الأسبوع السادس يمكن بالتصوير المهبلي رؤية الحمل في تجويف الرحم وتقييم حجمه نسبة إلى عمر الحمل ورصد نبض القلب. يمكن للفحص أيضاً اكتشاف اضطرابات الحمل المبكرة كالإجهاض الفائت أو الإجهاض أو الحمل خارج الرحم، حيث يكون الحمل غالباً في قناة فالوب.
النزيف في بداية الحمل شائع وغير ضار غالباً، لكنه قد يكون أكثر شيوعاً قليلاً عند الإجهاض أو توقف الحمل. في بعض الحالات يلزم تكرار التصوير وفحوصات دم لهرمون hCG لمتابعة التطور.
أطباء GynRaMa لديهم خبرة طويلة في فحوصات الحمل المبكر ويستخدمون أجهزة موجات فوق صوتية حديثة لتقييم آمن ودقيق.`,
    ),
  },
  {
    slug: "blodning-graviditet",
    namn: t("Blödning under graviditet", "Bleeding during pregnancy", "النزيف أثناء الحمل"),
    kategori: "Graviditet",
    text: t(
      `Blödning under graviditeten är vanligt, särskilt under första halvan. De flesta blödningar är helt ofarliga, men de kan ibland vara tecken på missfall eller utomkvedshavandeskap. Det är naturligt att bli orolig, men en blödning behöver inte innebära att något är fel.
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
      `Bleeding during pregnancy is common, especially in the first half. Most bleeding is completely harmless, but it can sometimes be a sign of miscarriage or ectopic pregnancy. It is natural to worry, but bleeding does not have to mean something is wrong.
Common causes of bleeding early in pregnancy
Implantation bleeding
A small bleed can occur when the fertilised egg attaches to the uterine lining, usually in week 2–3. It resolves on its own and does not affect the pregnancy.
Bleeding from the uterine lining
During the first months the body may not yet be fully adjusted to the pregnancy, which can cause a minor bleed that usually subsides spontaneously.
Bleeding from the cervix
The cervix is extra sensitive during pregnancy and can bleed after, for example, intercourse. This is harmless.
Polyp on the cervix
A polyp can cause minor bleeding without affecting the pregnancy. It can be removed by a doctor if needed.
Causes that require investigation
Miscarriage
Miscarriage often involves bleeding combined with pain in the lower abdomen. Most miscarriages occur before week 12.
Ectopic pregnancy
Means the pregnancy is located outside the uterus, usually in the fallopian tube. Usually causes one-sided abdominal pain and a minor bleed.
Infection
Infection in the vagina or cervix can cause bleeding and foul-smelling discharge, but rarely affects the pregnancy itself.
Molar pregnancy
A rare, abnormal pregnancy where the fetus does not develop. Often causes heavy bleeding, high hCG levels and a typical ultrasound picture.
Bleeding later in pregnancy
Placental abruption
A rare but serious complication causing severe abdominal pain and bleeding, usually late in pregnancy.
Placenta praevia
The placenta can block the opening of the cervix and cause bleeding. Diagnosed with ultrasound. A caesarean section is required if the placenta fully or partly covers the opening.
Show
A minor bleed can occur when labour starts. It is completely normal.
Other causes
Bleeding can also come from haemorrhoids, which are common during pregnancy. The blood then comes from the anus, not the vagina. Sometimes there is no clear explanation.
If you bleed during pregnancy, or develop any of the symptoms above, you should contact GynRaMa for assessment and examination.`,
      `النزيف أثناء الحمل شائع، خصوصاً في نصفه الأول. معظم حالات النزيف غير ضارة إطلاقاً، لكنها قد تكون أحياناً علامة على إجهاض أو حمل خارج الرحم. القلق طبيعي، لكن النزيف لا يعني بالضرورة وجود خطب ما.
أسباب شائعة للنزيف في بداية الحمل
نزيف الانغراس
قد يحدث نزيف خفيف عند التصاق البويضة الملقحة ببطانة الرحم، غالباً في الأسبوع 2–3. يزول من تلقاء نفسه ولا يؤثر على الحمل.
نزيف من بطانة الرحم
في الأشهر الأولى قد لا يكون الجسم متكيفاً تماماً مع الحمل بعد، ما قد يسبب نزيفاً خفيفاً يخف عادةً تلقائياً.
نزيف من عنق الرحم
عنق الرحم حساس جداً أثناء الحمل وقد ينزف بعد الجماع مثلاً. هذا غير ضار.
سليلة على عنق الرحم
قد تسبب السليلة نزيفاً خفيفاً دون تأثير على الحمل، ويمكن للطبيبة إزالتها عند الحاجة.
أسباب تستدعي الفحص
الإجهاض
غالباً ما يترافق الإجهاض مع نزيف وألم أسفل البطن. تحدث معظم حالات الإجهاض قبل الأسبوع 12.
الحمل خارج الرحم
يعني أن الحمل خارج الرحم، غالباً في قناة فالوب. يسبب عادةً ألماً في جهة واحدة من البطن ونزيفاً خفيفاً.
العدوى
قد تسبب عدوى المهبل أو عنق الرحم نزيفاً وإفرازات كريهة الرائحة، لكنها نادراً ما تؤثر على الحمل نفسه.
الحمل العنقودي
حمل نادر وغير طبيعي لا يتطور فيه الجنين. يسبب غالباً نزيفاً غزيراً وارتفاعاً في hCG وصورة مميزة بالموجات فوق الصوتية.
النزيف في مراحل الحمل المتأخرة
انفصال المشيمة المبكر
مضاعفة نادرة لكنها خطيرة تسبب ألماً شديداً في البطن ونزيفاً، غالباً في نهاية الحمل.
المشيمة المنزاحة
قد تسد المشيمة فتحة عنق الرحم وتسبب نزيفاً. تُشخّص بالموجات فوق الصوتية. تلزم ولادة قيصرية إذا غطت المشيمة الفتحة كلياً أو جزئياً.
العلامة الدموية
قد يحدث نزيف خفيف عند بدء المخاض، وهو طبيعي تماماً.
أسباب أخرى
قد يأتي النزيف أيضاً من البواسير الشائعة أثناء الحمل، ويكون الدم حينها من فتحة الشرج لا المهبل. أحياناً لا يوجد تفسير واضح.
عند نزيف أثناء الحمل أو ظهور أي من الأعراض أعلاه، تواصلي مع GynRaMa للتقييم والفحص.`,
    ),
  },
  {
    slug: "ofrivillig-barnloshet",
    namn: t("Ofrivillig barnlöshet", "Involuntary childlessness", "العقم"),
    kategori: "Fertilitet",
    text: t(
      `Ofrivillig barnlöshet innebär att man har försökt att bli gravid i mer än ett år utan att lyckas. Det är vanligt och kan bero på flera faktorer. Barnlöshet kan också uppstå i olika familjekonstellationer, till exempel om du är ensamstående, i ett samkönat förhållande eller om partnern inte vill ha barn.
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
      `Involuntary childlessness means having tried to become pregnant for more than a year without success. It is common and can have several causes. Childlessness can also arise in different family situations, for example if you are single, in a same-sex relationship or if your partner does not want children.
When should you seek care?
Seek care if you have tried to become pregnant for at least a year without result. Seek care earlier if any of the following applies:
• The person trying to become pregnant is over 35.
• You rarely or never have periods.
• You have previously had abdominal surgery with complications.
• You or your partner have been treated with chemotherapy or radiation.
Causes of involuntary childlessness
Childlessness can be due to problems with sperm, eggs, fallopian tubes, the uterus, or a combination of these.
Sperm
In about a third of cases the cause is related to sperm count, function or absence. Common causes include infections (e.g. chlamydia or gonorrhoea), undescended testicles, previous cancer treatment or the use of anabolic steroids.
Eggs and uterus
In a third of cases the cause lies in the ovaries or the uterus. This can be absent ovulation (e.g. with PCOS), fallopian tubes affected by infection, endometriosis, polyps or fibroids, extreme under- or overweight, radiotherapy or chemotherapy, or congenital conditions such as Turner syndrome.
Unexplained childlessness
In roughly a third of cases no clear explanation is found, or it may be due to a combination of factors.
Infertility investigation
At GynRaMa you can get help with a rapid investigation. It can include:
• A sperm test to examine the count, motility and presence of sperm.
• Ovulation tests with LH strips or morning temperature.
• Blood tests for ovulation and hormone levels (FSH, LH, AMH, progesterone).
• Vaginal ultrasound to examine the ovaries, fallopian tubes and uterus.
• Hysterosalpingography (HSSG) to view the uterine cavity and tubal passage.
• HSG to examine the uterine wall for polyps, fibroids or malformations.
When the investigation is complete
After the investigation, you and the doctor discuss which treatment suits you best. Sometimes no treatment is needed; sometimes IVF or donation treatment is recommended. All investigations and referrals can be handled by GynRaMa, which has long experience in infertility.`,
      `العقم يعني محاولة الحمل لأكثر من سنة دون نجاح. وهو شائع وقد يعود لعدة عوامل. قد ينشأ أيضاً في أوضاع عائلية مختلفة، مثلاً إذا كنت عزباء أو في علاقة مثلية أو إذا كان الشريك لا يريد أطفالاً.
متى ينبغي طلب الرعاية؟
اطلبا الرعاية إذا حاولتما الحمل لسنة على الأقل دون نتيجة. اطلباها مبكراً إذا انطبق أي مما يلي:
• من ترغب في الحمل تجاوزت 35 عاماً.
• دورتك الشهرية نادرة أو غائبة.
• خضعت سابقاً لجراحة في البطن مع مضاعفات.
• عولجتِ أنت أو الشريك بالعلاج الكيميائي أو الإشعاعي.
أسباب العقم
قد يعود العقم إلى مشاكل في الحيوانات المنوية أو البويضات أو قناتي فالوب أو الرحم، أو مزيج منها.
الحيوانات المنوية
في نحو ثلث الحالات يرتبط السبب بعدد الحيوانات المنوية أو وظيفتها أو غيابها. من الأسباب الشائعة العدوى (كالكلاميديا أو السيلان) أو الخصية غير النازلة أو علاج سرطان سابق أو استخدام الستيرويدات البنائية.
البويضات والرحم
في ثلث الحالات يكون السبب في المبيضين أو الرحم: غياب الإباضة (كما في متلازمة تكيس المبايض)، تضرر قناتي فالوب بعد عدوى، بطانة الرحم المهاجرة، السلائل أو الأورام الليفية، نقص أو زيادة الوزن الشديدان، العلاج الإشعاعي أو الكيميائي، أو حالات خلقية كمتلازمة تيرنر.
العقم غير المفسر
في نحو ثلث الحالات لا يوجد تفسير واضح، أو قد يعود الأمر لمزيج من العوامل.
فحص العقم
في GynRaMa تحصلين على فحص سريع قد يشمل:
• فحص الحيوانات المنوية لتقييم العدد والحركة والوجود.
• اختبارات الإباضة بشرائط LH أو قياس حرارة الصباح.
• فحوصات دم للإباضة ومستويات الهرمونات (FSH وLH وAMH والبروجستيرون).
• تصوير مهبلي بالموجات فوق الصوتية لفحص المبيضين وقناتي فالوب والرحم.
• تصوير الرحم والقناتين (HSSG) لرؤية تجويف الرحم وسالكية القناتين.
• فحص جدار الرحم بحثاً عن سلائل أو أورام ليفية أو تشوهات.
عند اكتمال الفحص
بعد الفحص تناقشين مع الطبيبة العلاج الأنسب. أحياناً لا يلزم علاج، وأحياناً يُنصح بأطفال الأنابيب أو العلاج بالتبرع. يمكن لـ GynRaMa إدارة جميع الفحوصات والإحالات بخبرتها الطويلة في العقم.`,
    ),
  },
  {
    slug: "stimulerad-agglossning",
    namn: t("Stimulerad ägglossning", "Stimulated ovulation", "تحفيز الإباضة"),
    kategori: "Fertilitet",
    text: t(
      `För att en graviditet ska uppstå måste ett ägg lossna från äggstocken och befruktas i äggledaren. Om ägglossningen är oregelbunden eller uteblir kan hormonbehandling hjälpa till att stimulera äggen att mogna och lossna. Behandlingen kallas även ovulationsstimulering och kan ges som tabletter eller sprutor. Cirka hälften av de som behandlas blir gravida.
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
      `For a pregnancy to occur, an egg must be released from the ovary and fertilised in the fallopian tube. If ovulation is irregular or absent, hormone treatment can help stimulate the eggs to mature and be released. The treatment is also called ovulation stimulation and can be given as tablets or injections. About half of those treated become pregnant.
Before the treatment
A fertility investigation shows whether you have ovulation problems. Stimulated ovulation can help with irregular or absent ovulation.
How the treatment works
You usually take tablets that stimulate the body's own follicle-stimulating hormone (FSH). The treatment lasts five days, and after about ten days an ultrasound is done to follow the development of the follicles. If the tablets do not work, FSH injections can be given daily for about two weeks. The injections are usually taken in the abdomen or thigh, and the staff show you how.
Ultrasound examination
Vaginal ultrasound is used to follow the growth of the follicles, with both tablets and injections.
Timing of ovulation
Sometimes an injection is needed to release the egg, about 30–35 hours before intercourse or insemination, to optimise the chance of pregnancy.
Why the treatment is done
Stimulated ovulation increases the chance that sperm can fertilise an egg, and makes it easier to plan intercourse or insemination.
If you have tried to become pregnant for over a year without success, contact GynRaMa for help with stimulated ovulation. Our doctors are specialists and you can feel safe with us.`,
      `لحدوث الحمل يجب أن تتحرر بويضة من المبيض وتُخصَّب في قناة فالوب. إذا كانت الإباضة غير منتظمة أو غائبة، يمكن للعلاج الهرموني تحفيز نضوج البويضات وتحررها. يُسمى العلاج أيضاً تحفيز الإباضة ويُعطى أقراصاً أو حقناً. نحو نصف من يتلقين العلاج يحملن.
قبل العلاج
يبيّن فحص الخصوبة ما إذا كانت لديك مشاكل في الإباضة. يساعد التحفيز عند الإباضة غير المنتظمة أو الغائبة.
كيف يتم العلاج
عادةً تتناولين أقراصاً تحفز هرمون الجسم المنبه للجريبات (FSH). يستمر العلاج خمسة أيام، وبعد نحو عشرة أيام يُجرى تصوير بالموجات فوق الصوتية لمتابعة تطور الجريبات. إذا لم تنجح الأقراص، يمكن إعطاء حقن FSH يومياً لنحو أسبوعين. تُؤخذ الحقن عادةً في البطن أو الفخذ، ويشرح الطاقم كيفية ذلك.
فحص الموجات فوق الصوتية
يُستخدم التصوير المهبلي لمتابعة نمو الجريبات، مع الأقراص والحقن على السواء.
توقيت الإباضة
أحياناً تلزم حقنة لتحرير البويضة، قبل نحو 30–35 ساعة من الجماع أو التلقيح، لتحسين فرصة الحمل.
لماذا يُجرى العلاج
يزيد تحفيز الإباضة فرصة إخصاب البويضة ويسهّل التخطيط للجماع أو التلقيح.
إذا حاولت الحمل لأكثر من سنة دون نجاح، تواصلي مع GynRaMa للمساعدة بتحفيز الإباضة. أطباؤنا اختصاصيون ويمكنك الشعور بالاطمئنان لدينا.`,
    ),
  },
  {
    slug: "ivf",
    namn: t("IVF-behandling", "IVF treatment", "علاج أطفال الأنابيب"),
    kategori: "Fertilitet",
    text: t(
      `Drömmen om ett barn är unik och det är även din fertilitetsresa. På GynRaMa erbjuder vi individanpassade IVF-behandlingar i nära samarbete med Nordic IVF. Tillsammans kombinerar vi hög medicinsk kompetens, modern laboratorieverksamhet och ett personligt omhändertagande för att ge dig de bästa förutsättningarna.
Vi följer dig genom hela processen från den första fertilitetsutredningen och behandlingsplaneringen till IVF-behandling, embryoåterföring och uppföljning. Hos oss möter du samma specialistteam genom hela din resa, vilket skapar kontinuitet, trygghet och ett personligt bemötande.
Varje behandling utformas utifrån dina eller era individuella förutsättningar. Oavsett om du kommer som par eller ensamstående får du en tydlig plan, nära uppföljning och tillgång till den senaste kunskapen inom reproduktionsmedicin.`,
      `The dream of a child is unique, and so is your fertility journey. At GynRaMa we offer individualised IVF treatment in close partnership with Nordic IVF. Together we combine high medical expertise, modern laboratory facilities and personal care to give you the best possible conditions.
We follow you through the whole process, from the first fertility investigation and treatment planning to IVF treatment, embryo transfer and follow-up. With us you meet the same specialist team throughout your journey, which creates continuity, security and a personal touch.
Every treatment is designed around your individual circumstances. Whether you come as a couple or on your own, you receive a clear plan, close follow-up and access to the latest knowledge in reproductive medicine.`,
      `حلم الإنجاب فريد، وكذلك رحلة خصوبتك. في GynRaMa نقدم علاجات أطفال أنابيب مصممة لكل حالة بالتعاون الوثيق مع Nordic IVF. نجمع معاً بين الكفاءة الطبية العالية والمختبرات الحديثة والرعاية الشخصية لنمنحك أفضل الظروف الممكنة.
نرافقك خلال العملية كاملة، من أول فحص للخصوبة وتخطيط العلاج إلى علاج أطفال الأنابيب وإرجاع الأجنة والمتابعة. لديك نفس الفريق المتخصص طوال رحلتك، ما يمنحك الاستمرارية والطمأنينة والاهتمام الشخصي.
يُصمم كل علاج وفق ظروفك الفردية. سواء أتيتما كزوجين أو أتيتِ بمفردك، تحصلين على خطة واضحة ومتابعة دقيقة وأحدث المعارف في طب الإنجاب.`,
    ),
    mer: {
      label: t("Läs mer om GynRaMa IVF", "Read more about GynRaMa IVF", "اقرئي المزيد عن GynRaMa IVF"),
      href: "/gynrama-ivf",
    },
  },
  {
    slug: "spermaprov",
    namn: t("Spermaprov", "Sperm test", "فحص الحيوانات المنوية"),
    kategori: "Fertilitet",
    // GynRaMa har ingen text för den här behandlingen ännu — deras egna ord.
    text: t(`Text kommer snart!`, `Text coming soon!`, `النص قريباً!`),
  },
  {
    slug: "abort",
    namn: t("Abort", "Abortion", "الإجهاض"),
    kategori: "Abort",
    text: t(
      `På GynRaMa erbjuder vi medicinsk abort. Vi tar emot patienter som är 18 år eller äldre.
Behandlingen är landstingsfinansierad, vilket innebär att den täcks enligt gällande regionala regler.
Vid ditt besök träffar du vår erfarna personal som:
• Går igenom hela processen
• Informerar om medicinen
• Finns tillgänglig för stöd under hela förloppet
För dig som önskar finns även möjlighet till extra samtalsstöd hos kurator.
Vi lägger stor vikt vid trygghet, sekretess och ett respektfullt bemötande.`,
      `At GynRaMa we offer medical abortion. We see patients who are 18 or older.
The treatment is publicly funded, meaning it is covered under current regional rules.
At your visit you meet our experienced staff, who:
• Go through the whole process with you
• Inform you about the medication
• Are available for support throughout
If you wish, additional counselling with a social counsellor is also available.
We place great importance on safety, confidentiality and a respectful reception.`,
      `نقدم في GynRaMa الإجهاض الدوائي، ونستقبل المريضات من عمر 18 عاماً فما فوق.
العلاج ممول من القطاع العام، أي أنه مشمول وفق القواعد الإقليمية السارية.
في زيارتك تقابلين طاقمنا ذا الخبرة الذي:
• يشرح لك العملية كاملة
• يعرّفك بالدواء
• يبقى متاحاً لدعمك طوال الفترة
ولمن ترغب، يتوفر أيضاً دعم نفسي إضافي لدى مرشدة اجتماعية.
نولي أهمية كبيرة للأمان والسرية والمعاملة المحترمة.`,
    ),
  },
];
