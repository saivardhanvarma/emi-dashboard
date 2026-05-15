import type { Metadata } from "next"
import type { PropsWithChildren } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "EMIWise",
  description: "A responsive EMI calculator and loan comparison app.",
}

export default function RootLayout({
  children,
}: Readonly<PropsWithChildren>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
