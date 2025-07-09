// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://teachaccess.github.io",
  base: "/accessibility-skills-hiring-toolkit",
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    // Enable asset inlining for better performance
    inlineStylesheets: "auto",
  },
});
