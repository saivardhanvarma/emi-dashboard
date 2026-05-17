import type { MetadataRoute } from "next"
import { articles } from "@/lib/articles"

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://emiwyze.in"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/home-loan-emi-calculator",
    "/home-loan-emi-calculator-india",
    "/car-loan-emi-calculator",
    "/car-loan-emi-calculator-india",
    "/personal-loan-emi-calculator",
    "/personal-loan-emi-calculator-monthly-payment",
    "/loan-prepayment-calculator",
    "/sip-calculator",
    "/sip-calculator-with-step-up",
    "/lumpsum-calculator",
    "/fd-calculator",
    "/fd-calculator-monthly-interest",
    "/rd-calculator",
    "/gst-calculator",
    "/articles",
    "/faqs",
    "/search-console-guide",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms-and-conditions",
    "/disclaimer",
  ]

  const articleRoutes = articles.map((article) => `/articles/${article.slug}`)
  const lastModified = new Date()

  return [...staticRoutes, ...articleRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route.startsWith("/articles") ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.includes("calculator") ? 0.9 : 0.7,
  }))
}
