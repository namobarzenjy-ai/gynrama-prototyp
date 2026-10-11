/**
 * Varukorgen. Ligger i besökarens webbläsare (localStorage) fram till
 * kassan — då skickas hela korgen till klinikens WooCommerce med en
 * checkout-länk (/checkout-link/?products=id:antal,…) och betalningen sker
 * där, med de betalsätt kliniken redan har. Ordern hamnar i WordPress som
 * vanligt. Inga API-nycklar behövs.
 *
 * Checkout-länken ERSÄTTER korgen i WooCommerce (verifierat 2026-10-11),
 * så korgen här är facit. Slutsålda varor släpps av WooCommerce med ett
 * felmeddelande; vi släpper dem redan här (kanKopas, se webshop.ts).
 *
 * Korgen töms när besökaren lämnar sidan mot kassan. Den som kommer
 * tillbaka efter att ha betalat skulle annars ha samma varor kvar, och nästa
 * checkout-länk skulle ta med dem igen — dubbelköp. Istället visar panelen
 * att det finns en påbörjad beställning i kassan (paborjadKassa).
 */
import { useSyncExternalStore } from "react";
import { BUTIK_URL, hittaProdukt, type Produkt } from "@/content/webshop";

export type Rad = { slug: string; antal: number };
export type VisadRad = Rad & { produkt: Produkt; summa: number };

const NYCKEL = "gynrama-varukorg";
const KASSA_NYCKEL = "gynrama-till-kassan";
/** WooCommerce sparar korgen i 48 timmar — så länge visar vi hänvisningen. */
const KASSA_GILTIG_MS = 48 * 60 * 60 * 1000;
/** Samma tomma lista varje gång — useSyncExternalStore kräver stabil referens. */
const TOM: Rad[] = [];

let rader: Rad[] = TOM;
let laddad = false;
const lyssnare = new Set<() => void>();

function las(): Rad[] {
  try {
    const v: unknown = JSON.parse(localStorage.getItem(NYCKEL) ?? "[]");
    if (!Array.isArray(v)) return TOM;
    // Släng rader för produkter som inte längre finns eller inte går att köpa
    return v.filter(
      (r): r is Rad =>
        typeof r?.slug === "string" &&
        Number.isInteger(r?.antal) &&
        r.antal > 0 &&
        hittaProdukt(r.slug)?.kanKopas === true,
    );
  } catch {
    return TOM;
  }
}

const meddela = () => lyssnare.forEach((fn) => fn());

function andra(nya: Rad[]) {
  rader = nya;
  try {
    localStorage.setItem(NYCKEL, JSON.stringify(nya));
  } catch {
    // Privat läge eller blockerad lagring: korgen lever bara i fliken
  }
  meddela();
}

function prenumerera(fn: () => void) {
  lyssnare.add(fn);
  // Håll korgen i synk mellan flikar
  const lagring = (e: StorageEvent) => {
    if (e.key !== NYCKEL && e.key !== KASSA_NYCKEL) return;
    rader = las();
    meddela();
  };
  window.addEventListener("storage", lagring);
  return () => {
    lyssnare.delete(fn);
    window.removeEventListener("storage", lagring);
  };
}

function hamta(): Rad[] {
  if (!laddad) {
    rader = las();
    laddad = true;
  }
  return rader;
}

function harPaborjadKassa(): boolean {
  try {
    const nar = Number(localStorage.getItem(KASSA_NYCKEL));
    return nar > 0 && Date.now() - nar < KASSA_GILTIG_MS;
  } catch {
    return false;
  }
}

/**
 * Korgens rader med produkt och radsumma. Servern (och första
 * hydreringen) ser alltid en tom korg — innehållet dyker upp först i
 * webbläsaren, så statiska sidor aldrig hydrerar fel.
 */
export function useVarukorg() {
  const lista = useSyncExternalStore(prenumerera, hamta, () => TOM);
  const paborjadKassa = useSyncExternalStore(prenumerera, harPaborjadKassa, () => false);
  const visade: VisadRad[] = lista.map((r) => {
    const produkt = hittaProdukt(r.slug)!;
    return { ...r, produkt, summa: produkt.belopp * r.antal };
  });
  return {
    rader: visade,
    antal: visade.reduce((s, r) => s + r.antal, 0),
    summa: visade.reduce((s, r) => s + r.summa, 0),
    /** Besökaren har gått till kassan (senaste 48 h) och korgen tömdes då. */
    paborjadKassa,
  };
}

export function laggTill(slug: string, antal = 1) {
  if (!hittaProdukt(slug)?.kanKopas) return;
  const finns = hamta().find((r) => r.slug === slug);
  andra(
    finns
      ? hamta().map((r) =>
          r.slug === slug ? { ...r, antal: r.antal + antal } : r,
        )
      : [...hamta(), { slug, antal }],
  );
}

export function sattAntal(slug: string, antal: number) {
  andra(
    antal <= 0
      ? hamta().filter((r) => r.slug !== slug)
      : hamta().map((r) => (r.slug === slug ? { ...r, antal } : r)),
  );
}

export function tomKorgen() {
  andra(TOM);
}

/** Checkout-länken till WooCommerce för hela korgen. */
export function kassaUrl(lista: VisadRad[]): string {
  const varor = lista
    .filter((r) => r.produkt.wcId)
    .map((r) => `${r.produkt.wcId}:${r.antal}`)
    .join(",");
  return `${BUTIK_URL}/checkout-link/?products=${varor}`;
}

/** Klinikens egen kassa — dit en påbörjad beställning hänvisas. */
export const KASSA_URL = `${BUTIK_URL}/kassa/`;

/**
 * Anropas när besökaren klickar sig till kassan. Korgen töms först när
 * sidan faktiskt lämnas (pagehide) — inte vid klicket, så panelen inte
 * blinkar tom under laddningen, och inget töms om navigeringen avbryts.
 */
export function lamnaTillKassan() {
  window.addEventListener(
    "pagehide",
    () => {
      try {
        localStorage.setItem(KASSA_NYCKEL, String(Date.now()));
      } catch {}
      tomKorgen();
    },
    { once: true },
  );
}

/** Öppnar varukorgspanelen från var som helst på sidan. */
export const OPPNA_KORGEN = "gynrama:oppna-korgen";
export function oppnaKorgen() {
  window.dispatchEvent(new Event(OPPNA_KORGEN));
}
