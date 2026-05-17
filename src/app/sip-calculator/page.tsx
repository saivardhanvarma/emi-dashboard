import type { Metadata } from "next"
import { CalculatorSchema } from "@/components/calculator-schema"
import { ContentCard } from "@/components/content-card"
import { SipCalculator } from "./sip-calculator"

export const metadata: Metadata = {
  title: "SIP Calculator",
  description:
    "Free SIP calculator for estimating monthly mutual fund investment growth, total investment, expected returns, and maturity value.",
}

export default function SipCalculatorPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <CalculatorSchema
        name="SIP Calculator"
        description="Calculate estimated SIP maturity value, invested amount, and returns."
        path="/sip-calculator"
      />
      <SipCalculator />

      <section className="mt-8 grid gap-5 lg:grid-cols-3">
        <ContentCard>
          <h2 className="text-xl font-black text-slate-950">What is SIP?</h2>
          <p className="mt-3 leading-7 text-slate-600">
            SIP means systematic investment plan. It lets you invest a fixed
            amount regularly in a mutual fund instead of investing a large amount
            at once.
          </p>
        </ContentCard>
        <ContentCard>
          <h2 className="text-xl font-black text-slate-950">How it helps</h2>
          <p className="mt-3 leading-7 text-slate-600">
            SIP planning shows how monthly discipline and time can influence a
            long-term goal. The estimate helps compare contribution levels.
          </p>
        </ContentCard>
        <ContentCard>
          <h2 className="text-xl font-black text-slate-950">Important note</h2>
          <p className="mt-3 leading-7 text-slate-600">
            Mutual fund returns are not fixed. Use this calculator for planning,
            then verify fund choices with an advisor or official documents.
          </p>
        </ContentCard>
      </section>

      <section className="mt-8 grid gap-5 lg:grid-cols-2">
        <ContentCard>
          <h2 className="text-2xl font-black text-slate-950">
            SIP example: Rs. 10,000 monthly for 15 years
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            If you invest Rs. 10,000 per month for 15 years, your total
            investment is Rs. 18 lakh. At an assumed 12% annual return, the
            estimated maturity value can be much higher because each monthly
            investment compounds over time. This is an estimate, not a guarantee.
          </p>
        </ContentCard>
        <ContentCard>
          <h2 className="text-2xl font-black text-slate-950">SIP Calculator FAQs</h2>
          <div className="mt-4 space-y-4">
            {[
              [
                "Is SIP return fixed?",
                "No. SIP returns are market-linked unless you are using a fixed-return product. Mutual fund returns can go up or down.",
              ],
              [
                "Should I increase SIP every year?",
                "A yearly step-up can help keep your investment aligned with income growth and inflation.",
              ],
              [
                "What return should I assume?",
                "Use conservative assumptions for important goals and review your plan every year.",
              ],
            ].map(([question, answer]) => (
              <div key={question}>
                <h3 className="font-black text-slate-950">{question}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">{answer}</p>
              </div>
            ))}
          </div>
        </ContentCard>
      </section>
    </main>
  )
}
