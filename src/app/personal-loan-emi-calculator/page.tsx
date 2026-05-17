import type { Metadata } from "next"
import { CalculatorSchema } from "@/components/calculator-schema"
import { LoanCalculator } from "@/components/calculator-widgets"

export const metadata: Metadata = {
  title: "Personal Loan EMI Calculator",
  description:
    "Calculate personal loan EMI, total interest, and repayment before taking an unsecured loan.",
}

export default function PersonalLoanEmiCalculatorPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <CalculatorSchema
        name="Personal Loan EMI Calculator"
        description="Calculate personal loan monthly payment, interest, and repayment."
        path="/personal-loan-emi-calculator"
      />
      <LoanCalculator
        eyebrow="Personal loan EMI calculator"
        title="Personal Loan EMI Calculator"
        description="Estimate personal loan EMI and compare interest cost across short tenures before accepting an offer."
        defaultAmount={500000}
        defaultRate={13}
        defaultYears={4}
        example="Example: Rs. 5 lakh at 13% for 4 years shows why unsecured loan rates and processing fees need careful comparison."
      />
    </main>
  )
}
