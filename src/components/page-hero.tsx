type PageHeroProps = {
  eyebrow: string
  title: string
  description: string
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="mb-8">
      <p className="text-sm font-black uppercase tracking-wide text-teal-700">
        {eyebrow}
      </p>
      <h1 className="mt-3 max-w-4xl text-4xl font-black leading-tight tracking-normal text-slate-950 sm:text-5xl">
        {title}
      </h1>
      <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
        {description}
      </p>
    </section>
  )
}
