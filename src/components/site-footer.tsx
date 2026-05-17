import Link from "next/link"

const footerGroups = [
  {
    title: "Calculators",
    links: [
      { href: "/", label: "EMI Calculator" },
      { href: "/home-loan-emi-calculator", label: "Home Loan EMI" },
      { href: "/car-loan-emi-calculator", label: "Car Loan EMI" },
      { href: "/personal-loan-emi-calculator", label: "Personal Loan EMI" },
      { href: "/loan-prepayment-calculator", label: "Loan Prepayment" },
      { href: "/sip-calculator", label: "SIP Calculator" },
      { href: "/lumpsum-calculator", label: "Lumpsum Calculator" },
      { href: "/fd-calculator", label: "FD Calculator" },
      { href: "/rd-calculator", label: "RD Calculator" },
      { href: "/gst-calculator", label: "GST Calculator" },
      { href: "/articles/how-emi-is-calculated", label: "How EMI is calculated" },
    ],
  },
  {
    title: "Popular Searches",
    links: [
      { href: "/home-loan-emi-calculator-india", label: "Home Loan EMI India" },
      { href: "/car-loan-emi-calculator-india", label: "Car Loan EMI India" },
      {
        href: "/personal-loan-emi-calculator-monthly-payment",
        label: "Personal Loan Monthly Payment",
      },
      { href: "/sip-calculator-with-step-up", label: "SIP With Step Up" },
      { href: "/fd-calculator-monthly-interest", label: "FD Monthly Interest" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/contact", label: "Contact Us" },
      { href: "/faqs", label: "FAQs" },
      { href: "/articles", label: "Finance Articles" },
      { href: "/search-console-guide", label: "Search Console Guide" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy-policy", label: "Privacy Policy" },
      { href: "/terms-and-conditions", label: "Terms & Conditions" },
      { href: "/disclaimer", label: "Disclaimer" },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="mt-12 border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.3fr_2fr] lg:px-8">
        <div>
          <p className="text-lg font-black text-slate-950">EMIWYZE</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">
            EMIWYZE provides simple calculators and original educational content
            for loan, EMI, SIP, GST, and personal finance planning in India.
          </p>
          <p className="mt-4 text-sm font-bold text-slate-500">
            Contact: support@emiwyze.in
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {footerGroups.map((group) => (
            <div key={group.title}>
              <p className="text-sm font-black uppercase tracking-wide text-slate-500">
                {group.title}
              </p>
              <div className="mt-3 space-y-2">
                {group.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-sm font-bold text-slate-700 hover:text-teal-700"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}
