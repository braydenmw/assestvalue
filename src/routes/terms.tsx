import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/terms")({ component: Terms });

const TERMS = [
  {
    title: "1. Provider and engagement",
    paragraphs: [
      "Services are offered by Brayden Walls, trading as ADVERSIQ, ABN 55 978 113 300. The service location is Box Hill South, Victoria, Australia. Reports are written in the Philippines.",
      "A website enquiry is not an appointment. An assignment begins only when the scope, intended use, valuation basis, fee, timing and other material conditions are confirmed in a written engagement accepted by both parties. The engagement letter will identify which terms apply.",
    ],
  },
  {
    title: "2. Scope and valuation date",
    paragraphs: [
      "A valuation is an independent opinion for the purpose, market, assumptions and effective date stated in the report. It is not a promise of a sale price, lending outcome, insurance payment, customs decision or other result.",
      "Vehicle markets and condition can change. A report speaks as at its stated effective date; it does not automatically remain current for 30 days or any other period unless the engagement and report expressly say so. A later decision or material change may require an updated assignment.",
    ],
  },
  {
    title: "3. Desktop review and physical inspection",
    paragraphs: [
      "A desktop review relies on the documents, photographs and other information identified in the report. ADVERSIQ does not independently verify every supplied record unless verification is expressly included in the agreed scope.",
      "A physical inspection is limited to the agreed areas and what is visible and accessible at the time. Unless separately agreed, it is not a mechanical teardown, destructive test, metallurgical analysis or verification of concealed structure. Diagnostic scans and specialist examinations require appropriate equipment or providers and may be separately scoped.",
      "Missing provenance, undocumented modifications, or absent build records are treated as explicit analytical limitations rather than speculative assumptions. High-resolution photographs may support desktop research but cannot by themselves verify diagnostic data, physical wear or coachbuilding integrity.",
    ],
  },
  {
    title: "4. Information, assumptions and changes",
    paragraphs: [
      "The client should provide accurate information and disclose relevant records, known damage, modifications and restrictions on inspection. The report will identify material assumptions and limitations. ADVERSIQ may revise or withdraw an opinion if material information is later found to be inaccurate, incomplete or changed.",
      "No opinion should be read as a certification of ownership, roadworthiness, authenticity, mechanical condition, legal compliance or title unless that work is expressly included and qualified in the report.",
    ],
  },
  {
    title: "5. Use and reliance",
    paragraphs: [
      "The report is prepared for the client and intended use identified in the engagement and report. No other person may rely on it unless ADVERSIQ gives written permission or applicable law requires otherwise. A report may be provided to a court, tribunal, insurer, customs authority or other reviewer only as permitted by the engagement, applicable duties and law.",
      "Where formally instructed as an expert, the expert's overriding duty is to the court or tribunal as required by the applicable rules. Nothing in these terms is intended to limit that duty or dictate the decision-maker's assessment of admissibility or weight.",
    ],
  },
  {
    title: "6. Fees, expenses and cancellation",
    paragraphs: [
      "Fees are quoted individually for the agreed desktop review, on-site inspection or other defined scope. For assets valued above USD $1 million, the valuation professional fee is capped at USD $10,000. The written quotation will identify the currency, scope and any applicable cap or exclusions.",
      "Travel, admission, specialist access, third-party inspection, diagnostic testing and other external costs are separate unless the written quotation says they are included. Any deposits, cancellation terms, payment dates or changes to scope will be stated in the engagement letter.",
    ],
  },
  {
    title: "7. Liability and consumer rights",
    paragraphs: [
      "The report is an opinion formed with reasonable care within the agreed scope, based on the stated evidence and assumptions. ADVERSIQ is not responsible for undisclosed facts, latent conditions outside the agreed inspection, later changes, or third-party decisions, except to the extent responsibility cannot lawfully be excluded.",
      "Any agreed limitation of liability, exclusion of loss or cap must be set out in the engagement and applies only to the extent permitted by applicable law. Nothing in these terms excludes, restricts or modifies a right or remedy that cannot lawfully be excluded, including any non-excludable consumer guarantees.",
    ],
  },
  {
    title: "8. Confidentiality and privacy",
    paragraphs: [
      "Information supplied for an enquiry or assignment may include contact details, vehicle identifiers, ownership and provenance records, photographs, valuation instructions and transaction information. It is used to respond to enquiries, assess and perform an agreed engagement, communicate with the client, maintain appropriate business records and meet legal or professional obligations.",
      "For cross-border assignments, information may be accessed or processed in Australia and the Philippines, including where online reports are produced in Mindanao. Where reasonably necessary, information may also be shared with the client's representatives, instructed specialists, professional advisers, service providers or authorities involved in the assignment. Information is not sold for third-party marketing.",
      "Reasonable steps are taken to protect information, but no online transmission or storage method can be guaranteed completely secure. Records are retained only as long as reasonably needed for the stated purposes, legal obligations and professional recordkeeping. Retention periods depend on the assignment and applicable requirements.",
      "You may request access to or correction of personal information, or raise a privacy concern, by contacting Brayden Walls at brayden@adversiq.xyz. Requests are handled subject to identity checks, applicable law and any lawful recordkeeping obligations.",
      "The enquiry form on this preview is demonstrative: it does not transmit or save submitted details. Do not enter sensitive personal, ownership or financial information into the preview form. For a live engagement, use the contact details below and follow the agreed document-transfer process.",
    ],
  },
  {
    title: "9. Governing law and disputes",
    paragraphs: [
      "The engagement letter should specify the governing law and dispute forum for the assignment. If it does not, the parties should agree these in writing before work begins. Any term is subject to mandatory rights and laws applicable to the client or transaction.",
    ],
  },
  {
    title: "10. Contact",
    paragraphs: [
      "Brayden Walls | ADVERSIQ | ABN 55 978 113 300",
      "Service location: Box Hill South, Victoria, Australia",
      "Reports written in the Philippines",
      "Email: brayden@adversiq.xyz | Phone: +63 960 835 4283",
    ],
  },
];

function Terms() {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <header className="border-b border-border bg-bg">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
          <a href="/" className="flex items-center gap-3">
            <span className="grid size-9 place-items-center border border-primary font-display text-xl text-primary">
              A
            </span>
            <span>
              <span className="block text-sm font-medium tracking-[0.18em]">ADVERSIQ</span>
              <span className="block text-xs text-muted">Global Valuation Advisory</span>
            </span>
          </a>
          <a
            href="/#engage"
            className="inline-flex min-h-11 items-center gap-2 text-sm text-muted transition-colors hover:text-primary"
          >
            Contact <ArrowUpRight size={15} />
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-5 py-14 md:px-10 md:py-20">
        <a
          href="/"
          className="inline-flex min-h-11 items-center gap-2 text-sm text-muted transition-colors hover:text-primary"
        >
          <ArrowLeft size={15} /> Back to ADVERSIQ
        </a>
        <p className="mt-10 flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-primary">
          <span className="h-px w-8 bg-primary" />
          Terms and privacy
        </p>
        <h1 className="mt-4 font-display text-4xl leading-tight text-balance md:text-6xl">
          Terms of Service &amp; Privacy Notice
        </h1>
        <p className="mt-6 border-l border-signal-coral pl-4 text-sm leading-relaxed text-muted">
          This is a general website notice, not legal advice or a substitute for an engagement
          drafted for a specific jurisdiction. Have a qualified Australian privacy and commercial
          lawyer review these terms before relying on them for client work. The signed engagement
          letter controls the assignment scope and any agreed legal terms.
        </p>

        <nav aria-label="Terms sections" className="mt-10 border-y border-border py-5">
          <p className="text-xs uppercase tracking-[0.16em] text-muted">On this page</p>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3">
            {TERMS.map((section, index) => (
              <a
                key={section.title}
                href={`#terms-${index + 1}`}
                className="text-xs text-fg/80 underline decoration-border underline-offset-4 transition-colors hover:text-primary"
              >
                {section.title.replace(/^\d+\.\s/, "")}
              </a>
            ))}
          </div>
        </nav>

        <div className="mt-4">
          {TERMS.map((section, index) => (
            <section
              key={section.title}
              id={`terms-${index + 1}`}
              className="scroll-mt-8 border-b border-border py-8 md:py-10"
            >
              <h2 className="font-display text-2xl md:text-3xl">{section.title}</h2>
              <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <a
          href="/#engage"
          className="mt-10 inline-flex min-h-12 items-center gap-3 bg-primary px-5 font-medium text-primary-ink transition-colors hover:bg-signal-cyan/80"
        >
          Discuss an assignment <ArrowUpRight size={16} />
        </a>
      </main>

      <footer className="border-t border-border px-5 py-6 text-xs text-muted">
        <div className="mx-auto flex max-w-4xl flex-col justify-between gap-3 sm:flex-row">
          <span>ADVERSIQ | Brayden Walls | ABN 55 978 113 300</span>
          <span>Melbourne, Australia / Global operations</span>
        </div>
      </footer>
    </div>
  );
}
