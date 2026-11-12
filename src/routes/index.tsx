import React, { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import heroUrl from "./assets/hero-vehicle.jpg";
import globalUrl from "./assets/adversiq-hero-emerald-hypercar.jpg";
import methodBackgroundUrl from "./assets/cross-border-green-hypercar.jpg";
import fieldPhotoUrl from "./assets/be63a72ad81b27f2-image_20261112_111409.webp";
import feesUrl from "./assets/0c0c2f15d5012543-image_20261111_200315.webp";
import aboutUrl from "./assets/cd05e7186820a95e-image_20261111_182933.webp";

const PRODUCT_HREF = "https://assestvalue.vercel.app/";
const PRODUCT_NAME = "ADVERSIQ Global Valuation Advisory";

type Enquiry = { name: string; email: string; decision: string; message: string; service: string };

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

const shellStyle: React.CSSProperties = {
  boxSizing: "border-box",
  paddingTop: "var(--safe-area-inset-top)",
};
export const Route = createFileRoute("/")({ component: App });

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = React.useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("is-visible");
            io.disconnect();
          }
        });
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}

function GraniteStrip() {
  return <div aria-hidden="true" className="granite h-3 w-full" />;
}

function App() {
  const [service, setService] = useState("");
  const [form, setForm] = useState<Enquiry>({
    name: "",
    email: "",
    decision: "",
    message: "",
    service: "",
  });
  function chooseService(title: string) {
    setService(title);
    setForm((f) => ({ ...f, service: title, decision: f.decision || title }));
    scrollToId("contact");
  }

  function openEmail(row: Enquiry) {
    const subject = `Valuation enquiry — ${row.service || "ADVERSIQ"}`;
    const body = `Name: ${row.name}\nEmail: ${row.email}\nService: ${row.service}\nDecision ahead: ${row.decision}\n\nMessage:\n${row.message}`;
    const a = document.createElement("a");
    a.href = `mailto:brayden@adversiq.xyz?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    a.target = "_blank";
    a.rel = "noopener";
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    openEmail({ ...form, service: service || form.service });
  }

  const services = [
    {
      t: "Desktop evidence reviews",
      d: "Evidence and comparisons reviewed from records, images and documents supplied.",
      who: "Owners, buyers, sellers and brokers who need an informed view before a decision.",
      note: "A desktop review cannot verify physical condition, diagnostic results or hidden repairs.",
    },
    {
      t: "On-site physical inspections",
      d: "By arrangement, we inspect the vehicle and compare its observed specification and condition with available records.",
      who: "Owners, collectors and insurers who need an in-person assessment.",
      note: "Specialist mechanical or diagnostic testing is outside scope unless separately agreed.",
    },
    {
      t: "Cross-border valuation support",
      d: "We research relevant markets across borders and explain which comparisons inform the valuation opinion.",
      who: "Importers, exporters, brokers and advisers handling international vehicle decisions.",
      note: "Legal and customs application should be confirmed with qualified advisers. We cannot determine an authority's decision.",
    },
    {
      t: "Reports for legal, insurance & estate matters",
      d: "A reasoned report that states the agreed purpose, basis, evidence, assumptions and limitations.",
      who: "Insurers, lawyers, executors and parties to a valuation dispute.",
      note: "Report format and suitability depend on the intended use and the decision-maker's requirements.",
    },
  ];

  return (
    <div
      data-safe-area-inset-root
      style={shellStyle}
      className="site-shell min-h-screen w-full overflow-x-clip bg-[var(--bone)] text-[#F5F7FA]"
    >
      {/* TOP BAR — GRANITE */}
      <div className="granite flex min-h-[36px] items-center justify-center px-3 py-2 text-center">
        <p className="text-[12px] font-bold uppercase leading-relaxed tracking-[2.5px] text-[#F2EFE9]">
          Melbourne &nbsp;·&nbsp; Private Valuation Advisory &nbsp;·&nbsp; ABN 55 978 113 300
          &nbsp;·&nbsp; By Appointment Only
        </p>
      </div>

      {/* HEADER — transparent over hero, bone on scroll. Text only. */}
      <header
        data-safe-area-sticky-top
        style={{ top: "var(--safe-area-inset-top)" }}
        className="sticky z-50 border-b border-white/15 bg-[#090B0E]/95"
      >
        <div className="mx-auto flex min-h-[72px] max-w-[1240px] flex-wrap items-center gap-x-8 gap-y-1 px-4 py-2 sm:px-6 lg:flex-nowrap lg:py-0 lg:px-8">
          <a
            href={PRODUCT_HREF}
            target="_blank"
            rel="noopener"
            aria-label={PRODUCT_NAME}
            className="leading-none"
            style={{ color: "#F5F7FA" }}
          >
            <span className="serif block text-[26px] font-normal tracking-[6px]">ADVERSIQ</span>
            <span className="mt-1 block text-[12px] font-bold uppercase tracking-[0.12em] opacity-90">
              Global Valuation Advisory
            </span>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section
        id="top"
        className="granite relative -mt-[72px] flex min-h-[100vh] w-full flex-col justify-end overflow-hidden"
      >
        <img
          src={heroUrl}
          alt="Lime green hypercar drifting through a huge rainbow paint wave in a night city"
          className="absolute inset-0 h-full w-full object-cover object-[70%_center]"
        />
        <div className="granite-scrim absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-[1240px] px-4 pb-[120px] pt-[200px] sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-[680px]">
              <p className="eyebrow !text-[var(--gold)]">
                Independent specialist vehicle valuation · Melbourne · International
              </p>
              <h1 className="hero-serif mt-7 max-w-[780px] text-[clamp(60px,8vw,104px)] font-medium leading-[0.95] tracking-[-0.02em] text-white">
                Valuations for one-off and limited-production vehicles.
              </h1>
              <p className="mt-5 text-[16px] font-bold uppercase tracking-[0.18em] text-[var(--gold)]">
                Evidence in context
              </p>
              <p className="mt-7 max-w-[640px] text-[19px] leading-[1.8] text-white/90">
                Led by Melbourne-based valuer Brayden Walls, ADVERSIQ prepares detailed,
                evidence-led valuations of one-off, limited-production, coachbuilt and substantially
                transformed vehicles. Our reports establish what the vehicle is, how it differs
                from a standard example, and whether its specification, provenance, condition and
                market evidence support a distinct value.
              </p>
              <div className="mt-10 h-px w-[56px] bg-[var(--gold)]" aria-hidden="true" />
              <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-[13px] font-bold uppercase leading-relaxed tracking-[0.08em] text-white">
                <span>Two decades in sales</span>
                <span className="text-[var(--gold)]" aria-hidden="true">
                  ·
                </span>
                <span>Seven years in valuations</span>
                <span className="text-[var(--gold)]" aria-hidden="true">
                  ·
                </span>
                <span>Melbourne</span>
                <span className="text-[var(--gold)]" aria-hidden="true">
                  ·
                </span>
                <span>International market</span>
              </p>
            </div>
          </Reveal>
        </div>
        <p className="absolute bottom-8 left-4 text-[12px] italic leading-relaxed text-white/60 sm:left-6 lg:left-8">
          Market context informs the opinion; it does not guarantee a higher value.
        </p>
        <p className="vertical-text absolute bottom-8 right-5 hidden text-[12px] font-bold uppercase tracking-[0.22em] text-white/80 md:block">
          Adversiq — Est. Melbourne
        </p>
      </section>

      {/* WHO WE ARE, WHAT WE DO, WHO WE HELP */}
      <section className="bg-[var(--bone)] py-16 sm:py-20" aria-label="ADVERSIQ overview">
        <div className="mx-auto grid max-w-[1240px] gap-px border-y border-white/15 bg-white/15 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
          <article className="bg-[var(--paper)] p-7 sm:p-8">
            <p className="eyebrow">Who we are</p>
            <p className="mt-4 text-[16px] leading-[1.8] text-[var(--muted)]">
              An independent specialist valuation advisory led by Melbourne-based valuer Brayden
              Walls, with over 20 years in motor vehicle sales and more than seven years in
              specialist valuation practice.
            </p>
          </article>
          <article className="bg-[var(--paper)] p-7 sm:p-8">
            <p className="eyebrow">What we do</p>
            <p className="mt-4 text-[16px] leading-[1.8] text-[var(--muted)]">
              Identify and document exceptional vehicles, research relevant markets, and explain
              whether evidence supports a value beyond a standard example. Modifications alone do
              not establish a premium.
            </p>
          </article>
          <article className="bg-[var(--paper)] p-7 sm:p-8">
            <p className="eyebrow">Who we help</p>
            <p className="mt-4 text-[16px] leading-[1.8] text-[var(--muted)]">
              Owners and collectors substantiating what makes their vehicle distinct, plus buyers,
              brokers, insurers, lawyers, executors, importers and exporters making informed
              decisions.
            </p>
          </article>
        </div>
      </section>

      <GraniteStrip />

      {/* GLOBAL */}
      <section id="global" className="border-t border-[#D8D0BE] bg-[var(--bone)] py-[160px]">
        <div className="mx-auto grid max-w-[1240px] gap-[96px] px-4 sm:px-6 lg:grid-cols-12 lg:gap-[96px] lg:px-8">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-[112px]">
              <Reveal>
                <p className="eyebrow">Global Market Context</p>
                <h2 className="serif mt-6 text-[clamp(36px,4.8vw,60px)] font-normal leading-[1.0] tracking-[-0.02em] text-black">
                  Borderless assets. Uneven information.{" "}
                  <em className="italic text-[var(--gold-deep)]">Evidence-led</em> research.
                </h2>
                <p className="mt-7 text-[18px] leading-[1.8]">
                  Limited-production vehicles rarely fit simple price-guide comparisons. Where
                  local evidence is thin, we research relevant international transactions and
                  explain why each comparison does—or does not—apply.
                </p>
                <div className="mt-12 border-l border-l-[var(--gold)] p-8 pl-8">
                  <p className="serif text-[17px] italic leading-relaxed text-black">
                    One vehicle. More than one market.
                  </p>
                  <p className="mt-3 text-[15px] leading-relaxed text-[#5A564E]">
                    The right comparison depends on the vehicle and the question being answered.
                  </p>
                </div>
                <div className="mt-6 border border-white/15 bg-[var(--paper)] p-6">
                  <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-[var(--gold)]">
                    Beyond the standard specification
                  </p>
                  <p className="mt-3 text-[15px] leading-[1.8] text-[var(--muted)]">
                    Modifications and rarity do not automatically add value. We document what
                    changed, who completed the work and what records support it, then assess whether
                    market evidence recognises a premium, calls for different comparisons, or
                    supports no measurable uplift.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
          <div className="lg:col-span-7">
            <Reveal>
              <figure className="m-0 w-full">
                <div className="img-zoom border border-[var(--gold)]">
                  <img
                    src={globalUrl}
                    alt="Emerald hypercar against a colourful paint-splashed backdrop"
                    className="h-[72vh] min-h-[380px] w-full object-cover"
                  />
                </div>
                <figcaption className="caption mt-4">
                  International perspective — finding the relevant market for each vehicle.
                </figcaption>
              </figure>
              <div className="mt-12 border-t border-[#D8D0BE]">
                <div className="grid grid-cols-12 gap-4 border-b border-[#D8D0BE] py-6">
                  <p className="col-span-12 text-[13px] font-bold uppercase tracking-[0.14em] sm:col-span-4">
                    Supercars &amp; Hypercars
                  </p>
                  <p className="col-span-12 text-[15px] leading-relaxed sm:col-span-8">
                    Ferrari · Porsche · Mercedes-Benz · Aston Martin · Lamborghini
                  </p>
                </div>
                <div className="grid grid-cols-12 gap-4 border-b border-[#D8D0BE] py-6">
                  <p className="col-span-12 text-[13px] font-bold uppercase tracking-[0.14em] sm:col-span-4">
                    Coachbuilders
                  </p>
                  <p className="col-span-12 text-[15px] leading-relaxed sm:col-span-8">
                    Singer · Mansory · Brabus · Bespoke Builds
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <GraniteStrip />

      {/* FIELD NOTES — GRANITE */}
      <section id="notes" className="granite text-[#F2EFE9]">
        <div className="grid items-start gap-0 lg:grid-cols-[48%_52%]">
          <figure className="relative m-0 h-[58vh] w-full lg:sticky lg:top-0 lg:h-screen lg:min-h-[640px]">
            <div className="img-zoom absolute inset-0 border-b border-b-[var(--gold)] lg:border-b-0 lg:border-r lg:border-r-[var(--gold)]">
              <img
                src={fieldPhotoUrl}
                alt="Close rear-quarter view of a painted Porsche, showing its bodywork, wing, wheel, and provenance details"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
            </div>
          </figure>
          <div className="granite px-5 py-[96px] sm:px-8 lg:px-12 lg:py-[160px]">
            <Reveal>
              <p className="eyebrow !text-[var(--gold)]">Field Notes</p>
              <h2 className="serif mt-6 text-[clamp(34px,4vw,52px)] font-normal leading-[1.0] tracking-[-0.02em] text-[#F2EFE9]">
                Three factors shape{" "}
                <em className="italic text-[var(--gold)]">every opinion.</em>
              </h2>
              <p className="mt-6 text-[18px] leading-[1.8] text-[#EDEDEA]/90">
                Each has a distinct role in the analysis.
              </p>
            </Reveal>
            <Reveal>
              <div className="mt-12 border-t border-white/20">
                {[
                  ["MARKET", "Buyer demand and comparable transactions in the relevant market."],
                  [
                    "VEHICLE",
                    "Verified identity, specification, provenance, condition and documented changes.",
                  ],
                  [
                    "PURPOSE",
                    "The decision, valuation basis and effective date agreed for the assignment.",
                  ],
                ].map(([t, d]) => (
                  <div
                    key={t}
                    className="grid grid-cols-12 items-baseline gap-4 border-b border-white/20 py-6"
                  >
                    <h3 className="serif col-span-12 text-[20px] font-normal text-[#F2EFE9] sm:col-span-4">
                      {t}
                    </h3>
                    <p className="col-span-12 text-[15px] leading-relaxed text-[#EDEDEA]/70 sm:col-span-8">
                      {d}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-10 border-y border-[var(--gold)] py-6 text-center text-[clamp(18px,2.2vw,28px)] font-bold uppercase leading-snug tracking-[0.08em] text-[#F2EFE9]">
                Evidence in context
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <GraniteStrip />

      {/* METHOD */}
      <section id="method" className="relative isolate overflow-hidden py-[160px] text-white">
        <img
          src={methodBackgroundUrl}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-[#090B0E]/85" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-[96px] lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="eyebrow">Method</p>
                <h2 className="serif mt-6 text-[clamp(36px,4vw,52px)] font-normal leading-[1.0] tracking-[-0.02em] text-white">
                  From Question to <em className="italic text-[var(--gold-deep)]">Conclusion</em>
                </h2>
                <h3 className="serif mt-6 text-[clamp(24px,2.5vw,28px)] italic font-normal leading-[1.1] text-white">
                  A considered valuation has a clear point of reference.
                </h3>
                <div className="grid gap-8 md:grid-cols-2">
                  <p className="dropcap mt-7 text-[18px] leading-[1.8] text-white/85">
                    We first agree in writing on the intended use, valuation basis, relevant market
                    or markets, effective date, and scope. This keeps all research strictly tied to
                    the decision ahead.
                  </p>
                  <p className="mt-7 text-[18px] leading-[1.8] text-white/85">
                    Then we assess the vehicle as it exists today—its identity, specification,
                    provenance, condition, and significant changes—against the available evidence.
                  </p>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal>
                <div className="granite border border-[var(--gold)] p-12 text-[#F2EFE9]">
                  <p className="eyebrow !text-[var(--gold)]">Cross-Border Perspective</p>
                  <h3 className="serif mt-5 text-[26px] font-normal leading-tight">
                    Distinctive vehicles. A wider field of evidence.
                  </h3>
                  <p className="mt-6 text-[18px] leading-[1.8] text-[#EDEDEA]/90">
                    Market context is researched for the vehicle and the question at hand.
                  </p>
                  <p className="mt-7 text-[13px] font-bold uppercase leading-relaxed tracking-[0.14em] text-[#EDEDEA]/90">
                    For — Remote Buyers · Brokers · Collectors · Insurers · Import &amp; Customs ·
                    Legal &amp; Disputes · Estate
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
          <Reveal>
            <h3 className="serif mt-24 text-[clamp(32px,3.5vw,44px)] font-normal text-black">
              How We Assess the Evidence
            </h3>
            <div className="relative mt-10 grid gap-10 md:grid-cols-3">
              <div
                className="absolute left-0 right-0 top-[6px] hidden h-px bg-[#D8D0BE] md:block"
                aria-hidden="true"
              />
              {[
                [
                  "Define the brief",
                  "Agree the purpose, valuation basis, relevant market or markets, date, and scope.",
                ],
                [
                  "Understand the vehicle",
                  "Review identity, specification, provenance, condition, and significant restoration or modification.",
                ],
                [
                  "Assess and explain",
                  "Test relevant market evidence, then explain the reasoning, assumptions, and limitations.",
                ],
              ].map(([t, d]) => (
                <div key={t} className="relative border-t border-[#D8D0BE] pt-6 md:border-t-0">
                  <span
                    className="relative z-10 block h-[13px] w-[13px] rounded-full bg-[#C6A664]"
                    aria-hidden="true"
                  />
                  <h4 className="serif mt-4 text-[24px] font-normal text-black">{t}</h4>
                  <p className="mt-3 text-[18px] leading-[1.8]">{d}</p>
                </div>
              ))}
            </div>
            <p className="mt-10 max-w-[1100px] text-[13px] leading-relaxed text-[#5A564E]">
              Reports are prepared to an agreed scope. They may support review, but cannot guarantee
              admissibility or acceptance by a court, insurer, customs authority or other
              decision-maker. Applicable standards and requirements vary by jurisdiction and
              intended use.
            </p>
          </Reveal>
        </div>
      </section>

      <GraniteStrip />

      {/* SERVICES */}
      <section id="services" className="border-t border-[#D8D0BE] bg-[var(--bone)] py-[160px]">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-[900px] text-center">
              <p className="eyebrow">Services</p>
              <p className="mt-4 text-[13px] font-bold uppercase tracking-[0.14em] text-black">
                Support Matched to the Valuation Question
              </p>
              <h2 className="serif mt-6 text-[clamp(36px,4.5vw,56px)] font-normal leading-[1.0] tracking-[-0.02em] text-black">
                Four ways we support complex vehicle{" "}
                <em className="italic text-[var(--gold-deep)]">assessments.</em>
              </h2>
              <p className="mx-auto mt-5 max-w-[760px] text-[18px] leading-[1.8]">
                Select the service that best matches your question. Your choice will be added to the
                enquiry form.
              </p>
              {service && (
                <p className="mt-6 inline-block border-b border-[var(--gold)] pb-1 text-[14px] font-bold text-black">
                  Selected service: {service} — added to the enquiry form below.
                </p>
              )}
            </div>
          </Reveal>
          <div className="mt-16 border-t border-[#D8D0BE]">
            <div className="hidden grid-cols-12 gap-6 border-b border-[#D8D0BE] py-3 text-[12px] font-bold uppercase tracking-[0.14em] text-[#5A564E] md:grid">
              <p className="col-span-5">Service</p>
              <p className="col-span-3">For</p>
              <p className="col-span-4">Please note</p>
            </div>
            {services.map((s) => {
              const selected = service === s.t;
              return (
                <article
                  key={s.t}
                  className={`grid grid-cols-1 gap-4 border-b border-[#D8D0BE] border-l-2 px-3 py-12 transition-colors md:grid-cols-12 md:gap-6 ${selected ? "border-l-[#C6A664] bg-[#FFFEF7]" : "border-l-transparent hover:bg-[#EDE6D8] hover:border-l-[#C6A664]"}`}
                >
                  <div className="md:col-span-5">
                    <h3 className="serif text-[28px] font-normal leading-tight text-black">
                      {s.t}
                    </h3>
                    <p className="mt-3 text-[16px] leading-[1.8]">{s.d}</p>
                  </div>
                  <p className="serif text-[15px] italic leading-relaxed md:col-span-3">
                    For: {s.who}
                  </p>
                  <div className="md:col-span-4">
                    <p className="text-[13px] leading-relaxed text-[#5A564E]">{s.note}</p>
                    <button
                      onClick={() => chooseService(s.t)}
                      aria-pressed={selected}
                      className="text-link mt-5 text-left text-[14px] font-bold text-black hover:text-[#C6A664]"
                    >
                      {selected ? "Selected ✓" : "Use this service →"}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <GraniteStrip />

      {/* FEES */}
      <section id="fees" className="border-t border-[#D8D0BE] bg-[var(--bone)] py-[160px]">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto text-center">
              <p className="eyebrow">Fees</p>
              <p className="mt-4 text-[13px] font-bold uppercase tracking-[0.14em]">
                Fees, Governance &amp; Engagement
              </p>
              <h2 className="serif mx-auto mt-6 max-w-[900px] text-[clamp(36px,4.5vw,56px)] font-normal leading-[1.0] tracking-[-0.02em] text-black">
                Transparent pricing.{" "}
                <em className="italic text-[var(--gold-deep)]">Uncompromising rigor.</em>
              </h2>
              <p className="mx-auto mt-6 max-w-[720px] text-[18px] leading-[1.8]">
                All assignments are quoted individually on a Price on Application (POA) basis.
                Quoted fees reflect each vehicle&apos;s provenance complexity, market research
                depth, geographical location, and evidentiary requirements. No research or travel
                commences until terms are agreed and confirmed in writing.
              </p>
              <button
                onClick={() => scrollToId("contact")}
                className="luxury-btn mt-9 px-5 py-5 text-[14px] uppercase"
              >
                Request a scoped quote
              </button>
            </div>
          </Reveal>
        </div>
        <Reveal className="mt-16">
          <figure className="m-0 w-full">
            <div className="img-zoom border-y border-[var(--gold)]">
              <img
                src={feesUrl}
                alt="Midnight blue and gold hypercar exploding through a paint wall"
                className="h-[62vh] min-h-[340px] w-full object-cover"
              />
            </div>
            <figcaption className="caption mx-auto mt-4 max-w-[1240px] px-4 text-center sm:px-6 lg:px-8">
              Private · Scoped · Confirmed in writing.
            </figcaption>
          </figure>
        </Reveal>
        <div className="mx-auto mt-16 max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <h3 className="serif text-[26px] font-normal text-black">What scope means in practice</h3>
          <div className="mt-8 grid gap-12 border-t border-[#D8D0BE] md:grid-cols-2">
            <div className="pt-2">
              <h4 className="text-[17px] font-bold text-black">Pricing model (POA)</h4>
              <ul className="mt-4 text-[18px] leading-[1.8]">
                <li className="border-t border-[#D8D0BE] py-3">
                  Quoted individually to reflect each vehicle&apos;s unique specifications and
                  market context
                </li>
                <li className="border-t border-[#D8D0BE] py-3">
                  Tailored collection schedules apply to multi-vehicle portfolios
                </li>
                <li className="border-y border-[#D8D0BE] py-3">
                  Fixed-fee guarantee once signed by both parties
                </li>
              </ul>
            </div>
            <div className="pt-2">
              <h4 className="text-[17px] font-bold text-black">Scope boundaries</h4>
              <ul className="mt-4 text-[18px] leading-[1.8]">
                <li className="border-t border-[#D8D0BE] py-3">
                  Included: agreed analytical scope, empirical market research, and the report
                </li>
                <li className="border-t border-[#D8D0BE] py-3">
                  Billed separately: international travel, specialist testing, and facility access
                  costs
                </li>
                <li className="border-y border-[#D8D0BE] py-3">
                  Any sale or placement service is scoped separately
                </li>
              </ul>
            </div>
          </div>
          <div className="granite mt-10 p-5 text-center text-[#F2EFE9] sm:p-5">
            <p className="text-[18px] leading-[1.8]">
              Structured retainer and payment terms: engagement operates on a transparent 30%
              non-refundable deposit upon written execution, with the remaining 70% balance due upon
              completion and cleared prior to formal document release.
            </p>
          </div>
        </div>
      </section>

      <GraniteStrip />

      {/* ABOUT */}
      <section
        id="about"
        className="grid items-stretch border-t border-[#D8D0BE] bg-[var(--bone)] lg:grid-cols-2"
      >
        <figure className="m-0 w-full">
          <div className="img-zoom border-b border-b-[var(--gold)] lg:border-b-0 lg:border-r lg:border-r-[var(--gold)]">
            <img
              src={aboutUrl}
              alt="300SL Gullwing door shut line and side gills"
              className="h-[84vh] min-h-[520px] w-full object-cover"
            />
          </div>
          <p className="caption px-4 py-4 sm:px-6">300SL Gullwing — Detail. Melbourne.</p>
        </figure>
        <div className="px-6 py-[72px] sm:px-10 lg:px-[72px] lg:py-[72px]">
          <Reveal>
            <p className="eyebrow">About Brayden Walls / Melbourne</p>
            <h2 className="serif mt-6 text-[clamp(32px,3.8vw,48px)] font-normal leading-[1.08] tracking-[-0.02em] text-black">
              Vehicle market experience, applied to{" "}
              <em className="italic text-[var(--gold-deep)]">specialist</em> assignments.
            </h2>
            <p className="mt-6 text-[18px] leading-[1.8]">
              We take the time to understand the decision you need to make, what matters to you, and
              the story this vehicle carries.
            </p>
            <blockquote className="hero-serif mt-8 border-l-2 border-[var(--gold)] pl-6 text-[clamp(28px,3vw,34px)] italic leading-snug text-black">
              “Every assignment has a person and a purpose behind it.”
            </blockquote>
            <p className="dropcap mt-7 text-[18px] leading-[1.8]">
              Brayden Walls is a Melbourne-based vehicle market and valuation professional with more
              than 20 years of motor vehicle sales experience and over seven years of specialized
              valuation practice. Having bought and sold vehicles across wholesale and retail tiers,
              he understands how the story on paper must connect directly to the physical vehicle
              and the people who trade them.
            </p>
            <p className="mt-5 text-[18px] leading-[1.8]">
              ADVERSIQ focuses on one-off, limited-production, coachbuilt and substantially
              transformed vehicles that standard comparisons may not adequately describe. Our
              detailed reports establish the vehicle&apos;s identity, specification, provenance,
              condition and documented changes, then assess relevant market evidence. We help
              owners and collectors substantiate what makes their vehicle distinct, while giving
              buyers, brokers, insurers, lawyers and executors a clear, independent explanation.
              We do not assume rarity or modifications automatically increase value; any premium
              must be supported by evidence.
            </p>
            <div className="mt-10 border-t border-[#D8D0BE]">
              <p className="flex gap-3 border-b border-[#D8D0BE] py-4 text-[15px] leading-relaxed">
                <span className="text-[var(--gold-deep)]" aria-hidden="true">
                  —
                </span>
                More than 20 years of motor vehicle sales experience
              </p>
              <p className="flex gap-3 border-b border-[#D8D0BE] py-4 text-[15px] leading-relaxed">
                <span className="text-[var(--gold-deep)]" aria-hidden="true">
                  —
                </span>
                Over seven years of specialized valuation practice
              </p>
              <p className="flex gap-3 border-b border-[#D8D0BE] py-4 text-[15px] leading-relaxed">
                <span className="text-[var(--gold-deep)]" aria-hidden="true">
                  —
                </span>
                Wholesale and retail experience, applied to specialist assignments
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <GraniteStrip />

      {/* CONTACT — GRANITE */}
      <section id="contact" className="granite px-5 py-[160px] text-[#F2EFE9] sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-[1240px] gap-[96px] lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow !text-[var(--gold)]">Begin a Conversation</p>
              <h2 className="serif mt-6 text-[clamp(36px,4.5vw,56px)] font-normal leading-[1.08] tracking-[-0.02em]">
                Tell us about the vehicle—and{" "}
                <em className="italic text-[var(--gold)]">the decision</em> ahead.
              </h2>
              <p className="mt-6 max-w-[620px] text-[18px] leading-[1.8] text-[#EDEDEA]/90">
                You do not need to have every vehicle detail ready. A short note about what prompted
                the valuation, the decision ahead and any timing is enough to start. We can clarify
                the rest together.
              </p>
              <div className="mt-12 border-t border-white/20">
                <div className="grid grid-cols-12 gap-4 border-b border-white/20 py-5">
                  <p className="col-span-4 text-[12px] font-bold uppercase tracking-[0.14em] text-[var(--gold)]">
                    Email
                  </p>
                  <p className="col-span-8 break-words text-[15px] leading-relaxed">
                    <a href="mailto:brayden@adversiq.xyz" className="underline">
                      brayden@adversiq.xyz
                    </a>
                  </p>
                </div>
                <div className="grid grid-cols-12 gap-4 border-b border-white/20 py-5">
                  <p className="col-span-4 text-[12px] font-bold uppercase tracking-[0.14em] text-[var(--gold)]">
                    Service location
                  </p>
                  <p className="col-span-8 text-[15px] leading-relaxed">
                    Box Hill South, Victoria, Australia
                  </p>
                </div>
                <div className="grid grid-cols-12 gap-4 border-b border-white/20 py-5">
                  <p className="col-span-4 text-[12px] font-bold uppercase tracking-[0.14em] text-[var(--gold)]">
                    Report writing
                  </p>
                  <p className="col-span-8 text-[15px] leading-relaxed">
                    Reports are written in the Philippines.
                  </p>
                </div>
                <div className="grid grid-cols-12 gap-4 border-b border-white/20 py-5">
                  <p className="col-span-4 text-[12px] font-bold uppercase tracking-[0.14em] text-[var(--gold)]">
                    Phone
                  </p>
                  <p className="col-span-8 text-[15px] leading-relaxed">
                    <a href="tel:+639608354283" className="underline">
                      +63 960 835 4283
                    </a>
                  </p>
                </div>
                <a
                  className="mt-5 inline-block text-[14px] text-[#EDEDEA]/70 underline underline-offset-4"
                  href="/terms"
                >
                  Terms of Service &amp; Privacy
                </a>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <form onSubmit={submit} className="bg-[var(--bone)] p-7 text-black sm:p-14">
              <h3 className="serif text-[28px] font-normal">Start an enquiry</h3>
              <p className="mt-2 text-[15px] text-[#5A564E]">
                Your email app will open with these details included. This website does not store
                your enquiry.
              </p>
              {service && (
                <p className="mt-4 border-b border-[var(--gold)] pb-2 text-[14px] font-bold">
                  Selected service: {service}
                </p>
              )}
              <label className="mt-7 block text-[12px] font-bold uppercase tracking-[0.14em]">
                Name
                <input
                  className="field-input mt-2 normal-case tracking-normal"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your full name"
                  autoComplete="name"
                  required
                />
              </label>
              <label className="mt-5 block text-[12px] font-bold uppercase tracking-[0.14em]">
                Email
                <input
                  className="field-input mt-2 normal-case tracking-normal"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                />
              </label>
              <label className="mt-5 block text-[12px] font-bold uppercase tracking-[0.14em]">
                Service
                <select
                  className="field-input mt-2 normal-case tracking-normal"
                  value={service}
                  onChange={(e) => {
                    setService(e.target.value);
                    setForm((f) => ({ ...f, service: e.target.value }));
                  }}
                >
                  <option value="">Select a service</option>
                  {services.map((s) => (
                    <option key={s.t} value={s.t}>
                      {s.t}
                    </option>
                  ))}
                </select>
              </label>
              <label className="mt-5 block text-[12px] font-bold uppercase tracking-[0.14em]">
                Decision ahead
                <input
                  className="field-input mt-2 normal-case tracking-normal"
                  value={form.decision}
                  onChange={(e) => setForm({ ...form, decision: e.target.value })}
                  placeholder="Purchase, insurance, estate, import…"
                />
              </label>
              <label className="mt-5 block text-[12px] font-bold uppercase tracking-[0.14em]">
                Message
                <textarea
                  className="field-input mt-2 min-h-[130px] resize-y normal-case tracking-normal"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us about the vehicle and the decision ahead."
                  required
                />
              </label>
              <button
                type="submit"
                className="luxury-btn mt-7 w-full px-5 py-5 text-[14px] uppercase"
              >
                Continue by email
              </button>
              <p className="mt-4 text-[12px] leading-relaxed text-[#5A564E]">
                Confidential. No obligation. Replies within one business day.
              </p>
            </form>
          </div>
        </div>
      </section>

      <GraniteStrip />

      <footer className="granite border-t border-white/10 px-4 py-10 text-center text-[#F2EFE9] sm:px-6 lg:px-8">
        <p className="serif text-[clamp(42px,7vw,96px)] leading-none tracking-[10px]">ADVERSIQ</p>
        <p className="mx-auto mt-6 max-w-[900px] text-[12px] uppercase leading-[1.9] tracking-[0.12em]">
          brayden@adversiq.xyz — +63 960 835 4283 — Box Hill South, Victoria, Australia — Reports
          written in the Philippines — ABN 55 978 113 300
        </p>
        <p className="mt-4 text-[12px] uppercase tracking-[0.12em]">
          <a href={PRODUCT_HREF} target="_blank" rel="noopener" className="underline">
            {PRODUCT_NAME}
          </a>
        </p>
      </footer>
    </div>
  );
}
