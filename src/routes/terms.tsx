import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/terms")({ component: Terms });

const TERMS = [
  {
    title: "1. Provider, Engagement & Operating Entity",
    content: (
      <>
        <p>
          Services are offered by <strong>Brayden Walls, trading as ADVERSIQ</strong> (ABN: 55 978
          113 300, registered for GST). Professional service administration is located in Melbourne
          (Box Hill South, Victoria, Australia), with research and digital report production
          architecture based in Mindanao, Philippines.
        </p>
        <p>
          A website inquiry, telephone call, preliminary estimate, or general consultation does not
          constitute a binding appointment. An assignment commences <strong>only</strong> when the
          scope, intended use, valuation basis, fee structure, performance timeline, and material
          terms are formally confirmed in a written engagement letter accepted and signed by both
          parties.
        </p>
      </>
    ),
  },
  {
    title: "2. Scope, Valuation Date & Standards Compliance",
    content: (
      <>
        <p>
          A valuation report represents an independent, objective opinion formed for the specific
          purpose, market context, assumptions, and effective date stated in the brief. It does not
          constitute a legal guarantee of a sale price, loan approval, insurance claim payout,
          customs duty determination, or statutory tax assessment.
        </p>
        <h3 className="pt-2 font-semibold">Self-Certified Standards Compliance</h3>
        <p>
          While ADVERSIQ operates as an independent specialist practice, all valuation assignments
          are self-certified to align with recognized international valuation frameworks:
        </p>
        <ul className="list-disc space-y-3 pl-6">
          <li>
            <strong>International Valuation Standards (IVS):</strong> Operating in adherence with{" "}
            <strong>IVS 220 (Non-Financial Assets / Plant and Equipment)</strong> principles
            governing objectivity, market evidence, and analytical transparency.
          </li>
          <li>
            <strong>Statutory Expert Witness Codes:</strong> Compliant with expert witness duty
            declarations across key jurisdictions, including{" "}
            <strong>Section 79 of the Australia Evidence Act 1995</strong>,{" "}
            <strong>Civil Procedure Rules (CPR Part 35) in the United Kingdom</strong>, and{" "}
            <strong>Rule 130, Section 49 of the Philippines Rules of Court</strong>.
          </li>
          <li>
            <strong>Cross-Border Customs Standards:</strong> Aligning fallback valuation
            methodologies with{" "}
            <strong>World Trade Organization (WTO) Customs Valuation Agreement Method 6</strong>{" "}
            framework rules.
          </li>
        </ul>
        <p>
          Vehicle values and secondary markets fluctuate dynamically. Reports speak strictly as of
          their stated effective valuation date. Any period during which a report may be relied on
          for its stated purpose—30, 60, or 90 days, depending on the asset and assignment—will be
          specified in the report or engagement letter. A stated validity period does not guarantee
          that the opinion remains suitable after a material change in the asset, market, or
          intended use.
        </p>
      </>
    ),
  },
  {
    title: "3. Evidentiary Standards & Self-Certified Rigor",
    content: (
      <>
        <p>
          ADVERSIQ specializes in rare, limited-series, coachbuilt, and restomod vehicles where
          traditional price guides fail due to <strong>information asymmetry</strong>. To bridge
          this gap, our reporting methodology incorporates self-certified evidentiary rules:
        </p>
        <ul className="list-disc space-y-3 pl-6">
          <li>
            <strong>Analytical Limitation Protocol:</strong> Undocumented modifications, missing
            build records, or unverified provenance are treated as explicit analytical
            limitations—never filled with speculative assumptions.
          </li>
          <li>
            <strong>Empirical Market Research:</strong> Valuation conclusions are grounded in
            verified global transaction data, secondary market liquidity analysis, and technical
            build verification rather than face-value asking prices or raw construction receipts.
          </li>
          <li>
            <strong>Impartiality:</strong> Appraisals reflect open-market evidence and defined
            standards, adhering strictly to an overriding duty of impartiality.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "4. Desktop Evidence Reviews & Physical Inspection Limits",
    content: (
      <ul className="list-disc space-y-3 pl-6">
        <li>
          <strong>Desktop Evidence Reviews:</strong> Rely on client-supplied documentation,
          historical build sheets, photographic metadata, and digital records. ADVERSIQ does not
          independently audit third-party records unless verification is explicitly scoped in
          writing.
        </li>
        <li>
          <strong>On-Site Physical Inspections:</strong> Limited to visual, non-destructive
          observation of accessible areas at the time of examination. Unless separately contracted,
          an inspection is not a mechanical teardown, metallurgical test, body panel removal, or
          structural stress scan. Diagnostic scans require specialist equipment and are scoped
          separately.
        </li>
        <li>
          <strong>Photographic Data:</strong> High-resolution photographs support desktop research
          but cannot independently confirm structural integrity, mechanical wear, or internal
          coachwork integrity.
        </li>
      </ul>
    ),
  },
  {
    title: "5. Client Disclosure Duties, Assumptions & Revisions",
    content: (
      <>
        <p>
          The client must disclose all known material facts, title defects, structural damage,
          hidden modifications, and inspection constraints prior to report issue.
        </p>
        <p>
          Material assumptions and limitations will be explicitly declared within the report.
          ADVERSIQ reserves the unconditional right to amend, update, revise, or withdraw any
          valuation opinion, estimate, or website statement if supplied information is subsequently
          proven inaccurate, deceptive, incomplete, or fundamentally changed, without incurring
          liability to the client or any third party. No report constitutes a legal warranty of
          title, roadworthiness, authenticity, or regulatory compliance unless explicitly agreed in
          writing.
        </p>
      </>
    ),
  },
  {
    title: "6. Intended Use, Reliance & Statutory Expert Duties",
    content: (
      <>
        <p>
          Valuation reports are issued solely for the client and intended purpose identified in the
          engagement letter. No third party may rely upon the report without express written
          authorization from ADVERSIQ.
        </p>
        <p>
          Where formally instructed as an expert witness in legal proceedings, arbitration, or
          customs disputes,{" "}
          <strong>
            the expert&apos;s overriding duty is to the court, tribunal, or decision-making
            authority impartially
          </strong>
          . Nothing in these terms or client instructions shall override or restrict that statutory
          duty.
        </p>
      </>
    ),
  },
  {
    title: "7. Fees, Payment Terms & Multi-Asset Scope Commitment",
    content: (
      <>
        <h3 className="font-semibold">Fee Structure, Pricing & Asset Caps</h3>
        <ul className="list-disc space-y-3 pl-6">
          <li>
            <strong>Individual Assignment Scope:</strong> All valuation assignments—whether desktop
            evidence reviews, on-site physical verifications, or cross-border expert briefs—are
            scoped and quoted individually on a <strong>Price on Application (POA)</strong> basis.
            Quoted fees reflect each vehicle&apos;s rarity, provenance complexity, geographical
            location, evidence requirements, and legal scope, and are subject to change prior to
            formal contract execution.
          </li>
          <li>
            <strong>Single-Vehicle Asset Fee Cap:</strong> For individual single-vehicle assignments
            with an estimated open-market value exceeding <strong>USD $1,000,000</strong>, the
            professional valuation fee is capped at a maximum of{" "}
            <strong>USD $10,000 per asset</strong> (excluding international travel logistics,
            diagnostic access, venue fees, or specialized laboratory/expert testing unless agreed in
            writing).
          </li>
          <li>
            <strong>Multi-Vehicle Assets & Collection Engagements:</strong> Where an assignment
            requires the valuation of multiple vehicles (e.g., private collections, estate
            divisions, multi-car import shipments, or corporate portfolios), fees are quoted under a
            tailored <strong>Collection Engagement Schedule</strong>. Multi-asset pricing applies a
            tiered fee structure to reflect shared inspection logistics while ensuring each vehicle
            receives independent forensic market research.
          </li>
        </ul>
        <h3 className="pt-2 font-semibold">Terms of Engagement & Payment Schedule</h3>
        <ul className="list-disc space-y-3 pl-6">
          <li>
            <strong>Written Execution & Agreed Terms:</strong> All terms, travel itineraries,
            multi-vehicle schedules, and logistical arrangements are agreed upon in writing first.
            No work commences until a formal <strong>Written Engagement Letter</strong>—detailing
            the exact scope, intended use, valuation basis, delivery timeline, itemized expenses,
            and total fee structure—is signed and accepted by both parties.
          </li>
          <li>
            <strong>No Hidden Charges:</strong> Once the engagement agreement is signed by both
            parties, the quoted professional fee for the agreed manifest is fixed. There are{" "}
            <strong>no hidden charges, surprises, or administrative add-ons</strong>.
          </li>
          <li>
            <strong>Payment Schedule:</strong>
            <ul className="mt-2 list-[circle] space-y-2 pl-6">
              <li>
                <strong>30% Deposit Upfront:</strong> A non-refundable deposit of{" "}
                <strong>30% of the total agreed engagement fee</strong> (plus any upfront
                international travel booking costs) is required prior to the commencement of
                research, international travel booking, inspection scheduling, or document review.
              </li>
              <li>
                <strong>70% Balance on Release:</strong> The remaining <strong>70% balance</strong>{" "}
                is due upon completion and must be cleared prior to the formal digital or physical
                release of the finalized valuation report(s).
              </li>
            </ul>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "8. Limitation of Liability, Indemnity & Consumer Rights",
    content: (
      <>
        <p>To the maximum extent permitted by applicable law:</p>
        <div className="border border-neutral-400 p-4">
          <h3 className="font-semibold">Valuation validity, expiry and renewal</h3>
          <p className="mt-2">
            Each report is valid for the period stated in that report: 30, 60 or 90 days, depending
            on the asset and assignment. After expiry, continued reliance requires a written update
            or new valuation. If the asset remains materially unchanged from its condition and
            specification at the original valuation date, and the original scope and evidence remain
            sufficient, ADVERSIQ may provide an updated report for a modest administration fee
            agreed in writing in advance. If the asset, relevant evidence, market context or
            intended use has materially changed, a new valuation and fee may be required. Any update
            will state its own effective date and validity period.
          </p>
        </div>
        <ul className="list-disc space-y-3 pl-6">
          <li>
            <strong>No Liability for Changes or Reliance:</strong> ADVERSIQ, Brayden Walls, and
            associated personnel shall not be liable for any direct, indirect, consequential, or
            economic loss arising from website downtime, unexecuted inquiries, preliminary price
            estimates subject to change, subsequent market fluctuations, undisclosed facts, hidden
            latent defects, or third-party administrative/legal decisions.
          </li>
          <li>
            <strong>Client Indemnity:</strong> The client agrees to indemnify and hold harmless
            ADVERSIQ against any claims, losses, or legal costs arising from inaccurate, misleading,
            or withheld information provided by the client or third parties during an inquiry or
            assignment.
          </li>
          <li>
            <strong>Statutory Protections:</strong> Nothing in these terms excludes, restricts, or
            modifies non-excludable legal guarantees provided under Australian Consumer Law or
            mandatory consumer protection rights in the client&apos;s jurisdiction that cannot
            lawfully be excluded.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "9. Confidentiality, Privacy & International Data Transfers",
    content: (
      <>
        <p>ADVERSIQ respects your privacy and handles personal and asset data responsibly:</p>
        <ul className="list-disc space-y-3 pl-6">
          <li>
            <strong>Data Collected:</strong> Enquiries and engagements may process client contact
            details, vehicle identification numbers (VINs), registration records, build
            specifications, financial instructions, ownership provenance, and photographic assets.
          </li>
          <li>
            <strong>Purpose:</strong> Information is used strictly to conduct assignments, verify
            vehicle identity, perform market research, maintain professional records, and fulfill
            legal obligations. Information is <strong>never sold</strong> for third-party marketing.
          </li>
          <li>
            <strong>Cross-Border Data Processing:</strong> For multi-jurisdictional assignments,
            data may be processed across <strong>Australia and the Philippines</strong> (including
            report architecture produced in Mindanao). Secure digital controls are maintained across
            all operational locations.
          </li>
          <li>
            <strong>Privacy Inquiries:</strong> Requests to access, correct, or delete personal
            information can be directed to Brayden Walls at{" "}
            <a className="underline underline-offset-4" href="mailto:brayden@adversiq.xyz">
              brayden@adversiq.xyz
            </a>
            .
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "10. Governing Law, Jurisdiction & Dispute Resolution",
    content: (
      <p>
        Unless specified otherwise in the written engagement letter, any terms, disputes, or claims
        arising from website use, preliminary estimates, or valuation engagements shall be governed
        exclusively by the laws of <strong>Victoria, Australia</strong>. Parties agree to attempt
        informal dispute resolution in good faith before initiating formal legal proceedings.
      </p>
    ),
  },
  {
    title: "11. Contact Details",
    content: (
      <p>
        <strong>Brayden Walls | ADVERSIQ</strong>
      </p>
    ),
  },
];

function Terms() {
  return (
    <div className="min-h-screen bg-white text-black">
      <header className="border-b border-neutral-300 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
          <a href="/" className="flex items-center gap-3">
            <span className="grid size-9 place-items-center border border-black font-display text-xl text-black">
              A
            </span>
            <span>
              <span className="block text-sm font-medium tracking-[0.18em]">ADVERSIQ</span>
              <span className="block text-xs text-black">Global Valuation Advisory</span>
            </span>
          </a>
          <a
            href="/#engage"
            className="inline-flex min-h-11 items-center gap-2 text-sm text-black underline underline-offset-4"
          >
            Contact <ArrowUpRight size={15} />
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-5 py-14 md:px-10 md:py-20">
        <a
          href="/"
          className="inline-flex min-h-11 items-center gap-2 text-sm text-black underline underline-offset-4"
        >
          <ArrowLeft size={15} /> Back to ADVERSIQ
        </a>
        <h1 className="mt-10 font-display text-4xl leading-tight text-balance md:text-6xl">
          Terms of Service &amp; Privacy Notice
        </h1>
        <blockquote className="mt-8 border-l-2 border-black pl-5 text-sm leading-relaxed">
          <p className="font-semibold">Legal Notice, Disclaimer &amp; Limitation of Liability:</p>
          <p className="mt-3 italic">
            The operational policies, standards compliance frameworks, fee guidelines, and privacy
            provisions detailed below represent ADVERSIQ&apos;s baseline terms of service. Because
            every rare, coachbuilt, or transformed vehicle valuation is scoped on an individual
            basis to reflect specific legal, market, and geographic requirements, all assignments
            are governed strictly by the formal written Engagement Letter executed between ADVERSIQ
            and the client prior to commencing work.{" "}
            <strong>
              By accessing this website, submitting an inquiry, or engaging ADVERSIQ, all users,
              clients, and third parties expressly agree that all general estimates, preliminary
              information, website copy, and operational terms are subject to change without notice,
              and no party shall hold ADVERSIQ, Brayden Walls, or its affiliates liable for reliance
              upon unexecuted preliminary estimates, market fluctuations, or unagreed scope
              parameters.
            </strong>
          </p>
        </blockquote>

        <nav aria-label="Terms sections" className="mt-10 border-y border-neutral-300 py-5">
          <p className="text-sm font-semibold">Page Contents</p>
          <ol className="mt-4 grid list-decimal gap-x-8 gap-y-3 pl-5 text-sm sm:grid-cols-2">
            {TERMS.map((section, index) => (
              <li key={section.title}>
                <a className="text-black underline underline-offset-4" href={`#terms-${index + 1}`}>
                  {section.title.replace(/^\d+\.\s/, "")}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="mt-4">
          {TERMS.map((section, index) => (
            <section
              key={section.title}
              id={`terms-${index + 1}`}
              className="scroll-mt-8 border-b border-neutral-300 py-8 md:py-10"
            >
              <h2 className="font-display text-2xl md:text-3xl">{section.title}</h2>
              <div className="mt-4 space-y-4 text-sm leading-relaxed">{section.content}</div>
            </section>
          ))}
        </div>

        <a
          href="/#engage"
          className="mt-10 inline-flex min-h-12 items-center gap-3 border border-black px-5 font-medium text-black underline underline-offset-4"
        >
          Discuss an assignment <ArrowUpRight size={16} />
        </a>
      </main>

      <footer className="border-t border-neutral-300 bg-white px-5 py-6 text-xs text-black">
        <div className="mx-auto flex max-w-4xl flex-col justify-between gap-3 sm:flex-row">
          <span>ADVERSIQ | Brayden Walls</span>
          <span>Terms of Service &amp; Privacy Notice</span>
        </div>
      </footer>
    </div>
  );
}
