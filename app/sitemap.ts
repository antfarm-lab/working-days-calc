import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://working-days-calc.vercel.app/",
      lastModified: new Date(),
    },
    {
      url: "https://working-days-calc.vercel.app/privacy-policy",
      lastModified: new Date(),
    },
  ];
}