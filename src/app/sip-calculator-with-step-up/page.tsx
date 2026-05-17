import type { Metadata } from "next"
import { KeywordLanding } from "@/components/keyword-landing"

export const metadata: Metadata = {
  title: "SIP Calculator With Step Up",
  description:
    "Understand SIP calculator with step-up planning, yearly SIP increases, compounding, and long-term wealth goals.",
}

export default function SipCalculatorWithStepUpPage() {
  return (
    <KeywordLanding
      eyebrow="SIP calculator with step up"
      title="SIP Calculator With Step Up"
      description="Learn how yearly SIP increases can improve long-term investment planning as income grows."
      calculatorHref="/sip-calculator"
      calculatorLabel="SIP Calculator"
      sections={[
        {
          heading: "What is step-up SIP?",
          body:
            "A step-up SIP increases the monthly investment by a fixed percentage or amount every year. It is useful when your salary or business income grows and you want investments to rise with income instead of staying flat for years.",
        },
        {
          heading: "Why step-up improves goal planning",
          body:
            "A flat SIP is simple, but inflation can make future goals more expensive. A yearly step-up can help bridge the gap without forcing a very high starting SIP. Even a 5% or 10% annual increase can matter over 15 to 20 years.",
        },
      ]}
      examples={[
        "Rs. 10,000 monthly SIP with 10% yearly step-up: useful for long-term wealth goals.",
        "Rs. 5,000 monthly SIP with 5% step-up: useful for beginners increasing investment slowly.",
        "Rs. 20,000 monthly SIP with yearly review: useful for high-priority goals like education or retirement.",
      ]}
    />
  )
}
