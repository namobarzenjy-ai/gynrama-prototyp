"use client";

import { useState } from "react";
import { t } from "@/i18n";
import { laggTill, oppnaKorgen } from "@/varukorg";
import { Antalsvaljare, PaseIkon } from "./Varukorg";

/**
 * Köpknappen. Efter tillägg fälls varukorgen ut — tydligaste kvittot på att
 * något hände, och vägen till kassan ligger direkt under tummen.
 *
 * "kort" = katalogkortet (en i taget), "sida" = produktsidan (med antal).
 * Slutsålda varor (kanKopas=false, se webshop.ts) får en avstängd knapp.
 */
export function LaggIKorgen({
  slug,
  namn,
  kanKopas,
  variant = "kort",
}: {
  slug: string;
  namn: string;
  kanKopas: boolean;
  variant?: "kort" | "sida";
}) {
  const [antal, setAntal] = useState(1);

  if (!kanKopas) {
    return (
      <span
        className={`inline-flex items-center justify-center rounded-pill border border-ink/15 text-ink/55 ${
          variant === "kort"
            ? "w-full px-[22px] py-[12px] text-[15px] leading-none"
            : "min-h-[54px] px-[25px] text-[17px]"
        }`}
      >
        {t("Tillfälligt slut", "Temporarily out of stock", "غير متوفر مؤقتاً")}
      </span>
    );
  }

  const lagg = () => {
    laggTill(slug, variant === "sida" ? antal : 1);
    setAntal(1);
    oppnaKorgen();
  };

  if (variant === "kort") {
    return (
      <button
        type="button"
        onClick={lagg}
        className="inline-flex w-full items-center justify-center gap-2 rounded-pill bg-lila px-[22px] py-[13px] text-[15px] leading-none text-white transition-colors hover:bg-lila-deep"
      >
        <PaseIkon className="size-[15px]" />
        {t("Lägg i varukorgen", "Add to cart", "أضيفي إلى السلة")}
      </button>
    );
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <Antalsvaljare antal={antal} onAndra={setAntal} namn={namn} />
      <button
        type="button"
        onClick={lagg}
        className="inline-flex min-h-[54px] flex-1 items-center justify-center gap-2.5 rounded-pill bg-lila px-[25px] text-[18px] font-medium leading-none whitespace-nowrap text-white transition-colors hover:bg-lila-deep sm:flex-none"
      >
        <PaseIkon className="size-[18px]" />
        {t("Lägg i varukorgen", "Add to cart", "أضيفي إلى السلة")}
      </button>
    </div>
  );
}
