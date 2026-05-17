import type { Metadata } from "next"
import { CalculatorSchema } from "@/components/calculator-schema"
import { RdCalculator } from "@/components/calculator-widgets"

export const metadata: Metadata = {
  title: "RD Calculator",
  description:
    "Estimate recurring deposit maturity value, total deposits, and interest earned from monthly deposits.",
}

export default function RdCalculatorPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <CalculatorSchema
        name="RD Calculator"
        description="Calculate recurring deposit maturity value and interest."
        path="/rd-calculator"
      />
      <RdCalculator />
    </main>
  )
}
