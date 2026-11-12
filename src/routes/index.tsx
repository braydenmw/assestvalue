import React, { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import heroUrl from "./assets/adversiq-hero-emerald-hypercar.jpg";
import globalUrl from "./assets/3a6d52c14eb236e4-image_20261111_200317_1.webp";
import feesUrl from "./assets/0c0c2f15d5012543-image_20261111_200315.webp";
import aboutUrl from "./assets/cd05e7186820a95e-image_20261111_182933.webp";
import methodRearUrl from "./assets/method-rear-quarter-detail.jpg";
import methodCockpitUrl from "./assets/method-front-cockpit-detail.jpg";
import methodSideUrl from "./assets/method-side-body-detail.jpg";
import fieldNotesPhotoUrl from "./assets/method-rear-quarter-porsche.jpg";
import crossBorderPhotoUrl from "./assets/cross-border-green-hypercar.jpg";

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
const enquiryRecipient = "brayden@adversiq.xyz";

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

function Rail({ label }: { label: string }) {
  return (
    <div className="lg:col-span-2">
      <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#8A6D00]">{label}</p>
      <div className="mt-5 h-px w-[48px] bg-[#FFD400]" aria-hidden="true" />
    </div>
  );
}

export default function App() {
  const [service, setService] = useState("");
  const [form, setForm] = useState<Enquiry>({
    name: "",
    email: "",
    decision: "",
    message: "",
    service: "",
  });
  const [scrolled, setScrolled] = useState(false);
  const [screen, setScreen] = useState<"home" | "terms">("home");
  const enquiryBody = [
    form.name.trim() ? `Name: ${form.name.trim()}` : "",
    form.email.trim() ? `Email: ${form.email.trim()}` : "",
    service ? `Service of interest: ${service}` : "",
    form.decision.trim() ? `Decision ahead: ${form.decision.trim()}` : "",
    form.message.trim() || "Hello, I am enquiring about a vehicle valuation.",
  ]
    .filter(Boolean)
    .join("\n\n");
  const enquiryHref = `mailto:${enquiryRecipient}?subject=Valuation%20enquiry%20%7C%20ADVERSIQ&body=${encodeURIComponent(enquiryBody)}`;
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function chooseService(title: string) {
    setService(title);
    setForm((f) => ({ ...f, service: title, decision: f.decision || title }));
    scrollToId("contact");
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    window.location.href = enquiryHref;
  }

  const services = [
    {
      t: "Desktop evidence reviews",
      d: "Evidence and comparisons reviewed from records, images and documents supplied.",
      who: "Remote buyers, brokers and pre-purchase due diligence.",
      note: "High-resolution images can support initial research. They cannot verify diagnostic scans, physical wear or coachbuilding integrity.",
    },
    {
      t: "On-site physical inspections",
      d: "The vehicle seen in person, with condition and specification checked against the records.",
      who: "Collectors, insurers and high-value asset managers.",
      note: "Diagnostic findings may require separate specialist testing. Travel, access and any additional testing are agreed in scope.",
    },
    {
      t: "Cross-border valuation support",
      d: "Relevant market context across borders, kept distinct from customs calculations.",
      who: "Importers, exporters, customs brokers and tax counsel.",
      note: "Legal and customs application should be confirmed with qualified advisers. We cannot determine an authority's decision.",
    },
    {
      t: "Reports for legal, insurance & estate matters",
      d: "A clear, reasoned report for legal, insurance or estate decisions.",
      who: "Insurers, law firms, executors and dispute-resolution advisers.",
      note: "Expert requirements and acceptance depend on the relevant jurisdiction and decision-maker.",
    },
  ];

  if (screen === "terms") {
    return (
      <div
        data-safe-area-inset-root
        style={shellStyle}
        className="min-h-screen w-full overflow-x-clip bg-[var(--bone)] text-[#1A1A1A]"
      >
        <header className="border-b border-[#D9D1BE] bg-[var(--bone)]">
          <div className="mx-auto flex max-w-[1320px] items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4">
              <a href={PRODUCT_HREF} target="_blank" rel="noopener" className="leading-none">
                <span className="serif block text-[26px] font-normal tracking-[5px] text-black">
                  ADVERSIQ
                </span>
                <span className="mt-1 block text-[8px] font-bold uppercase tracking-[0.22em] text-[#5A564E]">
                  Global Valuation Advisory
                </span>
              </a>
            </div>
            <button
              type="button"
              onClick={() => setScreen("home")}
              className="luxury-btn px-4 py-3 text-[12px] uppercase"
            >
              Back to home
            </button>
          </div>
        </header>

        <main className="terms-page mx-auto max-w-[1100px] px-4 py-16 sm:px-6 lg:px-8">
          <div className="terms-intro mb-10">
            <p className="eyebrow text-[#8A6D00]">Terms of Service &amp; Privacy</p>
            <h1 className="serif mt-6 text-[clamp(40px,5vw,72px)] font-normal leading-[1.02] tracking-[-0.02em] text-black">
              A rare vehicle deserves a wider view.
            </h1>
            <p className="mt-6 max-w-[760px] text-[18px] leading-[1.8] text-[#2B2924]">
              Led by Melbourne-based valuer Brayden Walls, ADVERSIQ supports clients in Australia
              and internationally with desktop reviews, on-site inspections by arrangement, and
              defensible valuation reports for rare, coachbuilt, restored, and modified vehicles.
            </p>
          </div>

          <div className="terms-grid">
            <article className="terms-card">
              <h2 className="serif text-[28px] font-normal text-black">Overview</h2>
              <ul className="mt-5 list-disc space-y-3 pl-5 text-[17px] leading-[1.8] text-[#2B2924]">
                <li>Two decades in motor vehicle sales</li>
                <li>Seven years in specialist valuation practice</li>
                <li>Melbourne base with international market reach</li>
              </ul>
            </article>

            <article className="terms-card">
              <h2 className="serif text-[28px] font-normal text-black">Global Market Context</h2>
              <p className="mt-5 text-[17px] leading-[1.8] text-[#2B2924]">
                Rare and transformed vehicles move fluidly across international borders. Standard
                local price guides break down under the weight of unique specifications and custom
                builds. We identify the specific market relevant to each assignment, weighing build
                history and secondary market liquidity before drawing comparisons.
              </p>
              <p className="mt-4 text-[17px] leading-[1.8] text-[#2B2924]">
                <strong>One vehicle. More than one market.</strong> Relevant comparisons start with
                the right market—not the nearest one.
              </p>
            </article>

            <article className="terms-card term-wide">
              <h2 className="serif text-[28px] font-normal text-black">
                Field Notes &amp; Core Principles
              </h2>
              <p className="mt-5 text-[17px] leading-[1.8] text-[#2B2924]">
                We connect the vehicle, its relevant market, and the specific decision the report
                needs to serve.
              </p>
              <ul className="mt-5 space-y-4 text-[17px] leading-[1.8] text-[#2B2924]">
                <li>
                  <strong>Market:</strong> Defined by relevant secondary demand, not geographical
                  convenience.
                </li>
                <li>
                  <strong>Vehicle:</strong> Evaluated precisely as it exists today, including all
                  recorded modifications.
                </li>
                <li>
                  <strong>Purpose:</strong> Anchored entirely to the legal, financial, or customs
                  decision the report must serve.
                </li>
              </ul>
              <p className="mt-5 text-[17px] leading-[1.8] text-[#2B2924]">
                <strong>Market + Vehicle + Purpose — Evidence in Context</strong>
              </p>
              <ol className="mt-4 list-decimal space-y-4 pl-5 text-[17px] leading-[1.8] text-[#2B2924]">
                <li>
                  The same vehicle can meet different markets. Buyer demand, vehicle availability,
                  and comparable sales vary by location.
                </li>
                <li>
                  The vehicle matters as much as the market. A familiar badge may conceal a rare
                  specification or coachbuilt build.
                </li>
                <li>
                  A comparison must be genuinely relevant. Asking prices, auction results, build
                  receipts, and statutory calculations describe different things.
                </li>
                <li>
                  Clear context supports better-informed decisions. Our reports outline the evidence
                  considered, its limitations, and the reasoning behind the opinion.
                </li>
              </ol>
            </article>

            <article className="terms-card">
              <h2 className="serif text-[28px] font-normal text-black">
                Methodology &amp; Process
              </h2>
              <p className="mt-5 text-[17px] leading-[1.8] text-[#2B2924]">
                A considered valuation has a clear point of reference.
              </p>
              <ol className="mt-4 list-decimal space-y-4 pl-5 text-[17px] leading-[1.8] text-[#2B2924]">
                <li>
                  <strong>Define the brief:</strong> We agree on the intended use, valuation basis,
                  relevant market, effective date, and scope.
                </li>
                <li>
                  <strong>Understand the vehicle:</strong> We review identity, specification,
                  provenance, condition, and significant changes.
                </li>
                <li>
                  <strong>Assess and explain:</strong> We test market evidence and explain
                  assumptions, reasoning, and limitations.
                </li>
              </ol>
            </article>

            <article className="terms-card">
              <h2 className="serif text-[28px] font-normal text-black">
                Cross-Border &amp; Customs
              </h2>
              <p className="mt-5 text-[17px] leading-[1.8] text-[#2B2924]">
                Import duties, taxes, and customs rules may affect a cross-border decision, but
                customs calculations are not automatically the same as an open-market valuation.
              </p>
              <p className="mt-4 text-[17px] leading-[1.8] text-[#2B2924]">
                The applicable rules, valuation methods, and required evidence depend on the
                destination and the specific customs procedure. We clarify the question being
                addressed and document relevant market evidence within the agreed scope.
              </p>
            </article>

            <article className="terms-card term-wide">
              <h2 className="serif text-[28px] font-normal text-black">Services</h2>
              <ul className="mt-5 space-y-5 text-[17px] leading-[1.8] text-[#2B2924]">
                <li>
                  <strong>Desktop Evidence Reviews:</strong> Evidence and comparisons examined
                  remotely from supplied records, images, and documentation.
                </li>
                <li>
                  <strong>On-Site Physical Inspections:</strong> The vehicle examined in person,
                  with condition and specification checked against records.
                </li>
                <li>
                  <strong>Cross-Border Valuation Support:</strong> Relevant market context analyzed
                  across borders, kept distinct from customs calculations.
                </li>
                <li>
                  <strong>Reports for Legal, Insurance &amp; Estate Matters:</strong> Structured,
                  reasoned appraisals for legal, insurance, estate, or dispute scenarios.
                </li>
              </ul>
            </article>

            <article className="terms-card">
              <h2 className="serif text-[28px] font-normal text-black">Fees &amp; Governance</h2>
              <p className="mt-5 text-[17px] leading-[1.8] text-[#2B2924]">
                All assignments are quoted individually on a Price on Application (POA) basis. Fees
                reflect vehicle complexity, research depth, location, and evidentiary requirements.
              </p>
              <p className="mt-4 text-[17px] leading-[1.8] text-[#2B2924]">
                Engagements operate on a clear 30% deposit and 70% balance structure, with no
                research or travel commencing until terms are agreed in writing.
              </p>
            </article>

            <article className="terms-card">
              <h2 className="serif text-[28px] font-normal text-black">About Brayden Walls</h2>
              <p className="mt-5 text-[17px] leading-[1.8] text-[#2B2924]">
                Brayden Walls is a Melbourne-based vehicle market and valuation professional with
                more than 20 years of motor vehicle sales experience and over seven years of
                specialized valuation practice.
              </p>
              <p className="mt-4 text-[17px] leading-[1.8] text-[#2B2924]">
                ADVERSIQ supports assignments where rare or transformed vehicles resist standard
                appraisal. International contacts help source market context, while each conclusion
                remains tied to verifiable evidence, agreed scope, and professional independence.
              </p>
            </article>

            <article className="terms-card term-wide">
              <h2 className="serif text-[28px] font-normal text-black">Privacy</h2>
              <p className="mt-5 text-[17px] leading-[1.8] text-[#2B2924]">
                ADVERSIQ collects your enquiry details only to respond to your valuation request and
                maintain a record of the assignment. Information is used strictly for service
                delivery, follow-up communication, and internal record-keeping.
              </p>
              <p className="mt-4 text-[17px] leading-[1.8] text-[#2B2924]">
                We do not sell or share personal information beyond the minimum required to provide
                the requested advisory service. By submitting an enquiry, you agree that the
                information provided is accurate and that ADVERSIQ may contact you using the email
                or phone number supplied.
              </p>
            </article>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div
      data-safe-area-inset-root
      style={shellStyle}
      className="min-h-screen w-full overflow-x-clip bg-[var(--bone)] text-[#1A1A1A]"
    >
      {/* 1 TOP BAR */}
      <div className="flex min-h-[34px] items-center justify-center bg-[#0B0B0B] px-3 py-2 text-center">
        <p className="text-[10px] font-bold uppercase leading-relaxed tracking-[0.14em] text-white">
          Melbourne &nbsp;·&nbsp; Private Valuation Advisory &nbsp;·&nbsp; ABN 55 978 113 300
          &nbsp;·&nbsp; By Appointment Only
        </p>
      </div>

      {/* 2 HEADER */}
      <header
        data-safe-area-sticky-top
        style={{ top: "var(--safe-area-inset-top)" }}
        className={`sticky z-50 border-b border-[#D9D1BE] bg-[var(--bone)] transition-colors duration-300 ${scrolled ? "bg-[var(--bone)]" : "bg-[var(--bone)]"}`}
      >
        <div className="mx-auto flex h-[76px] max-w-[1320px] flex-wrap items-center gap-x-7 gap-y-1 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <a href={PRODUCT_HREF} target="_blank" rel="noopener" className="leading-none">
              <span className="serif block text-[26px] font-normal tracking-[5px] text-black">
                ADVERSIQ
              </span>
              <span className="mt-1 block text-[8px] font-bold uppercase tracking-[0.22em] text-[#5A564E]">
                Global Valuation Advisory
              </span>
            </a>
          </div>
          <nav
            className="mx-auto hidden flex-wrap items-center gap-[28px] text-[11px] font-bold uppercase tracking-[0.08em] text-black lg:flex"
            aria-label="Primary"
          >
            <button onClick={() => scrollToId("method")} className="nav-link py-2">
              Method
            </button>
            <button onClick={() => scrollToId("services")} className="nav-link py-2">
              Services
            </button>
            <button onClick={() => scrollToId("fees")} className="nav-link py-2">
              Fees
            </button>
            <button onClick={() => scrollToId("about")} className="nav-link py-2">
              About
            </button>
            <button onClick={() => scrollToId("contact")} className="nav-link py-2">
              Contact
            </button>
          </nav>
          <nav
            className="flex flex-wrap items-center gap-2 text-[11px] font-bold uppercase tracking-[0.08em] text-black lg:hidden"
            aria-label="Mobile"
          >
            <button onClick={() => scrollToId("method")} className="px-1 py-2">
              Method
            </button>
            <button onClick={() => scrollToId("services")} className="px-1 py-2">
              Services
            </button>
            <button onClick={() => scrollToId("fees")} className="px-1 py-2">
              Fees
            </button>
            <button onClick={() => scrollToId("about")} className="px-1 py-2">
              About
            </button>
            <button onClick={() => scrollToId("contact")} className="px-1 py-2">
              Contact
            </button>
          </nav>
        </div>
      </header>

      {/* 3 HERO */}
      <section className="relative flex min-h-[100vh] w-full items-end overflow-hidden bg-black">
        <img
          src={heroUrl}
          alt="Lime green hypercar drifting through a huge rainbow paint wave in a night city"
          className="absolute inset-0 h-full w-full object-cover object-[70%_center]"
        />
        <div className="hero-gradient absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-[1320px] px-4 pb-[72px] pt-28 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-[640px]">
              <p className="eyebrow text-[var(--gold)]">
                Melbourne-based. International in perspective.
              </p>
              <h1 className="serif mt-7 text-[clamp(48px,7.2vw,94px)] font-normal leading-[1.0] tracking-[-0.02em] text-white">
                A rare vehicle deserves
                <br />
                <em className="italic text-[var(--gold)]">a wider view.</em>
              </h1>
              <p className="mt-7 max-w-[600px] text-[18px] leading-[1.75] text-white/85">
                Led by Melbourne-based valuer Brayden Walls, ADVERSIQ supports clients in Australia
                and internationally with desktop reviews, on-site inspections by arrangement, and
                defensible valuation reports for rare, coachbuilt, restored, and modified vehicles.
              </p>
              <div className="mt-10 grid grid-cols-3 gap-4 border-t border-[var(--gold)] pt-6 sm:gap-8">
                <div>
                  <p className="serif text-[clamp(18px,2vw,22px)] leading-[1.25] text-white">
                    Two decades
                    <br />
                    in sales
                  </p>
                  <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.14em] text-white/70">
                    Experience
                  </p>
                </div>
                <div>
                  <p className="serif text-[clamp(18px,2vw,22px)] leading-[1.25] text-white">
                    Seven years
                    <br />
                    in valuations
                  </p>
                  <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.14em] text-white/70">
                    Valuation work
                  </p>
                </div>
                <div>
                  <p className="serif text-[clamp(18px,2vw,22px)] leading-[1.25] text-white">
                    Melbourne
                    <br />
                    International
                  </p>
                  <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.14em] text-white/70">
                    Market
                  </p>
                </div>
              </div>
              <p className="mt-6 text-[12px] italic leading-relaxed text-white/60">
                Market context informs the opinion; it does not guarantee a higher value.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4 CREDIBILITY BAR */}
      <section className="border-b border-[#D9D1BE] bg-[var(--bone)]">
        <div className="mx-auto grid max-w-[1320px] gap-y-8 px-4 py-10 text-center sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          <div className="px-4">
            <p className="text-[11px] font-bold uppercase leading-[1.9] tracking-[0.14em]">
              Private Clients
              <br />
              Collectors
              <br />
              Insurers
              <br />
              Legal &amp; Estate
            </p>
          </div>
          <div className="px-4 lg:border-l lg:border-[#D9D1BE]">
            <p className="text-[11px] font-bold uppercase leading-[1.9] tracking-[0.14em]">
              Desktop Reviews
              <br />
              On-Site Inspections
              <br />
              Cross-Border
            </p>
            <p className="mt-2 text-[11px] uppercase tracking-[0.14em] text-[#8A857A]">—</p>
          </div>
          <div className="px-4 lg:border-l lg:border-[#D9D1BE]">
            <p className="text-[11px] font-bold uppercase leading-[1.9] tracking-[0.14em]">
              Evidence-Led
              <br />
              Independent
              <br />
              Confidential
            </p>
            <p className="mt-2 text-[11px] uppercase tracking-[0.14em] text-[#8A857A]">—</p>
          </div>
          <div className="px-4 lg:border-l lg:border-[#D9D1BE]">
            <p className="text-[11px] font-bold uppercase leading-[1.9] tracking-[0.14em]">
              Melbourne
              <br />
              International
              <br />
              Market
            </p>
            <p className="mt-2 text-[11px] uppercase tracking-[0.14em] text-[#8A857A]">—</p>
          </div>
        </div>
      </section>

      {/* 5 GLOBAL */}
      <section id="global" className="bg-[var(--bone)] py-[120px]">
        <div className="mx-auto grid max-w-[1320px] gap-[32px] px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <Rail label="Global Market Context" />
          <div className="lg:col-span-10">
            <Reveal>
              <h2 className="serif max-w-[880px] text-[clamp(48px,5vw,60px)] font-normal leading-[1.0] tracking-[-0.02em] text-black">
                Borderless assets. Uneven information. Evidence-led research.
              </h2>
              <p className="mt-7 max-w-[680px] text-[17px] leading-[1.75]">
                Rare and transformed vehicles move fluidly across international borders. Standard
                local price guides break down under the weight of unique specifications and custom
                builds. We identify the specific market relevant to each assignment, weighing build
                history and secondary market liquidity before drawing comparisons.
              </p>
              <div className="mt-[72px] max-w-[680px] border border-[#D9D1BE] border-l-2 border-l-[#FFD400] bg-[var(--bone)] p-8">
                <p className="serif text-[17px] italic leading-relaxed text-black">
                  One vehicle. More than one market.
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-[#5A564E]">
                  Relevant comparisons start with the right market—not the nearest one.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
        <Reveal className="mt-[72px]">
          <figure className="w-full">
            <div className="img-zoom">
              <img
                src={globalUrl}
                alt="Three hypercars racing side-by-side through a tunnel of exploding paint"
                className="h-[64vh] min-h-[380px] w-full object-cover"
              />
            </div>
            <figcaption className="caption mx-auto mt-4 max-w-[1320px] px-4 sm:px-6 lg:px-8">
              Global — Three markets, one evidence.
            </figcaption>
          </figure>
        </Reveal>
        <div className="mx-auto mt-10 max-w-[1320px] border-t border-[#D9D1BE] px-4 pb-0 pt-8 text-center sm:px-6 lg:px-8">
          <p className="text-[12px] font-bold uppercase leading-[2] tracking-[0.14em] text-black">
            Supercars &amp; Hypercars — Ferrari <span className="text-[#8A6D00]">·</span> Porsche{" "}
            <span className="text-[#8A6D00]">·</span> Mercedes-Benz{" "}
            <span className="text-[#8A6D00]">·</span> Aston Martin{" "}
            <span className="text-[#8A6D00]">·</span> Lamborghini
          </p>
          <p className="mt-2 text-[12px] font-bold uppercase leading-[2] tracking-[0.14em] text-black">
            Coachbuilders — Singer <span className="text-[#8A6D00]">·</span> Mansory{" "}
            <span className="text-[#8A6D00]">·</span> Brabus{" "}
            <span className="text-[#8A6D00]">·</span> Bespoke Builds
          </p>
        </div>
      </section>

      {/* 6 FIELD NOTES */}
      <section id="notes" className="min-h-[1400px] bg-[#0B0B0B] text-[#EDEDEA]">
        <div className="grid items-start gap-0 lg:grid-cols-[48%_52%]">
          <figure className="relative m-0 h-[58vh] w-full lg:sticky lg:top-0 lg:h-screen lg:min-h-[700px]">
            <img
              src={fieldNotesPhotoUrl}
              alt="Close rear-quarter view of a painted Porsche, showing its bodywork, wing, wheel, and provenance details"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div
              className="absolute inset-x-0 bottom-0 bg-black/75 px-5 py-4 sm:px-6"
              aria-hidden="true"
            />
          </figure>
          <div className="bg-[#0B0B0B] px-4 py-[72px] sm:px-6 lg:px-[72px] lg:py-[72px]">
            <Reveal>
              <p className="eyebrow text-[var(--gold)]">Field Notes</p>
              <h2 className="serif mt-6 max-w-[900px] text-[clamp(48px,4.5vw,54px)] font-normal leading-[1.0] tracking-[-0.02em] text-white">
                The market is international. The evidence has to be too.
              </h2>
              <p className="mt-6 max-w-[640px] text-[17px] leading-[1.75] text-white/80">
                We connect the vehicle, its relevant market and the decision the report needs to
                serve.
              </p>
            </Reveal>
            <Reveal>
              <div className="mt-[72px] grid gap-px border border-white/20 bg-white/20 md:grid-cols-3">
                {[
                  ["Market", "Market = relevant market, not nearest."],
                  ["Vehicle", "Vehicle = as it exists today."],
                  ["Purpose", "Purpose = decision the report must serve."],
                ].map(([t, d]) => (
                  <div key={t} className="bg-[#0B0B0B] p-8 text-center">
                    <h3 className="serif text-[22px] font-normal text-white">{t}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-white/70">{d}</p>
                  </div>
                ))}
              </div>
              <p className="serif mt-6 text-center text-[15px] italic text-white/70">
                Market + Vehicle + Purpose — Evidence in context
              </p>
            </Reveal>
            <div className="grid gap-12 pt-[72px]">
              {[
                [
                  "01",
                  "The same vehicle can meet different markets",
                  "Buyer demand, vehicle availability, and comparable sales vary by location. We determine which market is genuinely relevant to the assignment instead of assuming a regional guide tells the whole story.",
                ],
                [
                  "02",
                  "The vehicle matters as much as the market",
                  "A familiar badge may conceal a rare specification, coachbuilt body, custom restoration, or structural modification. We examine the vehicle as it exists today alongside the documentation that explains its evolution.",
                ],
                [
                  "03",
                  "A comparison must be genuinely relevant",
                  "Asking prices, reported auction results, build receipts, and statutory calculations describe entirely different things. We test each source against the vehicle, market, date, and purpose, explicitly stating where data gaps limit our conclusions.",
                ],
                [
                  "04",
                  "Clear context supports better-informed decisions",
                  "Different stakeholders often possess conflicting records and market assumptions. Our reports outline the evidence considered, its explicit limitations, and the transparent reasoning behind our opinion—without promising a fabricated outcome.",
                ],
              ].map(([n, t, d]) => (
                <Reveal key={n}>
                  <div className="border-t border-white/25 pt-8">
                    <p className="text-[14px] font-bold uppercase tracking-[0.22em] text-[var(--gold)]">
                      {n}
                    </p>
                    <h3 className="serif mt-5 text-[26px] font-normal leading-tight text-white">
                      {t}
                    </h3>
                    <p className="mt-4 text-[16px] leading-[1.7] text-white/80">{d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7 METHOD */}
      <section id="method" className="bg-[var(--bone)] px-4 py-[120px] sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-[1320px] gap-[32px] lg:grid-cols-12">
          <Rail label="Method" />
          <div className="lg:col-span-10">
            <Reveal>
              <p className="eyebrow text-[#8A6D00]">Method</p>
              <h2 className="serif mt-6 max-w-[880px] text-[clamp(48px,4vw,50px)] font-normal leading-[1.0] tracking-[-0.02em] text-black">
                From Question to Conclusion
              </h2>
              <h3 className="serif mt-6 max-w-[880px] text-[clamp(36px,3.5vw,42px)] font-normal leading-[1.0] tracking-[-0.02em] text-black">
                A considered valuation has a clear point of reference.
              </h3>
              <div className="grid gap-8 md:grid-cols-2">
                <p className="mt-7 text-[17px] leading-[1.75]">
                  We first agree in writing on the intended use, valuation basis, relevant market or
                  markets, effective date, and scope. This keeps all research strictly tied to the
                  decision ahead.
                </p>
                <p className="mt-7 text-[17px] leading-[1.75]">
                  Then we assess the vehicle as it exists today—its identity, specification,
                  provenance, condition, and significant changes—against the available evidence.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <h3 className="serif mt-[72px] text-[clamp(32px,3.5vw,44px)] font-normal text-black">
                How We Assess the Evidence
              </h3>
              <div className="relative mt-10 grid gap-10 md:grid-cols-3">
                <div
                  className="absolute left-0 right-0 top-[6px] hidden h-px bg-[#D9D1BE] md:block"
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
                  <div key={t} className="relative border-t border-[#D9D1BE] pt-6 md:border-t-0">
                    <span
                      className="relative z-10 block h-[13px] w-[13px] rounded-full bg-[#FFD400]"
                      aria-hidden="true"
                    />
                    <h4 className="serif mt-4 text-[24px] font-normal text-black">{t}</h4>
                    <p className="mt-3 text-[17px] leading-[1.75]">{d}</p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal>
              <div className="david-hockney-collage mt-[72px]">
                <figure className="david-hockney-panel panel-a">
                  <img src={methodRearUrl} alt="Rear quarter, wheel and wing of a black hypercar" />
                </figure>
                <figure className="david-hockney-panel panel-b">
                  <img
                    src={methodCockpitUrl}
                    alt="Top-down view across a hypercar's windscreen and carbon-fibre bonnet"
                  />
                </figure>
                <figure className="david-hockney-panel panel-c">
                  <img
                    src={methodSideUrl}
                    alt="Close side view of a hypercar's carbon-fibre body, door and side intake"
                  />
                </figure>
              </div>
              <div className="mt-[72px] border-t border-[#FFD400] bg-[#0B0B0B] p-8 text-white sm:p-12">
                <p className="eyebrow text-[var(--gold)]">Cross-Border Perspective</p>
                <h3 className="serif mt-5 text-[26px] font-normal leading-tight">
                  Distinctive vehicles. A wider field of evidence.
                </h3>
                <p className="mt-6 text-[17px] leading-[1.75] text-white/90">
                  Market context is researched for the vehicle and the question at hand.
                </p>
                <p className="mt-6 text-[12px] font-bold uppercase leading-[1.9] tracking-[0.12em] text-white/70">
                  For — Remote Buyers · Brokers · Collectors · Insurers · Import &amp; Customs ·
                  Legal &amp; Disputes · Estate
                </p>
              </div>
              <p className="mt-8 max-w-[1100px] text-[12px] leading-relaxed text-[#5A564E]">
                Reports are prepared to an agreed scope. They may support review, but cannot
                guarantee admissibility or acceptance by a court, insurer, customs authority or
                other decision-maker. Applicable standards and requirements vary by jurisdiction and
                intended use.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 8 SERVICES */}
      <section id="services" className="border-t border-[#D9D1BE] bg-[var(--bone)] py-[120px]">
        <div className="mx-auto grid max-w-[1320px] gap-[32px] px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <Rail label="Services" />
          <div className="lg:col-span-10">
            <Reveal>
              <p className="eyebrow text-[#8A6D00]">Support Matched to the Valuation Question</p>
              <h2 className="serif mt-6 max-w-[900px] text-[clamp(48px,4.5vw,54px)] font-normal leading-[1.0] tracking-[-0.02em] text-black">
                Four ways we support complex vehicle assessments.
              </h2>
              <p className="mt-5 max-w-[760px] text-[17px] leading-[1.75]">
                Select the service that best matches your question. Your choice will be added to the
                enquiry form.
              </p>
              {service && (
                <p className="mt-6 inline-block border-b border-[var(--gold)] pb-1 text-[14px] font-bold text-black">
                  Selected service: {service} — added to the enquiry form below.
                </p>
              )}
            </Reveal>
            <div className="mt-[72px] grid gap-px border border-[#D9D1BE] bg-[#D9D1BE] md:grid-cols-2">
              {services.map((s) => {
                const selected = service === s.t;
                return (
                  <article
                    key={s.t}
                    className={`flex min-h-[340px] flex-col bg-[var(--bone)] p-10 transition-colors ${selected ? "border-l-2 border-l-[#FFD400] bg-[#FFFEF7]" : "border-l-2 border-l-transparent hover:border-l-[#FFD400]"}`}
                  >
                    <h3 className="serif text-[24px] font-normal leading-tight text-black">
                      {s.t}
                    </h3>
                    <p className="mt-5 text-[17px] leading-[1.75]">{s.d}</p>
                    <p className="serif mt-5 text-[15px] italic leading-relaxed">For: {s.who}</p>
                    <p className="mt-4 border-t border-[#D9D1BE] pt-4 text-[13px] leading-relaxed text-[#5A564E]">
                      {s.note}
                    </p>
                    <button
                      onClick={() => chooseService(s.t)}
                      aria-pressed={selected}
                      className="text-link mt-auto pt-6 text-left text-[14px] font-bold text-black hover:text-[#8A6D00]"
                    >
                      {selected ? "Selected — change in form below" : "Use this service"}
                    </button>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
        <Reveal className="mt-[72px]">
          <div className="relative min-h-[60vh] w-full overflow-hidden bg-black">
            <img
              src={crossBorderPhotoUrl}
              alt="Green hypercar framed by a sweeping rainbow paint backdrop"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="cross-border-scrim absolute inset-0" aria-hidden="true" />
            <div className="cross-border-layout relative flex min-h-[60vh] items-center justify-end px-4 py-10 sm:px-6 lg:px-8">
              <div className="cross-border-copy text-left">
                <p className="eyebrow text-[var(--gold)]">Cross-Border Perspective</p>
                <h3 className="serif mt-5 text-[clamp(32px,4vw,48px)] font-normal leading-[1.05] text-white">
                  Distinctive vehicles.
                  <br />A wider field of evidence.
                </h3>
                <p className="mt-5 max-w-[480px] text-[16px] leading-[1.75] text-white/90">
                  Market context is researched for the vehicle and the question at hand.
                </p>
                <p className="mt-6 max-w-[480px] text-[11px] font-bold uppercase leading-[1.9] tracking-[0.12em] text-white/80">
                  For — Remote Buyers · Brokers · Collectors · Insurers · Import &amp; Customs ·
                  Legal &amp; Disputes · Estate
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 9 FEES */}
      <section id="fees" className="border-t border-[#D9D1BE] bg-[var(--bone)] py-[120px]">
        <div className="mx-auto grid max-w-[1320px] gap-[32px] px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <Rail label="Fees" />
          <div className="lg:col-span-10 text-center lg:text-left">
            <Reveal>
              <p className="eyebrow text-[#8A6D00]">Fees, Governance &amp; Engagement</p>
              <h2 className="serif mx-auto mt-6 max-w-[900px] text-[clamp(48px,4.5vw,54px)] font-normal leading-[1.0] tracking-[-0.02em] text-black lg:mx-0">
                Transparent pricing. Uncompromising rigor.
              </h2>
              <p className="mx-auto mt-6 max-w-[700px] text-[17px] leading-[1.75] lg:mx-0">
                All assignments are quoted individually on a Price on Application (POA) basis.
                Quoted fees reflect each vehicle's provenance complexity, market research depth,
                geographical location, and evidentiary requirements. No research or travel commences
                until terms are agreed and confirmed in writing.
              </p>
              <button
                onClick={() => scrollToId("contact")}
                className="luxury-btn mt-9 px-6 py-[18px] text-[14px] uppercase"
              >
                Request a scoped quote
              </button>
            </Reveal>
          </div>
        </div>
        <Reveal className="mt-[72px]">
          <figure className="w-full">
            <div className="img-zoom">
              <img
                src={feesUrl}
                alt="Midnight blue and gold hypercar exploding through a paint wall"
                className="h-[60vh] min-h-[340px] w-full object-cover"
              />
            </div>
            <figcaption className="caption mx-auto mt-4 max-w-[1320px] px-4 text-center sm:px-6 lg:px-8">
              Private · Scoped · Confirmed in writing.
            </figcaption>
          </figure>
        </Reveal>
        <div className="mx-auto mt-[72px] max-w-[1320px] px-4 sm:px-6 lg:px-8">
          <div className="border border-[#D9D1BE] bg-[var(--bone)] p-8 sm:p-12">
            <h3 className="serif text-[26px] font-normal text-black">
              What scope means in practice
            </h3>
            <div className="mt-8 grid gap-12 md:grid-cols-2">
              <div>
                <h4 className="text-[17px] font-bold text-black">Pricing model (POA)</h4>
                <ul className="mt-4 text-[17px] leading-[1.75]">
                  <li className="border-t border-[#D9D1BE] py-3">
                    Quoted individually to reflect each vehicle's unique specifications and market
                    context
                  </li>
                  <li className="border-t border-[#D9D1BE] py-3">
                    Tailored collection schedules apply to multi-vehicle portfolios
                  </li>
                  <li className="border-y border-[#D9D1BE] py-3">
                    Fixed-fee guarantee once signed by both parties
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-[17px] font-bold text-black">Scope boundaries</h4>
                <ul className="mt-4 text-[17px] leading-[1.75]">
                  <li className="border-t border-[#D9D1BE] py-3">
                    Included: agreed analytical scope, empirical market research, and the report
                  </li>
                  <li className="border-t border-[#D9D1BE] py-3">
                    Billed separately: international travel, specialist testing, and facility access
                    costs
                  </li>
                  <li className="border-y border-[#D9D1BE] py-3">
                    Any sale or placement service is scoped separately
                  </li>
                </ul>
              </div>
            </div>
            <p className="mt-10 border-t border-[#D9D1BE] pt-6 text-[15px] leading-relaxed">
              Structured retainer and payment terms: engagement operates on a transparent 30%
              non-refundable deposit upon written execution, with the remaining 70% balance due upon
              completion and cleared prior to formal document release.
            </p>
          </div>
        </div>
      </section>

      {/* 10 ABOUT */}
      <section id="about" className="border-t border-[#D9D1BE] bg-[var(--bone)] py-[120px]">
        <div className="mx-auto grid max-w-[1320px] gap-[32px] px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-6">
            <div className="img-zoom border border-[var(--gold)] p-2">
              <img
                src={aboutUrl}
                alt="300SL Gullwing door shut line and side gills"
                className="h-[84vh] min-h-[520px] w-full object-cover"
              />
            </div>
            <p className="caption mt-4 text-[#5A564E]">300SL Gullwing — Detail. Melbourne.</p>
          </div>
          <div className="px-0 sm:px-2 lg:col-span-6 lg:px-12">
            <Reveal>
              <h2 className="serif mt-6 text-[clamp(36px,4vw,46px)] font-normal leading-[1.08] tracking-[-0.02em] text-black">
                Vehicle market experience, applied to specialist assignments.
              </h2>
              <p className="mt-6 text-[17px] leading-[1.75]">
                We take the time to understand the decision you need to make, what matters to you,
                and the story this vehicle carries.
              </p>
              <blockquote className="serif mt-8 border-l-2 border-[var(--gold)] pl-6 text-[32px] italic leading-snug text-black">
                “Every assignment has a person and a purpose behind it.”
              </blockquote>
              <p className="mt-7 text-[17px] leading-[1.75]">
                Brayden Walls is a Melbourne-based vehicle market and valuation professional with
                more than 20 years of motor vehicle sales experience and over seven years of
                specialized valuation practice. Having bought and sold vehicles across wholesale and
                retail tiers, he understands how the story on paper must connect directly to the
                physical vehicle and the people who trade them.
              </p>
              <p className="mt-5 text-[17px] leading-[1.75]">
                ADVERSIQ supports assignments where rare or transformed vehicles resist standard
                appraisal—whether factory supercars, coachbuilt specials, or restomods built on
                historic platforms. While international contacts help source market context, every
                conclusion remains firmly tied to verifiable evidence, agreed scope, and
                professional independence.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 11 CONTACT */}
      <section id="contact" className="bg-[#0B0B0B] px-4 py-[120px] text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-[1320px] gap-[32px] lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow text-[var(--gold)]">Begin a Conversation</p>
              <h2 className="serif mt-6 text-[clamp(48px,4.5vw,56px)] font-normal leading-[1.08] tracking-[-0.02em]">
                Tell us about the vehicle—and the decision ahead.
              </h2>
              <p className="mt-6 max-w-[620px] text-[17px] leading-[1.75] text-white/90">
                You do not need to have every vehicle detail ready. A short note about what prompted
                the valuation, the decision ahead and any timing is enough to start. We can clarify
                the rest together.
              </p>
              <div className="mt-12 space-y-7 border-t border-white/20 pt-8 text-[15px] leading-relaxed">
                <p>
                  <strong className="text-[var(--gold)]">Email</strong>
                  <br />
                  <a href="mailto:brayden@adversiq.xyz" className="underline">
                    brayden@adversiq.xyz
                  </a>
                </p>
                <p>
                  <strong className="text-[var(--gold)]">Service location</strong>
                  <br />
                  Box Hill South, Victoria, Australia
                </p>
                <p>
                  <strong className="text-[var(--gold)]">Report writing</strong>
                  <br />
                  Reports are written in the Philippines.
                </p>
                <p>
                  <strong className="text-[var(--gold)]">Phone</strong>
                  <br />
                  <a href="tel:+639608354283" className="underline">
                    +63 960 835 4283
                  </a>
                </p>
                <button
                  type="button"
                  onClick={() => setScreen("terms")}
                  className="inline-flex items-center border border-[var(--gold)] px-4 py-2 text-[12px] font-bold uppercase tracking-[0.14em] text-[var(--gold)] transition-colors hover:bg-[var(--gold)] hover:text-black"
                >
                  Terms of Service &amp; Privacy
                </button>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <form onSubmit={submit} className="bg-[var(--bone)] p-7 text-black sm:p-12">
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
              <label className="mt-7 block text-[11px] font-bold uppercase tracking-[0.14em]">
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
              <label className="mt-5 block text-[11px] font-bold uppercase tracking-[0.14em]">
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
              <label className="mt-5 block text-[11px] font-bold uppercase tracking-[0.14em]">
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
              <label className="mt-5 block text-[11px] font-bold uppercase tracking-[0.14em]">
                Decision ahead
                <input
                  className="field-input mt-2 normal-case tracking-normal"
                  value={form.decision}
                  onChange={(e) => setForm({ ...form, decision: e.target.value })}
                  placeholder="Purchase, insurance, estate, import…"
                />
              </label>
              <label className="mt-5 block text-[11px] font-bold uppercase tracking-[0.14em]">
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
                className="luxury-btn mt-7 w-full px-5 py-4 text-[14px] uppercase"
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

      <footer className="border-t border-white/10 bg-[#0B0B0B] px-4 py-10 text-center text-white sm:px-6 lg:px-8">
        <p className="serif text-[clamp(48px,8vw,92px)] leading-none tracking-[8px]">ADVERSIQ</p>
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
