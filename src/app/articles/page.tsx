import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/page-hero"
import { articles } from "@/lib/articles"

export const metadata: Metadata = {
  title: "Finance Articles",
  description:
    "Original EMI, loan, SIP, GST, credit score, and personal finance articles for calculator users in India.",
}

export default function ArticlesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <PageHero
        eyebrow="Finance Articles"
        title="Helpful guides for loans, EMI, SIP, GST, and money planning."
        description="These original articles support the calculators with practical explanations, examples, and planning tips."
      />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/articles/${article.slug}`}
            className="rounded-xl border border-white/70 bg-white/85 p-5 shadow-lg shadow-slate-200/70 transition hover:-translate-y-1 hover:border-teal-200"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="rounded-md bg-teal-50 px-3 py-1 text-xs font-black uppercase tracking-wide text-teal-700">
                {article.category}
              </span>
              <span className="text-xs font-bold text-slate-500">
                {article.readingTime}
              </span>
            </div>
            <h2 className="mt-4 text-2xl font-black leading-tight tracking-normal text-slate-950">
              {article.title}
            </h2>
            <p className="mt-3 leading-7 text-slate-600">{article.description}</p>
          </Link>
        ))}
      </section>
    </main>
  )
}
