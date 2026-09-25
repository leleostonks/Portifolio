import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // Nome do repositório: o site fica em https://leleostonks.github.io/Portifolio/
  base: "/Portifolio/",
  plugins: [react()],
});
