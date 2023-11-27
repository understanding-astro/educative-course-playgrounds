import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";
import lifecycleLogs from "./src/integrations/lifecycle-logs";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [lifecycleLogs()],
  adapter: vercel(),
});
