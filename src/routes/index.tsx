import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, ClipboardCheck, FileSearch, Landmark, Scale } from "lucide-react";

export const Route = createFileRoute("/")({ component: Home });

const STEPS = [
  {
    n: "01",
    t: "Identify the complete vehicle",
    d: "Record the donor or original vehicle, chassis identity, factory specification, current build, edition, mileage and provenance.",
  },
  {
    n: "02",
    t: "Understand what changed",
    d: "Trace coachbuilding, tuning, restoration or restomod work through build records, invoices, certificates and photographs.",
  },
  {
    n: "03",
    t: "Define the relevant market",
    d: "Consider where this vehicle could realistically sell, including specialist, domestic and cross-border markets where relevant.",
  },
  {
    n: "04",
    t: "Research comparable evidence",
    d: "Use relevant completed transactions where available. For rare builds, explain the limits of the evidence and why each comparison was selected.",
  },
  {
    n: "05",
    t: "Assess condition and context",
    d: "Review inspection findings, storage, documentation, market access and assignment-specific duty or tax assumptions.",
  },
  {
    n: "06",
    t: "Explain the conclusion",
    d: "Present the valuation basis, evidence, adjustments, assumptions and limitations in a report prepared for its stated purpose.",
  },
];

function Home() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-bg text-fg">
      <header className="sticky top-0 z-40 border-b border-border bg-bg/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center px-5 py-4">
          <a href="#top" className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center border border-primary text-primary font-display text-xl">
              A
            </span>
            <span>
              <span className="block text-sm font-medium tracking-[0.18em]">ADVERSIQ</span>
              <span className="block text-xs text-muted">Global Valuation Advisory</span>
            </span>
          </a>
        </div>
      </header>

      <main id="top">
        <section className="relative isolate overflow-hidden border-b border-border bg-bg">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 w-full md:w-[68%]"
          >
            <img
              src="/cars/hero-painterly-coachbuilt.png"
              alt=""
              className="h-full w-full object-cover object-[center_45%] opacity-100"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-bg/5 via-bg/20 to-bg/95" />
            <div className="absolute inset-0 bg-gradient-to-b from-bg/15 via-transparent to-bg/45 md:hidden" />
          </div>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rotate-45 border border-signal-cyan/20"
          />
          <div className="mx-auto flex max-w-7xl justify-end px-5 py-16 md:px-10 md:py-24">
            <div className="relative z-10 w-full max-w-2xl text-right">
              <p className="mb-5 flex items-center justify-end gap-3 text-xs font-medium uppercase tracking-[0.22em] text-primary">
                Purpose-led valuation for rare and transformed vehicles
                <span className="h-px w-8 bg-primary" />
              </p>
              <h1 className="ml-auto max-w-2xl font-display text-5xl leading-[0.98] text-fg text-balance sm:text-6xl lg:text-7xl">
                When the car is one of one, the valuation should see the whole story.
              </h1>
              <p className="ml-auto mt-7 max-w-lg text-base leading-relaxed text-fg/90 md:text-lg">
                ADVERSIQ prepares specialist valuations for complex vehicle assignments—from desktop
                evidence reviews to agreed on-site inspections and cross-border matters. Each brief
                connects identity, provenance, condition and relevant market evidence to a defined
                valuation question for clients, insurers, advisers and authorities.
              </p>
              <div className="mt-8 flex flex-col justify-end gap-3 sm:flex-row">
                <a
                  href="#engage"
                  className="inline-flex h-12 items-center justify-center gap-2 bg-primary px-6 font-medium text-primary-ink transition-colors hover:bg-signal-cyan/80"
                >
                  Discuss your vehicle <ArrowRight size={16} />
                </a>
                <a
                  href="#method"
                  className="inline-flex h-12 items-center justify-center border border-border px-6 text-fg transition-colors hover:border-primary hover:text-primary"
                >
                  See the method
                </a>
              </div>
              <p className="mt-10 border-t border-border pt-4 text-xs uppercase tracking-[0.18em] text-muted">
                Melbourne based <span className="mx-2 text-primary">/</span> International market
                context
              </p>
              <div className="mt-8 border-r border-primary pr-4">
                <p className="text-xs uppercase tracking-[0.18em] text-primary">
                  When the market sees only a base model
                </p>
                <p className="ml-auto mt-2 max-w-md font-display text-2xl leading-snug text-fg">
                  The original specification may tell only part of the story.
                </p>
                <p className="ml-auto mt-2 max-w-md text-sm leading-relaxed text-fg/80">
                  Coachbuilt, modified and reimagined cars need their identity, work and buyer
                  market understood together.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="gap" className="bg-paper text-ink">
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
            <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr] md:items-end">
              <div>
                <p className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-muted-ink">
                  <span className="h-px w-8 bg-signal-rose" />
                  Why ordinary guides can miss the point
                </p>
                <h2 className="mt-4 max-w-md font-display text-4xl leading-tight text-balance md:text-5xl">
                  The badge may be familiar. The vehicle may not be.
                </h2>
              </div>
              <div
                className="border-l border-line pl-6 md:pl-8"
                aria-label="Examples of vehicle marques and specialists"
              >
                <p className="mb-4 text-xs uppercase tracking-[0.18em] text-muted-ink">
                  Marques &amp; specialist builds
                </p>
                <div className="grid grid-cols-2 gap-x-5 gap-y-0 sm:grid-cols-4">
                  {[
                    ["F", "Ferrari"],
                    ["P", "Porsche"],
                    ["MB", "Mercedes-Benz"],
                    ["AM", "Aston Martin"],
                    ["L", "Lamborghini"],
                    ["S", "Singer"],
                    ["M", "Mansory"],
                    ["B", "Brabus"],
                  ].map(([mark, name]) => (
                    <div
                      key={name}
                      className="flex min-h-14 items-center gap-3 border-b border-line py-3"
                    >
                      <span
                        aria-hidden="true"
                        className="flex size-8 shrink-0 items-center justify-center border border-line font-display text-xs text-muted-ink"
                      >
                        {mark}
                      </span>
                      <span className="text-xs font-medium leading-tight sm:text-sm">{name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-14 grid gap-8 border-t border-line pt-8 md:grid-cols-3 md:gap-10">
              {[
                [
                  "A base model is not the whole build",
                  "A stock supercar may have a documented coachbuilder conversion. An older chassis may have been comprehensively rebuilt into a modern performance car. The original listing may not describe what exists now.",
                ],
                [
                  "Import calculations are not market evidence",
                  "Customs values, duties and taxes depend on local rules and declared facts. A calculation can differ from what a specialist buyer would pay—and neither should be mistaken for the other.",
                ],
                [
                  "Rare does not mean easy to price",
                  "Few close sales, unclear provenance or limited buyer demand can make both high and low estimates hard to defend. Build cost alone does not establish market value.",
                ],
              ].map(([t, d], index) => (
                <article key={t} className="relative">
                  <span
                    className={`font-display text-sm ${index === 1 ? "text-primary" : index === 2 ? "text-signal-coral" : "text-signal-rose"}`}
                  >
                    0{index + 1}
                  </span>
                  <h3 className="mt-3 max-w-xs font-display text-2xl leading-snug">{t}</h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-ink">{d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="market-context-photo" className="bg-surface">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 md:grid-cols-[0.82fr_1.18fr] md:px-10 md:py-24">
            <div className="order-2 md:order-1">
              <p className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-primary">
                <span className="h-px w-8 bg-primary" />
                When borders and assessments complicate the picture
              </p>
              <h2 className="mt-5 max-w-lg font-display text-4xl leading-tight text-balance md:text-5xl">
                One vehicle. Different markets, rules and assumptions.
              </h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-muted">
                Cross-border movement can bring substantial duties, tax and customs scrutiny.
                Disputed or uncertain values may complicate a sale or contribute to a vehicle being
                held or seized. We help establish what the vehicle is and document the relevant
                market evidence, so decision-makers have a clearer basis to review. We cannot
                determine customs decisions or guarantee an outcome.
              </p>
              <a
                href="#method"
                className="mt-7 inline-flex items-center gap-3 text-sm font-medium text-fg transition-colors hover:text-primary"
              >
                How we approach the evidence <ArrowRight size={16} className="text-primary" />
              </a>
            </div>
            <figure className="photo-card-stack photo-card-stack-cyan order-1 md:order-2">
              <img
                src="/cars/green-hypercar-estate.jpg"
                alt="A specialist green performance car outside a contemporary estate"
                loading="lazy"
                className="h-72 w-full object-cover md:h-[31rem]"
              />
            </figure>
          </div>
        </section>

        <section id="method" className="bg-paper text-ink">
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
            <div className="grid gap-8 border-b border-border pb-10 md:grid-cols-[0.75fr_1.25fr] md:items-end">
              <p className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-primary">
                <span className="h-px w-8 bg-primary" />
                How we approach a valuation
              </p>
              <h2 className="max-w-3xl font-display text-4xl leading-tight text-balance md:text-5xl">
                Understand the build. Research the market. Show the reasoning.
              </h2>
            </div>
            <div className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
              {STEPS.map((s, index) => (
                <article key={s.n} className="border-b border-border py-7 md:py-9">
                  <p
                    className={`font-display text-3xl ${index % 3 === 1 ? "text-primary" : index % 3 === 2 ? "text-signal-coral" : "text-signal-rose"}`}
                  >
                    {s.n}
                  </p>
                  <h3 className="mt-4 font-display text-2xl">{s.t}</h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-ink">{s.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="border-y border-border bg-paper text-ink">
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
            <div className="mb-10 grid gap-5 md:grid-cols-[0.75fr_1.25fr] md:items-end">
              <p className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-muted-ink">
                <span className="h-px w-8 bg-signal-rose" />
                Who these services are for
              </p>
              <h2 className="font-display text-4xl leading-tight text-balance md:text-5xl">
                Specialist support for people making decisions about rare vehicles.
              </h2>
            </div>
            <div className="grid gap-x-10 md:grid-cols-2">
              {[
                [
                  FileSearch,
                  "Owners & collectors",
                  "For owners, collectors and prospective buyers who need a desktop review of a vehicle’s identity, provenance, transformation records, condition imagery and relevant market evidence.",
                ],
                [
                  ClipboardCheck,
                  "Clients needing an inspection",
                  "For owners, buyers and their professional advisers who need an agreed on-site record of identifying details, visible condition and coachbuilding features. Diagnostic findings may require specialist testing.",
                ],
                [
                  Landmark,
                  "Importers & cross-border advisers",
                  "For importers, exporters, customs brokers and legal advisers addressing a cross-border vehicle valuation. The brief identifies the requested basis and jurisdiction; legal application should be confirmed with counsel.",
                ],
                [
                  Scale,
                  "Insurers, legal & estate professionals",
                  "For insurers, lawyers, executors and corporate advisers requiring evidence for insurance schedules, formal proceedings or complex asset divisions. Any expert declaration is tailored to the applicable code; decision-makers determine acceptance.",
                ],
              ].map(([Icon, t, d], index) => (
                <article
                  key={String(t)}
                  className="grid grid-cols-[3rem_1fr] gap-4 border-t border-line py-6 md:py-8"
                >
                  <span
                    className={`font-display text-lg ${index % 2 ? "text-signal-coral" : "text-primary"}`}
                  >
                    0{index + 1}
                  </span>
                  <div>
                    <Icon className="mb-4 text-muted-ink" size={21} strokeWidth={1.5} />
                    <h3 className="font-display text-2xl">{String(t)}</h3>
                    <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-ink">
                      {String(d)}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="condition-photo" className="overflow-hidden bg-paper text-ink">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 md:grid-cols-[0.72fr_1.28fr] md:px-10 md:py-24">
            <div>
              <p className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-muted-ink">
                <span className="h-px w-8 bg-signal-coral" />
                Condition changes the comparison
              </p>
              <h2 className="mt-5 max-w-md font-display text-4xl leading-tight text-balance md:text-5xl">
                A photograph can start a question. It cannot answer every one.
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-ink">
                Condition, storage and repair evidence may affect marketability. Images support
                research but do not replace an inspection or prove a vehicle’s value.
              </p>
            </div>
            <figure className="photo-card-stack photo-card-stack-coral">
              <img
                src="/cars/red-tuned-sports-car.jpg"
                alt="Close detail of a modified red sports car and wheel"
                loading="lazy"
                className="h-72 w-full object-cover md:h-[30rem]"
              />
            </figure>
          </div>
        </section>

        <section id="documents" className="bg-paper-2 text-ink">
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
            <div className="max-w-3xl">
              <p className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-primary">
                <span className="h-px w-8 bg-primary" />
                What a valuation report explains
              </p>
              <h2 className="mt-5 max-w-2xl font-display text-4xl leading-tight text-balance md:text-5xl">
                Clear reasoning. No guesswork.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-ink">
                A useful report answers three questions: what is this vehicle today, what does the
                available evidence show, and how does that evidence support the valuation?
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                [
                  "01",
                  "The vehicle",
                  "Identity, original specification and the work that makes this car different.",
                ],
                [
                  "02",
                  "The evidence",
                  "Documents, condition and relevant market sales—with gaps clearly noted.",
                ],
                [
                  "03",
                  "The conclusion",
                  "A reasoned opinion tied to the agreed purpose, market and valuation basis.",
                ],
              ].map(([number, title, detail], index) => (
                <article key={number} className="border-t border-border pt-5">
                  <span
                    className={`font-display text-sm ${index === 1 ? "text-primary" : index === 2 ? "text-signal-coral" : "text-signal-rose"}`}
                  >
                    {number}
                  </span>
                  <h3 className="mt-4 font-display text-2xl">{title}</h3>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-ink">{detail}</p>
                </article>
              ))}
            </div>
            <div className="mt-12 border-t border-border pt-8 md:mt-14 md:pt-10">
              <div className="grid gap-6 md:grid-cols-[0.75fr_1.25fr] md:items-start">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-primary">
                    Formal expert instructions
                  </p>
                  <h3 className="mt-3 font-display text-2xl text-balance">
                    The role and scope are made clear.
                  </h3>
                </div>
                <div>
                  <p className="text-sm leading-relaxed text-muted-ink">
                    Where appointed as an expert and required by the applicable code, the report can
                    include:
                  </p>
                  <ul className="mt-5 grid gap-4 sm:grid-cols-3">
                    {[
                      [
                        "Impartiality",
                        "A declaration of the overriding duty to assist the court or authority impartially, not the retaining party.",
                      ],
                      [
                        "Qualifications",
                        "A relevant CV, including 20+ years in vehicle sales and 7+ years of Associate Valuer experience.",
                      ],
                      [
                        "Instructions",
                        "The letter of instruction and valuation question, included or annexed to the brief.",
                      ],
                    ].map(([title, detail], index) => (
                      <li
                        key={title}
                        className={`border-l pl-4 ${index === 1 ? "border-signal-coral" : "border-primary"}`}
                      >
                        <h4 className="text-sm font-medium">{title}</h4>
                        <p className="mt-2 text-sm leading-relaxed text-muted-ink">{detail}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-12 border-t border-border pt-8 md:mt-16 md:pt-10">
              <div className="max-w-2xl">
                <p className="text-xs uppercase tracking-[0.22em] text-primary">Evidence review</p>
                <h3 className="mt-3 font-display text-3xl text-balance md:text-4xl">
                  Start with what’s available.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-ink">
                  High-resolution images support initial desktop research, but cannot verify
                  diagnostic scan data, physical wear or coachbuilding integrity. A physical
                  inspection record—and specialist diagnostic testing where relevant—is needed to
                  verify those findings.
                </p>
              </div>
              <div className="mt-8 grid gap-8 sm:grid-cols-2">
                <div className="border-l border-primary pl-4">
                  <h4 className="font-medium">Records & photographs</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-ink">
                    Missing provenance, undocumented modifications, or absent build records are
                    treated as explicit analytical limitations rather than speculative assumptions.
                  </p>
                </div>
                <div className="border-l border-signal-coral pl-4">
                  <h4 className="font-medium">Purpose &amp; legal basis</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-ink">
                    Each brief states its intended use, valuation basis, assumptions and limits.
                    Legal and customs requirements vary by jurisdiction.
                  </p>
                </div>
              </div>
            </div>
            <p className="mt-10 max-w-4xl text-xs leading-relaxed text-muted-ink">
              Reports are prepared for an agreed purpose and scope. They can support review but
              cannot guarantee admissibility or acceptance by a court, insurer or customs authority;
              requirements vary by jurisdiction.
            </p>
          </div>
        </section>

        <section
          id="fees"
          className="relative isolate overflow-hidden border-y border-border bg-bg"
        >
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <img
              src="/cars/fees-sunset-drive.jpg"
              alt=""
              className="h-full w-full object-cover object-[center_28%] opacity-100"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-bg/60 via-bg/45 to-bg/35" />
          </div>
          <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
            <p className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-fg">
              <span className="h-px w-8 bg-primary" />A clear scope before work begins
            </p>
            <h2 className="mt-4 font-display text-5xl text-balance">Fees</h2>
            <div className="offset-panel mt-8">
              <div className="grid gap-6 border border-primary/40 bg-bg/85 p-6 shadow-xl md:grid-cols-[0.7fr_1.3fr] md:items-center md:p-8">
                <div>
                  <h3 className="text-sm uppercase tracking-[0.16em] text-muted">
                    All valuation assignments
                  </h3>
                  <p className="mt-3 font-display text-4xl text-primary">POA</p>
                </div>
                <div className="space-y-3 text-sm leading-relaxed text-muted">
                  <p>
                    Desktop evidence reviews and on-site physical inspections are scoped and quoted
                    individually to reflect the vehicle, evidence requirements and assignment
                    complexity. For assets valued above USD $1 million, the valuation fee is capped
                    at <span className="font-medium text-fg">USD $10,000</span>.
                  </p>
                  <p>
                    Agreed travel, third-party inspection or diagnostic work, and specialized access
                    costs are separate unless included in writing. Any sale or placement service is
                    scoped and agreed separately.
                  </p>
                </div>
              </div>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div className="border border-border bg-bg/80 p-5">
                  <h3 className="font-display text-xl text-fg">Desktop evidence review</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    Document, provenance, image and market-evidence review within the agreed scope.
                  </p>
                </div>
                <div className="border border-border bg-bg/80 p-5">
                  <h3 className="font-display text-xl text-fg">On-site physical inspection</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    Agreed in-person inspection and evidence record; travel, access and specialist
                    testing are separately identified.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="bg-bg">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 md:grid-cols-[0.9fr_1.1fr] md:px-10 md:py-24 lg:gap-16">
            <div>
              <p className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-primary">
                <span className="h-px w-8 bg-primary" />
                About Brayden Walls
              </p>
              <h2 className="mt-5 max-w-xl font-display text-4xl leading-tight text-balance md:text-5xl">
                Experience for vehicles that do not fit the standard categories.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
                Brayden Walls is a full-time professional Associate Valuer based in Melbourne,
                Australia. He brings more than 20 years of motor vehicle sales experience and over
                seven years as an Associate Valuer. Having bought and sold vehicles in wholesale and
                retail markets, he understands how the story on paper must connect to the vehicle
                itself and the people who may buy it.
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
                ADVERSIQ steps in when a rare or transformed vehicle is difficult to identify,
                compare or explain—whether it began as a stock supercar, was coachbuilt, or was
                rebuilt from an older platform. Brayden’s international network can help locate
                relevant market context; the opinion still depends on evidence, scope and the
                available records.
              </p>
              <ul className="mt-7 grid gap-x-6 gap-y-3 border-t border-border pt-5 text-sm text-muted sm:grid-cols-2">
                {[
                  "20+ years in motor vehicle sales",
                  "7+ years as a professional Associate Valuer",
                  "Wholesale and retail buying and selling experience",
                  "Melbourne-based, with international market contacts",
                  "Support for complex imports, customs reviews and cross-border assignments",
                ].map((line, index) => (
                  <li key={line} className="flex gap-3">
                    <span
                      className={`font-display ${index % 2 ? "text-signal-coral" : "text-primary"}`}
                    >
                      0{index + 1}
                    </span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
            <figure className="photo-card-stack photo-card-stack-cyan mx-2 md:mx-4">
              <img
                src="/cars/brayden-walls-vehicle-assessment.jpeg"
                alt="ADVERSIQ vehicle assessment beside a classic Mercedes-Benz in Melbourne"
                className="relative aspect-[4/3] w-full object-cover object-center"
                width={1408}
                height={768}
                loading="lazy"
              />
              <figcaption className="mt-3 flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-muted">
                <span>Melbourne, Australia</span>
                <span>ADVERSIQ / Vehicle assessment</span>
              </figcaption>
            </figure>
          </div>
        </section>

        <section
          id="engage"
          className="relative isolate overflow-hidden border-t border-line bg-paper text-ink"
        >
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <img
              src="/network-world.avif"
              alt=""
              className="h-full w-full object-cover opacity-10"
            />
          </div>
          <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-5 py-16 text-ink md:grid-cols-[0.8fr_1.2fr] md:px-10 md:py-24 lg:gap-16">
            <div className="self-start md:sticky md:top-28">
              <p className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-primary">
                <span className="h-px w-8 bg-primary" />
                Begin a conversation
              </p>
              <h2 className="mt-5 max-w-lg font-display text-4xl leading-tight text-balance md:text-5xl">
                Tell us what makes the vehicle different.
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-ink">
                Tell us what vehicle you have and what valuation you need. Include its location, any
                coachbuilder or modifications, and the decision or deadline the valuation needs to
                support.
              </p>
              <a
                className="mt-8 inline-flex items-center gap-3 border-t border-line pt-4 text-sm text-ink transition-colors hover:text-primary"
                href="mailto:brayden@adversiq.xyz"
              >
                brayden@adversiq.xyz <ArrowRight size={16} className="text-primary" />
              </a>
              <div className="mt-6 space-y-3 text-sm leading-relaxed text-ink">
                <p>
                  <span className="block text-xs uppercase tracking-[0.16em] text-primary">
                    Melbourne office
                  </span>
                  2 Verona St, Box Hill South, Victoria, Australia
                </p>
                <p>
                  <span className="block text-xs uppercase tracking-[0.16em] text-primary">
                    Report production
                  </span>
                  Online reports are produced in Mindanao, Philippines.
                </p>
                <a
                  className="inline-block text-ink transition-colors hover:text-primary"
                  href="tel:+639608354283"
                >
                  +63 960 835 4283
                </a>
              </div>
              <a
                className="mt-6 inline-flex min-h-11 items-center gap-2 border border-line px-4 text-xs font-medium text-ink transition-colors hover:border-primary hover:text-primary"
                href="/terms"
              >
                Terms of Service &amp; Privacy <ArrowRight size={14} />
              </a>
            </div>
            <div className="bg-paper p-5 text-ink sm:p-8 md:p-10">
              {sent ? (
                <p className="border-l-2 border-primary bg-paper-2 p-6 text-sm leading-relaxed">
                  Enquiry noted in this session. This preview does not transmit messages. Email
                  brayden@adversiq.xyz with the vehicle details and purpose to discuss an
                  engagement.
                </p>
              ) : (
                <form
                  className="grid gap-x-5 gap-y-4 sm:grid-cols-2"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                >
                  <label className="block text-sm">
                    Name
                    <input
                      required
                      name="name"
                      className="mt-2 h-12 w-full border border-line bg-paper px-3 outline-none transition-colors focus:border-primary"
                    />
                  </label>
                  <label className="block text-sm">
                    Email
                    <input
                      required
                      type="email"
                      name="email"
                      className="mt-2 h-12 w-full border border-line bg-paper px-3 outline-none transition-colors focus:border-primary"
                    />
                  </label>
                  <label className="block text-sm">
                    Year
                    <input
                      inputMode="numeric"
                      name="year"
                      className="mt-2 h-12 w-full border border-line bg-paper px-3 outline-none transition-colors focus:border-primary"
                      placeholder="If known"
                    />
                  </label>
                  <label className="block text-sm">
                    Make
                    <input
                      required
                      name="make"
                      className="mt-2 h-12 w-full border border-line bg-paper px-3 outline-none transition-colors focus:border-primary"
                      placeholder="e.g. Ferrari"
                    />
                  </label>
                  <label className="block text-sm">
                    Model / build
                    <input
                      required
                      name="model"
                      className="mt-2 h-12 w-full border border-line bg-paper px-3 outline-none transition-colors focus:border-primary"
                      placeholder="Model or current build"
                    />
                  </label>
                  <label className="block text-sm">
                    Variant / edition
                    <input
                      name="variant"
                      className="mt-2 h-12 w-full border border-line bg-paper px-3 outline-none transition-colors focus:border-primary"
                      placeholder="If applicable"
                    />
                  </label>
                  <label className="block text-sm">
                    Coachbuilder / restorer
                    <input
                      name="coachbuilder"
                      className="mt-2 h-12 w-full border border-line bg-paper px-3 outline-none transition-colors focus:border-primary"
                      placeholder="If modified or rebuilt"
                    />
                  </label>
                  <label className="block text-sm sm:col-span-2">
                    Vehicle location
                    <input
                      name="location"
                      className="mt-2 h-12 w-full border border-line bg-paper px-3 outline-none transition-colors focus:border-primary"
                      placeholder="City and country"
                    />
                  </label>
                  <label className="block text-sm sm:col-span-2">
                    What valuation do you need?
                    <select
                      required
                      name="valuationPurpose"
                      className="mt-2 h-12 w-full border border-line bg-paper px-3 outline-none transition-colors focus:border-primary"
                    >
                      <option value="">Select a purpose</option>
                      <option>Insurance / agreed value</option>
                      <option>Purchase or sale</option>
                      <option>Import, customs or duty review</option>
                      <option>Vehicle held or seized</option>
                      <option>Export or re-export</option>
                      <option>Estate or family matter</option>
                      <option>Finance or lending</option>
                      <option>Legal proceedings or dispute</option>
                      <option>Other / not sure yet</option>
                    </select>
                  </label>
                  <label className="block text-sm sm:col-span-2">
                    More information
                    <textarea
                      name="details"
                      rows={6}
                      placeholder="What makes the vehicle unusual? Include known modifications or restoration, available records, the valuation question, and any timing requirements."
                      className="mt-2 w-full border border-line bg-paper px-3 py-2 outline-none transition-colors focus:border-primary"
                    />
                  </label>
                  <label className="flex items-start gap-3 text-xs leading-relaxed text-muted sm:col-span-2">
                    <input
                      required
                      type="checkbox"
                      name="termsAcknowledgement"
                      className="mt-0.5 size-4 shrink-0 accent-primary"
                    />
                    <span>
                      I have read the{" "}
                      <a
                        className="font-medium text-ink underline underline-offset-2"
                        href="/terms"
                      >
                        Terms of Service &amp; Privacy Notice
                      </a>
                      . I understand this preview form does not transmit my enquiry and that an
                      assignment requires a separate written engagement.
                    </span>
                  </label>
                  <button
                    type="submit"
                    className="h-12 bg-ink font-medium text-paper transition-colors hover:bg-primary hover:text-primary-ink sm:col-span-2"
                  >
                    Submit enquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-bg px-5 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 text-xs text-muted md:flex-row md:items-center md:px-5">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <a href="#top" className="font-medium tracking-[0.18em] text-fg">
              ADVERSIQ{" "}
              <span className="font-normal tracking-normal text-muted">
                / Global Valuation Advisory
              </span>
            </a>
            <span className="border-l border-border pl-4 text-xs text-muted">
              Website designed by Brayden Walls
            </span>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <a className="transition-colors hover:text-primary" href="#method">
              Method
            </a>
            <a className="transition-colors hover:text-primary" href="#fees">
              Fees
            </a>
            <a className="transition-colors hover:text-primary" href="#about">
              About
            </a>
          </div>
          <div className="flex flex-col gap-2 md:items-end">
            <a className="transition-colors hover:text-primary" href="mailto:brayden@adversiq.xyz">
              brayden@adversiq.xyz
            </a>
            <a className="transition-colors hover:text-primary" href="tel:+639608354283">
              +63 960 835 4283
            </a>
            <a className="transition-colors hover:text-primary" href="/terms">
              Terms &amp; Privacy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
