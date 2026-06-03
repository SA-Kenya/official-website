import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://sexaholicsanonymous.or.ke",
  integrations: [sitemap()],
  output: "static",
  redirects: {
    "/12steps12traditions/": "/12-steps-12-traditions/",
    "/satest/": "/test-yourself/",
  },
});
