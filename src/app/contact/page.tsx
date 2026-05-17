import type { Metadata } from "next"
import { ContentCard } from "@/components/content-card"
import { PageHero } from "@/components/page-hero"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact EMIWYZE for calculator feedback, corrections, and support.",
}

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <PageHero
        eyebrow="Contact Us"
        title="Questions, corrections, or feedback are welcome."
        description="Use the contact details below to reach EMIWYZE about calculator issues, article suggestions, policy questions, or partnership enquiries."
      />

      <div className="grid gap-5 lg:grid-cols-[1fr_360px]">
        <ContentCard>
          <form
            action="mailto:support@emiwyze.online"
            method="post"
            encType="text/plain"
            className="grid gap-4"
          >
            <label className="grid gap-2 text-sm font-black text-slate-700">
              Name
              <input
                name="name"
                type="text"
                required
                className="rounded-lg border border-slate-200 bg-white px-4 py-3 font-medium text-slate-950 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
              />
            </label>
            <label className="grid gap-2 text-sm font-black text-slate-700">
              Email
              <input
                name="email"
                type="email"
                required
                className="rounded-lg border border-slate-200 bg-white px-4 py-3 font-medium text-slate-950 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
              />
            </label>
            <label className="grid gap-2 text-sm font-black text-slate-700">
              Message
              <textarea
                name="message"
                rows={6}
                required
                className="resize-y rounded-lg border border-slate-200 bg-white px-4 py-3 font-medium text-slate-950 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
              />
            </label>
            <button
              type="submit"
              className="w-fit rounded-lg bg-slate-950 px-5 py-3 text-sm font-black text-white transition hover:bg-teal-700"
            >
              Send Email
            </button>
          </form>
        </ContentCard>

        <ContentCard>
          <h2 className="text-2xl font-black text-slate-950">Direct Contact</h2>
          <p className="mt-3 leading-7 text-slate-600">
            Email:{" "}
            <a className="font-black text-teal-700" href="mailto:support@emiwyze.online">
              support@emiwyze.online
            </a>
          </p>
          <p className="mt-3 leading-7 text-slate-600">
            Social links can be added here when EMIWYZE creates official profiles.
          </p>
        </ContentCard>
      </div>
    </main>
  )
}
