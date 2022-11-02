import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    plugins: [
        vue(),
        laravel({
            input: [
                "resources/css/app.css",
                "resources/css/bootstrap.min.css",
                "resources/scss/app.scss",
                "resources/js/app.js",
                "resources/js/bootstrap.min.js",
            ],
            refresh: true,
        }),
    ],
});
