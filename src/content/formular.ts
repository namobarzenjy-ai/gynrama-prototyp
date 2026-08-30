/**
 * Formulär & länkar — hämtat från https://gynrama.se/formular-och-lankar/ 2026-07-17.
 * PDF:erna ligger kvar på klinikens WordPress; varje filnamn matchar sin rubrik.
 */

import { t } from "@/i18n";

export type Formular = {
  titel: string;
  text: string;
  pdf: string;
};

export const formularIngress = t(
  `Välkommen till vår samlingssida för viktiga formulär och användbara länkar. Här hittar du dokument som underlättar din kontakt med oss, samt information som kan vara bra att ta del av inför utredning eller behandling.`,
  `Welcome to our collection of important forms and useful links. Here you will find documents that make it easier to be in touch with us, and information worth reading before an investigation or treatment.`,
  `مرحباً بك في صفحة النماذج المهمة والروابط المفيدة. تجدين هنا مستندات تسهّل تواصلك معنا، ومعلومات يُستحسن الاطلاع عليها قبل الفحص أو العلاج.`,
);

const UPLOADS = "https://gynrama.se/wp-content/uploads/2025/04";

/* Beskrivningarna är våra egna — källsidan har bara rubrik och "Klicka här". */
export const formular: Formular[] = [
  {
    titel: t("Hälsodeklaration Kvinna", "Health declaration – Women", "الإقرار الصحي – نساء"),
    text: t(
      "Fyll i inför ditt besök så hinner vi gå igenom din historik i lugn och ro.",
      "Fill in before your visit so we can review your history without rushing.",
      "املئيه قبل زيارتك حتى نراجع تاريخك الصحي بهدوء ورويّة.",
    ),
    pdf: `${UPLOADS}/Halsodeklaration-Kvinna.pdf`,
  },
  {
    titel: t("Hälsodeklaration Man", "Health declaration – Men", "الإقرار الصحي – رجال"),
    text: t(
      "För dig som kommer på andrologisk utredning eller fertilitetsutredning.",
      "For men coming for an andrological or fertility investigation.",
      "للرجال القادمين لفحوصات الذكورة أو الخصوبة.",
    ),
    pdf: `${UPLOADS}/Halsodeklaration-Man-1.pdf`,
  },
  {
    titel: t("Miktionslista", "Voiding diary", "سجل التبوّل"),
    text: t(
      "Underlag vid utredning av urinbesvär och inkontinens.",
      "Used when investigating urinary problems and incontinence.",
      "يُستخدم عند فحص مشاكل التبوّل وسلس البول.",
    ),
    pdf: `${UPLOADS}/Miktionslista.pdf`,
  },
  {
    titel: t("Klimakteriebesvär", "Menopause symptoms", "أعراض سن اليأس"),
    text: t(
      "Frågeformulär som hjälper oss bedöma dina besvär inför besöket.",
      "A questionnaire that helps us assess your symptoms before the visit.",
      "استبيان يساعدنا على تقييم أعراضك قبل الزيارة.",
    ),
    pdf: `${UPLOADS}/Frageformular-klimakteriebesvar.pdf`,
  },
];

export const gdprPdf =
  "https://gynrama.se/wp-content/uploads/2023/09/Personuppgiftspolicy-GynRaMa-AB-Ref.-23002A.pdf";
