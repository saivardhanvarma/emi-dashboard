import type { Metadata } from "next"
import { CalculatorSchema } from "@/components/calculator-schema"
import { GstCalculator } from "@/components/calculator-widgets"

export const metadata: Metadata = {
  title: "GST Calculator",
  description:
    "Calculate GST inclusive and exclusive amounts for Indian invoices with taxable value, GST amount, and total value.",
}

export default function GstCalculatorPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <CalculatorSchema
        name="GST Calculator India"
        description="Calculate GST inclusive and exclusive invoice values."
        path="/gst-calculator"
      />
      <GstCalculator />
    </main>
  )
}
