import type { Metadata } from "next"
import { KeywordLanding } from "@/components/keyword-landing"

export const metadata: Metadata = {
  title: "Home Loan EMI Calculator India",
  description:
    "Home loan EMI calculator for India with examples for housing loan amount, interest rate, tenure, and total interest planning.",
}

export default function HomeLoanEmiCalculatorIndiaPage() {
  return (
    <KeywordLanding
      eyebrow="Home loan EMI calculator India"
      title="Home Loan EMI Calculator India"
      description="Use this India-focused guide to understand housing loan EMI, tenure, rate changes, and total interest before choosing a bank offer."
      calculatorHref="/home-loan-emi-calculator"
      calculatorLabel="Home Loan EMI Calculator"
      sections={[
        {
          heading: "Why Indian home loan EMI planning needs detail",
          body:
            "Indian home loan decisions include interest rate, floating-rate resets, processing fees, legal checks, property valuation, insurance, stamp duty, registration, and maintenance. A calculator helps estimate monthly EMI, but the stronger decision comes from comparing the full housing cost with your monthly income and emergency fund.",
        },
        {
          heading: "How to compare tenure",
          body:
            "A 20-year tenure gives a lower EMI than a 10-year tenure, but total interest can be much higher. Before finalising, compare 10, 15, 20, and 25-year options. If the longer tenure is needed for safety, plan part-prepayments when income rises.",
        },
      ]}
      examples={[
        "Rs. 50 lakh at 8.75% for 20 years: useful for checking long-tenure affordability.",
        "Rs. 30 lakh at 9% for 15 years: useful for a mid-sized apartment or balance transfer comparison.",
        "Rs. 10 lakh prepayment in year 5: useful for testing bonus or property-sale surplus impact.",
      ]}
    />
  )
}
