
import { defineConfig } from "tsup";

export default defineConfig({
    format: ["cjs", "esm"],
    entry: ["./src/index.ts"],
    dts: true,
    shims: true,
    skipNodeModulesBundle: true,
    clean: true,
    sourcemap: true, // TODO make this false for prod
});
