import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    lib: {
      // Web Componentのエントリポイント（例: MyCounter.ts）
      entry: path.resolve(__dirname, "src/my-counter.ts"),
      name: "MyCounter",
      fileName: (format) => `my-counter.${format}.js`,
      formats: ["es"],
    },
    rollupOptions: {
      // litを自動でバンドルする場合はexternalを空にする
      external: [],
    },
    emptyOutDir: true,
    outDir: "dist",
  },
});
