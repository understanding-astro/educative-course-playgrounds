import { defineConfig } from "astro/config";
import astroHello from "./src/integrations/astro-hello";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [astroHello(), mdx()]
});