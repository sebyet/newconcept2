import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";
import astroI18next from "astro-i18next";

// https://astro.build/config
export default defineConfig({
  integrations: [
    astroI18next(),
    react(), 
    tailwind({
      applyBaseStyles: false,
    }),
  ]
});