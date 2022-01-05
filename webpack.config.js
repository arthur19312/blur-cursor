const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "example"),
    },
    compress: true,
    port: 5000,
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    filename: "blur.js",
    path: path.resolve(__dirname, "dist"),
  },
};
