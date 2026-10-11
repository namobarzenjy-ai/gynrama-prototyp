"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { t } from "@/i18n";
import { formateraPris, produktUrl, webshopFakta } from "@/content/webshop";
import {
  KASSA_URL,
  OPPNA_KORGEN,
  kassaUrl,
  lamnaTillKassan,
  sattAntal,
  useVarukorg,
  type VisadRad,
} from "@/varukorg";
import { Check } from "./ui";

/**
 * Varukorgen: ikon i headern + panel som fälls ut från sidan. "Till kassan"
 * skickar korgen till klinikens WooCommerce-kassa, se varukorg.ts.
 *
 * Panelen är en native <dialog> — fokusfälla, Esc och bakgrund följer med
 * gratis. Den glider in från radslutet, alltså från vänster på arabiska.
 *
 * Från 1100px: ikonen syns alltid i butiken, på övriga sidor bara när
 * korgen har något i sig — headern på klinikens vanliga sidor ändras inte
 * för den som aldrig handlat. Under 1100px ryms ingen ikon till: på mobil
 * tar loggan (140px) och tre knappar hela 360px, och mellan 1024 och
 * ~1050px knuffar ikonen ut loggan ur desktopheadern (uppmätt). Där visas
 * korgen istället som en fast list längst ned i butiken när den inte är tom.
 */
export function Varukorg({ butik = false }: { butik?: boolean }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const { rader, antal, summa, paborjadKassa } = useVarukorg();
  const visaList = butik && antal > 0;

  useEffect(() => {
    const oppna = () => dialog.current?.showModal();
    window.addEventListener(OPPNA_KORGEN, oppna);
    return () => window.removeEventListener(OPPNA_KORGEN, oppna);
  }, []);

  // Listen är fast — ge sidan luft under footern så att inget hamnar bakom den
  useEffect(() => {
    document.body.classList.toggle("har-korglist", visaList);
    return () => document.body.classList.remove("har-korglist");
  }, [visaList]);

  const stang = () => dialog.current?.close();
  const etikett = t("Varukorg", "Cart", "سلة التسوق");

  return (
    <>
      {(butik || antal > 0) && (
        <button
          type="button"
          onClick={() => dialog.current?.showModal()}
          aria-label={`${etikett}, ${antal} ${t("varor", "items", "منتجات")}`}
          className="relative hidden size-11 place-items-center rounded-full text-ink transition-colors hover:bg-lavender/60 min-[1100px]:grid"
        >
          <PaseIkon className="size-[19px]" />
          {antal > 0 && (
            <span className="absolute top-0.5 end-0.5 grid h-[18px] min-w-[18px] place-items-center rounded-pill bg-lila px-1 text-[11px] leading-none font-medium text-white">
              {antal}
            </span>
          )}
        </button>
      )}

      {/* Portal: headerns backdrop-blur gör den till containing block för
          position:fixed — inne i headern skulle listen hamna i headerkanten.
          (Dialogen klarar sig, den ligger i top layer.) Listen visas bara
          i webbläsaren, så document finns alltid här. */}
      {visaList &&
        createPortal(
          <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-paper/95 p-3 backdrop-blur-md min-[1100px]:hidden">
            <button
              type="button"
              onClick={() => dialog.current?.showModal()}
              className="flex min-h-12 w-full items-center justify-between gap-3 rounded-pill bg-lila px-5 text-[16px] font-medium text-white transition-colors hover:bg-lila-deep"
            >
              <span className="flex items-center gap-2.5">
                <PaseIkon className="size-[18px]" />
                {etikett} · {antal}
              </span>
              <span>{formateraPris(summa)}</span>
            </button>
          </div>,
          document.body,
        )}

      {/* Renderas bara där korgen kan öppnas — annars skulle panelens
          innehåll ligga dolt i HTML:en på klinikens alla sidor */}
      {(butik || antal > 0) && (
        <dialog
          ref={dialog}
          aria-label={etikett}
          // Klick på bakgrunden (utanför panelens innehåll) stänger
          onClick={(e) => e.target === dialog.current && stang()}
          className="ms-auto me-0 my-0 h-dvh max-h-none w-full max-w-[440px] bg-paper p-0 text-ink shadow-[0_0_60px_rgba(31,31,40,0.3)] transition-transform duration-300 backdrop:bg-ink/45 starting:open:translate-x-full rtl:starting:open:-translate-x-full"
        >
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between border-b border-ink/10 px-6 py-5">
              {/* p, inte h2: dialogen ligger i HTML:en före sidans h1 och ska
                  inte räknas in i sidans rubrikstruktur (aria-label räcker) */}
              <p className="font-serif text-[28px] leading-none">
                {etikett}
                {antal > 0 && (
                  <span className="ms-2 align-middle font-sans text-[15px] text-ink/50">
                    ({antal})
                  </span>
                )}
              </p>
              <button
                type="button"
                onClick={stang}
                aria-label={t("Stäng varukorgen", "Close cart", "أغلقي السلة")}
                className="grid size-11 place-items-center rounded-full transition-colors hover:bg-lavender/60"
              >
                <svg viewBox="0 0 16 16" className="size-[18px]" aria-hidden>
                  <path
                    d="M3 3l10 10M13 3L3 13"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            {rader.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-5 px-6 text-center">
                <span className="grid size-20 place-items-center rounded-full bg-lavender text-ink/60">
                  <PaseIkon className="size-8" />
                </span>
                <p className="text-[17px] text-ink/70">
                  {t("Din varukorg är tom.", "Your cart is empty.", "سلة التسوق فارغة.")}
                </p>
                <Link
                  href="/webshop"
                  onClick={stang}
                  className="rounded-pill bg-slate-deep px-[22px] py-[13px] text-[15px] leading-none text-white transition-colors hover:bg-ink"
                >
                  {t("Till webbshoppen", "Go to the shop", "إلى المتجر")}
                </Link>
                {/* Korgen töms när man går till kassan (se varukorg.ts) —
                    visa vägen tillbaka dit istället för en tom korg */}
                {paborjadKassa && (
                  <p className="mt-2 max-w-[30ch] text-[14px] leading-relaxed text-ink/60">
                    {t(
                      "Din senaste varukorg skickades till kassan.",
                      "Your last cart was sent to checkout.",
                      "أُرسلت سلتكِ الأخيرة إلى صفحة الدفع.",
                    )}{" "}
                    <a href={KASSA_URL} className="whitespace-nowrap text-ink underline underline-offset-4 hover:text-lila">
                      {t("Öppna kassan", "Open checkout", "افتحي صفحة الدفع")}
                    </a>
                  </p>
                )}
              </div>
            ) : (
              <>
                <ul className="flex-1 divide-y divide-ink/10 overflow-y-auto px-6">
                  {rader.map((r) => (
                    <KorgRad key={r.slug} rad={r} onNavigera={stang} />
                  ))}
                </ul>

                <div className="border-t border-ink/10 bg-white px-6 pt-5 pb-6">
                  <div className="flex items-baseline justify-between">
                    <span className="text-[16px]">
                      {t("Delsumma", "Subtotal", "المجموع الفرعي")}
                    </span>
                    <span className="font-serif text-[24px]">
                      {formateraPris(summa)}
                    </span>
                  </div>
                  <p className="mt-1 text-[13px] text-ink/55">
                    {t(
                      "Frakt läggs till i kassan.",
                      "Shipping is added at checkout.",
                      "تُضاف تكلفة الشحن عند الدفع.",
                    )}
                  </p>

                  {/* Vanlig <a>: kassan är klinikens WooCommerce, en annan sajt */}
                  <a
                    href={kassaUrl(rader)}
                    onClick={lamnaTillKassan}
                    className="mt-5 flex min-h-[54px] items-center justify-center rounded-pill bg-lila text-[17px] font-medium text-white transition-colors hover:bg-lila-deep"
                  >
                    {t("Till kassan", "Go to checkout", "إلى إتمام الشراء")}
                  </a>
                  <p className="mt-2 text-center text-[12px] text-ink/55">
                    {t(
                      "Du betalar i klinikens kassa på gynrama.se.",
                      "You pay in the clinic\u2019s checkout on gynrama.se.",
                      "تتم عملية الدفع في صفحة الدفع الخاصة بالعيادة على gynrama.se.",
                    )}
                  </p>
                  <button
                    type="button"
                    onClick={stang}
                    className="mt-2 flex min-h-11 w-full items-center justify-center text-[15px] text-ink/70 underline-offset-4 hover:text-ink hover:underline"
                  >
                    {t("Fortsätt handla", "Continue shopping", "تابعي التسوق")}
                  </button>

                  {/* Leverans och diskretion — betalningen (första faktan) hör till kassan */}
                  <ul className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-1.5">
                    {webshopFakta.slice(1).map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-1.5 text-[12px] text-ink/55"
                      >
                        <Check className="size-[11px]" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </div>
        </dialog>
      )}
    </>
  );
}

function KorgRad({ rad, onNavigera }: { rad: VisadRad; onNavigera: () => void }) {
  const { produkt, antal } = rad;
  return (
    <li className="flex gap-4 py-5">
      <Link
        href={produktUrl(produkt.slug)}
        onClick={onNavigera}
        className="shrink-0 rounded-[16px] bg-white p-2"
      >
        <Image
          src={produkt.bild}
          alt=""
          width={160}
          height={160}
          className="size-[68px] object-contain"
        />
      </Link>
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-start justify-between gap-3">
          <Link
            href={produktUrl(produkt.slug)}
            onClick={onNavigera}
            className="text-[15px] leading-snug hover:underline"
          >
            {produkt.namn}
          </Link>
          <span className="shrink-0 text-[15px] whitespace-nowrap">
            {formateraPris(rad.summa)}
          </span>
        </div>
        <span className="mt-0.5 text-[13px] text-ink/50">
          {produkt.pris} / {t("st", "each", "للقطعة")}
        </span>
        <div className="mt-auto flex items-center justify-between pt-3">
          {/* minsta 0: minus på sista exemplaret tar bort raden */}
          <Antalsvaljare
            antal={antal}
            onAndra={(n) => sattAntal(produkt.slug, n)}
            namn={produkt.namn}
            minsta={0}
            liten
          />
          <button
            type="button"
            onClick={() => sattAntal(produkt.slug, 0)}
            className="text-[13px] text-ink/55 underline-offset-4 hover:text-ink hover:underline"
          >
            {t("Ta bort", "Remove", "إزالة")}
          </button>
        </div>
      </div>
    </li>
  );
}

/** − 2 + — används i korgen och på produktsidan. */
export function Antalsvaljare({
  antal,
  onAndra,
  namn,
  minsta = 1,
  liten = false,
}: {
  antal: number;
  onAndra: (antal: number) => void;
  namn: string;
  minsta?: number;
  liten?: boolean;
}) {
  const knapp = `grid place-items-center rounded-full transition-colors hover:bg-lavender disabled:opacity-35 disabled:hover:bg-transparent ${
    liten ? "size-8" : "size-11"
  }`;
  return (
    <div
      className={`inline-flex items-center rounded-pill border border-ink/15 bg-white ${
        liten ? "p-0.5" : "p-1"
      }`}
    >
      <button
        type="button"
        onClick={() => onAndra(antal - 1)}
        disabled={antal <= minsta}
        aria-label={`${t("Minska antal", "Decrease quantity", "تقليل الكمية")}: ${namn}`}
        className={knapp}
      >
        <svg viewBox="0 0 16 16" className="size-3" aria-hidden>
          <path d="M3 8h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </button>
      <span
        aria-live="polite"
        className={`text-center tabular-nums ${liten ? "w-7 text-[14px]" : "w-9 text-[17px]"}`}
      >
        {antal}
      </span>
      <button
        type="button"
        onClick={() => onAndra(antal + 1)}
        aria-label={`${t("Öka antal", "Increase quantity", "زيادة الكمية")}: ${namn}`}
        className={knapp}
      >
        <svg viewBox="0 0 16 16" className="size-3" aria-hidden>
          <path d="M3 8h10M8 3v10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}

/** Varukorgsikon — en påse, linjerad som sajtens övriga ikoner. */
export function PaseIkon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M4.2 6.5h11.6l-.9 10.2a1.4 1.4 0 0 1-1.4 1.3H6.5a1.4 1.4 0 0 1-1.4-1.3z" />
      <path d="M7.2 8.8V5.6a2.8 2.8 0 0 1 5.6 0v3.2" />
    </svg>
  );
}
