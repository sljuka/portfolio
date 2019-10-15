import { createApp } from "./create-app";
import webpack from "webpack";
import webpackHotMiddleware from "webpack-hot-middleware";
import webpackDevMiddleware from "webpack-dev-middleware";
// @ts-ignore
import webpackConfig from "../webpack.config.dev.js";
import { apolloMiddleware } from "./apollo-middleware";

const config = {
  ...webpackConfig,
  entry: [
    "react-hot-loader/patch",
    "webpack-hot-middleware/client",
    "./src/index.tsx"
  ]
};
const compiler = webpack(config);

createApp()
  .use(webpackDevMiddleware(compiler))
  .use(webpackHotMiddleware(compiler))
  .use(apolloMiddleware)
  .listen(3000, () => {
    console.log("Listening at http://localhost:3000/");
  });
