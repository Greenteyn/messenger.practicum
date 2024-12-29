import { resolve } from "path";
import { defineConfig } from "vite";
import postcssNesting from "postcss-nesting";
import handlebars from "vite-plugin-handlebars";

const { PORT = 3000 } = process.env

const pageData = {};

export default defineConfig({
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, "src/modules"),
      context(pagePath) {
        return pageData[pagePath];
      },
    }),
  ],
  css: {
    postcss: {
      plugins: [postcssNesting],
    },
    modules: true,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        login: resolve(__dirname, "src/pages/login/index.html"),
        registration: resolve(__dirname, "src/pages/registration/index.html"),
        profile: resolve(__dirname, "src/pages/profile/index.html"),
        chat: resolve(__dirname, "src/pages/chat/index.html"),
        error: resolve(__dirname, "src/pages/error/index.html"),
      },
    },
    outDir: "dist",
  },
  server: {
    port: PORT,
  },
  preview: {
    port: PORT,
  },
});
