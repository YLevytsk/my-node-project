import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"] },
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: {
        ...globals.node,     // <-- вот это добавляет process, __dirname, require и др.
        ...globals.browser,  // если вдруг где-то нужен браузерный JS
      },
    },
  },
]);

