import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://sexaholicsanonymous.or.ke",
  integrations: [sitemap()],
  output: "static",
});
