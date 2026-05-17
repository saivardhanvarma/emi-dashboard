import type { Metadata } from "next"
import { ContentCard } from "@/components/content-card"
import { PageHero } from "@/components/page-hero"
import { faqs } from "@/lib/faqs"

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Frequently asked questions about EMI calculators, SIP calculators, loan comparison, estimates, privacy, and EMIWYZE usage.",
}

export default function FaqsPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PageHero
        eyebrow="FAQs"
        title="Common questions about EMIWYZE calculators."
        description="Quick answers about EMI estimates, SIP projections, loan comparisons, privacy, and responsible use of calculator results."
      />

      <ContentCard>
        <div className="divide-y divide-slate-200">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-5 first:pt-0 last:pb-0">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black text-slate-950">
                <span>{faq.question}</span>
                <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-slate-100 text-xl leading-none text-slate-600 transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-3xl leading-7 text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </ContentCard>
    </main>
  )
}
