import type { Metadata } from "next"
import { ContentCard } from "@/components/content-card"
import { PageHero } from "@/components/page-hero"

export const metadata: Metadata = {
  title: "Google Search Console Setup Guide",
  description:
    "Steps to add EMIWYZE to Google Search Console, submit sitemap.xml, and request indexing.",
}

export default function SearchConsoleGuidePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <PageHero
        eyebrow="SEO setup"
        title="Submit your sitemap in Google Search Console."
        description="I cannot access your Google account from the app, but these are the exact steps to submit EMIWYZE for indexing."
      />
      <ContentCard>
        <ol className="list-decimal space-y-4 pl-5 leading-7 text-slate-600">
          <li>Open Google Search Console and add your live domain property.</li>
          <li>Verify ownership using DNS, HTML file, or your hosting provider.</li>
          <li>Open the Sitemaps section and submit `https://your-domain.com/sitemap.xml`.</li>
          <li>Use URL Inspection for important pages like the home page, calculators, and articles.</li>
          <li>Request indexing after deployment and again after major content updates.</li>
          <li>Check Coverage, Page indexing, and Search performance weekly.</li>
        </ol>
      </ContentCard>
    </main>
  )
}
