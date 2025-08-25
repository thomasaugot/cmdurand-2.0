export default function robots() {
  const baseUrl = "https://www.cmdurand.fr/";

  // Production rules
  return {
    rules: [
      // General rules for all search engines
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/", // Block API endpoints
          "/admin/", // Block admin areas
          "/_next/", // Block Next.js internals
          "/private/", // Block private content
        ],
        crawlDelay: 1, // Be respectful to server
      },

      // Give Google special treatment (no crawl delay)
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/", "/private/"],
      },

      // Optional: Block bandwidth-hungry SEO bots
      {
        userAgent: ["AhrefsBot", "SemrushBot", "MJ12bot", "DotBot"],
        disallow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
