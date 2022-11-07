import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    plugins: [
        vue(),
        laravel({
            input: [
                "resources/js/bootstrap.min.js",
                "resources/js/app.js",
                "resources/css/bootstrap.min.css",
                "resources/scss/style.scss",
            ],
            refresh: true,
        }),
    ],
});
