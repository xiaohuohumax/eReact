import path from "path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { viteMockServe } from "vite-plugin-mock";
import svgr from "vite-plugin-svgr";

export default defineConfig({
    plugins: [react(), svgr(), viteMockServe()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src/")
        }
    },
    envDir: "./env/",
    envPrefix: "APP_",
    server: {
        port: 9090
    }
});
