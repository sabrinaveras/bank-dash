import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths";
import * as path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve:{
    alias:{
      "@pages": path.resolve(__dirname, "src/pages"),
      "@components": path.resolve(__dirname, "src/components"),
      "@routes": path.resolve(__dirname, "src/routes"),
      "@stories": path.resolve(__dirname, "src/stories"),
      "@theme": path.resolve(__dirname, "src/theme"),
      "@utils": path.resolve(__dirname, "src/utils"),
    }
  }
})
