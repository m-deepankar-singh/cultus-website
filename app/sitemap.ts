import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://cultusworkforce.com";

  return [
    {
      url: baseUrl,
      lastModified: "2025-02-20",
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: "2025-02-20",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/programs`,
      lastModified: "2025-02-20",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: "2025-02-20",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/for-learners`,
      lastModified: "2025-02-20",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/for-businesses`,
      lastModified: "2025-02-20",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/for-governments`,
      lastModified: "2025-02-20",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/for-universities`,
      lastModified: "2025-02-20",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: "2025-02-20",
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: "2025-02-20",
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: "2025-02-20",
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: "2025-02-20",
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
