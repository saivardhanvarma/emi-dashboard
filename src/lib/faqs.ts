export type Faq = {
  question: string
  answer: string
}

export const faqs: Faq[] = [
  {
    question: "What is an EMI calculator?",
    answer:
      "An EMI calculator estimates the fixed monthly payment for a loan using the loan amount, annual interest rate, and tenure. It also shows estimated total interest and total repayment.",
  },
  {
    question: "Is the EMI shown by EMIWYZE final?",
    answer:
      "No. The EMI is an estimate for planning. Banks and lenders may calculate final EMI using their own rules, fees, compounding method, insurance charges, and reset periods.",
  },
  {
    question: "How is EMI calculated?",
    answer:
      "EMI is usually calculated with the formula P x R x (1 + R)^N divided by ((1 + R)^N - 1), where P is principal, R is monthly interest rate, and N is tenure in months.",
  },
  {
    question: "Can I compare multiple loan offers?",
    answer:
      "Yes. The EMI comparison mode lets you enter one loan amount and tenure, then compare different interest rates side by side to review EMI, total interest, and total payment.",
  },
  {
    question: "What is a SIP calculator?",
    answer:
      "A SIP calculator estimates the future value of monthly investments using an expected annual return and investment period. It is useful for goal planning but does not guarantee returns.",
  },
  {
    question: "Are SIP returns guaranteed?",
    answer:
      "No. SIP returns are market-linked and can change based on mutual fund performance, market conditions, expense ratio, and investment period.",
  },
  {
    question: "Does EMIWYZE store my calculator inputs?",
    answer:
      "The calculator works in your browser for normal usage. EMIWYZE does not require login or personal financial documents to calculate EMI or SIP estimates.",
  },
  {
    question: "Can I use these calculators for home loans, car loans, and personal loans?",
    answer:
      "Yes. The EMI calculator can be used for common reducing-balance loan estimates such as home loans, car loans, education loans, and personal loans.",
  },
  {
    question: "Why does total interest increase when tenure increases?",
    answer:
      "A longer tenure spreads repayment over more months. This can reduce monthly EMI, but interest has more time to accumulate, so total interest often becomes higher.",
  },
  {
    question: "Should I choose lower EMI or lower total interest?",
    answer:
      "That depends on your cash flow. A lower EMI can be easier monthly, while lower total interest usually requires a shorter tenure or larger prepayment. Compare both before deciding.",
  },
  {
    question: "Do the articles replace financial advice?",
    answer:
      "No. EMIWYZE articles are educational. For loan, investment, tax, or legal decisions, confirm details with a qualified professional or the relevant institution.",
  },
  {
    question: "How can I contact EMIWYZE?",
    answer:
      "You can use the Contact Us page or email support@emiwyze.online for feedback, corrections, calculator issues, or content suggestions.",
  },
]
