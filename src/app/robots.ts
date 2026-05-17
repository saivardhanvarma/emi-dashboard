import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },

    sitemap: "https://emiwyze.online/sitemap.xml",

    host: "https://emiwyze.online",
  }
}
