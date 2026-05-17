import type { Metadata } from "next"
import { CalculatorSchema } from "@/components/calculator-schema"
import { FdCalculator } from "@/components/calculator-widgets"

export const metadata: Metadata = {
  title: "FD Calculator",
  description:
    "Estimate fixed deposit maturity value and interest earned using deposit amount, rate, and tenure.",
}

export default function FdCalculatorPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <CalculatorSchema
        name="FD Calculator"
        description="Calculate fixed deposit maturity value and interest."
        path="/fd-calculator"
      />
      <FdCalculator />
    </main>
  )
}
