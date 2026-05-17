import type { Metadata } from "next"
import { CalculatorSchema } from "@/components/calculator-schema"
import { LoanPrepaymentCalculator } from "@/components/calculator-widgets"

export const metadata: Metadata = {
  title: "Loan Prepayment Calculator",
  description:
    "Estimate EMI reduction and interest savings from a one-time loan prepayment.",
}

export default function LoanPrepaymentCalculatorPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <CalculatorSchema
        name="Loan Prepayment Calculator"
        description="Calculate estimated EMI reduction and interest savings from loan prepayment."
        path="/loan-prepayment-calculator"
      />
      <LoanPrepaymentCalculator />
    </main>
  )
}
