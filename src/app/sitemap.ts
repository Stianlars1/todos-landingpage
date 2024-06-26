import { SUB_URL } from "@/utils/constants";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [""].map((route) => ({
    url: `${SUB_URL}/${route}`,
    lastModified: new Date().toISOString(),
    priority: 1,
    changeFrequency: "monthly",
  }));

  return [...staticRoutes];
}
