import React, { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import heroUrl from "./assets/hero-vehicle.jpg";
import specialisationImageUrl from "./assets/specialisation-why.jpg";
import audienceImageUrl from "./assets/market-significance.webp";
import audienceBackdropUrl from "./assets/melbourne-coastal-vehicles.webp";
import specialisationSilhouetteUrl from "./assets/specialisation-silhouette.webp";
import worldwideSilhouetteUrl from "./assets/worldwide-silhouette.jpg";
import aboutUrl from "./assets/cd05e7186820a95e-image_20261111_182933.webp";
import contactImageUrl from "./assets/contact-vehicle.jpg";

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
      t: "Desktop Valuation",
      d: "Evidence and comparisons reviewed from records, images and documents supplied. Appropriate where an informed view is required before a decision, and physical verification is not the determining issue.",
      who: "Owners and decision-makers seeking an informed view from available records.",
      note: "A desktop review cannot verify physical condition, diagnostic results or hidden repairs.",
    },
    {
      t: "On-Site Valuation",
      d: "By arrangement, we inspect the vehicle and compare its observed specification and condition with available records.",
      who: "Owners, collectors, insurers or decision-makers who require an in-person assessment.",
      note: "Specialist mechanical or diagnostic testing is outside scope unless separately agreed.",
    },
  ];

  const vehicleAudiences = [
    {
      title: "High-net-worth collectors and enthusiasts",
      description:
        "Private collectors, owners of significant garages and collections, and people who commission or acquire vehicles of extreme scarcity, personalised specification and historical provenance.",
    },
    {
      title: "Blue-chip automotive investors",
      description:
        "Buyers and holders who treat limited-production, iconic models as long-term holdings and alternative assets, and require an independent basis for acquisition, insurance, estate or disposal decisions.",
    },
    {
      title: "Specialised brokers and sourcing firms",
      description:
        "Brokers and advisers who evaluate, restore, certify and place these vehicles based on factory originality, low mileage and complete documentation, and require an independent opinion to support a transaction.",
    },
    {
      title: "Brand-exclusive circles",
      description:
        "Owners and applicants within invitation-only, allocation-based programmes for bespoke and one-off builds, where provenance and eligibility history form part of the vehicle's story.",
    },
  ];

  const specialisationReasons = [
    {
      title: "01 — Comparisons may be scarce",
      paragraphs: [
        "For these vehicles, comparisons may be scarce, outdated or overseas, with transactions years apart. Two vehicles of the same model may warrant different values when their specification, provenance, condition or documented history differ.",
      ],
    },
    {
      title: "02 — A premium must be supported",
      paragraphs: [
        "Valuation is not a lookup; it is an exercise in evidence and judgement. Rarity or modification alone does not establish a premium. We assess whether provenance, specification, condition and market evidence support one, and say so when they do not. Market context informs the opinion; it does not guarantee a higher value.",
      ],
    },
  ];

  return (
    <div
      data-safe-area-inset-root
      style={shellStyle}
      className="site-shell min-h-screen w-full overflow-x-clip bg-[var(--bone)] text-[#F5F7FA]"
    >
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
        className="granite relative -mt-[72px] flex min-h-[100vh] w-full flex-col overflow-hidden"
      >
        <img
          src={heroUrl}
          alt="Lime-green supercar speeding through a city as a colorful paint wave bursts behind it"
          className="absolute inset-0 h-full w-full object-cover object-[70%_center]"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/10 to-black/35"
          aria-hidden="true"
        />
        <Reveal className="relative mx-auto grid w-full max-w-[1240px] flex-1 items-center px-4 pb-24 pt-36 sm:px-6 lg:grid-cols-12 lg:px-8 lg:pb-20 lg:pt-28">
          <div className="relative isolate bg-[#D8C43D] px-4 py-4 text-[#111111] shadow-2xl sm:px-6 lg:col-span-8 lg:-mr-4 lg:-translate-y-56 lg:bg-transparent lg:px-0 lg:py-0 lg:shadow-none">
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 z-[-1] hidden h-[76px] w-screen -translate-x-1/2 -translate-y-1/2 bg-[#D8C43D] lg:block"
            />
            <h1 className="hero-serif text-[clamp(25px,2.4vw,36px)] font-medium leading-tight tracking-[-0.02em] text-[#111111] lg:whitespace-nowrap">
              Valuations for one-off and limited-production vehicles.
            </h1>
          </div>
          <div
            className="border border-white/30 bg-[#090B0E]/65 p-5 shadow-2xl backdrop-blur-[2px] sm:p-8 lg:relative lg:z-10 lg:col-span-4 lg:p-9"
            style={{ textShadow: "0 2px 5px rgba(0, 0, 0, 0.85)" }}
          >
            <p className="eyebrow !text-[var(--gold)]">
              Independent specialist vehicle valuation. Melbourne. International.
            </p>
            <h2 className="serif mt-4 text-[25px] font-normal text-white">Evidence in context.</h2>
            <p className="mt-5 text-[16px] leading-[1.7] text-white/95 sm:text-[17px]">
              We specialise in understanding rare, one-off, limited and bespoke vehicles where
              normal valuation cannot do the work.
            </p>
            <div className="mt-6 h-px w-[56px] bg-[var(--gold)]" aria-hidden="true" />
            <p className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-2 text-[11px] font-bold uppercase leading-relaxed tracking-[0.07em] text-white sm:text-[12px]">
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
            <p className="mt-5 border-t border-white/20 pt-4 text-[12px] italic leading-relaxed text-white/75">
              Market context informs the opinion; it does not guarantee a higher value.
            </p>
          </div>
        </Reveal>
        <p className="vertical-text absolute bottom-8 right-5 hidden text-[12px] font-bold uppercase tracking-[0.22em] text-white/80 md:block">
          Adversiq. Est. Melbourne
        </p>
      </section>

      {/* SPECIALISATION */}
      <section
        className="relative isolate overflow-hidden bg-[var(--bone)] py-[112px] sm:py-[144px]"
        aria-label="What we specialise in"
      >
        <img
          src={specialisationSilhouetteUrl}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-[-24%] top-1/2 z-0 w-[145%] max-w-none -translate-y-1/2 grayscale opacity-[0.24] sm:right-[-12%] sm:w-[105%] lg:right-[-5%] lg:w-[82%] lg:max-w-[1100px]"
          style={{
            mixBlendMode: "screen",
            maskImage:
              "radial-gradient(ellipse at 62% 48%, #000 20%, rgba(0, 0, 0, 0.9) 54%, transparent 82%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at 62% 48%, #000 20%, rgba(0, 0, 0, 0.9) 54%, transparent 82%)",
          }}
        />
        <div className="relative z-10 mx-auto grid max-w-[1240px] gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-8">
            <Reveal>
              <p className="eyebrow">What we specialise in</p>
              <h2 className="serif mt-6 max-w-[900px] text-[clamp(36px,5vw,62px)] font-normal leading-[1.02] tracking-[-0.03em] text-black">
                We value the exception to the market.
              </h2>
              <p className="mt-7 max-w-[850px] text-[18px] leading-[1.8] text-[var(--muted)]">
                Ultra-rare hypercars, supercars and bespoke vehicles.
              </p>
              <p className="mt-5 max-w-[850px] text-[18px] leading-[1.8] text-[var(--muted)]">
                One-off builds, limited-production runs, coachbuilt commissions and substantially
                transformed vehicles. Built in tiny numbers, to a single client&apos;s specification
                or as a single example.
              </p>
              <p className="mt-5 max-w-[850px] text-[18px] leading-[1.8] text-[var(--muted)]">
                These vehicles cannot be understood by reference to a standard example.
                Specification, provenance, condition and documented history matter more than model
                year and mileage. A coachbuilt body, limited production run, factory special order,
                bespoke paint and trim commission, or properly documented transformation can change
                both the vehicle and the market that values it.
              </p>
            </Reveal>
          </div>
          <div className="flex items-end lg:col-span-4">
            <Reveal>
              <p className="border-l-2 border-[var(--gold)] pl-6 text-[22px] leading-snug text-[var(--text)]">
                This is our sole focus. By design, we do not value the general market.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <GraniteStrip />

      <section
        id="why-normal-valuation"
        className="border-t border-[#D8D0BE] bg-[var(--bone)] py-[120px] sm:py-[160px]"
      >
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="eyebrow">Why normal valuation cannot do this</p>
            <h2 className="serif mt-6 max-w-[980px] text-[clamp(40px,6vw,76px)] font-normal leading-[0.98] tracking-[-0.03em] text-black">
              Normal valuation relies on comparables.
            </h2>
            <p className="mt-6 max-w-[760px] text-[18px] leading-[1.8] text-[var(--muted)]">
              It works when many similar vehicles are available to compare. These vehicles require a
              closer, evidence-led assessment.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:items-stretch">
            <figure className="relative m-0 pt-4 pr-4 lg:col-span-5 lg:flex lg:flex-col lg:self-stretch">
              <div
                aria-hidden="true"
                className="absolute right-0 top-0 h-[52%] w-[72%] border-r-2 border-t-2 border-[var(--gold)]"
              />
              <div className="img-zoom relative z-10 border border-[var(--gold)] lg:flex-1">
                <img
                  src={specialisationImageUrl}
                  alt="Green supercar speeding through a city as colorful paint bursts behind it"
                  className="aspect-[4/3] w-full object-cover object-center lg:h-full lg:aspect-auto"
                />
              </div>
              <svg
                aria-hidden="true"
                viewBox="0 0 120 200"
                className="pointer-events-none absolute -right-8 top-1/2 z-20 hidden h-[180px] w-[108px] -translate-y-1/2 lg:block"
              >
                <path
                  d="M1 1 L119 100 L1 199 Z"
                  fill="var(--gold)"
                  fillOpacity="0.16"
                  stroke="var(--gold)"
                  strokeWidth="2"
                />
              </svg>
              <figcaption className="caption mt-4">
                Distinctive vehicles. A wider field of evidence.
              </figcaption>
            </figure>
            <div className="relative grid gap-y-10 pr-8 md:pr-10 lg:col-span-7">
              {specialisationReasons.map(({ title, paragraphs }) => (
                <article key={title} className="border-t border-[var(--gold)] pt-6">
                  <h3 className="serif text-[25px] font-normal leading-tight text-black">
                    {title}
                  </h3>
                  {paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="mt-4 text-[16px] leading-[1.8] text-[var(--muted)]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </article>
              ))}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-2 right-0 top-2 hidden w-4 md:block"
                style={{
                  backgroundImage:
                    "linear-gradient(to bottom, #f04438 0%, #ff9f1c 20%, #ffe14f 39%, #4ac779 58%, #2496e5 78%, #a54bc7 100%)",
                  clipPath:
                    "polygon(30% 0, 100% 2%, 68% 14%, 96% 25%, 46% 37%, 88% 49%, 40% 62%, 100% 76%, 28% 88%, 65% 100%, 0 98%, 22% 84%, 4% 72%, 31% 57%, 0 45%, 36% 30%, 6% 17%)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <GraniteStrip />

      {/* MARKET POSITION */}
      <section className="border-t border-[#D8D0BE] bg-[var(--bone)] py-[112px] sm:py-[144px]">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="eyebrow">Who values these vehicles</p>
                <h2 className="serif mt-6 text-[clamp(36px,4.5vw,56px)] font-normal leading-[1.02] tracking-[-0.02em] text-black">
                  What they represent changes the valuation.
                </h2>
                <p className="mt-6 text-[18px] leading-[1.8]">
                  These vehicles are valued by people who do not treat them as transport. They are
                  treated as rolling art, status symbols and alternative financial assets.
                </p>
                <p className="mt-5 text-[16px] leading-[1.8] text-[var(--muted)]">
                  That changes how value must be assessed. Provenance, originality, factory
                  documentation, complete records, low mileage and bespoke specification are central
                  to value. Gaps in records, non-factory changes or undocumented commissions can
                  materially alter the opinion.
                </p>
              </Reveal>
            </div>
            <figure className="granite relative m-0 min-h-[440px] overflow-hidden border border-[var(--gold)] sm:min-h-[520px] lg:col-span-5">
              <img
                src={audienceBackdropUrl}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover object-center opacity-20 grayscale"
                style={{ filter: "grayscale(1) brightness(1.5)", mixBlendMode: "screen" }}
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#090B0E]/75 via-[#090B0E]/15 to-transparent"
              />
              <p className="absolute left-5 top-5 z-10 max-w-[120px] text-[11px] font-bold uppercase leading-relaxed tracking-[0.18em] text-[var(--gold)]">
                Market significance
              </p>
              <div className="absolute bottom-5 right-5 z-10 w-[88%] border-l border-t border-[var(--gold)] bg-[#090B0E] p-2 sm:bottom-8 sm:right-8 sm:w-[82%]">
                <img
                  src={audienceImageUrl}
                  alt="Rear view of a black supercar with pink and yellow paint splashes behind it"
                  className="h-[240px] w-full object-cover object-center sm:h-[320px]"
                />
              </div>
            </figure>
          </div>
          <Reveal>
            <p className="mt-10 max-w-[900px] border-l-2 border-[var(--gold)] pl-6 text-[18px] leading-[1.8]">
              We understand this market. We do not sell into it, broker it or place vehicles. We
              provide the independent valuation that lets the people in it make a defensible
              decision.
            </p>
          </Reveal>
        </div>
      </section>

      <GraniteStrip />

      {/* CLIENTS */}
      <section
        id="audience"
        className="border-t border-[#D8D0BE] bg-[var(--bone)] py-[112px] sm:py-[144px]"
      >
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="eyebrow">Who we do it for</p>
            <h2 className="serif mt-6 max-w-[800px] text-[clamp(36px,4.5vw,56px)] font-normal leading-[1.02] tracking-[-0.02em] text-black">
              We provide valuations for:
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-x-10 gap-y-10 md:grid-cols-2">
            {vehicleAudiences.map(({ title, description }) => (
              <article key={title} className="border-t border-[var(--gold)] pt-5">
                <h3 className="serif text-[24px] font-normal leading-tight text-black">{title}</h3>
                <p className="mt-4 text-[16px] leading-[1.8] text-[var(--muted)]">{description}</p>
              </article>
            ))}
          </div>
          <p className="mt-12 border-t border-[#D8D0BE] pt-6 text-[16px] leading-[1.8] text-[var(--muted)]">
            We also act for the professionals around them: buyers, insurers, lawyers, executors,
            importers, exporters and customs professionals who require a clear basis for decisions.
          </p>
          <p className="mt-5 max-w-[1000px] text-[16px] leading-[1.8] text-[var(--muted)]">
            We define the valuation&apos;s scope and intended use so the question being answered is
            clear. We take no sides. We assess the vehicle and available evidence to form an
            impartial opinion of its value as at the valuation date.
          </p>
        </div>
      </section>

      <GraniteStrip />

      {/* WORLDWIDE APPLICATION */}
      <section
        id="global"
        className="relative isolate overflow-hidden border-t border-[#D8D0BE] bg-[var(--bone)] py-[112px] sm:py-[144px]"
      >
        <img
          src={worldwideSilhouetteUrl}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-[-24%] z-0 w-[145%] max-w-none opacity-[0.32] sm:right-[-12%] sm:w-[105%] lg:right-[-5%] lg:w-[82%] lg:max-w-[1100px]"
          style={{
            mixBlendMode: "screen",
            maskImage:
              "radial-gradient(ellipse at 38% 48%, #000 20%, rgba(0, 0, 0, 0.9) 54%, transparent 82%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at 38% 48%, #000 20%, rgba(0, 0, 0, 0.9) 54%, transparent 82%)",
          }}
        />
        <div className="relative z-10 mx-auto grid max-w-[1240px] gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow">Worldwide application</p>
              <h2 className="serif mt-6 text-[clamp(36px,4.5vw,56px)] font-normal leading-[1.02] tracking-[-0.02em] text-black">
                The relevant market is not bound by location.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-[18px] leading-[1.8]">
                Our valuations have worldwide application. The vehicles we assess are sought
                internationally, and their location does not limit the relevant market.
              </p>
              <p className="mt-5 text-[16px] leading-[1.8] text-[var(--muted)]">
                Assignments may support purchase, sale, relocation, import and export, insurance,
                estate and succession, legal and dispute matters, and collection management. We
                identify the relevant market or markets and explain what the available evidence can
                and cannot support.
              </p>
            </Reveal>
          </div>
          <div id="services" className="mt-12 border-t border-[#D8D0BE] pt-8 lg:col-span-12">
            <div className="grid gap-10 md:grid-cols-2">
              {services.map((s) => {
                const selected = service === s.t;
                return (
                  <article
                    key={s.t}
                    className={`border-t border-l-2 px-4 py-6 ${selected ? "border-l-[#C6A664]" : "border-l-transparent hover:border-l-[#C6A664]"}`}
                  >
                    <h3 className="serif text-[28px] font-normal leading-tight text-black">
                      {s.t}
                    </h3>
                    <p className="mt-3 text-[16px] leading-[1.8] text-[var(--muted)]">{s.d}</p>
                    <p className="mt-4 text-[15px] leading-[1.8] text-[var(--muted)]">
                      For: {s.who}
                    </p>
                    <p className="mt-2 text-[13px] leading-relaxed text-[#5A564E]">
                      Please note: {s.note}
                    </p>
                    <button
                      onClick={() => chooseService(s.t)}
                      aria-pressed={selected}
                      className="text-link mt-5 text-left text-[14px] font-bold text-black hover:text-[#C6A664]"
                    >
                      {selected ? "Selected ✓" : "Use this service →"}
                    </button>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <GraniteStrip />

      {/* WHY ADVERSIQ */}
      <section
        id="why-adversiq"
        className="border-t border-[#D8D0BE] bg-[var(--bone)] py-[112px] sm:py-[144px]"
      >
        <div className="mx-auto grid max-w-[1240px] items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8">
          <figure className="m-0 lg:col-span-5">
            <div className="img-zoom border border-[var(--gold)]">
              <img
                src={aboutUrl}
                alt="300SL Gullwing door shut line and side gills"
                className="h-[52vh] min-h-[360px] max-h-[620px] w-full object-cover lg:h-[72vh] lg:min-h-[480px]"
              />
            </div>
            <p className="caption px-1 py-4">300SL Gullwing — Detail. Melbourne.</p>
          </figure>
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow">What does it cost</p>
              <h2 className="serif mt-6 text-[clamp(36px,5vw,64px)] font-normal leading-[1.02] tracking-[-0.03em] text-black">
                Clear fees, agreed before work begins.
              </h2>
              <p className="mt-8 text-[18px] leading-[1.8] text-[var(--muted)]">
                Single-vehicle and multi-vehicle assignments are scoped and quoted separately. Fees
                are based on the time required to research each vehicle and prepare its report. The
                scope and fee are confirmed in writing before work begins; no research or travel
                commences before then.
              </p>
              <a
                href="/terms#terms-7"
                className="mt-6 inline-block text-[14px] font-bold text-black underline underline-offset-4 hover:text-[var(--gold-deep)]"
              >
                Full fee and engagement terms
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <GraniteStrip />

      {/* ABOUT */}
      <section
        id="about"
        className="border-t border-[#D8D0BE] bg-[var(--bone)] py-[96px] sm:py-[112px]"
      >
        <div className="mx-auto grid max-w-[1240px] gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:items-start lg:px-8">
          <div className="lg:col-span-8">
            <Reveal>
              <p className="eyebrow">Who we are</p>
              <h2 className="serif mt-6 text-[clamp(32px,3.8vw,48px)] font-normal leading-[1.08] tracking-[-0.02em] text-black">
                ADVERSIQ. Est. Melbourne. Independent. Specialist.{" "}
                <em className="italic text-[var(--gold-deep)]">Evidence-led.</em>
              </h2>
              <p className="mt-6 text-[18px] leading-[1.8]">
                ADVERSIQ is an independent specialist valuation advisory led by Melbourne-based
                valuer Brayden Walls, with more than 20 years in motor vehicle sales and over seven
                years in specialist valuation practice. Melbourne-based, with an international
                perspective.
              </p>
              <blockquote className="hero-serif mt-8 border-l-2 border-[var(--gold)] pl-6 text-[clamp(28px,3vw,34px)] italic leading-snug text-black">
                “Every assignment has a person and a purpose behind it.”
              </blockquote>
              <p className="dropcap mt-7 text-[18px] leading-[1.8]">
                Brayden brings real-world experience of how vehicles are bought, sold and understood
                to each assignment. The work is independent and evidence-led: a vehicle&apos;s story
                matters, and the report must show how that story connects to its specification,
                condition, records and relevant market.
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
                  Independent valuation advisory with international market perspective
                </p>
              </div>
            </Reveal>
          </div>
          <aside className="border border-[var(--gold)] bg-[#171C22] p-6 text-[#F5F7FA] sm:p-8 lg:col-span-4 lg:mt-12">
            <p className="eyebrow">Report framework</p>
            <h3 className="serif mt-5 text-[26px] font-normal leading-tight">
              Recognised valuation principles
            </h3>
            <p className="mt-4 text-[14px] leading-[1.75] text-white/85">
              Our reports are prepared to an agreed scope, with reference to generally recognised
              valuation principles: objectivity, market evidence and analytical transparency. Each
              report sets out its agreed purpose, basis, evidence and limitations. Not to impress.
              To be defensible.
            </p>
            <p className="mt-4 text-[14px] leading-[1.75] text-white/85">
              Suitability depends on the requirements of the relevant court, insurer, customs
              authority or other decision-maker. Applicable standards vary by jurisdiction and
              intended use.
            </p>
            <a
              href="/terms#terms-2"
              className="mt-6 inline-block text-[14px] font-bold text-[var(--gold)] underline underline-offset-4"
            >
              Read report scope and requirements
            </a>
          </aside>
        </div>
      </section>

      <GraniteStrip />

      {/* CONTACT — GRANITE */}
      <section
        id="contact"
        className="granite relative isolate overflow-hidden px-5 py-[160px] text-[#F2EFE9] sm:px-8 lg:px-10"
      >
        <img
          src={contactImageUrl}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-[center_55%] opacity-60"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/65 to-black/80"
        />
        <div className="relative z-10 mx-auto grid max-w-[1240px] gap-[96px] lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow !text-[var(--gold)]">Begin a Conversation</p>
              <h2 className="serif mt-6 text-[clamp(36px,4.5vw,56px)] font-normal leading-[1.08] tracking-[-0.02em]">
                Tell us about the vehicle, and the decision ahead.
              </h2>
              <p className="mt-6 max-w-[620px] text-[18px] leading-[1.8] text-[#EDEDEA]/90">
                If you hold, are acquiring, insuring, importing or advising on a vehicle that normal
                valuation cannot describe, we are here for that assignment. Tell us about the
                vehicle, and the decision ahead. We will help you understand what the evidence
                supports.
              </p>
              <p className="serif mt-8 text-[24px] italic text-[var(--gold)]">
                ADVERSIQ. Evidence in context.
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
                <div className="grid grid-cols-12 gap-4 border-b border-white/20 py-5">
                  <p className="col-span-4 text-[12px] font-bold uppercase tracking-[0.14em] text-[var(--gold)]">
                    ABN
                  </p>
                  <p className="col-span-8 text-[15px] leading-relaxed">55 978 113 300</p>
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
            <form
              onSubmit={submit}
              className="border border-white/15 bg-black/70 p-7 text-[#F2EFE9] backdrop-blur-sm sm:p-14"
            >
              <h3 className="serif text-[28px] font-normal">Start an enquiry</h3>
              <p className="mt-2 text-[15px] text-[#EDEDEA]/75">
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
              <p className="mt-4 text-[12px] leading-relaxed text-[#EDEDEA]/75">
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
