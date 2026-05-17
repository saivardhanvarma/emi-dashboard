import Script from "next/script"
import type { Metadata } from "next"
import type { PropsWithChildren } from "react"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://emiwyze.online"
  ),

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
        {/* Google Analytics */}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-X9C7SZWMH6"
          strategy="afterInteractive"
        />

        {/* Google AdSense - load once for all pages */}
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1483257091993123"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag(){
              dataLayer.push(arguments);
            }

            gtag('js', new Date());

            gtag(
              'config',
              'G-X9C7SZWMH6',
              {
                page_path: window.location.pathname,
              }
            );
          `}
        </Script>

        <div className="min-h-screen overflow-hidden bg-[#eef3f8] text-slate-950">
          <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(135deg,#f8fafc,#e6f4f1_45%,#eef2ff)]" />

          <SiteHeader />

          <main>{children}</main>

          <SiteFooter />
        </div>
      </body>
    </html>
  )
}