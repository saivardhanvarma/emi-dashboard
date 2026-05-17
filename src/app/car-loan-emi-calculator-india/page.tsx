import type { Metadata } from "next"
import { KeywordLanding } from "@/components/keyword-landing"

export const metadata: Metadata = {
  title: "Car Loan EMI Calculator India",
  description:
    "Car loan EMI calculator India guide for vehicle loan amount, down payment, interest, tenure, and total cost.",
}

export default function CarLoanEmiCalculatorIndiaPage() {
  return (
    <KeywordLanding
      eyebrow="Car loan EMI calculator India"
      title="Car Loan EMI Calculator India"
      description="Estimate car loan EMI using on-road price, down payment, interest rate, and repayment tenure."
      calculatorHref="/car-loan-emi-calculator"
      calculatorLabel="Car Loan EMI Calculator"
      sections={[
        {
          heading: "Use on-road price, not only ex-showroom price",
          body:
            "Vehicle buyers should calculate EMI from the actual loan amount after down payment. Registration, insurance, road tax, accessories, and dealer packages can make the final amount higher than the ex-showroom price shown in ads.",
        },
        {
          heading: "Compare EMI with ownership cost",
          body:
            "A car loan EMI should fit alongside fuel, service, tyres, parking, tolls, annual insurance renewal, and unexpected repairs. A comfortable EMI on paper may become tight if running cost is ignored.",
        },
      ]}
      examples={[
        "Rs. 8 lakh at 9.5% for 5 years: common mid-range car loan scenario.",
        "Rs. 5 lakh at 10% for 3 years: higher EMI but lower interest.",
        "Rs. 12 lakh at 9.25% for 7 years: lower EMI but higher total interest and depreciation risk.",
      ]}
    />
  )
}
