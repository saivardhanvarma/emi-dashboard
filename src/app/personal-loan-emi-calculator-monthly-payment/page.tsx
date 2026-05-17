import type { Metadata } from "next"
import { KeywordLanding } from "@/components/keyword-landing"

export const metadata: Metadata = {
  title: "Personal Loan EMI Calculator Monthly Payment",
  description:
    "Calculate personal loan monthly payment, total interest, and repayment for unsecured loans.",
}

export default function PersonalLoanMonthlyPaymentPage() {
  return (
    <KeywordLanding
      eyebrow="Personal loan monthly payment"
      title="Personal Loan EMI Calculator Monthly Payment"
      description="Plan unsecured loan repayment by estimating monthly EMI, total interest, and total amount payable."
      calculatorHref="/personal-loan-emi-calculator"
      calculatorLabel="Personal Loan EMI Calculator"
      sections={[
        {
          heading: "Why monthly payment matters",
          body:
            "Personal loans are convenient but usually carry higher interest than secured loans. The monthly payment should be checked against rent, bills, school fees, insurance, and existing EMIs before accepting an offer.",
        },
        {
          heading: "Short tenure versus low EMI",
          body:
            "A short tenure increases monthly payment but reduces total interest. A long tenure makes EMI easier but can keep the loan active for too long. Compare both before choosing.",
        },
      ]}
      examples={[
        "Rs. 5 lakh at 13% for 4 years: useful for a typical personal loan comparison.",
        "Rs. 2 lakh at 15% for 2 years: useful for urgent short-term borrowing.",
        "Rs. 10 lakh at 12% for 5 years: useful for checking whether total interest becomes too high.",
      ]}
    />
  )
}
