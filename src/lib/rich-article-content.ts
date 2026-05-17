export type RichArticleSection = {
  heading: string
  body: string[]
}

export type ArticleFaq = {
  question: string
  answer: string
}

type RichArticle = {
  sections: RichArticleSection[]
  faqs: ArticleFaq[]
}

const richArticles: Record<string, RichArticle> = {
  "how-emi-is-calculated": {
    sections: [
      {
        heading: "Why the EMI formula matters",
        body: [
          "The EMI formula is useful because it turns a large loan into a monthly commitment you can compare with salary, rent, school fees, insurance, groceries, and savings. Many borrowers see only the approved loan amount and assume that approval means affordability. In practice, affordability depends on the monthly EMI, the number of months you must pay it, and the total interest that accumulates across the full tenure.",
          "For a Rs. 10 lakh loan at 9% for 5 years, the monthly EMI is about Rs. 20,758. That number is easier to understand than the formula itself, but the formula explains why the EMI changes when tenure or rate changes. A higher rate increases the monthly interest component. A longer tenure spreads principal repayment across more months but gives interest more time to accumulate.",
        ],
      },
      {
        heading: "Principal and interest split",
        body: [
          "Every EMI has two parts: principal and interest. In the early months, a larger share of the EMI usually goes toward interest because the outstanding loan balance is high. As months pass and the balance reduces, more of the same EMI starts reducing principal. This is why prepayments made early in a loan can be more powerful than prepayments made near the end.",
          "If you are taking a home loan, ask the lender for an amortisation schedule. It shows month-by-month principal repayment, interest charged, and outstanding balance. Reading this schedule makes the EMI result more practical because you can see how quickly your loan actually reduces.",
        ],
      },
      {
        heading: "How to compare EMI scenarios",
        body: [
          "A good EMI comparison uses at least three scenarios. First, test the lender's exact offer. Second, test a slightly higher rate to understand risk if rates rise or if the final offer is worse. Third, test a shorter tenure to see whether paying a little extra monthly can save meaningful interest. This small exercise often reveals the real cost of choosing convenience over total savings.",
          "For example, Rs. 10 lakh at 9% for 3 years has a much higher EMI than the 5-year version, but the total interest is lower. The 7-year version is easier monthly but costs more overall. The right answer depends on your income stability, emergency fund, and other goals.",
        ],
      },
      {
        heading: "When the calculator result can differ",
        body: [
          "Your lender's final EMI can differ from a public calculator because banks may include processing charges, insurance premiums, different compounding assumptions, rate reset dates, or rounding rules. Some lenders also calculate interest from disbursal date to first EMI date separately. That does not make the calculator useless; it means the calculator is a planning tool, while the sanction letter is the final document.",
          "Use EMIWYZE before applying so you can negotiate and shortlist offers. Once you receive an official offer, compare the lender's EMI, total payment, fees, foreclosure terms, and prepayment rules against your calculator estimate.",
        ],
      },
    ],
    faqs: [
      {
        question: "Which formula does EMIWYZE use?",
        answer:
          "It uses the standard reducing-balance EMI formula based on principal, monthly interest rate, and tenure in months.",
      },
      {
        question: "Why is my bank EMI slightly different?",
        answer:
          "Banks may include fees, insurance, interest from disbursal date, and rounding rules that a simple planning calculator does not include.",
      },
      {
        question: "Should I choose the lowest EMI?",
        answer:
          "Not always. A lower EMI from a longer tenure can increase total interest, so compare EMI and total interest together.",
      },
    ],
  },
  "best-home-loan-tips-india": {
    sections: [
      {
        heading: "Start with a home-buying budget, not loan eligibility",
        body: [
          "Home loan eligibility is the maximum amount a lender may be willing to offer. Your real budget is the amount you can repay without disturbing emergency savings, insurance premiums, family expenses, maintenance, and long-term goals. In India, home ownership also brings stamp duty, registration charges, society deposits, interiors, repairs, shifting cost, and property tax. These are easy to miss when you only compare EMI.",
          "Before applying, calculate EMI for the expected loan amount and then add non-EMI costs to your monthly budget. A Rs. 50 lakh home loan at 8.75% for 20 years may look manageable on EMI alone, but the full monthly housing cost can be higher once maintenance, parking, utilities, and insurance are included.",
        ],
      },
      {
        heading: "Check rate type and reset rules",
        body: [
          "Many Indian home loans are floating-rate loans. The interest rate can change when the benchmark changes, and the lender may adjust EMI, tenure, or both. Ask how often the rate resets and whether you can reduce tenure when rates fall or income rises. A lower advertised rate is less useful if the reset terms are unclear or expensive to modify.",
          "Also check the spread over the benchmark. Two banks can quote similar starting rates but behave differently after reset. Keep copies of sanction letters and rate-change notices so you can compare your loan against new borrower rates later.",
        ],
      },
      {
        heading: "Prepayment strategy for home loans",
        body: [
          "Home loans are long, so even small prepayments can reduce interest meaningfully when done early. If you receive annual bonuses, incentives, or business surplus, test a prepayment scenario before spending the amount elsewhere. The benefit is strongest when the outstanding principal is high and tenure remaining is long.",
          "When making prepayments, ask the lender whether the payment reduces EMI or tenure. Reducing tenure usually saves more interest if you can afford the current EMI. Reducing EMI improves monthly cash flow. The better choice depends on whether your priority is savings or flexibility.",
        ],
      },
      {
        heading: "Documents and due diligence",
        body: [
          "A home loan decision is not only about EMI. Review property title, approved plan, occupancy certificate, builder reputation, bank valuation, legal report, and insurance requirements. If the property has legal or construction risk, a comfortable EMI will not protect you from bigger problems.",
          "Use calculators to prepare, but use professional checks before purchase. A good home loan is a combination of affordable EMI, clean property documents, transparent lender terms, and enough cash buffer after registration.",
        ],
      },
    ],
    faqs: [
      {
        question: "How much home loan EMI is safe?",
        answer:
          "There is no one rule, but the EMI should leave room for essential expenses, emergency savings, insurance, and maintenance.",
      },
      {
        question: "Is a longer home loan tenure bad?",
        answer:
          "It lowers EMI but raises total interest. It can be useful early in life, but review prepayment or tenure reduction when income improves.",
      },
      {
        question: "Should I transfer my home loan?",
        answer:
          "Consider transfer only after comparing interest savings with processing, legal, valuation, and documentation costs.",
      },
    ],
  },
  "flat-vs-reducing-interest-rate": {
    sections: [
      {
        heading: "Why flat rates can be misleading",
        body: [
          "A flat interest rate calculates interest on the original loan amount throughout the tenure. This sounds simple, but it ignores the fact that you repay principal every month. Because interest keeps being calculated on the full original amount, a flat rate can look low while the effective cost is high.",
          "Reducing balance loans calculate interest on the outstanding principal. As you repay the loan, interest is charged on a smaller balance. This is why a reducing rate that appears higher can still be cheaper than a lower flat rate.",
        ],
      },
      {
        heading: "Example comparison",
        body: [
          "Suppose two lenders offer Rs. 10 lakh for 5 years. One quotes a flat rate and the other quotes a reducing balance rate. The flat rate may show a smaller percentage in the advertisement, but the total repayment can be higher because the interest method is different. Percentage numbers are only comparable when the calculation method is the same.",
          "When comparing offers, ask for EMI, total interest, total repayment, annualised percentage rate if available, processing fees, and foreclosure terms. The cleanest comparison is total cost over the same tenure.",
        ],
      },
      {
        heading: "Where flat rates appear",
        body: [
          "Flat rates are often seen in short-term consumer durable finance, some vehicle schemes, small business loans, and promotional offers. They are not automatically wrong, but they must be translated into a real cost before comparison. The danger is assuming a flat 10% rate equals a 10% reducing balance rate.",
          "If a salesperson highlights only the rate and not the total repayment, slow down. Ask for the repayment schedule and compare it with a reducing balance EMI calculator. A few minutes of calculation can prevent a costly misunderstanding.",
        ],
      },
      {
        heading: "Borrower checklist",
        body: [
          "Before accepting a loan, identify whether the rate is flat or reducing, whether fees are deducted upfront, whether GST applies to charges, whether insurance is optional, and whether prepayment is allowed. These points affect the real cost more than the headline rate alone.",
          "For important borrowing decisions, keep screenshots or PDFs of all offers. Comparing written figures protects you from relying on verbal promises that may not appear in the final agreement.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is flat interest illegal?",
        answer:
          "No, but it must be understood correctly. The issue is comparison, because flat and reducing rates are not equivalent.",
      },
      {
        question: "Which method is better for borrowers?",
        answer:
          "Reducing balance is usually more transparent for longer loans because interest follows the outstanding principal.",
      },
      {
        question: "How do I compare both methods?",
        answer:
          "Compare EMI, total repayment, fees, and effective annual cost over the same loan amount and tenure.",
      },
    ],
  },
  "personal-loan-emi-planning": {
    sections: [
      {
        heading: "Personal loans need stricter EMI planning",
        body: [
          "Personal loans are unsecured, so interest rates are usually higher than home loans or some vehicle loans. The convenience is real: quick approval, limited documents, and flexible use. But the same convenience can become expensive if the EMI is chosen without checking total interest and monthly cash flow.",
          "A Rs. 5 lakh personal loan at 13% for 4 years can look manageable, but processing fees, GST on fees, insurance offers, and prepayment charges can change the true cost. Always compare the final disbursal amount with the total amount payable.",
        ],
      },
      {
        heading: "Choose tenure based on purpose",
        body: [
          "If the loan is for a short-term need such as medical expenses, repairs, or temporary cash flow, a shorter tenure may be sensible if the EMI is affordable. If the loan is for consumption spending, be careful about stretching the tenure because you may still be paying for an item long after its value has reduced.",
          "Do not choose the maximum tenure only because the EMI is low. Calculate the interest difference between 2, 3, 4, and 5 years. The monthly difference may be smaller than expected, while the interest saving can be meaningful.",
        ],
      },
      {
        heading: "Avoid debt stacking",
        body: [
          "Debt stacking happens when you add a new EMI while existing credit card bills, consumer loans, or app loans are already active. Even if each EMI seems small, the combined monthly obligation can become stressful. Missed payments then affect credit score and make future borrowing more expensive.",
          "Before taking a personal loan, list every monthly obligation: rent, insurance, school fees, subscriptions, credit card minimums, existing loans, and family commitments. The new EMI should fit after this full list, not before it.",
        ],
      },
      {
        heading: "Prepayment and closure",
        body: [
          "Many personal loans allow prepayment only after a minimum number of EMIs, and some charge a foreclosure fee. If you expect a bonus or variable income, check these terms before borrowing. A slightly higher rate with flexible prepayment can sometimes be better than a lower rate with rigid rules.",
          "When closing early, request a no-dues certificate and check your credit report after a few weeks to confirm the loan status is updated. Clean closure records help when applying for future home or vehicle loans.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is a safe personal loan tenure?",
        answer:
          "Prefer the shortest tenure you can comfortably afford, because personal loan rates are usually higher than secured loans.",
      },
      {
        question: "Should I use a personal loan for investment?",
        answer:
          "Usually no. Borrowing at a fixed high cost to invest in uncertain returns can be risky.",
      },
      {
        question: "Does prepayment improve credit score?",
        answer:
          "Prepayment can reduce debt burden, but consistent on-time repayment is the main factor for credit behaviour.",
      },
    ],
  },
  "car-loan-emi-guide": {
    sections: [
      {
        heading: "Use on-road price for realistic planning",
        body: [
          "Car loan EMI should be planned from the real amount you need to borrow, not only the ex-showroom price. Registration, insurance, accessories, extended warranty, road tax, handling charges, and dealer add-ons can increase the final cost. If you calculate EMI on the wrong base, the monthly payment can surprise you later.",
          "For example, if the on-road price is Rs. 10 lakh and you make a Rs. 2 lakh down payment, the loan amount is Rs. 8 lakh. At 9.5% for 5 years, the EMI can be compared with fuel, service, parking, tolls, tyres, and annual insurance renewal.",
        ],
      },
      {
        heading: "Balance down payment and liquidity",
        body: [
          "A higher down payment reduces EMI and total interest, but using every rupee of savings for down payment can create risk. After buying the car, you still need money for insurance renewal, maintenance, emergency repairs, and daily running cost. Liquidity matters more than a perfect EMI number.",
          "A practical approach is to keep an emergency fund first, then choose a down payment that reduces borrowing without making you cash-poor. If you receive variable income, avoid committing to an EMI based only on your best month.",
        ],
      },
      {
        heading: "Tenure and depreciation",
        body: [
          "Cars depreciate quickly, which makes very long tenures risky. If the loan tenure is too long, you may owe a large amount even when the car's resale value has fallen. This matters if you plan to upgrade or sell early.",
          "Compare 3-year, 5-year, and 7-year EMI options. A 7-year loan may look comfortable monthly, but the total interest and depreciation overlap can make ownership expensive. Choose a tenure that fits both your budget and expected holding period.",
        ],
      },
      {
        heading: "Dealer finance versus bank finance",
        body: [
          "Dealer finance can be convenient, but compare it with bank and credit union offers. Check processing fee, documentation charges, hypothecation, foreclosure terms, insurance bundling, and whether the quoted rate is fixed or floating. Convenience should not hide cost.",
          "Before finalising, ask for the total amount payable over the full loan. A small difference in EMI may become a larger difference across 60 or 84 months.",
        ],
      },
    ],
    faqs: [
      {
        question: "Should I take a 7-year car loan?",
        answer:
          "Only if cash flow requires it. Longer car loans reduce EMI but increase interest while the car depreciates.",
      },
      {
        question: "Is zero down payment good?",
        answer:
          "It improves upfront affordability but increases loan amount, EMI, and total interest.",
      },
      {
        question: "Can I prepay a car loan?",
        answer:
          "Many lenders allow it, but check minimum EMI period and foreclosure charges.",
      },
    ],
  },
  "sip-calculator-guide": {
    sections: [
      {
        heading: "SIP planning starts with a goal",
        body: [
          "A SIP calculator becomes useful when you connect it to a real goal: child education, house down payment, retirement, vehicle purchase, travel, or long-term wealth creation. Without a goal, the maturity value is just a large number. With a goal, you can judge whether the monthly SIP is enough.",
          "For example, Rs. 10,000 per month for 15 years means Rs. 18 lakh invested. If you assume 12% annual returns, the estimated maturity can be much higher, but the final outcome depends on market performance. This is why goal planning should use conservative and optimistic scenarios.",
        ],
      },
      {
        heading: "Step-up SIP can improve results",
        body: [
          "Many investors start with a small SIP and increase it every year as income grows. This is called a step-up SIP. Even a 5% or 10% yearly increase can create a large difference over long periods because each increased contribution also gets time to compound.",
          "A step-up plan can be more realistic than starting with a very high SIP immediately. It respects current cash flow while giving future income growth a clear purpose.",
        ],
      },
      {
        heading: "Return assumptions should be conservative",
        body: [
          "Mutual fund returns are not fixed. Equity funds can deliver strong long-term returns but can also fall sharply in the short term. Debt funds, hybrid funds, and index funds behave differently. The expected return in a calculator is not a promise from any fund or platform.",
          "For important goals, test lower return assumptions. If your plan works at a conservative return, any higher return becomes a bonus rather than a necessity.",
        ],
      },
      {
        heading: "Review and rebalance",
        body: [
          "SIP planning is not a one-time task. Review yearly to check whether the goal amount has changed due to inflation, whether your income supports a higher SIP, and whether asset allocation still fits your risk level. A plan that was perfect three years ago may need adjustment today.",
          "As the goal gets closer, consider reducing risk gradually. Money needed in the next one to three years should usually not depend heavily on volatile market returns.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is a good SIP amount?",
        answer:
          "A good SIP amount is the amount required for your goal without harming emergency savings and essential expenses.",
      },
      {
        question: "Is 12% return guaranteed?",
        answer:
          "No. It is only a common long-term assumption for planning. Actual mutual fund returns can be higher or lower.",
      },
      {
        question: "Should I use step-up SIP?",
        answer:
          "Step-up SIP is useful if your income grows regularly and you want investments to rise with it.",
      },
    ],
  },
  "gst-calculation-basics": {
    sections: [
      {
        heading: "GST inclusive versus exclusive pricing",
        body: [
          "GST exclusive pricing means tax is added over the base value. GST inclusive pricing means the final price already contains tax. This difference matters in quotations, retail bills, service invoices, and vendor comparisons. Two quotes can look different simply because one includes GST and the other adds it later.",
          "If the base price is Rs. 10,000 and GST is 18%, the invoice total is Rs. 11,800. If the quoted amount is Rs. 11,800 inclusive of GST, the base value is Rs. 10,000 and GST is Rs. 1,800. The same numbers appear, but the interpretation is different.",
        ],
      },
      {
        heading: "Why businesses should separate taxable value",
        body: [
          "For business records, taxable value and GST amount should be clearly separated. This helps with bookkeeping, input tax credit review, pricing decisions, and invoice reconciliation. A simple GST calculator can prevent confusion when converting inclusive prices into base values.",
          "Small businesses should also check whether CGST and SGST apply or whether IGST applies for interstate supply. The calculator gives arithmetic support, but classification and compliance should be confirmed with a tax professional.",
        ],
      },
      {
        heading: "Common invoice checks",
        body: [
          "A clean invoice should show supplier details, GSTIN, invoice number, date, place of supply, description, HSN or SAC where applicable, taxable value, rate, tax amount, and total value. Missing details can create problems during accounting or credit claims.",
          "When comparing vendors, ask whether the price is inclusive or exclusive of GST. A quote of Rs. 50,000 plus GST is not the same as Rs. 50,000 inclusive of GST.",
        ],
      },
      {
        heading: "Use GST calculation for pricing decisions",
        body: [
          "GST affects customer-facing price. If your market is price-sensitive, decide whether the listed price should include GST or show GST separately. Inclusive pricing is easier for retail customers, while business buyers may prefer tax breakup.",
          "Keep margin calculations separate from GST. GST collected from customers is not profit; it is tax collected and payable according to applicable rules after considering eligible credits.",
        ],
      },
    ],
    faqs: [
      {
        question: "How do I remove GST from an inclusive price?",
        answer:
          "Divide the inclusive price by 1 plus the GST rate. For 18%, divide by 1.18 to get the base value.",
      },
      {
        question: "Is GST part of profit?",
        answer:
          "No. GST collected is tax, not business profit. Margin should be calculated on taxable value.",
      },
      {
        question: "Can a calculator decide GST rate?",
        answer:
          "No. GST classification depends on goods or services. Confirm the applicable rate separately.",
      },
    ],
  },
  "loan-prepayment-vs-investment": {
    sections: [
      {
        heading: "Compare certainty with uncertainty",
        body: [
          "Loan prepayment gives a relatively certain benefit: interest avoided. Investing surplus money gives an uncertain benefit: potential return. The decision depends on loan rate, investment risk, tax treatment, liquidity, and peace of mind. A high-interest loan is usually a stronger candidate for prepayment than a low-rate long-term loan.",
          "For example, prepaying a 15% personal loan is very different from prepaying an 8.5% home loan. The personal loan saving is high and certain. The home loan decision may require comparing tax benefits, investment horizon, and your comfort with market risk.",
        ],
      },
      {
        heading: "Liquidity comes before optimisation",
        body: [
          "Do not use your entire emergency fund for prepayment. A smaller loan balance is good, but no cash buffer can force you into new borrowing during medical expenses, job loss, repairs, or family emergencies. Liquidity protects both your credit score and your mental peace.",
          "A balanced strategy is often better: keep emergency funds, repay high-interest debt aggressively, and invest surplus meant for long-term goals. The exact split can change with life stage.",
        ],
      },
      {
        heading: "When investment may make sense",
        body: [
          "Investing surplus can make sense when the loan rate is moderate, the investment horizon is long, and you can tolerate volatility. For example, a young borrower with a stable job and a long-term home loan may choose to invest part of the surplus while making occasional prepayments.",
          "This is not guaranteed to outperform prepayment. It is a risk-return decision. Use conservative return assumptions and remember that market returns do not arrive in a straight line.",
        ],
      },
      {
        heading: "Decision framework",
        body: [
          "Rank debts by interest rate and risk. Credit card debt and expensive personal loans usually come first. Home loans and education loans may need a more balanced decision. Then compare after-tax investment return expectations with the loan interest saved.",
          "Finally, include behaviour. Some people sleep better with lower debt. Others are comfortable investing while repaying. The mathematically optimal answer is not useful if it creates stress or causes inconsistent behaviour.",
        ],
      },
    ],
    faqs: [
      {
        question: "Should I prepay high-interest loans first?",
        answer:
          "Usually yes. Credit card dues and expensive personal loans often deserve priority over investments.",
      },
      {
        question: "Can investment beat loan prepayment?",
        answer:
          "It can, but investment returns are uncertain while interest saved from prepayment is more predictable.",
      },
      {
        question: "Should I prepay without emergency savings?",
        answer:
          "Generally no. Keep a basic emergency fund before making aggressive prepayments.",
      },
    ],
  },
  "credit-score-and-loan-emi": {
    sections: [
      {
        heading: "Credit score affects interest rate",
        body: [
          "A stronger credit profile can help you qualify for better loan rates. Even a 0.5% or 1% rate difference can change total interest meaningfully on a large home loan. This is why credit behaviour before applying matters as much as income documents.",
          "For a Rs. 10 lakh loan, the EMI difference between 9% and 10% may look modest monthly, but across several years the total interest gap becomes noticeable. On a Rs. 50 lakh home loan, the gap can become lakhs.",
        ],
      },
      {
        heading: "What lenders usually check",
        body: [
          "Lenders may review repayment history, credit utilisation, active loans, recent enquiries, income stability, employer profile, banking behaviour, and existing EMI burden. Credit score is important, but it is not the only approval factor.",
          "A borrower with a good score but very high existing EMIs may still receive a lower approved amount or higher rate. The lender wants to know whether the new EMI is sustainable.",
        ],
      },
      {
        heading: "Improve profile before applying",
        body: [
          "Pay existing EMIs and credit card dues on time. Keep credit card utilisation reasonable. Avoid multiple unnecessary loan enquiries right before a major application. Check your credit report for errors and raise corrections early if needed.",
          "If you plan to apply for a home loan in six months, start preparing now. A few months of clean repayment behaviour can support a better application.",
        ],
      },
      {
        heading: "Use EMI comparison for negotiation",
        body: [
          "When your credit profile is strong, compare offers from multiple lenders and use the EMI calculator to translate rate differences into actual savings. Negotiation becomes easier when you can say how much a 0.25% or 0.5% difference affects your total interest.",
          "Do not accept only the first offer. Ask about processing fee waivers, rate conversion charges, insurance bundling, and prepayment flexibility.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does a better credit score guarantee low EMI?",
        answer:
          "No, but it can improve your chance of getting a lower interest rate, which can reduce EMI or total interest.",
      },
      {
        question: "Do multiple enquiries matter?",
        answer:
          "Too many hard enquiries in a short period can affect your profile, so compare thoughtfully.",
      },
      {
        question: "Should I check my credit report before applying?",
        answer:
          "Yes. It helps catch errors and understand lender concerns before you submit applications.",
      },
    ],
  },
  "emergency-fund-before-loan": {
    sections: [
      {
        heading: "Why emergency funds protect EMI payments",
        body: [
          "An EMI is a fixed promise. Your income and expenses may not be fixed. Medical bills, job delays, family responsibilities, repairs, or temporary business slowdown can make a normal EMI stressful. An emergency fund gives you time to handle the problem without missing payments.",
          "Missed EMIs can lead to penalties, collection calls, credit score impact, and stress during future borrowing. A cash buffer is not idle money; it is protection for your repayment record.",
        ],
      },
      {
        heading: "How much is enough",
        body: [
          "A useful starting point is three to six months of essential expenses, including EMI, rent, utilities, groceries, insurance, school fees, and transport. If your income is variable or you have dependents, a larger buffer may be better.",
          "Do not calculate emergency fund only on lifestyle spending. Include obligations that cannot easily be paused. If the EMI is new, update your emergency fund target after the loan starts.",
        ],
      },
      {
        heading: "Where to keep emergency money",
        body: [
          "Emergency funds should be accessible, low risk, and separate from everyday spending. The goal is not maximum return; the goal is availability when something goes wrong. Many people split the buffer between savings account and liquid low-risk instruments.",
          "Avoid locking the full emergency fund into long-tenure products or volatile investments. Money needed during an emergency should not depend on market timing.",
        ],
      },
      {
        heading: "Borrowing after building a buffer",
        body: [
          "Once a basic buffer exists, EMI planning becomes calmer. You can compare offers, choose tenure sensibly, and avoid panic decisions. A borrower with liquidity is also less likely to roll over debt or use credit cards for routine expenses.",
          "Before taking any loan, run the EMI calculator and then ask: if income stops for two months, can I still pay this? If the answer is no, build more buffer or reduce the loan amount.",
        ],
      },
    ],
    faqs: [
      {
        question: "Should I invest my emergency fund?",
        answer:
          "Keep it in accessible, low-risk options. Emergency money should prioritise safety and liquidity.",
      },
      {
        question: "Can I take a loan without an emergency fund?",
        answer:
          "It is possible, but riskier. A buffer protects your EMI record during unexpected events.",
      },
      {
        question: "Should EMI be included in emergency expenses?",
        answer:
          "Yes. Your emergency fund should cover essential EMIs for the target number of months.",
      },
    ],
  },
  "emi-affordability-rule": {
    sections: [
      {
        heading: "Affordability starts with take-home income",
        body: [
          "Use net monthly income, not gross salary, to judge EMI affordability. Gross salary includes tax, deductions, variable pay, and benefits that may not reach your bank account every month. EMI must be paid from actual cash flow.",
          "List rent, groceries, insurance, school fees, utilities, transport, subscriptions, family support, and existing EMIs before deciding the new EMI. What remains after these expenses is your real decision space.",
        ],
      },
      {
        heading: "Debt-to-income is a signal, not a rule",
        body: [
          "Many lenders use debt-to-income ratios, but a comfortable ratio differs by city, dependents, job stability, and lifestyle. A 35% EMI burden may be manageable for one household and stressful for another. Use ratios as a warning light, not as permission to borrow the maximum.",
          "If the new EMI forces you to stop all savings, delay insurance, or rely on credit cards, the loan is probably too aggressive. A good loan should fit inside life, not push everything else out.",
        ],
      },
      {
        heading: "Stress test before borrowing",
        body: [
          "Test the loan against real-life problems: one month without income, a 1% interest rate increase, a medical expense, or school fee payment. If a small shock breaks the plan, reduce the loan amount, increase down payment, or choose a safer tenure.",
          "Stress testing is especially important for floating-rate loans and variable income households. The EMI that is comfortable today should remain manageable when conditions change.",
        ],
      },
      {
        heading: "Use prepayment as a flexibility tool",
        body: [
          "If you choose a longer tenure for safety, you can still make prepayments when surplus is available. This keeps the required EMI manageable while giving you a path to reduce total interest. The key is discipline: surplus should not disappear into lifestyle spending every year.",
          "Review affordability annually. Income growth, inflation, family changes, and rate changes all affect the right EMI level.",
        ],
      },
    ],
    faqs: [
      {
        question: "What EMI percentage is safe?",
        answer:
          "There is no universal number. The EMI should leave room for essentials, emergency savings, insurance, and goals.",
      },
      {
        question: "Should I use bonus income for EMI planning?",
        answer:
          "Use fixed income for EMI. Bonus income is better treated as extra prepayment or savings.",
      },
      {
        question: "How often should I review EMI affordability?",
        answer:
          "Review at least yearly and whenever income, interest rates, or family responsibilities change.",
      },
    ],
  },
  "reducing-home-loan-interest": {
    sections: [
      {
        heading: "Interest reduction starts early",
        body: [
          "Home loan interest is highest when the outstanding principal is high. This is why early prepayments can save more than late prepayments. Even one extra EMI per year can reduce total interest if applied consistently and if the lender adjusts tenure.",
          "Use a prepayment calculator to test annual bonus payments, salary increments, or lump-sum surplus. Seeing the estimated interest saved can make the decision more concrete.",
        ],
      },
      {
        heading: "Negotiate rate with your lender",
        body: [
          "Existing borrowers sometimes pay higher rates than new borrowers. If your credit profile has improved or market rates have changed, ask the lender for a rate reduction. There may be a conversion fee, so compare the cost with future savings.",
          "Keep your repayment record clean. A strong repayment history and good credit score improve your negotiation position.",
        ],
      },
      {
        heading: "Balance transfer carefully",
        body: [
          "A balance transfer can reduce interest if another lender offers a meaningfully lower rate. But transfer costs matter: processing fee, legal checks, valuation charges, documentation effort, insurance changes, and time. A transfer is useful only when savings exceed these costs.",
          "Calculate the difference over the remaining tenure, not the original tenure. If only a few years are left, transfer benefits may be limited.",
        ],
      },
      {
        heading: "Increase EMI when income rises",
        body: [
          "When salary rises, consider increasing EMI instead of only increasing lifestyle spending. A modest EMI increase can reduce tenure and interest without requiring large lump-sum payments. This is often easier than waiting for one big prepayment.",
          "The best strategy is usually a mix: negotiate rate, make occasional prepayments, avoid missed EMIs, and review the loan once a year.",
        ],
      },
    ],
    faqs: [
      {
        question: "What saves more: lower EMI or lower tenure?",
        answer:
          "Lower tenure usually saves more interest if you can afford the EMI.",
      },
      {
        question: "Is balance transfer always worth it?",
        answer:
          "No. Compare total savings with transfer fees and remaining tenure.",
      },
      {
        question: "Can one extra EMI per year help?",
        answer:
          "Yes, especially early in a long home loan, if the lender applies it to principal reduction.",
      },
    ],
  },
}

export function getRichArticle(slug: string) {
  return richArticles[slug]
}
