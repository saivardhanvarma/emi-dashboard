export type Article = {
  slug: string
  title: string
  description: string
  category: string
  readingTime: string
  sections: {
    heading: string
    body: string[]
  }[]
}

export const articles: Article[] = [
  {
    slug: "how-emi-is-calculated",
    title: "How EMI Is Calculated: Formula, Example, and Practical Tips",
    description:
      "Understand the EMI formula, how interest and tenure affect monthly payments, and how to read an EMI result before taking a loan.",
    category: "EMI",
    readingTime: "5 min read",
    sections: [
      {
        heading: "What EMI means",
        body: [
          "EMI stands for equated monthly instalment. It is the fixed amount you pay every month to repay a loan over a chosen tenure.",
          "Each EMI contains two parts: principal repayment and interest. In the early months, the interest portion is usually higher. As the loan balance reduces, the principal portion grows.",
        ],
      },
      {
        heading: "The EMI formula",
        body: [
          "The standard EMI formula is P x R x (1 + R)^N divided by ((1 + R)^N - 1), where P is principal, R is monthly interest rate, and N is tenure in months.",
          "For example, a loan at 9 percent annual interest uses a monthly rate of 0.75 percent. A 10-year loan uses 120 months in the formula.",
        ],
      },
      {
        heading: "How to use the result",
        body: [
          "Do not look only at the monthly EMI. Compare total interest, total payment, and tenure. A smaller EMI can still become expensive if the tenure is stretched too far.",
          "Use EMIWYZE to test multiple loan amounts, rates, and tenures before speaking to a lender so you can negotiate with clearer numbers.",
        ],
      },
    ],
  },
  {
    slug: "best-home-loan-tips-india",
    title: "Best Home Loan Tips in India Before You Apply",
    description:
      "Simple checks for eligibility, credit score, tenure, processing charges, and prepayment before taking a home loan in India.",
    category: "Home Loan",
    readingTime: "6 min read",
    sections: [
      {
        heading: "Start with affordability",
        body: [
          "A comfortable home loan EMI should leave space for rent overlap, insurance, maintenance, emergency savings, and family expenses.",
          "Many borrowers focus only on approval amount. A better approach is to decide the EMI you can handle first, then work backwards to a loan amount.",
        ],
      },
      {
        heading: "Compare more than the rate",
        body: [
          "Interest rate matters, but it is not the only cost. Check processing fee, legal fee, valuation charges, insurance bundling, reset period, and foreclosure terms.",
          "Ask for an amortisation schedule. It shows how much of each EMI goes toward interest and how much reduces the principal.",
        ],
      },
      {
        heading: "Use prepayments wisely",
        body: [
          "Small yearly prepayments can reduce interest sharply on long home loans because they reduce the principal early.",
          "Before paying extra, confirm whether the loan has prepayment restrictions and whether the bank lets you reduce tenure instead of only reducing EMI.",
        ],
      },
    ],
  },
  {
    slug: "flat-vs-reducing-interest-rate",
    title: "Flat vs Reducing Interest Rate: What Borrowers Should Know",
    description:
      "Learn why a flat rate can look cheaper but cost more than a reducing balance loan with a higher quoted rate.",
    category: "Loans",
    readingTime: "4 min read",
    sections: [
      {
        heading: "Flat rate basics",
        body: [
          "In a flat rate loan, interest is calculated on the original loan amount for the full tenure. The calculation does not fully account for the principal you repay each month.",
          "This makes the quoted rate look simple, but it can hide the effective cost of borrowing.",
        ],
      },
      {
        heading: "Reducing balance basics",
        body: [
          "In a reducing balance loan, interest is calculated on the outstanding principal. As you repay the loan, the interest component gradually comes down.",
          "Most home loans and many personal loans use reducing balance calculations.",
        ],
      },
      {
        heading: "How to compare",
        body: [
          "Compare total repayment and annualised cost, not just the rate printed in an offer. A 10 percent flat rate can be costlier than a higher reducing balance rate.",
          "Use the EMI and total interest figures together to understand the real difference between offers.",
        ],
      },
    ],
  },
  {
    slug: "personal-loan-emi-planning",
    title: "Personal Loan EMI Planning: Avoid These Common Mistakes",
    description:
      "Plan personal loan EMI with attention to tenure, processing fees, emergency cash flow, and prepayment rules.",
    category: "Personal Loan",
    readingTime: "5 min read",
    sections: [
      {
        heading: "Keep tenure realistic",
        body: [
          "A longer tenure reduces monthly EMI but increases total interest. Choose a tenure that keeps the EMI manageable without making the loan linger unnecessarily.",
          "For short-term needs, test whether a slightly higher EMI can help close the loan faster.",
        ],
      },
      {
        heading: "Include all costs",
        body: [
          "Personal loans often include processing charges, GST on fees, insurance offers, and late payment penalties. These costs affect the true cost of borrowing.",
          "Before signing, ask for the final disbursal amount and the total amount payable.",
        ],
      },
      {
        heading: "Protect cash flow",
        body: [
          "Do not use every rupee of monthly surplus for EMI. Keep an emergency buffer so one unexpected expense does not lead to missed payments.",
          "If your income is variable, choose an EMI based on your average low-income months, not your best months.",
        ],
      },
    ],
  },
  {
    slug: "car-loan-emi-guide",
    title: "Car Loan EMI Guide: Down Payment, Tenure, and Total Cost",
    description:
      "See how car loan EMI changes with down payment, interest rate, tenure, insurance, and on-road price.",
    category: "Vehicle Loan",
    readingTime: "5 min read",
    sections: [
      {
        heading: "Use on-road cost",
        body: [
          "Car buyers often calculate EMI from ex-showroom price, but the loan decision should consider on-road price, insurance, registration, accessories, and processing charges.",
          "A higher down payment lowers EMI and interest, but keep enough cash for ownership costs after purchase.",
        ],
      },
      {
        heading: "Avoid stretching tenure blindly",
        body: [
          "Cars depreciate quickly. A very long loan tenure may keep you paying high interest while the car value keeps reducing.",
          "Compare the total payment for 3-year, 5-year, and 7-year tenures before finalising.",
        ],
      },
      {
        heading: "Check foreclosure terms",
        body: [
          "If you plan to close the loan early, check prepayment or foreclosure rules. Some lenders charge a fee for early closure.",
          "A low rate with rigid terms may not be better than a slightly higher rate with flexible prepayment.",
        ],
      },
    ],
  },
  {
    slug: "sip-calculator-guide",
    title: "SIP Calculator Guide: Estimate Long-Term Mutual Fund Growth",
    description:
      "Use a SIP calculator to estimate monthly investment growth, expected returns, and wealth goals with compounding.",
    category: "SIP",
    readingTime: "5 min read",
    sections: [
      {
        heading: "What a SIP calculator estimates",
        body: [
          "A SIP calculator estimates the future value of fixed monthly investments using an expected annual return and investment period.",
          "It is not a guarantee. Mutual fund returns vary, but the calculator is useful for planning targets and comparing contribution levels.",
        ],
      },
      {
        heading: "Compounding matters",
        body: [
          "The longer you stay invested, the more your earlier contributions can participate in compounding. This is why starting early can be powerful.",
          "Even a modest increase in monthly SIP can create a large difference over 10 to 20 years.",
        ],
      },
      {
        heading: "Plan with a margin",
        body: [
          "Use conservative return assumptions for important goals. If your goal is non-negotiable, plan with a buffer rather than relying on the highest expected return.",
          "Review SIP amounts yearly when income, inflation, and goals change.",
        ],
      },
    ],
  },
  {
    slug: "sip-vs-fd",
    title: "SIP vs FD: Which Is Better for Your Goal?",
    description:
      "Compare systematic investment plans (SIPs) in mutual funds with fixed deposits (FDs) to choose the right option for risk, returns, liquidity, and goals.",
    category: "SIP",
    readingTime: "6 min read",
    sections: [
      {
        heading: "Why this comparison matters",
        body: [
          "SIP and FD are two common choices for retail savers. SIPs offer market-linked returns with compounding, while FDs offer fixed nominal returns with capital protection. Choosing between them depends on your goal horizon, risk tolerance, tax situation, and need for liquidity.",
        ],
      },
      {
        heading: "Short summary",
        body: [
          "For short-term, capital-safe needs, FDs can be suitable. For long-term goals where you can accept volatility, SIPs historically offer higher inflation-beating returns. Many investors use a mix: keep an emergency cushion in FDs and deploy surplus monthly into SIPs for long-term wealth creation.",
        ],
      },
    ],
  },
  {
    slug: "gst-calculation-basics",
    title: "GST Calculation Basics for Small Businesses and Buyers",
    description:
      "Understand inclusive and exclusive GST calculations, common GST rates, and invoice checks.",
    category: "GST",
    readingTime: "4 min read",
    sections: [
      {
        heading: "Exclusive GST",
        body: [
          "If GST is added on top of a base price, multiply the base price by the GST rate and add it to the base amount.",
          "For example, on a base price of Rs. 1,000 at 18 percent GST, the tax is Rs. 180 and total invoice amount is Rs. 1,180.",
        ],
      },
      {
        heading: "Inclusive GST",
        body: [
          "If the price already includes GST, divide the total amount by 1 plus the GST rate to find the base value.",
          "Inclusive pricing is common in retail, so it helps to understand how much tax is inside the final price.",
        ],
      },
      {
        heading: "Invoice checks",
        body: [
          "Check GSTIN, invoice date, place of supply, taxable value, tax rate, and total tax amount before recording an invoice.",
          "For business decisions, consult a qualified tax professional because GST rules and classifications can change.",
        ],
      },
    ],
  },
  {
    slug: "loan-prepayment-vs-investment",
    title: "Loan Prepayment vs Investment: How to Decide",
    description:
      "Compare prepaying a loan with investing surplus money using interest cost, risk, liquidity, and peace of mind.",
    category: "Planning",
    readingTime: "6 min read",
    sections: [
      {
        heading: "Compare guaranteed savings",
        body: [
          "Prepaying a loan gives a near-guaranteed saving equal to the interest avoided, subject to charges and terms.",
          "Investments may offer higher returns, but they carry risk and timing uncertainty.",
        ],
      },
      {
        heading: "Keep liquidity first",
        body: [
          "Do not empty emergency funds to prepay a loan. Liquidity can prevent new borrowing when an unexpected expense appears.",
          "A balanced approach is to keep an emergency fund, then use extra surplus for part prepayment or investments based on your goals.",
        ],
      },
      {
        heading: "High-interest loans first",
        body: [
          "Credit card debt and high-rate personal loans usually deserve priority because their interest cost can be very high.",
          "For long home loans at moderate rates, the decision can depend on tax treatment, goal timeline, and risk appetite.",
        ],
      },
    ],
  },
  {
    slug: "credit-score-and-loan-emi",
    title: "How Credit Score Can Affect Your Loan EMI",
    description:
      "Learn how credit score influences interest rates, eligibility, processing speed, and monthly EMI.",
    category: "Credit",
    readingTime: "4 min read",
    sections: [
      {
        heading: "Rate impact",
        body: [
          "A stronger credit profile can help you qualify for better interest rates. Even a small rate difference can matter on large, long-tenure loans.",
          "Use the EMI calculator to compare the same loan amount at different rates and see the monthly and total interest impact.",
        ],
      },
      {
        heading: "Payment history matters",
        body: [
          "On-time repayment, low credit utilisation, and stable borrowing behaviour can support a healthier credit score.",
          "Missed EMI or credit card payments may reduce eligibility and increase borrowing cost.",
        ],
      },
      {
        heading: "Check before applying",
        body: [
          "Review your credit report before major loan applications. Correcting errors early can save time during loan processing.",
          "Avoid applying with many lenders at once unless you are using a structured comparison process.",
        ],
      },
    ],
  },
  {
    slug: "emergency-fund-before-loan",
    title: "Why You Need an Emergency Fund Before Taking a Loan",
    description:
      "See why emergency savings protect your EMI payments and reduce financial stress during income shocks.",
    category: "Budgeting",
    readingTime: "4 min read",
    sections: [
      {
        heading: "EMI needs continuity",
        body: [
          "Loans reward consistency. Missing EMI payments can trigger penalties, affect credit score, and create stress during future borrowing.",
          "An emergency fund gives you breathing room if income is delayed or expenses rise suddenly.",
        ],
      },
      {
        heading: "How much to keep",
        body: [
          "A common starting point is three to six months of essential expenses, including EMI, rent, food, utilities, insurance, and school fees.",
          "If your income is irregular, a larger buffer can be useful.",
        ],
      },
      {
        heading: "Where to keep it",
        body: [
          "Emergency funds should be accessible and low risk. The goal is availability, not maximum return.",
          "Separate this money from regular spending accounts so it is not used casually.",
        ],
      },
    ],
  },
  {
    slug: "emi-affordability-rule",
    title: "EMI Affordability Rule: How Much Monthly Payment Is Comfortable",
    description:
      "Use practical income and expense checks to estimate a comfortable EMI before taking any loan.",
    category: "Budgeting",
    readingTime: "5 min read",
    sections: [
      {
        heading: "Start with net income",
        body: [
          "Plan EMI from take-home income, not gross salary. Taxes, deductions, and variable incentives can make gross income misleading.",
          "List fixed expenses first, then estimate the EMI that still leaves room for savings and irregular costs.",
        ],
      },
      {
        heading: "Debt-to-income check",
        body: [
          "Many borrowers try to keep total EMIs within a reasonable share of monthly income. The right share depends on dependents, rent, city, and job stability.",
          "If the EMI forces you to pause all savings, the loan may be too aggressive.",
        ],
      },
      {
        heading: "Stress test the loan",
        body: [
          "Before applying, test what happens if income drops, interest rate rises, or a large expense appears.",
          "A loan that survives a simple stress test is usually easier to manage in real life.",
        ],
      },
    ],
  },
  {
    slug: "reducing-home-loan-interest",
    title: "Ways to Reduce Home Loan Interest Over Time",
    description:
      "Explore prepayments, shorter tenure, balance transfer, rate negotiation, and repayment discipline for home loans.",
    category: "Home Loan",
    readingTime: "6 min read",
    sections: [
      {
        heading: "Make early prepayments",
        body: [
          "Prepayments made early in the loan tenure can save more interest because the outstanding principal is still high.",
          "Even annual bonuses or small extra payments can make a visible difference over a long loan.",
        ],
      },
      {
        heading: "Negotiate and compare",
        body: [
          "If your credit profile has improved, ask your lender for a better rate. Also compare balance transfer offers after accounting for fees.",
          "A balance transfer only helps when the interest savings are greater than transfer costs and paperwork effort.",
        ],
      },
      {
        heading: "Reduce tenure when possible",
        body: [
          "When income rises, increasing EMI or reducing tenure can lower total interest more than simply enjoying a smaller monthly burden.",
          "Review your home loan yearly so old terms do not continue without question.",
        ],
      },
    ],
  },
]

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug)
}
