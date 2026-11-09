import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({ component: Home });

const STEPS = [
  {
    n: "01",
    t: "The vehicle",
    d: "Identity, original specification and the work that makes this car different.",
  },
  {
    n: "02",
    t: "The evidence",
    d: "Documents, condition and relevant market sales—with gaps clearly noted.",
  },
  {
    n: "03",
    t: "The conclusion",
    d: "A reasoned opinion tied to the agreed purpose, market and valuation basis.",
  },
];

function Home() {
  const [enquiry, setEnquiry] = useState("");

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
        <section className="border-b border-border bg-bg">
          <div className="mx-auto grid max-w-7xl items-stretch px-5 md:grid-cols-[1.08fr_0.92fr] md:px-10">
            <figure className="relative -mx-5 h-72 overflow-hidden sm:h-96 md:mx-0 md:h-auto md:min-h-[42rem]">
              <img
                src="/cars/hero-painterly-coachbuilt.png"
                alt="Illustration of a distinctive coachbuilt sports car"
                className="h-full w-full object-cover object-[center_45%]"
                fetchPriority="high"
              />
              <figcaption className="absolute bottom-4 left-4 text-[10px] uppercase tracking-[0.18em] text-fg/80 md:bottom-6 md:left-6">
                Rare and transformed vehicles
              </figcaption>
            </figure>
            <div className="flex flex-col justify-center py-12 md:pl-12 md:pr-4 md:py-20">
              <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-primary">
                <span className="h-px w-8 bg-primary" />
                Specialist automotive valuations
              </p>
              <h1 className="mt-6 max-w-2xl font-display text-5xl leading-[0.98] text-fg text-balance sm:text-6xl lg:text-7xl">
                When the car is <span className="text-signal-rose">one of one</span>, see the{" "}
                <span className="text-primary">whole story.</span>
              </h1>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-fg/85 md:text-lg">
                ADVERSIQ prepares purpose-led valuations for rare, coachbuilt, restored and
                substantially modified vehicles. From desktop evidence reviews to agreed on-site
                inspections and cross-border matters, each assignment connects identity, provenance,
                condition and relevant market evidence to a defined valuation question.
              </p>
              <p className="mt-10 border-t border-border pt-5 text-[10px] uppercase tracking-[0.16em] text-muted sm:text-xs">
                Melbourne, Australia <span className="mx-2 text-primary">/</span> International
                market context
              </p>
            </div>
          </div>
        </section>

        <section id="gap" className="bg-paper text-ink">
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
            <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr] md:items-end">
              <div>
                <p className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-muted-ink">
                  <span className="h-px w-8 bg-primary" />
                  Why ordinary guides can miss the point
                </p>
                <h2 className="mt-4 max-w-md font-display text-4xl leading-tight text-balance md:text-5xl">
                  The badge may be familiar. The vehicle may not be.
                </h2>
                <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-ink md:text-base">
                  Standard price guides are built around typical vehicles. Rare, coachbuilt and
                  transformed cars can sit outside those categories, so their identity, current
                  specification and supporting evidence need closer consideration.
                </p>
              </div>
              <div
                className="border-l border-line pl-6 md:pl-8"
                aria-label="Examples of vehicle marques and specialists"
              >
                <p className="mb-4 text-xs uppercase tracking-[0.18em] text-primary">
                  Marques &amp; specialist builds
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4">
                  {[
                    "Ferrari",
                    "Porsche",
                    "Mercedes-Benz",
                    "Aston Martin",
                    "Lamborghini",
                    "Singer",
                    "Mansory",
                    "Brabus",
                  ].map((name) => (
                    <div
                      key={name}
                      className="flex min-h-14 items-center border-b border-line py-3 pr-3 font-display text-base text-primary transition-colors hover:text-muted-ink sm:text-lg"
                    >
                      {name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-14 border-t border-line">
              <div className="grid gap-8 pt-8 md:grid-cols-2 md:items-center md:gap-12 md:pt-12">
                <div className="feature-notes order-2 divide-y divide-line md:order-1">
                  {[
                    {
                      title: "A base model is not the whole build",
                      description:
                        "Factory guides can miss coachbuilt conversions, limited series and substantial restomods. We assess the vehicle as it exists today, using available records to understand how it differs from its original specification.",
                    },
                    {
                      title: "Import calculations are not market evidence",
                      description:
                        "Customs values, duties and taxes depend on local rules and declared facts. Statutory calculations may differ from market evidence; we document relevant market context for the agreed valuation purpose.",
                    },
                    {
                      title: "Rare does not mean easy to price",
                      description:
                        "Limited comparable sales, incomplete provenance or unverified modifications can constrain an opinion. We state relevant assumptions and evidence gaps rather than treating build cost or speculation as proof of market value.",
                    },
                  ].map(({ title, description }, index) => (
                    <article key={title} className="py-6 first:pt-0 last:pb-0">
                      <span className="font-display text-sm text-primary">0{index + 1}</span>
                      <h3 className="mt-2 max-w-sm font-display text-2xl leading-snug">{title}</h3>
                      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-ink">
                        {description}
                      </p>
                    </article>
                  ))}
                </div>
                <figure
                  className="feature-joiner order-1 md:order-2"
                  role="img"
                  aria-label="A photographic joiner collage made from the supplied exotic-car lineup"
                >
                  {[
                    { area: "a", position: "8% 12%" },
                    { area: "b", position: "52% 12%" },
                    { area: "c", position: "96% 14%" },
                    { area: "d", position: "34% 45%" },
                    { area: "e", position: "0% 60%" },
                    { area: "f", position: "50% 62%" },
                    { area: "g", position: "100% 56%" },
                    { area: "h", position: "16% 100%" },
                    { area: "i", position: "86% 100%" },
                  ].map(({ area, position }) => (
                    <span key={area} className="feature-joiner-tile" style={{ gridArea: area }}>
                      <img
                        src="/cars/supercar-lineup.png"
                        alt=""
                        aria-hidden="true"
                        loading="lazy"
                        style={{ objectPosition: position }}
                      />
                    </span>
                  ))}
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section id="market-context-photo" className="bg-lime-panel text-ink">
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
            <div className="max-w-3xl">
              <p className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-ink/70">
                <span className="h-px w-8 bg-ink/70" />
                When borders and assessments complicate the picture
              </p>
              <h2 className="mt-5 max-w-lg font-display text-4xl leading-tight text-balance md:text-5xl">
                One vehicle. Different markets, rules and assumptions.
              </h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-ink/80">
                Cross-border movement can bring substantial duties, tax and customs scrutiny.
                Disputed or uncertain values may complicate a sale or contribute to a vehicle being
                held or seized. We help establish what the vehicle is and document the relevant
                market evidence, so decision-makers have a clearer basis to review. We cannot
                determine customs decisions or guarantee an outcome.
              </p>
              <a
                href="#method"
                className="mt-7 inline-flex items-center gap-3 text-sm font-medium text-ink transition-colors hover:text-ink/70"
              >
                How we approach the evidence <ArrowRight size={16} className="text-ink" />
              </a>
            </div>
          </div>
        </section>

        <section id="method" className="bg-paper text-ink">
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
            <div className="pb-10">
              <p className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-primary">
                <span className="h-px w-8 bg-primary" />
                How we approach a valuation
              </p>
              <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-balance md:text-5xl">
                A considered valuation starts by understanding what matters.
              </h2>
            </div>
            <div className="grid gap-12 border-t border-line pt-8 md:grid-cols-2 md:gap-16">
              <div className="border-b border-line">
                {STEPS.map((s) => (
                  <article
                    key={s.n}
                    className="grid grid-cols-[3rem_1fr] items-baseline gap-3 border-b border-line py-5 last:border-b-0 md:grid-cols-[4rem_1fr] md:gap-6 md:py-6"
                  >
                    <p className="font-display text-sm text-signal-rose">{s.n}</p>
                    <div>
                      <h3 className="font-display text-xl text-signal-rose md:text-2xl">{s.t}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-ink md:text-base">
                        {s.d}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
              <aside className="flex flex-col justify-center border-l-2 border-signal-rose pl-6 md:pl-10">
                <p className="text-xs uppercase tracking-[0.22em] text-muted-ink">
                  The value behind the valuation
                </p>
                <h3 className="mt-5 max-w-xl font-display text-3xl leading-tight text-signal-rose text-balance md:text-4xl">
                  It starts with understanding you—and why the valuation matters.
                </h3>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-ink">
                  Every assignment has a person and a purpose behind it. We take the time to
                  understand the decision you need to make, what matters to you and the story this
                  vehicle carries.
                </p>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-ink">
                  A genuine passion for distinctive vehicles means looking beyond the numbers. The
                  figure matters, but so do the history, the craftsmanship and the context that give
                  it meaning.
                </p>
              </aside>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="service-section relative isolate overflow-hidden border-y border-border bg-wheel-red text-fg"
        >
          <div className="relative z-10 mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
            <div className="mb-10 max-w-3xl">
              <p className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-fg/80">
                <span className="h-px w-8 bg-lime-panel" />
                Four ways we support complex vehicle valuations
              </p>
              <h2 className="mt-4 font-display text-4xl leading-tight text-ink text-balance md:text-5xl">
                Specialist valuation services for distinctive vehicles.
              </h2>
            </div>
            <div className="grid items-stretch gap-8 md:grid-cols-[0.86fr_1.14fr] md:gap-12">
              <figure className="service-feature-image">
                <img
                  src="/cars/red-wheel-supercar.jpg"
                  alt="Silver supercar with a red-accented wheel parked beside a modern building"
                  loading="lazy"
                />
              </figure>
              <div className="service-audience-list">
                {[
                  [
                    "Desktop evidence reviews",
                    "A scoped review of supplied vehicle details, provenance, build records, condition images and relevant market evidence. For remote buyers, brokers and pre-purchase due diligence.",
                  ],
                  [
                    "On-site physical inspections",
                    "An agreed in-person record of identifying details, visible condition and notable coachbuilding or modification features. For collectors, insurers and high-value asset managers; diagnostics require separate specialist testing where relevant.",
                  ],
                  [
                    "Cross-border valuation support",
                    "Purpose-defined market evidence for assignments involving imports, exports or differing jurisdictions. For importers, exporters, customs brokers and tax counsel; legal and customs application should be confirmed with qualified advisers.",
                  ],
                  [
                    "Reports for legal, insurance & estate matters",
                    "Independent reports scoped to the agreed instructions and intended use. For insurers, law firms, executors and dispute-resolution advisers; expert requirements and acceptance depend on the relevant jurisdiction and decision-maker.",
                  ],
                ].map(([t, d], index) => (
                  <article
                    key={String(t)}
                    className="service-audience-card flex flex-col gap-3 border p-5 md:p-6"
                  >
                    <span className="font-display text-sm tracking-[0.18em] text-lime-panel">
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-xl md:text-2xl">{String(t)}</h3>
                      <p className="mt-2 max-w-lg text-sm leading-relaxed text-fg/85">
                        {String(d)}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
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
                A useful report explains what the vehicle is today, what the available evidence
                shows, and how that evidence supports an opinion for the agreed purpose and
                valuation basis.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                [
                  "01",
                  "The vehicle",
                  "Identity, original specification and the bespoke work that makes this car different.",
                ],
                [
                  "02",
                  "The evidence",
                  "Documents, physical condition and relevant market sales—with gaps clearly noted.",
                ],
                [
                  "03",
                  "The conclusion",
                  "A reasoned opinion tied to the agreed purpose, market and valuation basis.",
                ],
              ].map(([number, title, detail]) => (
                <article key={number} className="border-t border-border pt-5">
                  <span className="font-display text-sm text-primary">{number}</span>
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
                        "A relevant CV outlining vehicle sales and valuation experience.",
                      ],
                      [
                        "Instructions",
                        "The letter of instruction and valuation question, included or annexed to the brief.",
                      ],
                    ].map(([title, detail]) => (
                      <li key={title} className="border-l border-primary pl-4">
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
                  diagnostic scan data, physical wear or coachbuilding integrity. Where those
                  matters are material, an agreed physical inspection and specialist testing may be
                  required to verify them.
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
                <div className="border-l border-primary pl-4">
                  <h4 className="font-medium">Purpose &amp; legal basis</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-ink">
                    Each brief states its intended use, valuation basis, assumptions and limits.
                    Reports are prepared to the agreed instructions and scope; legal and customs
                    requirements vary by jurisdiction.
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

        <section id="fees" className="border-y border-line bg-paper-2 text-ink">
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
            <div className="grid gap-6 md:grid-cols-[0.75fr_1.25fr] md:items-start">
              <div>
                <p className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-muted-ink">
                  <span className="h-px w-8 bg-primary" />A clear scope before work begins
                </p>
                <h2 className="mt-4 font-display text-5xl text-balance">Fees</h2>
              </div>
              <div className="grid gap-6 border-y border-line py-6 sm:grid-cols-[0.45fr_1.55fr] sm:items-start">
                <div>
                  <h3 className="text-xs uppercase tracking-[0.16em] text-muted-ink">
                    Fees: POA (Price on Application)
                  </h3>
                  <p className="mt-2 font-display text-4xl text-primary">POA</p>
                </div>
                <div className="space-y-3 text-sm leading-relaxed">
                  <p>
                    Desktop evidence reviews and on-site physical inspections are scoped and quoted
                    individually to reflect the vehicle, evidence requirements and assignment
                    complexity.
                  </p>
                  <p className="text-muted-ink">
                    Agreed travel, third-party inspection or diagnostic work, and specialized access
                    costs are separate unless included in writing. Any sale or placement service is
                    scoped and agreed separately.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid border-b border-line md:grid-cols-2 md:divide-x md:divide-line">
              <article className="border-t border-line py-5 md:py-6 md:pr-8">
                <h3 className="font-display text-2xl">Desktop evidence review</h3>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-ink">
                  Document, provenance, image and market-evidence review within the agreed scope.
                </p>
              </article>
              <article className="border-t border-line py-5 md:py-6 md:pl-8">
                <h3 className="font-display text-2xl">On-site physical inspection</h3>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-ink">
                  Agreed in-person inspection and evidence record; travel, access and specialist
                  testing are separately identified.
                </p>
              </article>
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
                Brayden Walls
              </h2>
              <p className="mt-3 font-display text-xl text-primary">
                Vehicle market experience, applied to specialist assignments.
              </p>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
                Brayden Walls is a Melbourne-based vehicle market and valuation professional with
                more than 20 years of motor vehicle sales experience and over seven years of
                experience in vehicle valuation work. Having bought and sold vehicles in wholesale
                and retail markets, he understands how the story on paper must connect to the
                vehicle itself and the people who may buy it.
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
                ADVERSIQ supports assignments where a rare or transformed vehicle is difficult to
                identify, compare or explain—whether it began as a stock supercar, was coachbuilt or
                was rebuilt from an older platform. International contacts can help locate relevant
                market context; each opinion remains tied to the evidence, agreed scope and
                available records.
              </p>
              <ul className="mt-7 grid gap-x-6 gap-y-3 border-t border-border pt-5 text-sm text-muted sm:grid-cols-2">
                {[
                  "20+ years in motor vehicle sales",
                  "7+ years of experience in vehicle valuation work",
                  "Wholesale and retail buying and selling experience",
                  "Melbourne-based, with international market contacts",
                  "Support for complex imports, customs reviews and cross-border assignments",
                ].map((line, index) => (
                  <li key={line} className="flex gap-3">
                    <span className="font-display text-primary">0{index + 1}</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
            <figure className="mx-2 md:mx-4">
              <img
                src="/cars/brayden-walls-sunset-drive.jpg"
                alt="Illustrated classic-car interior with the sun setting over a mountain road"
                className="aspect-[4/5] w-full object-cover object-center"
                width={768}
                height={1152}
                loading="lazy"
              />
              <figcaption className="mt-3 flex items-center justify-between border-t border-border pt-3 text-[10px] uppercase tracking-[0.18em] text-muted">
                <span>A driver’s-eye perspective</span>
                <span>ADVERSIQ / Rare vehicle insight</span>
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
                You do not need to have every vehicle detail ready. A short note about what prompted
                the valuation, the decision ahead and any timing is enough to start. We can clarify
                the rest together.
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
              <p className="text-xs uppercase tracking-[0.18em] text-muted-ink">
                Start with what you know
              </p>
              <h3 className="mt-3 font-display text-2xl leading-tight sm:text-3xl">
                A short note is enough to start.
              </h3>
              <div className="mt-6 border-y border-line py-5">
                <p className="text-sm font-medium">
                  A few details to help us understand your enquiry:
                </p>
                <ol className="mt-4 grid gap-3 text-sm leading-relaxed text-muted-ink sm:grid-cols-2">
                  {[
                    "What has prompted your interest in a valuation?",
                    "What would you like the valuation to help you decide?",
                    "What is distinctive about the vehicle or its history?",
                    "Where is the vehicle, and what records are available?",
                    "Is there a deadline or particular concern we should know about?",
                  ].map((question, index) => (
                    <li key={question} className="flex gap-3">
                      <span className="font-display text-primary">0{index + 1}</span>
                      <span>{question}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <label className="mt-6 block text-sm font-medium" htmlFor="valuation-enquiry">
                Your message
              </label>
              <textarea
                id="valuation-enquiry"
                rows={7}
                value={enquiry}
                onChange={(event) => setEnquiry(event.target.value)}
                placeholder="Share whatever you know so far. It is fine if some details are still uncertain."
                className="mt-2 w-full resize-y border border-line bg-paper px-4 py-3 text-base leading-relaxed outline-none transition-colors placeholder:text-muted focus:border-primary"
              />
              <a
                href={`mailto:brayden@adversiq.xyz?subject=Valuation%20enquiry%20%7C%20ADVERSIQ&body=${encodeURIComponent(
                  enquiry.trim() || "Hello, I am enquiring about a vehicle valuation.",
                )}`}
                className="mt-5 flex min-h-12 items-center justify-center gap-3 bg-ink px-5 text-sm font-medium text-paper transition-colors hover:bg-primary hover:text-primary-ink"
              >
                Continue by email <ArrowRight size={16} />
              </a>
              <p className="mt-4 text-xs leading-relaxed text-muted-ink">
                This opens a new email addressed to brayden@adversiq.xyz with your message. You can
                review it and add your contact details before sending.
              </p>
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
