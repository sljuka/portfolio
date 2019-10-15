const webpack = require("webpack");
const path = require("path");

module.exports = {
  devtool: "source-map",
  mode: "production",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
    publicPath: "/"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
    alias: {
      "react-dom": "@hot-loader/react-dom"
    }
  },
  optimization: {
    usedExports: true
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: ["babel-loader"]
      }
    ]
  }
};
