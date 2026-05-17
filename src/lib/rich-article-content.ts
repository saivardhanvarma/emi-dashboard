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
          "EMI turns a one-time loan obligation into a monthly number you can slot into a household budget. That simple transformation makes it possible to compare loans, negotiate offers, and test affordability against rent, insurance, school fees, and savings goals. Many borrowers focus on the approved loan amount or headline interest rate and miss that a comfortable monthly EMI is the real constraint that determines whether a loan is sustainable.",
          "Understanding the formula also explains the direction and scale of change when you alter inputs. A higher interest rate raises the interest component of each EMI and can dramatically increase total interest over long tenures. Extending tenure reduces the monthly EMI but increases cumulative interest, sometimes substantially. The EMI formula lets you quantify these trade-offs instead of guessing.",
        ],
      },
      {
        heading: "Principal and interest split explained",
        body: [
          "Each EMI contains principal repayment and interest on the outstanding balance. Early in the loan the outstanding principal is high, so most of the EMI goes to interest. Over time the interest portion shrinks and the principal portion grows, which is why amortisation schedules matter: they show how quickly the outstanding balance falls and how much interest you actually pay month by month.",
          "Seeing the split helps plan prepayments. A lump-sum payment made early in the tenure reduces the principal when interest charges are still large, producing large interest savings over time. Late prepayments save less interest because most earlier interest has already been charged. Use an amortisation table to visualise the impact of timing on savings.",
        ],
      },
      {
        heading: "Practical step-by-step comparison",
        body: [
          "Do not compare offers using rate alone. For each offer, compute: the EMI, total amount payable across the tenure, total interest, processing and legal fees, and prepayment or foreclosure charges. Then stress-test the offer: what happens if the rate rises by 0.5% or if you lose one month's income? The best-looking rate can be the worst choice if it forces risky behaviour later.",
          "Try three scenarios: conservative (higher rate, shorter tenure), realistic (expected rate, desired tenure), and safety-first (lower EMI, longer tenure but with planned prepayments). The comparison reveals which option balances monthly comfort with total cost best for your situation.",
        ],
      },
      {
        heading: "Common real-world differences from calculators",
        body: [
          "Public calculators are planning tools and may not include lender-specific items: processing fees, insurance add-ons, rate reset rules, interest from disbursal to EMI start, and rounding or compounding conventions. Lenders may also treat part-payments differently (for example, they may reduce EMI or tenure), so check the contract text and get the lender to run the exact amortisation schedule for your case.",
          "Use a calculator to shortlist and negotiate, then request the official schedule from the lender before signing. If the lender's schedule differs, ask for a written explanation of the discrepancy so you can compare total cost apples-to-apples.",
        ],
      },
      {
        heading: "How to use EMI results in broader planning",
        body: [
          "Treat the EMI number as one input inside a broader household plan. Before committing, list fixed monthly obligations, emergency buffer needs, insurance costs, and saving targets. Ask whether the EMI will allow you to save for retirement and other goals; if not, reduce the loan amount or increase the down payment.",
          "If you expect income growth, plan to increase EMI or reduce tenure as income rises. That combination preserves short-term affordability while using future income to save interest costs. Document the assumptions you used when modelling EMI so you can revisit them later.",
        ],
      },
    ],
    faqs: [
      {
        question: "Which formula does EMIWYZE use?",
        answer:
          "It uses the standard reducing-balance EMI formula based on principal, monthly interest rate, and tenure in months. This is the common method used by most lenders for loans that follow a reducing balance approach.",
      },
      {
        question: "Why is my bank EMI slightly different?",
        answer:
          "Banks may add processing fees, insurance premiums, interest from disbursal to the first EMI, and specific rounding rules that a simple public calculator might not reflect. Always request the lender's amortisation schedule for an exact picture.",
      },
      {
        question: "Should I choose the lowest EMI?",
        answer:
          "Not always. A lower EMI from a longer tenure reduces monthly pressure but increases total interest. Balance monthly affordability with total cost and consider whether you can make occasional prepayments to shorten the tenure later.",
      },
      {
        question: "When should I prioritise prepayment?",
        answer:
          "Prioritise prepayment when the loan interest rate is high relative to safe investment returns, you have excess cash beyond an emergency fund, and your lender allows prepayment without punitive fees. Early prepayments yield the largest interest savings.",
      },
    ],
  },
  "best-home-loan-tips-india": {
    sections: [
      {
        heading: "Start with a home-buying budget, not loan eligibility",
        body: [
          "Loan eligibility tells you what a bank may lend, not what you should borrow. A sensible starting point is to decide the monthly housing cost you can carry without cutting essential savings: EMI, maintenance, insurance, utilities, and any society or municipal charges. Factor in stamp duty and registration because these upfront costs reduce your available savings after purchase.",
          "Create a three-column affordability sheet: net income, fixed outflows (rent, EMIs, insurance), and flexible outflows (food, transport, subscriptions). The residual column shows what you can realistically allocate to housing. This approach prevents overstretching your monthly cash flow even if a lender offers more credit.",
        ],
      },
      {
        heading: "Understand rate types, spreads and reset behaviour",
        body: [
          "Many Indian home loans are floating-rate and tied to a benchmark. The quoted rate often shows the benchmark plus a spread. Ask which benchmark the bank uses, how often the rate is reviewed, and whether the lender changes EMI or tenure when the rate moves. These operational details determine how future rate changes affect your monthly burden.",
          "When comparing offers, translate rate differences into EMI and total interest for the remaining tenure. Even a 0.25% rate difference can matter on large loans. Also check whether the bank allows conversion, part-prepayments, and penalty-free foreclosures and how those actions are applied in the amortisation schedule.",
        ],
      },
      {
        heading: "Prepayment and tenure management",
        body: [
          "Prepayment is a powerful tool on long home loans. If you receive bonuses or lump sums, calculate whether applying them to reduce tenure or EMI gives better benefits. Reducing tenure typically preserves your monthly discipline while saving more total interest compared with only reducing EMI.",
          "Ask the lender whether prepayments reduce tenure or EMI by default, and whether they charge a fee. In many cases, reducing tenure is the mathematically superior option for total savings, but if you need immediate monthly relief, reducing EMI may be preferable temporarily.",
        ],
      },
      {
        heading: "Property, paperwork and hidden costs",
        body: [
          "A loan is only as good as the asset it secures. Verify property title, completion certificate, builder approvals, and encumbrance certificates. Valuation reports, legal fees, and insurer conditions can add to upfront costs and affect disbursal timing. These practical items can delay moving in or increase initial outflow, so include them in your plan.",
          "Beware of builder offers that bundle favours such as insurance or maintenance with the loan. These may be convenient but could be more expensive than market alternatives. Negotiate such bundles or opt out when possible.",
        ],
      },
      {
        heading: "Negotiation and review",
        body: [
          "A clean credit score and documented income help when negotiating rates. Approach multiple lenders and use EMI comparisons to show how rate differences change total cost. Even small concessions on processing fee or spread can save significant amounts over a long loan.",
          "Review your loan annually. Market conditions, rate movement, and improved credit profiles create chances to refinance or request a rate reduction. Compare the long-term savings against transfer and legal costs before switching lenders.",
        ],
      },
    ],
    faqs: [
      {
        question: "How much home loan EMI is safe?",
        answer:
          "There is no universal answer. A safe EMI leaves room for emergency savings, insurance, maintenance, and other goals. Build a budget to test whether the EMI fits without sacrificing essentials.",
      },
      {
        question: "Is a longer home loan tenure advisable?",
        answer:
          "Longer tenure lowers EMI but increases total interest. It can help with short-term affordability, but plan to make extra payments later to avoid paying excess interest over time.",
      },
      {
        question: "When should I consider balance transfer?",
        answer:
          "Consider transfer when the interest savings net of transfer fees and valuation charges are positive over the remaining tenure. Run the numbers and include hassle, time, and documentation costs.",
      },
      {
        question: "What paperwork is most often missed?",
        answer:
          "Title and encumbrance checks, builder approvals, and correct GST/stamp duty calculations are commonly overlooked. Professional legal review is prudent for high-value purchases.",
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
        heading: "Why personal loan planning needs care",
        body: [
          "Personal loans are unsecured, often carrying higher interest rates than secured housing or vehicle loans. They are easy to obtain quickly, which can encourage borrowing for consumption. That convenience is useful in emergencies but can become costly if the tenor is stretched or if you ignore fees and tax on charges. A careful plan looks beyond EMI and examines total cost, disbursal amount after fees, and closure terms.",
          "When modelling, always compare the effective cost: the net amount you receive versus the total amount payable across the tenure. Processing fees, GST on fees, insurance add-ons, and prepayment penalties can materially change the effective interest rate you end up paying.",
        ],
      },
      {
        heading: "Match tenure to purpose",
        body: [
          "Choose tenure aligned with the purpose. Short, high-priority expenses (medical bills, urgent repairs) are best repaid quickly to avoid long interest accrual. For necessary durable purchases, avoid extending tenure just because EMI becomes small; you may continue paying long after the benefit fades, increasing real cost.",
          "Create a repayment plan that factors in expected income changes and possible windfalls (bonuses, tax refunds). Use windfalls for prepayments rather than lifestyle increases to reduce total interest.",
        ],
      },
      {
        heading: "Avoid stacking and check cash flow",
        body: [
          "List all monthly obligations before taking a new personal loan: rent, utilities, subscriptions, existing EMIs, insurance, and any variable family support. Add the proposed EMI and confirm it fits comfortably even if income falls by a reasonable cushion (for example, 20%). If not, lower the loan amount or extend the tenor only after careful calculation.",
          "Debt stacking often leads to payment stress and missed EMIs, which damage credit scores and increase borrowing costs. If you already have multiple liabilities, prefer paying down higher-rate debt first before adding new unsecured borrowing.",
        ],
      },
      {
        heading: "Prepayment, foreclosure and closure steps",
        body: [
          "Check whether the lender allows prepayment, when it becomes available, and whether a foreclosure fee applies. If you expect variable income, prefer a product that allows flexible prepayments without punitive charges. A slightly higher nominal rate with flexible prepayment can outperform a lower rate with rigid closure terms.",
          "When you close a loan, obtain a no-dues certificate, confirm the lien removal, and verify your credit report to ensure the account is reported closed. These steps prevent future surprises during large loan applications like home loans.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is a safe personal loan tenure?",
        answer:
          "Prefer the shortest tenure you can comfortably afford because personal loan rates are usually higher than secured loans. Shorter tenure reduces total interest paid.",
      },
      {
        question: "Should I use a personal loan to invest?",
        answer:
          "Generally no. Borrowing at higher fixed cost to chase uncertain returns increases net risk. Investment using borrowed money is suitable only for experienced investors with clear arbitrage opportunities.",
      },
      {
        question: "Does prepayment help my credit score?",
        answer:
          "Prepayment reduces outstanding debt, but consistent timely payments are the main driver of creditworthiness. Prepayment helps behaviourally and reduces future interest burden.",
      },
      {
        question: "How do fees change effective cost?",
        answer:
          "Processing fees and GST reduce the net disbursal and raise the effective interest rate. Always calculate the net amount received and compare it with total repayment to see the true cost.",
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
  "sip-vs-fd": {
    sections: [
      {
        heading: "Overview: SIP and FD in plain language",
        body: [
          "A fixed deposit (FD) locks your money with a bank for a fixed interest rate and term, offering predictability and capital protection. A systematic investment plan (SIP) invests a fixed amount regularly into mutual funds, exposing you to market ups and downs but also to the potential of higher long-term returns. The two choices serve different roles: FD for safety and liquidity (short-to-medium term), SIPs for long-term wealth creation with the capacity to ride market cycles.",
        ],
      },
      {
        heading: "Risk, return and horizon",
        body: [
          "Risk and expected return are the central differences. FDs offer nominal returns fixed at the start; real returns depend on inflation. SIPs, especially in equity funds, can offer inflation-beating returns over longer horizons but can fall sharply in the short term. Match the product to the horizon: use FDs for goals under three years and SIPs for goals beyond five years where volatility smooths out.",
        ],
      },
      {
        heading: "Tax and post-tax returns",
        body: [
          "Tax treatment changes the comparison. Interest from FDs is taxed as income at your slab rate, which can erode returns for high-rate taxpayers. Mutual fund gains depend on the fund type and holding period: equity funds held beyond one year qualify for long-term capital gains treatment (with favourable rates and exemptions), while debt funds have a different tax schedule. Always compare post-tax returns for your bracket.",
        ],
      },
      {
        heading: "Liquidity and emergency use",
        body: [
          "FDs usually allow premature withdrawals but may charge a penalty, while SIPs can be stopped or partially redeemed with market exposure. For an emergency fund, keep money in liquid FDs or savings accounts, not in equity SIPs that could be down when you need funds. Treat SIPs as long-term commitments and avoid redeeming during market dips unless necessary.",
        ],
      },
      {
        heading: "Behavioural advantages of SIPs",
        body: [
          "SIPs enforce disciplined investing, buy more units when prices fall, and less when prices rise (rupee cost averaging). This can help avoid timing the market and capture long-term upward trends. FDs remove market anxiety but also remove upside potential. Many investors combine both: emergency and near-term goals in FDs, long-term goals via SIPs.",
        ],
      },
    ],
    faqs: [
      {
        question: "Which is safer: SIP or FD?",
        answer:
          "FDs are safer in nominal terms because the principal is guaranteed (subject to bank credit risk), while SIPs are market-linked and can fall. SIP safety increases with longer horizons.",
      },
      {
        question: "Can SIP beat FD?",
        answer:
          "Historically, equity SIPs have tended to outperform FDs over long periods after adjusting for risk and inflation, but past performance is not a guarantee. Choose based on horizon and risk tolerance.",
      },
      {
        question: "Should I split between SIP and FD?",
        answer:
          "Yes. Keep an emergency buffer in liquid FDs or savings. Use SIPs for long-term goals where you can tolerate volatility and seek higher inflation-beating returns.",
      },
    ],
  },
  "gst-calculation-basics": {
    sections: [
      {
        heading: "GST inclusive versus exclusive pricing",
        body: [
          "Inclusive pricing hides the tax inside the final price and is common in retail. Exclusive pricing shows the base value and adds GST on top, which is common in business-to-business quotes. The arithmetic is simple but the interpretation matters: two offers that look identical in numbers can mean very different things for input tax credits and margin calculations.",
          "When a vendor quotes Rs. 11,800 inclusive of 18% GST, the taxable value is Rs. 10,000 and the GST is Rs. 1,800. For a finance person, seeing the taxable value separately is essential for accounting and claiming input tax credit where eligible.",
        ],
      },
      {
        heading: "Classification, place of supply and tax heads",
        body: [
          "GST is not a single flat tax. It has multiple rates and depends on the classification of the good or service (HSN/SAC), intra-state versus inter-state supply (CGST+SGST vs IGST), and the place of supply rules. Small businesses must ensure correct HSN/SAC codes on invoices and determine whether a supply attracts 0%, 5%, 12%, 18%, or 28% in practice.",
          "Errors in classification can cause rejected input claims or future demand notices. A calculator solves arithmetic, but classification and compliance need a human or professional review for higher-value transactions.",
        ],
      },
      {
        heading: "Invoice checklist and bookkeeping",
        body: [
          "A compliant invoice lists supplier details, GSTIN, invoice number, date, place of supply, taxable value, rate, tax amount, HSN/SAC, and total amount. For businesses claiming input tax credit, the invoice must be clean to avoid compliance issues.",
          "Use a GST calculator to convert between inclusive and exclusive values and to split multi-rate invoices. But always reconcile calculator output with accounting entries and monthly GSTR filings.",
        ],
      },
      {
        heading: "Pricing decisions and customer communication",
        body: [
          "Decide whether to display prices as GST-inclusive or exclusive based on your customer type. Retail customers appreciate simplicity with inclusive pricing; business buyers prefer separate tax lines so they can see taxable value and claim credits. Align your invoice and website pricing consistently to avoid disputes.",
          "Remember that GST is collected on behalf of the government. Do not treat it as margin. Maintain separate ledger lines and reconcile GST collections monthly to avoid deposit errors.",
        ],
      },
    ],
    faqs: [
      {
        question: "How do I remove GST from an inclusive price?",
        answer:
          "Divide the inclusive price by 1 plus the GST rate (for 18% divide by 1.18) to get the taxable value and subtract to find the GST component.",
      },
      {
        question: "Is GST part of profit?",
        answer:
          "No. GST collected is tax to be remitted. Profit calculations should be done on taxable value, not the GST-inclusive price.",
      },
      {
        question: "Can a calculator determine the correct GST rate?",
        answer:
          "No. A calculator handles arithmetic. Determining the applicable GST rate depends on product/service classification and legal rules — consult a tax professional for ambiguous cases.",
      },
      {
        question: "Should small sellers show inclusive or exclusive prices?",
        answer:
          "For retail customers, inclusive prices simplify the buying decision. For business customers, exclusive pricing with a clear tax line is usually preferred so buyers can process input tax claims.",
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
