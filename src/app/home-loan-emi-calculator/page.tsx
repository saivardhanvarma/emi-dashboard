import type { Metadata } from "next"
import { CalculatorSchema } from "@/components/calculator-schema"
import { LoanCalculator } from "@/components/calculator-widgets"

export const metadata: Metadata = {
  title: "Home Loan EMI Calculator",
  description:
    "Calculate home loan EMI, total interest, total repayment, and compare tenure and interest rate scenarios for Indian housing loans.",
}

export default function HomeLoanEmiCalculatorPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <CalculatorSchema
        name="Home Loan EMI Calculator India"
        description="Calculate home loan EMI, total interest, and repayment for Indian housing loans."
        path="/home-loan-emi-calculator"
      />
      <LoanCalculator
        eyebrow="Home loan EMI calculator"
        title="Home Loan EMI Calculator"
        description="Estimate your monthly housing loan payment, compare tenure choices, and understand how rate changes affect total interest before applying."
        defaultAmount={5000000}
        defaultRate={8.75}
        defaultYears={20}
        example="Example: Rs. 50 lakh at 8.75% for 20 years shows how a long tenure can reduce monthly EMI but increase total interest."
      />
    </main>
  )
}
