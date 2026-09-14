import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://peluqueria-canina-mimos.vercel.app/sitemap.xml",
  };
}
