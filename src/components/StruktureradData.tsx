import { kontakt, lakare } from "@/content/gynrama";
import { SAJT_URL } from "@/seo";

/**
 * JSON-LD (schema.org) för kliniken — ger Google underlag för kunskapspanelen:
 * MedicalClinic med adress, öppettider och kontakt, plus läkarna som Physician.
 *
 * Uppgifterna hämtas ur content-filerna så de aldrig kan divergera från det
 * sidorna visar (namn/titlar följer byggets språk — det är korrekt, varje
 * språkversion beskriver sig på sitt språk). Tiderna i
 * openingHoursSpecification måste dock uppdateras HÄR om kliniken ändrar
 * öppettider igen — de är strukturerade fält, inte fritext ur kontakt.oppet.
 *
 * Renderas i layouten = på varje sida. Verkningslös sålänge sajten är
 * noindex, men redo för lanseringen.
 */
export function StruktureradData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": `${SAJT_URL}/#klinik`,
    name: "GynRaMa AB",
    url: SAJT_URL,
    logo: `${SAJT_URL}/gynrama-logo.svg`,
    image: `${SAJT_URL}/og-bild.jpg`,
    telephone: "+46 31 232 122",
    email: kontakt.epost,
    medicalSpecialty: "Gynecologic",
    address: {
      "@type": "PostalAddress",
      streetAddress: kontakt.adress,
      postalCode: "416 64",
      addressLocality: "Göteborg",
      addressCountry: "SE",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:30",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "16:00",
      },
    ],
    sameAs: [kontakt.facebook, kontakt.instagram],
    employee: lakare.map((l) => ({
      "@type": "Physician",
      name: l.namn,
      jobTitle: l.titel,
      worksFor: { "@id": `${SAJT_URL}/#klinik` },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
