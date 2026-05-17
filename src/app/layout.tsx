import type { Metadata } from "next"
import type { PropsWithChildren } from "react"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://emiwyze.in"),
  title: {
    default: "EMIWYZE - EMI, SIP and Finance Calculators",
    template: "%s | EMIWYZE",
  },
  description:
    "Free EMI calculator, SIP calculator, loan comparison tools, and practical finance guides for Indian borrowers and investors.",
  keywords: [
    "EMI calculator",
    "SIP calculator",
    "loan calculator",
    "home loan EMI",
    "finance calculators India",
  ],
  icons: {
    icon: [
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/emiwyze-icon.png",
        sizes: "256x256",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<PropsWithChildren>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen overflow-hidden bg-[#eef3f8] text-slate-950">
          <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(135deg,#f8fafc,#e6f4f1_45%,#eef2ff)]" />
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  )
}
