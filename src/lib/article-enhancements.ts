import type { Article } from "./articles"

type Scenario = {
  label: string
  emi: string
  interest: string
  note: string
}

export function getArticleExample(article: Article) {
  if (article.category === "SIP") {
    return {
      title: "Example with Indian numbers",
      copy:
        "Suppose you invest Rs. 10,000 per month for 15 years and use a 12% expected annual return. The total investment is Rs. 18 lakh, while the estimated maturity value can be much higher because every monthly instalment gets time to compound. This does not mean 12% is guaranteed. It simply gives you a planning benchmark so you can test whether your monthly SIP is large enough for the goal.",
    }
  }

  if (article.category === "GST") {
    return {
      title: "Example with Indian numbers",
      copy:
        "If a service has a base price of Rs. 10,000 and GST is 18%, the GST amount is Rs. 1,800 and the invoice total becomes Rs. 11,800. If Rs. 11,800 is already GST-inclusive, the base value is Rs. 10,000 and the GST component is Rs. 1,800. This distinction matters when you compare vendor quotations.",
    }
  }

  return {
    title: "Example with Indian numbers",
    copy:
      "For a simple EMI example, take Rs. 10 lakh at 9% annual interest for 5 years. The estimated EMI is about Rs. 20,758, total repayment is about Rs. 12.45 lakh, and total interest is about Rs. 2.45 lakh. If the same loan is stretched to 7 years, the EMI becomes lower, but total interest rises. That is why EMI affordability and total cost should be checked together.",
  }
}

export function getScenarioRows(article: Article): Scenario[] {
  if (article.category === "SIP") {
    return [
      {
        label: "Rs. 5,000 SIP for 10 years",
        emi: "Rs. 6.1 lakh invested",
        interest: "Goal building stage",
        note: "Good for starting early with a moderate monthly amount.",
      },
      {
        label: "Rs. 10,000 SIP for 15 years",
        emi: "Rs. 18 lakh invested",
        interest: "Long-term compounding",
        note: "Useful for education, home down payment, or wealth goals.",
      },
      {
        label: "Rs. 20,000 SIP for 20 years",
        emi: "Rs. 48 lakh invested",
        interest: "High commitment",
        note: "Review annually as income, risk, and goal values change.",
      },
    ]
  }

  if (article.category === "GST") {
    return [
      {
        label: "Rs. 1,000 plus 5% GST",
        emi: "Rs. 1,050 total",
        interest: "Rs. 50 GST",
        note: "Common for lower-rate goods and services.",
      },
      {
        label: "Rs. 10,000 plus 18% GST",
        emi: "Rs. 11,800 total",
        interest: "Rs. 1,800 GST",
        note: "Useful for service invoices and business quotes.",
      },
      {
        label: "Rs. 50,000 plus 28% GST",
        emi: "Rs. 64,000 total",
        interest: "Rs. 14,000 GST",
        note: "High-rate categories need careful price comparison.",
      },
    ]
  }

  return [
    {
      label: "Rs. 10 lakh at 9% for 3 years",
      emi: "About Rs. 31,800",
      interest: "About Rs. 1.45 lakh",
      note: "Higher EMI, lower total interest.",
    },
    {
      label: "Rs. 10 lakh at 9% for 5 years",
      emi: "About Rs. 20,758",
      interest: "About Rs. 2.45 lakh",
      note: "Balanced monthly payment for many borrowers.",
    },
    {
      label: "Rs. 10 lakh at 9% for 7 years",
      emi: "About Rs. 16,089",
      interest: "About Rs. 3.51 lakh",
      note: "Lower EMI, but interest cost rises.",
    },
  ]
}

export function getArticleLongFormSections(article: Article) {
  const topic = article.title.toLowerCase()

  return [
    {
      heading: "How to use this guide in real life",
      body: [
        `Start by treating ${article.category.toLowerCase()} planning as a decision-making exercise, not just a number lookup. The calculator gives a quick estimate, but the better result comes from comparing at least three scenarios: a conservative case, a realistic case, and an aggressive case. This habit prevents one attractive number from controlling the whole decision.`,
        "For loans, the practical sequence is simple: decide the maximum comfortable monthly payment, compare rates, review total interest, and then check fees. For investments, decide the goal amount and timeline first, then test whether the required monthly contribution is realistic with your current income.",
        "Indian households often manage multiple goals at the same time: rent or home loan, school fees, insurance premiums, emergency savings, tax planning, and family support. A calculator is most useful when it is used inside that full monthly budget instead of as a separate decision.",
      ],
    },
    {
      heading: "Common mistakes to avoid",
      body: [
        "The first mistake is focusing only on the smallest monthly amount. A lower EMI may feel easier today, but if it comes from a much longer tenure, the total interest can become significantly higher. The same logic applies to investment planning: a small contribution is a good start, but important goals may need step-ups over time.",
        "The second mistake is ignoring charges. Loan processing fees, foreclosure terms, insurance bundling, GST on fees, fund expense ratios, exit loads, and tax treatment can all change the final outcome. Calculator results should be combined with official documents before a final decision.",
        "The third mistake is using the best-case assumption as the base plan. If a goal is important, use a conservative estimate and keep a margin. Optimism is useful for motivation, but conservative planning is safer for commitments that affect your monthly cash flow.",
      ],
    },
    {
      heading: topic.includes("credit")
        ? "How credit behaviour changes the result"
        : topic.includes("prepayment")
          ? "How prepayment changes the result"
          : topic.includes("gst")
            ? "How invoice structure changes the result"
            : "How small changes can affect the result",
      body: [
        "Small changes in rate, tenure, contribution, or taxable value can create a larger difference than expected. A 1% interest-rate difference on a long home loan can change total interest by lakhs of rupees. A small yearly SIP step-up can also create a meaningful difference over 15 to 20 years.",
        "This is why comparison tables matter. When you see tenure versus EMI and rate versus total interest together, the trade-off becomes visible. The right choice is rarely the lowest EMI or the highest expected return in isolation. It is the option that fits your budget, risk level, and timeline.",
        "Before finalising a loan or investment, write down the exact assumption you used. For example: Rs. 10 lakh at 9% for 5 years, or Rs. 10,000 SIP for 15 years at 12% expected return. Clear assumptions make future reviews easier.",
      ],
    },
    {
      heading: "Monthly planning checklist",
      body: [
        "Keep an emergency fund before increasing EMI or investment commitments. A buffer protects your credit score and prevents forced borrowing during income delays or sudden expenses.",
        "Review your numbers at least once a year. Salary changes, rate changes, inflation, tax rules, and goal timelines can make last year's plan outdated.",
        "Use the related calculators on EMIWYZE to cross-check the same decision from different angles. For example, a home loan decision can be checked with the EMI calculator and then with the loan prepayment calculator to see whether yearly part payments are useful.",
      ],
    },
  ]
}
