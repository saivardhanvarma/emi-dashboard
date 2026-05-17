import type { Metadata } from "next"
import { ContentCard } from "@/components/content-card"
import { PageHero } from "@/components/page-hero"

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Basic website usage terms for EMIWYZE calculators and content.",
}

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <PageHero
        eyebrow="Terms & Conditions"
        title="Terms for using EMIWYZE calculators and articles."
        description="By using this website, you agree to use the tools and content responsibly and for informational purposes."
      />

      <ContentCard>
        <div className="space-y-6 leading-7 text-slate-600">
          <section>
            <h2 className="text-2xl font-black text-slate-950">Website Use</h2>
            <p className="mt-2">
              EMIWYZE provides calculators and educational content for personal
              planning. You may use the website for lawful purposes only and must
              not attempt to disrupt, copy, scrape, or misuse the service.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-black text-slate-950">Accuracy</h2>
            <p className="mt-2">
              We try to keep calculators and articles useful, but results can
              differ from lender quotes, investment outcomes, tax treatment, and
              official documents. Always verify important decisions with the
              relevant institution or professional.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-black text-slate-950">Content Ownership</h2>
            <p className="mt-2">
              Articles, calculator layouts, and site content belong to EMIWYZE
              unless otherwise stated. Do not republish substantial portions
              without permission.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-black text-slate-950">Changes</h2>
            <p className="mt-2">
              EMIWYZE may update these terms, site features, pages, or calculator
              assumptions at any time. Continued use of the website means you
              accept the updated terms.
            </p>
          </section>
        </div>
      </ContentCard>
    </main>
  )
}
