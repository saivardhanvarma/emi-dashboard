import Link from "next/link"
import { ContentCard } from "@/components/content-card"
import { PageHero } from "@/components/page-hero"

type KeywordLandingProps = {
  eyebrow: string
  title: string
  description: string
  calculatorHref: string
  calculatorLabel: string
  sections: {
    heading: string
    body: string
  }[]
  examples: string[]
}

export function KeywordLanding({
  eyebrow,
  title,
  description,
  calculatorHref,
  calculatorLabel,
  sections,
  examples,
}: KeywordLandingProps) {
  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <PageHero eyebrow={eyebrow} title={title} description={description} />

      <div className="grid gap-5">
        <ContentCard>
          <Link
            href={calculatorHref}
            className="inline-block rounded-lg bg-slate-950 px-5 py-3 text-sm font-black text-white transition hover:bg-teal-700"
          >
            Open {calculatorLabel}
          </Link>
        </ContentCard>

        {sections.map((section) => (
          <ContentCard key={section.heading}>
            <h2 className="text-2xl font-black text-slate-950">{section.heading}</h2>
            <p className="mt-3 leading-7 text-slate-600">{section.body}</p>
          </ContentCard>
        ))}

        <ContentCard>
          <h2 className="text-2xl font-black text-slate-950">Example scenarios</h2>
          <div className="mt-4 grid gap-3">
            {examples.map((example) => (
              <div key={example} className="rounded-lg bg-slate-50 p-4 text-slate-700">
                {example}
              </div>
            ))}
          </div>
        </ContentCard>
      </div>
    </main>
  )
}
