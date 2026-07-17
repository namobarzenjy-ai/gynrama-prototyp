/**
 * Formulär & länkar — hämtat från https://gynrama.se/formular-och-lankar/ 2026-07-17.
 * PDF:erna ligger kvar på klinikens WordPress; varje filnamn matchar sin rubrik.
 */

export type Formular = {
  titel: string;
  text: string;
  pdf: string;
};

export const formularIngress = `Välkommen till vår samlingssida för viktiga formulär och användbara länkar. Här hittar du dokument som underlättar din kontakt med oss, samt information som kan vara bra att ta del av inför utredning eller behandling.`;

const UPLOADS = "https://gynrama.se/wp-content/uploads/2025/04";

/* Beskrivningarna är våra egna — källsidan har bara rubrik och "Klicka här". */
export const formular: Formular[] = [
  {
    titel: "Hälsodeklaration Kvinna",
    text: "Fyll i inför ditt besök så hinner vi gå igenom din historik i lugn och ro.",
    pdf: `${UPLOADS}/Halsodeklaration-Kvinna.pdf`,
  },
  {
    titel: "Hälsodeklaration Man",
    text: "För dig som kommer på andrologisk utredning eller fertilitetsutredning.",
    pdf: `${UPLOADS}/Halsodeklaration-Man-1.pdf`,
  },
  {
    titel: "Miktionslista",
    text: "Underlag vid utredning av urinbesvär och inkontinens.",
    pdf: `${UPLOADS}/Miktionslista.pdf`,
  },
  {
    titel: "Klimakteriebesvär",
    text: "Frågeformulär som hjälper oss bedöma dina besvär inför besöket.",
    pdf: `${UPLOADS}/Frageformular-klimakteriebesvar.pdf`,
  },
];

export const gdprPdf =
  "https://gynrama.se/wp-content/uploads/2023/09/Personuppgiftspolicy-GynRaMa-AB-Ref.-23002A.pdf";
