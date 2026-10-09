import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://lova.is-a.dev",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
