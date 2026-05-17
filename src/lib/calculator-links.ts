export const calculatorLinks = [
  { href: "/", label: "EMI Calculator", group: "Loan" },
  { href: "/home-loan-emi-calculator", label: "Home Loan EMI Calculator", group: "Loan" },
  { href: "/car-loan-emi-calculator", label: "Car Loan EMI Calculator", group: "Loan" },
  {
    href: "/personal-loan-emi-calculator",
    label: "Personal Loan EMI Calculator",
    group: "Loan",
  },
  {
    href: "/loan-prepayment-calculator",
    label: "Loan Prepayment Calculator",
    group: "Loan",
  },
  { href: "/sip-calculator", label: "SIP Calculator", group: "Investment" },
  { href: "/lumpsum-calculator", label: "Lumpsum Calculator", group: "Investment" },
  { href: "/fd-calculator", label: "FD Calculator", group: "Investment" },
  { href: "/rd-calculator", label: "RD Calculator", group: "Investment" },
  { href: "/gst-calculator", label: "GST Calculator", group: "Tax" },
]

export function getRelevantCalculators(category: string) {
  if (category === "SIP") {
    return calculatorLinks.filter((link) => link.group === "Investment")
  }

  if (category === "GST") {
    return calculatorLinks.filter((link) => link.group === "Tax")
  }

  if (category === "Planning") {
    return calculatorLinks.filter((link) => link.group !== "Tax")
  }

  return calculatorLinks.filter((link) => link.group === "Loan")
}
