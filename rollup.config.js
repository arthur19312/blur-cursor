import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/cursor.ts",
  output: [
    {
      file: "dist/index.js",
      name: "index",
      format: "umd",
    },
  ],
  plugins: [typescript({ lib: ["es5", "es6", "dom"], target: "es5" })],
};
