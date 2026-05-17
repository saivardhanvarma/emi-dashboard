import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ContentCard } from "@/components/content-card"
import {
  getArticleExample,
  getArticleLongFormSections,
  getScenarioRows,
} from "@/lib/article-enhancements"
import { articles, getArticle } from "@/lib/articles"
import { getRelevantCalculators } from "@/lib/calculator-links"
import { getRichArticle } from "@/lib/rich-article-content"

type ArticlePageProps = {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params
  const article = getArticle(slug)

  if (!article) {
    return {
      title: "Article Not Found",
    }
  }

  return {
    title: article.title,
    description: article.description,
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params
  const article = getArticle(slug)

  if (!article) {
    notFound()
  }

  const example = getArticleExample(article)
  const scenarioRows = getScenarioRows(article)
  const longFormSections = getArticleLongFormSections(article)
  const calculators = getRelevantCalculators(article.category)
  const richArticle = getRichArticle(article.slug)
  const relatedArticles = articles
    .filter((item) => item.slug !== article.slug)
    .filter((item) => item.category === article.category || item.category === "Planning")
    .slice(0, 3)

  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <article>
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-md bg-teal-50 px-3 py-1 text-xs font-black uppercase tracking-wide text-teal-700">
              {article.category}
            </span>
            <span className="text-sm font-bold text-slate-500">
              {article.readingTime}
            </span>
          </div>
          <h1 className="mt-4 text-4xl font-black leading-tight tracking-normal text-slate-950 sm:text-5xl">
            {article.title}
          </h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            {article.description}
          </p>
        </div>

        <ContentCard>
          <div className="space-y-8">
            {article.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-black text-slate-950">
                  {section.heading}
                </h2>
                <div className="mt-3 space-y-3 leading-7 text-slate-600">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}

            <section>
              <h2 className="text-2xl font-black text-slate-950">
                {example.title}
              </h2>
              <p className="mt-3 leading-7 text-slate-600">{example.copy}</p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-950">
                Comparison table
              </h2>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full min-w-[620px] text-sm text-slate-700">
                  <thead>
                    <tr>
                      <th className="pb-3 text-left text-xs font-black uppercase tracking-wide text-slate-500">
                        Scenario
                      </th>
                      <th className="pb-3 text-left text-xs font-black uppercase tracking-wide text-slate-500">
                        Result
                      </th>
                      <th className="pb-3 text-left text-xs font-black uppercase tracking-wide text-slate-500">
                        Cost or impact
                      </th>
                      <th className="pb-3 text-left text-xs font-black uppercase tracking-wide text-slate-500">
                        Practical note
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {scenarioRows.map((row) => (
                      <tr key={row.label} className="border-t border-slate-200">
                        <td className="py-3 font-bold">{row.label}</td>
                        <td className="py-3">{row.emi}</td>
                        <td className="py-3">{row.interest}</td>
                        <td className="py-3">{row.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {longFormSections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-black text-slate-950">
                  {section.heading}
                </h2>
                <div className="mt-3 space-y-3 leading-7 text-slate-600">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}

            {richArticle?.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-black text-slate-950">
                  {section.heading}
                </h2>
                <div className="mt-3 space-y-3 leading-7 text-slate-600">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}

            {richArticle && (
              <section>
                <h2 className="text-2xl font-black text-slate-950">
                  Article FAQs
                </h2>
                <div className="mt-4 divide-y divide-slate-200 rounded-lg bg-slate-50 px-4">
                  {richArticle.faqs.map((faq) => (
                    <details key={faq.question} className="py-4">
                      <summary className="cursor-pointer font-black text-slate-950">
                        {faq.question}
                      </summary>
                      <p className="mt-2 leading-7 text-slate-600">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </section>
            )}

            <section>
              <h2 className="text-2xl font-black text-slate-950">
                Useful calculators for this topic
              </h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {calculators.map((calculator) => (
                  <Link
                    key={calculator.href}
                    href={calculator.href}
                    className="rounded-lg border border-slate-200 bg-slate-50 p-4 font-black text-slate-800 transition hover:border-teal-300 hover:text-teal-700"
                  >
                    {calculator.label}
                  </Link>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-950">
                Related reading
              </h2>
              <div className="mt-4 grid gap-3">
                {relatedArticles.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/articles/${related.slug}`}
                    className="rounded-lg bg-slate-50 p-4 transition hover:bg-teal-50"
                  >
                    <span className="text-sm font-black text-slate-950">
                      {related.title}
                    </span>
                    <span className="mt-1 block text-sm leading-6 text-slate-600">
                      {related.description}
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </ContentCard>
      </article>
    </main>
  )
}
