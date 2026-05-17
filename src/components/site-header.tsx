import Image from "next/image"
import Link from "next/link"

const navLinks = [
  { href: "/", label: "EMI Calculator" },
  { href: "/home-loan-emi-calculator", label: "Home Loan" },
  { href: "/sip-calculator", label: "SIP Calculator" },
  { href: "/gst-calculator", label: "GST" },
  { href: "/articles", label: "Articles" },
  { href: "/faqs", label: "FAQs" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export function SiteHeader() {
  return (
    <header className="border-b border-white/70 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <Link href="/" className="flex w-fit items-center gap-3">
          <Image
            src="/emiwyze-icon.png"
            alt="EMIWYZE logo"
            width={48}
            height={48}
            priority
            className="size-11 rounded-xl object-contain shadow-sm"
          />
          <div>
            <p className="text-xl font-black tracking-normal text-slate-950">
              EMIWYZE
            </p>
            <p className="text-xs font-bold text-slate-500">
              Calculators and finance guides
            </p>
          </div>
        </Link>

        <nav className="flex flex-wrap gap-2" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-black text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
