
import { defineConfig } from "tsup";

export default defineConfig({
    format: ["cjs", "esm"],
    entry: ["./src/main.tsx"],
    dts: true,
    shims: true,
    skipNodeModulesBundle: true,
    clean: true,
    sourcemap: true, // TODO make this false for prod
    noExternal: [".*"], // Forces all dependencies to be bundled
});
