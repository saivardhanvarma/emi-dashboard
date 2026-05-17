import type { Metadata } from "next"
import { KeywordLanding } from "@/components/keyword-landing"

export const metadata: Metadata = {
  title: "FD Calculator Monthly Interest",
  description:
    "FD calculator monthly interest guide for estimating fixed deposit interest payout and maturity planning.",
}

export default function FdCalculatorMonthlyInterestPage() {
  return (
    <KeywordLanding
      eyebrow="FD calculator monthly interest"
      title="FD Calculator Monthly Interest"
      description="Understand how fixed deposit interest can be estimated for maturity planning and monthly income needs."
      calculatorHref="/fd-calculator"
      calculatorLabel="FD Calculator"
      sections={[
        {
          heading: "Maturity versus monthly payout",
          body:
            "Some fixed deposits compound interest until maturity, while some offer periodic interest payouts. A maturity calculator estimates the final value, while monthly interest planning helps income-focused savers understand expected cash flow.",
        },
        {
          heading: "Check tax and payout frequency",
          body:
            "FD interest may be taxable based on your income slab, and TDS rules may apply. Monthly payout can improve cash flow but may produce a different final maturity value than cumulative deposits.",
        },
      ]}
      examples={[
        "Rs. 1 lakh at 7%: roughly Rs. 583 monthly before tax if treated as simple monthly interest.",
        "Rs. 5 lakh at 7.25%: useful for retirement cash-flow estimation.",
        "Rs. 10 lakh cumulative FD: useful for comparing maturity value against monthly payout needs.",
      ]}
    />
  )
}
