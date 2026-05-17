type CalculatorSchemaProps = {
  name: string
  description: string
  path: string
}

export function CalculatorSchema({ name, description, path }: CalculatorSchemaProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://emiwyze.online"
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name,
    description,
    url: `${baseUrl}${path}`,
    applicationCategory: "FinanceApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
    },
    publisher: {
      "@type": "Organization",
      name: "EMIWYZE",
      url: baseUrl,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
