import type { Metadata } from "next"
import { CalculatorSchema } from "@/components/calculator-schema"
import { LoanCalculator } from "@/components/calculator-widgets"

export const metadata: Metadata = {
  title: "Car Loan EMI Calculator",
  description:
    "Calculate car loan EMI, total interest, and repayment for vehicle loans using loan amount, interest rate, and tenure.",
}

export default function CarLoanEmiCalculatorPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <CalculatorSchema
        name="Car Loan EMI Calculator India"
        description="Calculate vehicle loan EMI, interest, and total repayment for Indian car loans."
        path="/car-loan-emi-calculator"
      />
      <LoanCalculator
        eyebrow="Car loan EMI calculator"
        title="Car Loan EMI Calculator"
        description="Plan your vehicle loan with EMI, total interest, and total repayment estimates before choosing down payment and tenure."
        defaultAmount={800000}
        defaultRate={9.5}
        defaultYears={5}
        example="Example: Rs. 8 lakh at 9.5% for 5 years helps compare affordability with fuel, insurance, and maintenance costs."
      />
    </main>
  )
}
