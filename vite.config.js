import { defineConfig } from "vite";
import glsl from "vite-plugin-glsl";

export default defineConfig({
  plugins: [
    glsl()
  ],
  server: {
    host: "0.0.0.0",
    port: 3000,
    open: "/examples/index.html",
    allowedHosts: true
  }
});
