// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://samiratouzlili.vercel.app",
  //output: "server",
  integrations: [react()],
});
