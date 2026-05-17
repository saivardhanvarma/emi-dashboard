import type { Metadata } from "next"
import { ContentCard } from "@/components/content-card"
import { PageHero } from "@/components/page-hero"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for EMIWYZE, including cookies, analytics, advertising, and contact information.",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <PageHero
        eyebrow="Privacy Policy"
        title="How EMIWYZE handles privacy, cookies, analytics, and ads."
        description="This policy explains what information may be collected when you use EMIWYZE and how it may be used."
      />

      <ContentCard>
        <div className="space-y-6 leading-7 text-slate-600">
          <section>
            <h2 className="text-2xl font-black text-slate-950">Information We Collect</h2>
            <p className="mt-2">
              EMIWYZE may collect basic technical information such as browser type,
              device type, pages visited, referral source, and approximate usage
              activity. Calculator inputs are processed in your browser and are
              not intended to identify you personally.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-black text-slate-950">Cookies and Analytics</h2>
            <p className="mt-2">
              We may use cookies or similar technologies to improve site
              performance, measure traffic, understand popular pages, and maintain
              a reliable user experience. Analytics tools may report aggregated
              usage information.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-black text-slate-950">Advertising</h2>
            <p className="mt-2">
              EMIWYZE may display ads through Google AdSense or similar ad
              networks. Advertising partners may use cookies to serve and measure
              ads based on your visits to this and other websites. You can manage
              ad personalization in your Google account settings.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-black text-slate-950">Contact</h2>
            <p className="mt-2">
              For privacy questions, contact support@emiwyze.in. This policy may
              be updated when site features, analytics, or advertising providers
              change.
            </p>
          </section>
        </div>
      </ContentCard>
    </main>
  )
}
