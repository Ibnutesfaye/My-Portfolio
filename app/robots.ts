import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://ibnutesfaye.github.io/My-Portfolio/sitemap.xml",
  };
}
