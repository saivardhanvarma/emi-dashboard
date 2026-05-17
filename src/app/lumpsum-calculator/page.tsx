import type { Metadata } from "next"
import { CalculatorSchema } from "@/components/calculator-schema"
import { LumpsumCalculator } from "@/components/calculator-widgets"

export const metadata: Metadata = {
  title: "Lumpsum Calculator",
  description:
    "Estimate future value, invested amount, and expected returns for a one-time investment.",
}

export default function LumpsumCalculatorPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <CalculatorSchema
        name="Lumpsum Calculator"
        description="Calculate future value for a one-time investment."
        path="/lumpsum-calculator"
      />
      <LumpsumCalculator />
    </main>
  )
}
