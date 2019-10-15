const webpack = require("webpack");
const prodWebpackConfig = require("./webpack.config");

const { entry, output, module, devtool } = prodWebpackConfig;

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
  plugins: [new webpack.HotModuleReplacementPlugin()],
  module
};
