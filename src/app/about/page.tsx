import type { Metadata } from "next"
import { ContentCard } from "@/components/content-card"
import { PageHero } from "@/components/page-hero"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn what EMIWYZE does, who created it, and why its calculator tools exist.",
}

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <PageHero
        eyebrow="About Us"
        title="Simple finance calculators for everyday decisions."
        description="EMIWYZE helps borrowers and investors estimate monthly payments, compare loan offers, and understand basic finance concepts before making decisions."
      />

      <div className="grid gap-5">
        <ContentCard>
          <h2 className="text-2xl font-black text-slate-950">What EMIWYZE Does</h2>
          <p className="mt-3 leading-7 text-slate-600">
            EMIWYZE provides calculator tools for EMI, loan comparison, and SIP
            planning. The tools are built to make common financial numbers easier
            to understand: monthly EMI, total interest, total repayment, invested
            amount, estimated returns, and future value.
          </p>
        </ContentCard>

        <ContentCard>
          <h2 className="text-2xl font-black text-slate-950">Who Created It</h2>
          <p className="mt-3 leading-7 text-slate-600">
            EMIWYZE was created by an independent developer who wanted a clean,
            mobile-friendly calculator website for Indian users. The site focuses
            on practical tools, original educational articles, and transparent
            explanations rather than complex financial jargon.
          </p>
        </ContentCard>

        <ContentCard>
          <h2 className="text-2xl font-black text-slate-950">Purpose of the Tools</h2>
          <p className="mt-3 leading-7 text-slate-600">
            The calculators are intended for education and planning. They can help
            you compare scenarios before speaking with a bank, lender, investment
            advisor, or tax professional. They do not replace professional
            financial advice or official lender quotes.
          </p>
        </ContentCard>
      </div>
    </main>
  )
}
