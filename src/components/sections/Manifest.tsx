import Image from "next/image";
import { NoteTag, Pill } from "../ui";
import { bilder } from "@/content/gynrama";

export function Manifest() {
  return (
    <section
      id="om-oss"
      className="bg-gradient-to-b from-lavender-soft to-lavender-mist"
    >
      <div className="mx-auto max-w-[1240px] px-6 py-24 lg:py-32">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_auto]">
          <div>
            <h2 className="max-w-[17ch] text-[clamp(2.2rem,4.2vw,3.6rem)] text-ink">
              Vi vet att gynekologiska besök kan väcka både frågor och oro.
            </h2>
            <p className="mt-7 max-w-[42ch] text-[17px] leading-relaxed text-ink/75">
              Därför lägger vi stor vikt vid att du ska känna dig trygg, sedd
              och lyssnad på – från första kontakt till avslutat besök.
            </p>
            <div className="mt-8">
              <Pill href="#boka" tone="lime">
                Boka tid
              </Pill>
            </div>
          </div>

          <div className="relative lg:w-[360px]">
            <Image
              src={bilder.omOss}
              alt="Specialistläkare i vit rock"
              width={720}
              height={960}
              className="h-[440px] w-full rounded-card object-cover"
            />
            {/* Platshållarbild — texten får inte namnge en verklig läkare */}
            <NoteTag className="-bottom-4 left-6">Välkommen!</NoteTag>
          </div>
        </div>

        {/* Lavendelkortet — mallens "Hi. I'm Anna."-block */}
        <div className="mt-16 grid gap-6 rounded-card bg-lavender p-6 lg:mt-20 lg:grid-cols-[280px_1fr] lg:p-8">
          <Image
            src={bilder.kort1}
            alt="Mjuka pionblad i varma toner"
            width={560}
            height={560}
            className="h-full min-h-[240px] w-full rounded-[18px] object-cover"
          />

          <div className="flex flex-col justify-center">
            <h3 className="text-[clamp(1.8rem,2.6vw,2.4rem)] text-ink">
              Världskända doktorer.
            </h3>
            <p className="mt-4 max-w-[54ch] text-[16px] leading-relaxed text-ink/75">
              Professor Mats Brännström och docent Randa Akouri ligger bakom
              livmodertransplantationen som ledde till att världens första barn
              föddes 2014. GynRaMa är en privat gynekologklinik i Göteborg som
              startade hösten 2022.
            </p>

            <div className="mt-7 h-px w-full max-w-[420px] bg-ink/20" />

            {/* Statistikkorten från Dribbble-varianten — med riktiga siffror */}
            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:max-w-[420px]">
              <div className="rounded-[18px] bg-lime p-5">
                <p className="text-[13px] text-ink/60">Världens första</p>
                <p className="mt-6 font-serif text-[34px] leading-none text-ink">
                  2014
                </p>
                <p className="mt-1 text-[13px] text-ink/70">
                  barn efter livmodertransplantation
                </p>
              </div>
              <div className="rounded-[18px] bg-paper p-5">
                <p className="text-[13px] text-ink/60">Ingen remiss</p>
                <p className="mt-6 font-serif text-[34px] leading-none text-ink">
                  0
                </p>
                <p className="mt-1 text-[13px] text-ink/70">väntetid till besök</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
