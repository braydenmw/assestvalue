import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/")({ component: Home });

const ISSUES = [
  {
    title: "The same vehicle can meet different markets",
    description:
      "Buyer demand, vehicle availability and comparable sales can vary by location. We consider which market is relevant to the assignment instead of assuming a local guide tells the whole story.",
    image: "/cars/adversiq-green-hypercar.jpg",
    alt: "Dark green bespoke hypercar against a vivid paint-splashed backdrop",
  },
  {
    title: "The vehicle matters as much as the market",
    description:
      "A familiar badge may hide a rare specification, coachbuilt conversion, restoration or substantial modification. We look at the vehicle as it exists today and the records that explain it.",
    image: "/cars/adversiq-painted-porsche.jpg",
    alt: "Custom Porsche 911 against a colorful paint-splashed backdrop",
  },
  {
    title: "A comparison needs to be genuinely relevant",
    description:
      "Asking prices, reported sales, build costs and statutory calculations describe different things. We assess each source against the vehicle, market, date and purpose, and state where gaps limit the conclusion.",
    image: "/cars/adversiq-paint-splash-hero.jpg",
    alt: "Black bespoke hypercar against red, yellow and blue paint splashes",
  },
  {
    title: "Clear context supports better-informed decisions",
    description:
      "Different parties may have access to different records and market knowledge. Our reports explain the evidence considered, its limitations and the reasoning behind the opinion—without promising a particular outcome.",
  },
];

const STEPS = [
  {
    number: "01",
    title: "Define the brief",
    description: "Agree the purpose, valuation basis, relevant market or markets, date and scope.",
  },
  {
    number: "02",
    title: "Understand the vehicle",
    description:
      "Review identity, specification, provenance, condition and significant restoration or modification.",
  },
  {
    number: "03",
    title: "Assess and explain",
    description:
      "Test relevant market evidence, then explain the reasoning, assumptions and limitations.",
  },
];

const SERVICES = [
  {
    title: "Desktop evidence reviews",
    shortTitle: "Desktop review",
    description: "Evidence and comparisons reviewed from records, images and documents supplied.",
    audience: "Remote buyers, brokers and pre-purchase due diligence.",
    detail:
      "High-resolution images can support initial research. They cannot verify diagnostic scans, physical wear or coachbuilding integrity.",
  },
  {
    title: "On-site physical inspections",
    shortTitle: "Physical inspection",
    description:
      "The vehicle seen in person, with condition and specification checked against the records.",
    audience: "Collectors, insurers and high-value asset managers.",
    detail:
      "Diagnostic findings may require separate specialist testing. Travel, access and any additional testing are agreed in scope.",
  },
  {
    title: "Cross-border valuation support",
    shortTitle: "Cross-border",
    description: "Relevant market context across borders, kept distinct from customs calculations.",
    audience: "Importers, exporters, customs brokers and tax counsel.",
    detail:
      "Legal and customs application should be confirmed with qualified advisers. We cannot determine an authority's decision.",
  },
  {
    title: "Reports for legal, insurance & estate matters",
    shortTitle: "Formal reports",
    description: "A clear, reasoned report for legal, insurance or estate decisions.",
    audience: "Insurers, law firms, executors and dispute-resolution advisers.",
    detail:
      "Expert requirements and acceptance depend on the relevant jurisdiction and decision-maker.",
  },
];

const ENQUIRY_PROMPTS = [
  "What has prompted your interest in a valuation?",
  "What would you like the valuation to help you decide?",
  "What is distinctive about the vehicle or its history?",
  "Where is the vehicle, and what records are available?",
  "Is there a deadline or particular concern we should know about?",
];

const DECISION_OPTIONS = [
  "Purchase or sale",
  "Insurance",
  "Estate or family",
  "Import or customs",
  "Legal or dispute",
  "Not yet defined",
];

function PhotoTiles({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <div className="photo-tiles" role="img" aria-label={alt}>
      {Array.from({ length: 8 }, (_, index) => (
        <span className="photo-tile" key={index} aria-hidden="true">
          <img
            src={src}
            alt=""
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority && index === 4 ? "high" : "auto"}
          />
        </span>
      ))}
    </div>
  );
}

function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedScope, setSelectedScope] = useState("");
  const [decision, setDecision] = useState("");
  const [enquiry, setEnquiry] = useState("");
  const enquiryBody = [
    name.trim() ? `Name: ${name.trim()}` : "",
    email.trim() ? `Email: ${email.trim()}` : "",
    selectedScope ? `Service of interest: ${selectedScope}` : "",
    decision ? `Decision ahead: ${decision}` : "",
    enquiry.trim() || "Hello, I am enquiring about a vehicle valuation.",
  ]
    .filter(Boolean)
    .join("\n\n");
  const enquiryHref = `mailto:brayden@adversiq.xyz?subject=Valuation%20enquiry%20%7C%20ADVERSIQ&body=${encodeURIComponent(enquiryBody)}`;

  return (
    <div className="site-page min-h-screen">
      <header className="site-header sticky top-0 z-40 border-b border-border bg-bg">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-3 md:px-10">
          <a href="#top" className="flex shrink-0 items-center gap-3">
            <span className="grid h-9 w-9 place-items-center border border-brass text-brass font-display text-xl">
              A
            </span>
            <span>
              <span className="site-brand-name block text-xs font-semibold tracking-[0.16em]">
                ADVERSIQ
              </span>
              <span className="block text-[10px] text-muted">Global Valuation Advisory</span>
            </span>
          </a>
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-6 text-[10px] font-semibold uppercase tracking-wide text-brass/90 md:flex lg:gap-8"
          >
            <a className="transition-colors hover:text-brass" href="#method">
              Method
            </a>
            <a className="transition-colors hover:text-brass" href="#services">
              Services
            </a>
            <a className="transition-colors hover:text-brass" href="#fees">
              Fees
            </a>
            <a className="transition-colors hover:text-brass" href="#principal">
              About
            </a>
            <a className="transition-colors hover:text-brass" href="#enquire">
              Contact
            </a>
            <a
              className="grid min-h-10 place-items-center border border-brass px-4 text-brass transition-colors hover:bg-brass hover:text-ink"
              href="#enquire"
            >
              Enquire
            </a>
          </nav>
          <a
            className="grid min-h-10 shrink-0 place-items-center border border-brass px-4 text-[10px] font-semibold uppercase tracking-wide text-brass transition-colors hover:bg-brass hover:text-ink md:hidden"
            href="#enquire"
          >
            Contact
          </a>
        </div>
        <nav
          aria-label="Mobile navigation"
          className="flex gap-6 overflow-x-auto border-t border-border px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.12em] text-brass/90 md:hidden"
        >
          <a className="shrink-0" href="#method">
            Method
          </a>
          <a className="shrink-0" href="#services">
            Services
          </a>
          <a className="shrink-0" href="#fees">
            Fees
          </a>
          <a className="shrink-0" href="#principal">
            About
          </a>
          <a className="shrink-0" href="#enquire">
            Contact
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero-editorial relative z-10 isolate flex min-h-[34rem] items-end overflow-hidden border-b border-border sm:min-h-[36rem] lg:min-h-[min(46rem,calc(100svh-5rem))]">
          <PhotoTiles
            src="/cars/adversiq-blue-paint-burst-hypercar.jpg"
            alt="A dark blue performance car framed by a burst of color"
            priority
          />
          <div aria-hidden="true" className="hero-editorial-shade absolute inset-0" />
          <div className="hero-editorial-content">
            <div className="hero-copy">
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-brass sm:text-xs">
                Independent vehicle valuations / Melbourne
              </p>
              <h1 className="mt-5 max-w-[42rem] font-display text-5xl leading-[0.94] tracking-[-0.035em] text-paper text-balance sm:text-6xl md:text-7xl lg:text-[4.25rem]">
                A rare vehicle deserves <em className="font-medium text-brass">a wider view.</em>
              </h1>
              <p className="mt-5 max-w-xl text-sm leading-6 text-paper/95 sm:text-base sm:leading-7">
                Led by Melbourne valuer Brayden Walls, ADVERSIQ provides independent desktop
                reviews, on-site inspections and reports for rare, coachbuilt, restored and modified
                vehicles—supporting purchase, insurance and estate decisions.
              </p>
              <p className="mt-3 max-w-xl text-xs leading-relaxed text-paper/80 sm:text-sm">
                Market context informs the opinion; it does not guarantee a higher value.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3 text-[10px] font-medium uppercase tracking-[0.1em] sm:text-xs">
                <a
                  href="#enquire"
                  className="hero-cta inline-flex min-h-12 items-center gap-3 bg-brass px-5 font-semibold text-ink transition-colors"
                >
                  Begin a conversation <ArrowUpRight size={14} className="text-ink" />
                </a>
                <p className="text-paper/90">
                  20+ years sales <span className="mx-2 text-brass">/</span> 7+ years valuations
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="practice" className="scroll-mt-24 bg-paper text-ink">
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
            <p className="eyebrow-light">Global market context</p>
            <h2 className="mt-4 max-w-3xl font-display text-4xl leading-[1.05] text-balance md:text-5xl">
              Borderless assets. Uneven information. Evidence-led research.
            </h2>
            <p className="mt-5 max-w-4xl text-base leading-relaxed text-muted-ink md:text-lg">
              Rare, limited-run, coachbuilt and high-performance vehicles move through an
              international market. Buyers, sellers, insurers, estate representatives and public
              authorities may see different parts of the picture: a model unfamiliar in one market
              may be well known in another, while vehicle specification and history can affect
              comparisons. We define the relevant market for each assignment rather than assuming
              one location is always better.
            </p>
            <div className="make-list mt-7 grid gap-4 md:grid-cols-2">
              <div className="marque-group">
                <span className="eyebrow-light">Supercars &amp; hypercars</span>
                {["Ferrari", "Porsche", "Mercedes-Benz", "Aston Martin", "Lamborghini"].map(
                  (marque) => (
                    <span key={marque} className="marque-chip">
                      {marque}
                    </span>
                  ),
                )}
              </div>
              <div className="marque-group">
                <span className="eyebrow-light">Coachbuilders &amp; transformed vehicles</span>
                {["Singer", "Mansory", "Brabus", "Bespoke builds"].map((marque) => (
                  <span key={marque} className="marque-chip">
                    {marque}
                  </span>
                ))}
              </div>
            </div>
            <figure className="market-image image-mosaic image-mosaic--wide mt-8">
              <PhotoTiles
                src="/cars/adversiq-performance-lineup.jpg"
                alt="Lineup of distinctive performance cars against a colorful backdrop"
              />
              <figcaption className="image-overlay-copy">
                <span>Global market context / 01</span>
                <strong>
                  One vehicle.
                  <br />
                  More than one market.
                </strong>
                <span>Relevant comparisons start with the right market—not the nearest one.</span>
              </figcaption>
            </figure>
          </div>
        </section>

        <div className="rainbow-divider" aria-hidden="true" />

        <section id="fieldnotes" className="fieldnotes-section scroll-mt-24 bg-paper text-ink">
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
            <p className="eyebrow-light">Field notes — 01 / 02 / 03 / 04</p>
            <h2 className="mt-4 max-w-3xl font-display text-4xl leading-[1.05] text-balance md:text-5xl">
              The market is international. The evidence has to be too.
            </h2>
            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted-ink md:text-base">
              Rare, limited-run, coachbuilt and high-performance vehicles move through an
              international market. Our reports explain the evidence considered, its limitations and
              the reasoning behind the opinion.
            </p>
            <div className="fieldnote-layout mt-8 grid gap-6 md:mt-10">
              <article className="practice-card practice-card-1">
                <div className="practice-card-copy">
                  <span className="fieldnote-number">01</span>
                  <h3>{ISSUES[0].title}</h3>
                  <p>{ISSUES[0].description}</p>
                </div>
              </article>
              <div className="fieldnote-stack">
                <img
                  className="practice-card-image"
                  src={ISSUES[1].image}
                  alt={ISSUES[1].alt}
                  loading="lazy"
                />
                <p className="image-caption">Painted Porsche / Rare, reimagined, hand-finished.</p>
                <article className="practice-card practice-card-2">
                  <div className="practice-card-copy">
                    <span className="fieldnote-number">02</span>
                    <h3>{ISSUES[1].title}</h3>
                    <p>{ISSUES[1].description}</p>
                  </div>
                </article>
              </div>
              <div className="fieldnote-stack">
                <img
                  className="practice-card-image"
                  src={ISSUES[2].image}
                  alt={ISSUES[2].alt}
                  loading="lazy"
                />
                <p className="image-caption">
                  Bespoke hypercar / A comparison should reflect the vehicle and its market.
                </p>
                <article className="practice-card practice-card-3">
                  <div className="practice-card-copy">
                    <span className="fieldnote-number">03</span>
                    <h3>{ISSUES[2].title}</h3>
                    <p>{ISSUES[2].description}</p>
                  </div>
                </article>
              </div>
              <article className="fieldnote-formula">
                <div className="formula">
                  <strong>
                    MARKET <i>+</i> VEHICLE <i>+</i> PURPOSE
                  </strong>
                  <span>Evidence in context</span>
                </div>
                <div className="practice-card-copy">
                  <span className="fieldnote-number">04</span>
                  <h3>{ISSUES[3].title}</h3>
                  <p>{ISSUES[3].description}</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="method" className="method-section scroll-mt-24">
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
            <div className="method-intro grid gap-8 md:grid-cols-2 md:items-end md:gap-16">
              <div>
                <p className="eyebrow-dark">From question to conclusion</p>
                <h2 className="mt-4 max-w-xl font-display text-4xl leading-[1.05] text-balance md:text-5xl">
                  A considered valuation has a clear point of reference.
                </h2>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-fg/80 md:text-base">
                <p>
                  Each assignment begins by defining what the valuation needs to address. Agreeing
                  the intended use, valuation basis, relevant market or markets, effective date,
                  jurisdiction and scope helps keep the research and comparisons relevant to the
                  decision ahead. Terminology and report requirements can differ between countries
                  and institutions, so these are clarified at the outset.
                </p>
                <p>
                  We then consider the vehicle as it exists today—its identity, specification,
                  provenance, condition and any significant restoration or modification—alongside
                  the evidence available to support an opinion.
                </p>
              </div>
            </div>
            <div className="border-y border-border py-8 md:my-10 md:grid md:grid-cols-2 md:gap-16">
              <div>
                <p className="eyebrow-dark">Cross-border context</p>
                <h3 className="mt-3 max-w-lg font-display text-3xl leading-tight md:text-4xl">
                  Market evidence and import calculations are not the same thing.
                </h3>
              </div>
              <div>
                <p className="text-sm leading-relaxed text-fg/80 md:text-base">
                  Import duties, taxes and customs rules may affect a cross-border decision, but
                  customs calculations are not automatically the same as an open-market valuation.
                  The applicable rules, valuation methods and required evidence depend on the
                  destination and the specific customs procedure. We clarify the question being
                  addressed and document relevant market evidence within the agreed scope;
                  jurisdiction-specific legal, tax and customs advice should be obtained from
                  qualified local advisers.
                </p>
                <a className="text-link-dark mt-5" href="#evidence">
                  How we assess the evidence <ArrowRight size={14} />
                </a>
              </div>
            </div>
            <div className="method-grid mt-12 grid md:grid-cols-3">
              {STEPS.map((step) => (
                <article key={step.number} className="method-card">
                  <span className="method-step-number font-display text-sm text-brass">
                    {step.number}
                  </span>
                  <h3 className="mt-3 font-display text-2xl">{step.title}</h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-fg/75">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
            <div id="evidence" className="evidence-section mt-14 scroll-mt-24 md:mt-20">
              <p className="eyebrow-dark">Evidence review</p>
              <h3 className="mt-3 font-display text-3xl md:text-4xl">
                A report should show how the conclusion was reached.
              </h3>
              <div className="evidence-grid mt-7 grid gap-7 border-t border-border pt-6 md:grid-cols-3 md:gap-8">
                <article>
                  <h4 className="font-display text-xl">Vehicle and records</h4>
                  <p className="mt-3 text-sm leading-relaxed text-fg/75">
                    Identity, specification, provenance, condition and modifications are considered
                    alongside the records supplied. Images support research but cannot verify
                    physical wear, diagnostic findings or coachwork integrity.
                  </p>
                </article>
                <article>
                  <h4 className="font-display text-xl">Relevant comparisons</h4>
                  <p className="mt-3 text-sm leading-relaxed text-fg/75">
                    Available market evidence is considered for its relevance to the vehicle,
                    market, date and assignment. Asking prices, reported sales, build costs and
                    statutory calculations are not treated as interchangeable.
                  </p>
                </article>
                <article>
                  <h4 className="font-display text-xl">Assumptions and limits</h4>
                  <p className="mt-3 text-sm leading-relaxed text-fg/75">
                    The report explains the agreed purpose and valuation basis. Material evidence
                    gaps and assumptions are stated rather than filled with speculation.
                  </p>
                </article>
              </div>
            </div>
            <p className="mt-8 max-w-4xl border-t border-border pt-5 text-xs leading-relaxed text-fg/65">
              Reports are prepared to an agreed scope. They may support review, but cannot guarantee
              admissibility or acceptance by a court, insurer, customs authority or other
              decision-maker. Applicable standards and requirements vary by jurisdiction and
              intended use.
            </p>
          </div>
        </section>

        <section id="services" className="services-section scroll-mt-24">
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
            <div className="services-heading flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="eyebrow-dark">Support matched to the valuation question</p>
                <h2 className="mt-4 max-w-3xl font-display text-4xl leading-[1.05] text-balance md:text-5xl">
                  Four ways we support complex vehicle valuations.
                </h2>
              </div>
              <p className="max-w-xs text-sm leading-relaxed text-fg/75">
                Select the service that best matches your question. Your choice will be added to the
                enquiry form.
              </p>
            </div>
            <div className="services-grid mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {SERVICES.map((service, index) => (
                <article key={service.title} className="service-card">
                  <div className="service-card-copy">
                    <span className="service-number">{`0${index + 1}`}</span>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <p className="service-card-audience">{service.audience}</p>
                    <p className="service-card-detail">{service.detail}</p>
                    <a href="#enquire" onClick={() => setSelectedScope(service.title)}>
                      Use this service <ArrowUpRight size={14} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <figure className="services-feature image-mosaic image-mosaic--wide mt-8">
              <PhotoTiles
                src="/cars/adversiq-neon-workshop-hypercar.jpg"
                alt="Orange and white performance car in a vivid neon paint workshop"
              />
              <figcaption className="image-overlay-copy image-overlay-copy--right">
                <span>ADVERSIQ / Cross-border perspective</span>
                <strong>
                  Distinctive vehicles.
                  <br />A wider field of evidence.
                </strong>
                <span>Market context is researched for the vehicle and the question at hand.</span>
              </figcaption>
            </figure>
            <div
              className="audience-list mt-5 flex flex-wrap gap-x-4 gap-y-2 text-[10px] font-medium uppercase tracking-[0.1em] text-fg/65"
              aria-label="Clients we support"
            >
              <strong>For</strong>
              {[
                "Remote buyers",
                "Brokers",
                "Collectors",
                "Insurers",
                "Import & customs",
                "Legal & disputes",
                "Estate",
              ].map((audience) => (
                <span key={audience}>{audience}</span>
              ))}
            </div>
          </div>
        </section>

        <section id="fees" className="scroll-mt-24 bg-paper-2 text-ink">
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
            <div className="fees-intro grid gap-8 border-y border-line py-8 md:grid-cols-2 md:items-start md:gap-16 md:py-12">
              <div>
                <p className="eyebrow-light">04 / Fees</p>
                <h2 className="mt-4 max-w-md font-display text-4xl leading-tight md:text-5xl">
                  A clear scope before work begins.
                </h2>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-muted-ink md:pt-1 md:text-base">
                <p>
                  Fees are POA (Price on Application). Each assignment is scoped and quoted
                  individually to reflect the vehicle, evidence requirements, market question and
                  complexity. Work begins after the engagement is agreed in writing.
                </p>
                <a className="fee-quote-link" href="#enquire">
                  Request a scoped quote <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
            <figure className="fees-image image-mosaic image-mosaic--wide mt-8">
              <PhotoTiles
                src="/cars/adversiq-paint-splash-hero.jpg"
                alt="Black bespoke hypercar against a dramatic paint-splashed backdrop"
              />
              <figcaption className="image-overlay-copy">
                <span>04 / Scope and fees</span>
                <strong>
                  Clear thinking.
                  <br />
                  Clearly defined work.
                </strong>
                <span>Every assignment begins with an agreed purpose, scope and fee.</span>
              </figcaption>
            </figure>
            <div className="fees-scope-card mt-6 grid gap-7 md:grid-cols-2">
              <div>
                <h3>What scope means in practice</h3>
                <h4>Included in scope</h4>
                <ul>
                  <li>Agreed scope</li>
                  <li>Research</li>
                  <li>Report to agreed basis</li>
                </ul>
              </div>
              <div>
                <h4>Separate unless included in writing</h4>
                <ul>
                  <li>Agreed travel</li>
                  <li>Third-party inspection or diagnostic work</li>
                  <li>Specialist access costs</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 max-w-4xl text-sm leading-relaxed text-muted-ink">
              Any sale or placement service is scoped separately. Agreed travel, third-party
              inspection or diagnostic work and specialist access costs are separate unless included
              in writing.
            </p>
          </div>
        </section>

        <section id="principal" className="about-section scroll-mt-24">
          <div className="about-shell mx-auto max-w-7xl py-16 md:py-24">
            <figure className="principal-feature image-mosaic image-mosaic--wide">
              <PhotoTiles
                src="/cars/adversiq-painted-porsche.jpg"
                alt="Custom Porsche 911 against a colorful paint-splashed backdrop"
              />
              <figcaption className="image-overlay-copy image-overlay-copy--right">
                <span>About Brayden Walls / Melbourne</span>
                <strong>Market experience, applied with purpose.</strong>
                <span>“Every assignment has a person and a purpose behind it.”</span>
              </figcaption>
            </figure>
            <div className="principal-copy-grid grid gap-8 px-5 md:grid-cols-[0.8fr_1.2fr] md:gap-12 md:px-10 lg:gap-16">
              <div>
                <p className="eyebrow-dark">About Brayden Walls</p>
                <h2 className="mt-4 max-w-xl font-display text-4xl leading-[1.05] text-balance md:text-5xl">
                  Vehicle market experience, applied to specialist assignments.
                </h2>
                <p className="mt-5 max-w-xl text-sm leading-relaxed text-fg/75 md:text-base">
                  We take the time to understand the decision you need to make, what matters to you
                  and the story this vehicle carries.
                </p>
              </div>
              <div>
                <p className="about-quote">
                  “Every assignment has a person and a purpose behind it.”
                </p>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-fg/75 md:text-base">
                  Brayden Walls is a Melbourne-based vehicle market and valuation professional with
                  more than 20 years of motor vehicle sales experience and over seven years of
                  experience in vehicle valuation work. Having bought and sold vehicles in wholesale
                  and retail markets, he understands how the story on paper must connect to the
                  vehicle itself and the people who may buy it.
                </p>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-fg/75 md:text-base">
                  ADVERSIQ supports assignments where a rare or transformed vehicle is difficult to
                  identify, compare or explain — whether it began as a stock supercar, was
                  coachbuilt or was rebuilt from an older platform. International contacts can help
                  locate relevant market context; each opinion remains tied to the evidence, agreed
                  scope and available records. A genuine interest in distinctive vehicles means
                  looking beyond the numbers to the history, craftsmanship and context that give
                  each one meaning.
                </p>
              </div>
              <ol className="principal-facts grid gap-x-6 sm:grid-cols-2 md:col-span-2">
                {[
                  "20+ years in motor vehicle sales",
                  "7+ years of experience in vehicle valuation work",
                  "Wholesale and retail buying and selling experience",
                  "Melbourne-based, with international market contacts",
                  "Support for complex imports, customs reviews and cross-border assignments",
                ].map((fact, index) => (
                  <li key={fact}>
                    <span className="font-display text-xs text-brass">0{index + 1}</span>
                    <span>{fact}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section id="enquire" className="enquiry-section scroll-mt-24 border-t border-border bg-bg">
          <div
            id="engage"
            className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-[0.78fr_1.22fr] md:px-10 md:py-24 lg:gap-16"
          >
            <div className="self-start">
              <p className="eyebrow-dark">Begin a conversation</p>
              <h2 className="mt-4 max-w-lg font-display text-4xl leading-[1.05] text-balance md:text-5xl">
                Tell us about the vehicle—and the decision ahead.
              </h2>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-fg/75 md:text-base">
                You do not need to have every vehicle detail ready. A short note about what prompted
                the valuation, the decision ahead and any timing is enough to start. We can clarify
                the rest together.
              </p>
              <a className="text-link-dark mt-7" href="mailto:brayden@adversiq.xyz">
                brayden@adversiq.xyz <ArrowUpRight size={14} />
              </a>
              <div className="contact-details mt-7 grid gap-4 text-sm sm:grid-cols-2 md:grid-cols-1">
                <p>
                  <span>Service location</span>Box Hill South, Victoria, Australia
                </p>
                <p>
                  <span>Report writing</span>Reports are written in the Philippines.
                </p>
                <p>
                  <span>Phone</span>
                  <a href="tel:+639608354283">+63 960 835 4283</a>
                </p>
              </div>
              <a className="text-link-dark mt-5" href="/terms">
                Terms of Service &amp; Privacy <ArrowRight size={14} />
              </a>
            </div>

            <form
              className="enquiry-card"
              onSubmit={(event) => {
                event.preventDefault();
                window.location.href = enquiryHref;
              }}
            >
              <p className="eyebrow-light">Start with what you know</p>
              <h3 className="enquiry-card-title mt-3 font-display text-3xl leading-tight text-balance">
                A short note is enough to start.
              </h3>
              <label className="mt-6 block text-sm font-medium" htmlFor="enquiry-name">
                Your name
              </label>
              <input
                id="enquiry-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="enquiry-select mt-2 w-full"
              />
              <label className="mt-6 block text-sm font-medium" htmlFor="enquiry-email">
                Email
              </label>
              <input
                id="enquiry-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="enquiry-select mt-2 w-full"
              />
              <label className="mt-6 block text-sm font-medium" htmlFor="decision-ahead">
                The decision ahead
              </label>
              <select
                id="decision-ahead"
                value={decision}
                onChange={(event) => setDecision(event.target.value)}
                className="enquiry-select mt-2 w-full"
              >
                <option value="">Select a purpose</option>
                {DECISION_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <label className="mt-6 block text-sm font-medium" htmlFor="service-interest">
                Service of interest
              </label>
              <select
                id="service-interest"
                value={selectedScope}
                onChange={(event) => setSelectedScope(event.target.value)}
                className="enquiry-select mt-2 w-full"
              >
                <option value="">Not sure yet</option>
                {SERVICES.map((service) => (
                  <option key={service.title} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>
              <div className="mt-6 border-y border-line py-5">
                <p className="text-sm font-medium">A few details that may help:</p>
                <ol className="mt-4 grid gap-3 text-sm leading-relaxed text-muted-ink sm:grid-cols-2">
                  {ENQUIRY_PROMPTS.map((prompt, index) => (
                    <li key={prompt} className="flex gap-3">
                      <span className="font-display text-brass">0{index + 1}</span>
                      <span>{prompt}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <label className="mt-6 block text-sm font-medium" htmlFor="valuation-enquiry">
                Your message
              </label>
              <textarea
                id="valuation-enquiry"
                rows={5}
                value={enquiry}
                onChange={(event) => setEnquiry(event.target.value)}
                placeholder="Share whatever you know so far. It is fine if some details are still uncertain."
                className="enquiry-textarea mt-2 w-full resize-y"
              />
              <button
                type="submit"
                className="enquiry-submit mt-5 flex min-h-12 w-full items-center justify-center gap-3 bg-ink px-5 text-sm font-medium text-paper transition-colors hover:bg-brass hover:text-ink"
              >
                Continue by email <ArrowUpRight size={15} />
              </button>
              <ol className="enquiry-next-steps mt-5 grid gap-3 border-t border-line pt-4 sm:grid-cols-2">
                <li>
                  <span>01</span>
                  <p>Share the valuation question and what you know about the vehicle.</p>
                </li>
                <li>
                  <span>02</span>
                  <p>Agree the purpose, scope, timing and fee before any work begins.</p>
                </li>
              </ol>
              <p className="mt-4 text-xs leading-relaxed text-muted-ink">
                This opens an email to brayden@adversiq.xyz. Nothing is kept on the site until you
                send it. Please do not include identity documents or financial records in this note.
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer border-t border-border bg-bg">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-8 md:grid-cols-[1fr_auto_1fr] md:items-end md:px-10">
          <div>
            <a href="#top" className="font-display text-xl text-paper">
              ADVERSIQ
            </a>
            <p className="mt-1 text-xs text-muted">Global Valuation Advisory</p>
            <p className="mt-3 max-w-sm text-xs leading-relaxed text-muted">
              Independent opinions for rare, coachbuilt, restored and substantially modified
              vehicles. Melbourne, Australia, with international market context.
            </p>
            <p className="mt-3 text-xs text-muted">Website designed by Brayden Walls</p>
            <p className="mt-1 text-xs text-muted">ABN 55 978 113 300</p>
          </div>
          <nav aria-label="Footer navigation" className="footer-links">
            <span>Practice</span>
            <a href="#practice">Practice</a>
            <a href="#method">Method</a>
            <a href="#services">Services</a>
            <a href="#fees">Fees</a>
            <a href="#principal">Principal</a>
            <a href="/terms">Terms &amp; privacy</a>
          </nav>
          <div className="flex flex-col gap-2 text-sm md:items-end">
            <a className="transition-colors hover:text-brass" href="mailto:brayden@adversiq.xyz">
              brayden@adversiq.xyz
            </a>
            <a className="transition-colors hover:text-brass" href="tel:+639608354283">
              +63 960 835 4283
            </a>
            <span className="text-xs text-muted">
              Service location: Box Hill South, Victoria, Australia
            </span>
            <span className="text-xs text-muted">Reports written in the Philippines</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
