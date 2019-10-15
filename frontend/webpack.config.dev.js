const webpack = require("webpack");
const prodWebpackConfig = require("./webpack.config");
const CopyPlugin = require("copy-webpack-plugin");

const { entry, output, module: webpackModule, devtool } = prodWebpackConfig;

module.exports = {
  devtool,
  mode: "development",
  entry,
  output,
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
    alias: {
      "react-dom": "@hot-loader/react-dom"
    }
  },
  plugins: [
    new CopyPlugin([{ from: "assets", to: "public" }]),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: webpackModule
};
