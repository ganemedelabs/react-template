// See https://v3.vitejs.dev/config/ for more about configuration files.

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const config = {
    base: "/react-template/",

    server: {
        port: 3000,
        strictPort: true,
        host: true,
        origin: "http://0.0.0.0:3000/",
    },

    build: {
        outDir: "dist",
        assetsDir: ".",
        rollupOptions: {
            output: {
                entryFileNames: "index.js",
                assetFileNames: "index.css",
            },
        },
    },

    plugins: [react(), tailwindcss()],

    test: {
        globals: true,
        environment: "jsdom",
        css: true,
    },

    preview: {
        port: 8080,
        strictPort: true,
    },
};

export default defineConfig(config);
