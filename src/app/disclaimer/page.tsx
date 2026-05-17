import type { Metadata } from "next"
import { ContentCard } from "@/components/content-card"
import { PageHero } from "@/components/page-hero"

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Financial disclaimer for EMIWYZE calculators, loan articles, SIP estimates, and finance content.",
}

export default function DisclaimerPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <PageHero
        eyebrow="Disclaimer"
        title="Calculator results are estimates, not financial advice."
        description="Please read this disclaimer before relying on EMI, SIP, loan, GST, or finance planning information from EMIWYZE."
      />

      <ContentCard>
        <div className="space-y-6 leading-7 text-slate-600">
          <section>
            <h2 className="text-2xl font-black text-slate-950">Educational Purpose</h2>
            <p className="mt-2">
              EMIWYZE content is provided for general information and education.
              It should not be treated as financial, investment, tax, legal, or
              professional advice.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-black text-slate-950">Calculator Estimates</h2>
            <p className="mt-2">
              EMI and SIP results depend on assumptions such as interest rate,
              expected return, tenure, compounding, fees, taxes, and lender rules.
              Actual figures may vary.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-black text-slate-950">No Guarantee</h2>
            <p className="mt-2">
              EMIWYZE does not guarantee loan approval, investment returns, tax
              outcomes, or savings. Consult a qualified professional before making
              major financial decisions.
            </p>
          </section>
        </div>
      </ContentCard>
    </main>
  )
}
